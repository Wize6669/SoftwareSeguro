import React from "react";
import EditRestaurantForm from "../../../components/EditRestaurantForm";
import {cache} from "browserslist";

const getRestaurantById = async (idRestaurant) => {
    try {
        const res = await fetch(`http://localhost:3000/api/restaurants/${idRestaurant}`,
            {cache: 'no-store'});

        if(!res.ok) {
            throw new Error("Failed to fetch restaurant");
        }

        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export default async function editRestaurant({params}) {
    const {idRestaurant} = params;
    const {restaurant} = await getRestaurantById(idRestaurant);
    const {name, starts, isOpen, numberBranches} = restaurant;

    // @ts-ignore
    return <EditRestaurantForm idRestaurant={idRestaurant} name={name}
    starts={starts} isOpen={isOpen} numberBranches={numberBranches}/>;
}