import { Response } from "../../models/responses"

export default function SingleResponse(response: Response) {
  return (
    <div>
      {response.qual} {(response.quant / 1000).toFixed(1)}
    </div>
  )
}