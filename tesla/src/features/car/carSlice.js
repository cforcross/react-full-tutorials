import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    cars:["Mondel S","Model 3","Model Y","Model Z"],
}

const carSlice = createSlice({
    name:"car",
    initialState,
    reducers:{}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer