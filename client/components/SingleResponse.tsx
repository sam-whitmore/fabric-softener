import { Response } from "../../models/responses"
import useResponses from "../hooks/useResponses"

export default function SingleResponse(response: Response) {

  const functions = useResponses()

  return (
    <div className="p-2 flex justify-between border-b-2">
      {response.qual} {(response.quant / 1000).toFixed(1)}
      <button className="shadow-sm" onClick={() => { functions.del(response.id)}}>Delete Entry</button>
    </div>
  )
}