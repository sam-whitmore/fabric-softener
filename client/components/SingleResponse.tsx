import { Response } from "../../models/responses"

export default function SingleResponse(response: Response) {
  return (
    <div className="p-2">
      {response.qual} {(response.quant / 1000).toFixed(1)}
    </div>
  )
}