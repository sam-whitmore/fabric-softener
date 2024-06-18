import useResponses from '../hooks/useResponses'
// import SingleResponse from './SingleResponse'
import ScatterPlotContainer from './graphics/QuantScatter'
import { useAuth0 } from '@auth0/auth0-react'

export default function UserData() {
  const { user, isLoading } = useAuth0()
  const { data: responses, isPending, isError, error } = useResponses().allByUser()

  if (isLoading) return <p>Signing in...</p>
  if (!user) return <p>Sign in to store your data.</p>
  if (isPending) return <p>Fetching User Data...</p>
  if (isError) {
    console.error(error)
    return <p>Error: {error.message}</p>
  }

  return (
    <div className="m-4 shadow-lg bg-slate-50 rounded-xl p-2 w-[1100px] h-[700px]">
      <ScatterPlotContainer />
      {/* <div>
      {responses.map((response) => (
        <SingleResponse
          key={response.id}
          id={response.id}
          user_auth0_sub={response.user_auth0_sub}
          quant={response.quant}
          qual={response.qual}
          datetime={response.datetime}
          is_day={response.is_day}
          latitude={response.latitude}
          longitude={response.longitude}
          climate={response.climate}
          temp_C={response.temp_C}
          uv_index={response.uv_index}
          humidity_percent={response.humidity_percent}
          cloud_cover_percent={response.cloud_cover_percent}
          wind_kph={response.wind_kph}
          wind_dir={response.wind_dir}
          precip_mm={response.precip_mm}
        />
      ))}
      </div> */}
    </div>
  )
}
