import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCount: [],
  temp: [],
  countryQuery: false,
};

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getAllCountriesApi: (state, action) => {
      state.allCount = action.payload;
      state.temp = [...action.payload];
      state.countryQuery = state.countryQuery;
    },
    filterChange: (state, action) => {
      let change = action.payload.toLowerCase();
      let fin = state.temp.filter((ps) =>
        ps.name.toLowerCase().includes(change)
      );
      state.allCount = state.allCount;
      state.temp = fin;
      state.countryQuery = true;
    },
    res: (state) => {
      state.allCount = state.allCount;
      state.temp = [...state.allCount];
      state.countryQuery = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllCountriesApi, filterChange, res } = countrySlice.actions;

export default countrySlice.reducer;
