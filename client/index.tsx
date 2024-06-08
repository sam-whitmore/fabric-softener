import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'

import router from './router.tsx'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(

  <Auth0Provider
      domain="whai-2024-sam.au.auth0.com"
      clientId="4Ol8U3ytW0ZkS0tAwPJnibxaJmkRMXvD"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://fabric-softener/api'
      }}
    >
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider>
  )
})
