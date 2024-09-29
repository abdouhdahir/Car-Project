import { gql } from '@apollo/client'; 

export const GET_ALL_CARS = gql`
    query {
        getAllCars{
            id
            isreduckilo
            isreducprice
            title
            desc
            kilo
            carburant
            gear
            price
        }
    }
`