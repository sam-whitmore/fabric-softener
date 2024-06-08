import request from 'superagent'
import { useMutation } from '@tanstack/react-query'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Response, ResponseData } from '../../models/responses'

const rootURL = '/api/v1/responses'

export default function useResponses() {

  function useGetAllResponses() {
    return useQuery({
      queryKey: ['responses'],
      queryFn: async () => {
        const res = await request.get(rootURL)
        return res.body as Response[]
      }
    })
  }

  return {
    all: useGetAllResponses
  }
}