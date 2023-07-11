// import { apiSlice } from "./apiSlice";

// const USER_URL = "http://localhost:8080/api/users";

// export const userApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     register: builder.mutation({
//       query: (body) => ({
//         mode: "no-cors",
//         url: `${USER_URL}/`,
//         method: "POST",
//         body,
//       }),
//     }),
//     login: builder.mutation({
//       query: (body) => ({
//         url: `${USER_URL}/auth`,
//         method: "POST",
//         body,
//       }),
//     }),

//     logout: builder.mutation({
//       query: () => ({
//         url: `${USER_URL}/logout`,
//         method: "POST",
//       }),
//     }),
//   }),
// });

// export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
//   userApiSlice;

import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",

        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = userApiSlice;
