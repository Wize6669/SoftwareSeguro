"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ idRestaurant }) {
    const router = useRouter();

    const removeRestaurant = async () => {
        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            const res = await fetch(`api/restaurants?idRestaurant=${idRestaurant}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            } else {
                console.log("Error deleted")
            }
        }
    };

    return <button onClick={removeRestaurant} className={"text-red-100"}>
        <HiOutlineTrash size={"24"} />
    </button>;
}