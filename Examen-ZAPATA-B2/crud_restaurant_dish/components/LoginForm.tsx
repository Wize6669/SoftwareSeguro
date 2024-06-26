"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSumbmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email, password, redirect: false,
            });

            if (res.error) {
                setError("Invalid Credencials.");
                return;
            }

            router.replace("dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={"grid place-items-center h-screen"}>
            <div className={"shadow-lg p-5 rounded-lg border-t-4 border-green-400"}>
                <h1 className={"text-xl font-bold my-4"}>Login XD</h1>

                <form onSubmit={handleSumbmit} className={"flex flex-col gap-3"}>
                    <input onChange={(e) => setEmail(e.target.value)} className={"w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40"} type="text" name="email" id="email" placeholder={"Email"} />
                    <input onChange={(e) => setPassword(e.target.value)} className={"w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40"} type="password" name="password" id="password" placeholder={"Password"} />
                    <button className={"bg-green-600 text-white font-bold cursor-pointe px-6 py-2"}>Login XR</button>

                    {error && (
                        <div className={"bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2"}>{error}</div>)
                    }

                    <Link className={"text-sm mt-3 text-right"} href={'/register'}>
                        Do not have an account? <span className={"underline"}>Register</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}
