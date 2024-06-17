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
    </div>
  )
}
