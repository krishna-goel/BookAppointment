import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const ProductsApi = createApi({
  reducerPath: 'ProductsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: () =>({
       url: 'posts',
       method: 'GET',
      })
    }),
    getPokemonByName: builder.query({
      query: () =>({
       url: 'posts',
       method: 'GET',
      })
    }),
  }),
});

export const {useGetPokemonByNameQuery} = ProductsApi;
