import UserData from "./UserData"
import useResponses from "../hooks/useResponses"

export default function DetailedProfileView() {

  const responses = useResponses()
  const date = new Date()

  function handleClick() {
    return responses.add({quant: 7216, qual: 'slushy', datetime: date, climate: 'clear', temp_C: 18 })
  }

  function handleDeleteResponse() {
    return responses.del(6)
  }
  

  return (
    <div>
      <UserData />
      <button onClick={handleClick}>Add Response</button>
      <button onClick={handleDeleteResponse}>Delete Response</button>
    </div>
  )
}