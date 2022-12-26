import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurantItem: {
    id: null,
    title: null,
    short_description: null,
    price: null,
    imgURL: null,
    rating: null,
    genre: null,
    address: null,
  },
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurantItem = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const {setRestaurant} = restaurantSlice.actions

export const selectRestaurant = (state) => state.restaurant.restaurantItem


export default restaurantSlice.reducer