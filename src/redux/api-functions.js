import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const schedulesApi = createApi({
  reducerPath: 'schedules',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  tagTypes: ['Scheds'],
  endpoints: (builder) => ({
    getSchedules: builder.query({
      query: () => '/schedules',
      providesTags: ['Scheds'],
    }),
    getScheduleById: builder.query({
      query: (id) => `/schedules/${id}`,
      providesTags: ['Scheds'],
    }),
    addSchedule: builder.mutation({
      query: (schedule) => ({
        url: '/schedule',
        method: 'POST',
        body: schedule,
      }),
      invalidatesTags: ['Scheds'],
    }),
    updateSchedule: builder.mutation({
      query: (schedule) => ({
        url: `/schedules/${schedule.id}`,
        method: 'PATCH',
        body: schedule,
      }),
      invalidatesTags: ['Scheds'],
    }),
    deleteSchedule: builder.mutation({
      query: ({ id }) => ({
        url: `/schedules/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Scheds'],
    }),
  }),
});

export const {
  useGetSchedulesQuery,
  useGetScheduleByIdQuery,
  useAddScheduleMutation,
  useUpdateScheduleMutation,
  useDeleteScheduleMutation,
} = schedulesApi;
