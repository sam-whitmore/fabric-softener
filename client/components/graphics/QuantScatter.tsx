import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import useResponses from '../../hooks/useResponses'
import { useAuth0 } from '@auth0/auth0-react'

interface FormattedData {
id: string | number,
data: Data[]
}

interface Data {
  x: number | string | Date,
  y: number | string | Date
}

export default function ScatterPlotContainer() {
  const { user, isLoading } = useAuth0()
  const { data: responses, isPending, isError, error } = useResponses().allByUser()

  if (isLoading) return <p>Signing in...</p>
  if (!user) return <p>Sign in to store your data.</p>
  if (isPending) return <p>Fetching User Data...</p>
  if (isError) {
    console.error(error)
    return <p>Error: {error.message}</p>
  }

  const formattedData: FormattedData[] = []

  const array: Data[] = []
  responses.map((response) => { array.push({x: response.temp_C, y: (response.quant / 1000)})})
  
  formattedData.push({ id: user.given_name as string, data: array })

  console.log(formattedData)

  return (
    <ResponsiveScatterPlot 
      data={formattedData}
      margin={{ top: 30, right: 30, bottom: 60, left: 70 }}
      xScale={{ type: 'linear', min: 'auto', max: 'auto' }}
      xFormat=" >-.2f"
      yScale={{ type: 'linear', min: 0, max: 10 }}
      yFormat=">-.2f"
      blendMode="multiply"
      nodeSize={10}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          // orient: 'bottom',
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Temperature (Celsius)',
          legendPosition: 'middle',
          legendOffset: 46,
          truncateTickAt: 0
      }}
      axisLeft={{
          // orient: 'left',
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          legend: 'Rated Mood',
          legendPosition: 'middle',
          legendOffset: -50,
          truncateTickAt: 0
      }}
      tooltip={({node}) => {
        return (<div className="node-summary rounded-2xl bg-slate-50 p-2 shadow-lg border-2">
          <p className="flex justify-between m-1"><span className="pr-2">Temperature: </span><span>{node.formattedX}°C</span></p>
          <p className="flex justify-between m-1"><span className="pr-2">Rated Mood: </span><span>{Number(node.formattedY).toFixed(1)}</span></p>
        </div>)
      }}
  />
  )
}