import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({})
})
