import request from 'superagent'
import { useMutation } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import {
  Response,
  ResponseData,
  AuthorizedResponseData,
} from '../../models/responses'

const rootURL = '/api/v1/responses'

export default function useResponses() {
  function useGetAllResponses() {
    return useQuery({
      queryKey: ['responses'],
      queryFn: async () => {
        const res = await request.get(rootURL)
        return res.body as Response[]
      },
    })
  }

  function useGetAllUserResponses() {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()

    return useQuery({
      queryKey: ['responses'],
      queryFn: async () => {
        const token = await getAccessTokenSilently()
        if (!token) {
          throw new Error(`Not logged in`)
        }

        const res = await request
          .get(`${rootURL}/user`)
          .auth(token, { type: 'bearer' })

        return res.body as Response[]
      },
      enabled: isAuthenticated,
    })
  }

  function useGetLatestResponse() {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()

    return useQuery({
      queryKey: ['responses'],
      queryFn: async () => {
        const token = await getAccessTokenSilently()
        if (!token) {
          throw new Error('Not logged in')
        }

        const res = await request
          .get(`${rootURL}/user/latest`)
          .auth(token, { type: 'bearer' })

        return res.body as Response
      },
      enabled: isAuthenticated,
    })
  }

  function useAddResponse() {
    const { getAccessTokenSilently } = useAuth0()
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: async (response: ResponseData) => {
        const token = await getAccessTokenSilently()
        const authorizedResponse = {
          ...response,
          user_auth0_sub: token,
        } as AuthorizedResponseData
        const res = await request
          .post(`${rootURL}`)
          .send(authorizedResponse)
          .auth(token, { type: 'bearer' })

        return res.body
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['responses'] })
      },
    })
  }

  function useDeleteResponse() {
    const { getAccessTokenSilently } = useAuth0()
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: async (id: number) => {
        const token = await getAccessTokenSilently()
        const res = await request
          .delete(`${rootURL}/${id}`)
          .auth(token, { type: 'bearer' })

        return res.body
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['responses'] })
      },
    })
  }

  return {
    add: useAddResponse().mutate,
    all: useGetAllResponses,
    allByUser: useGetAllUserResponses,
    del: useDeleteResponse().mutate,
    latest: useGetLatestResponse,
  }
}
