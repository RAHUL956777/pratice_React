// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const TripApi = createApi({
//   reducerPath: "tripApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http:localhost:8000/api/v1/trips/",
//   }),
//   endpoints: (builder) => ({
//     createTrip: builder.mutation({
//       query: (trip) => ({
//         url: "newtrip",
//         method: "POST",
//         body: trip,
//       }),
//     }),

//     getAllTrips: builder.query({
//       query: () => "all-trips",
//     }),

//     updateTrip: builder.mutation({
//       query: ({ id, trip }) => ({
//         url: `update-trips/${id}`,
//         method: "PUT",
//         body: trip,
//       }),
//     }),

//     deleteTrip: builder.mutation({
//       query: (id) => ({
//         url: `delete-trip/${id}`,
//         method: "DELETE",
//       }),
//     }),

//     searchTrip: builder.query({
//       query: (search) => `search-trip?location=${search}`,
//     }),
//   }),
// });

// export const {
//   useCreateTripMutation,
//   useGetAllTripsQuery,
//   useUpdateTripMutation,
//   useDeleteTripMutation,
//   useSearchTripQuery
// } = TripApi;
