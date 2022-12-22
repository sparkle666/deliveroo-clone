import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      // Find index of the specific item in the state
      const index = state.items.findIndex((item) => item.id === action.payload.id )
      console.log(index)
      let newBasket = [...state.items]

      if(index >=0){
        newBasket.splice(index, 1)
      }
      else{
        console.warn(`Can't remove ID: ${action.payload.id} as its not in the basket!`)
      }
      state.items = newBasket // set the basket back to the spliced(removed) items array
    },
  },
})


// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items
// Filter out the item with specific id
export const selectBasketItemWithId = (state, id) => state.basket.items.filter((item)=> item.id === id )


export default basketSlice.reducer