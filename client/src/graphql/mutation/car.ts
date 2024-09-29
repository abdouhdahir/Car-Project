import { gql } from '@apollo/client';


export const ADD_CAR = gql`
    mutation addCar($isreduckilo: Boolean!,$isreducprice: Boolean!,$title: String!,$desc: String!,$kilo: Int!,$carburant: String!,$gear: String!,$price: Float!) {
        addCar(isreduckilo: $isreduckilo,isreducprice: $isreducprice,title: $title,desc: $desc, kilo: $kilo, carburant: $carburant, gear: $gear, price: $price) {
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

export const UPTADE_CAR = gql`
    mutation updateCar($id: String!, $isreduckilo: Boolean!,$isreducprice: Boolean!,$title: String!,$desc: String!,$kilo: Int!,$carburant: String!,$gear: String!,$price: Float!) {
        updateCar(id: $id,isreduckilo: $isreduckilo,isreducprice: $isreducprice,title: $title,desc: $desc, kilo: $kilo, carburant: $carburant, gear: $gear, price: $price) {
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
export const DELETE_CAR = gql`
    mutation deleteCar($id: String!) {
        deleteCar(id: $id) {
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
`;
