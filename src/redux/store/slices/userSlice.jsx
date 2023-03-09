import { createSlice, createAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      const name = action.payload;
      state.splice(name, 1);
    },
    clearAllUser(state, action) {
      return [];
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, clearAllUser } = userSlice.actions;
