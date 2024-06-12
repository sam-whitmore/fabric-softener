import useResponses from '../hooks/useResponses'
import SingleResponse from './SingleResponse'

export default function UserData() {
  const responses = useResponses()

  const { data, isPending, isError, error } = responses.allByUser()

  if (isPending) return <p>Fetching User Data...</p>
  if (isError) {
    console.error(error)
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      {data.map((response) => (
        <SingleResponse
          key={response.id}
          id={response.id}
          user_auth0_sub={response.user_auth0_sub}
          quant={response.quant}
          qual={response.qual}
          datetime={response.datetime}
          latitude={response.latitude}
          longitude={response.longitude}
          climate={response.climate}
          temp_C={response.temp_C}
        />
      ))}
    </div>
  )
}
