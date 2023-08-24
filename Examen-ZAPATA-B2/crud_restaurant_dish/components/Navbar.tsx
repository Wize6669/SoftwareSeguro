import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className={"flex justify-between items-center bg-slate-700 px-8 py-3"}>
            <Link className={"text-white font-bold"} href={"/"}>CRUD R&D.</Link>
            <Link className={"bg-white p-2"} href={"/AddRestaurant"}>Add Restaurant</Link>
        </nav>
    );
}