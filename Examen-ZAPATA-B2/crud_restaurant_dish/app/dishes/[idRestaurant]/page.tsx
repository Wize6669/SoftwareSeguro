import NavbarDish from "../../../components/NavbarDish";
import React from "react";
import DishesList from "../../../components/DishesList";

export default function HomeDish({params}) {
    const idRestaurant = params.idRestaurant
    return (
        <>
            <NavbarDish params={idRestaurant}/>
            <DishesList params={idRestaurant}/>
        </>
    )
}