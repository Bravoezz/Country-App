import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const countryApi = createApi({
  reducerPath: 'countryapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => "/countries",
      transformResponse : response => response
    }),
    getCountriesById: builder.query({
      query: (id) => `/countries/${id}`,
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCountriesQuery, useGetCountriesByIdQuery } = countryApi