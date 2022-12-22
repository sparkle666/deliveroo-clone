import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurantItem: {
    id: "",
    title: "",
    short_description: "",
    price: "",
    image: "",
    rating: "",
    genre: "",
    address: "",
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