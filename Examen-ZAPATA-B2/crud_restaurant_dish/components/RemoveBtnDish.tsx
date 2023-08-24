"use client";

import {HiOutlineTrash} from "react-icons/hi";
import React from "react";
import {useRouter} from "next/navigation";

export default function RemoveBtnDish({idDish}) {
    const router = useRouter();

    const removeRestaurant = async () => {
        const confirmed = confirm('Are you sure?');

        if(confirmed) {
            const res = await fetch(`http://localhost:3000/api/dishes?idDish=${idDish}`, {
                method: "DELETE",
            });

            if(res.ok) {
                router.refresh();
            } else {
                console.log("Error deleted")
            }
        }
    };

    return <button onClick={removeRestaurant} className={"text-red-100"}>
        <HiOutlineTrash size={"24"}/>
    </button>;
}