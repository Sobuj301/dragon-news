"use client"
import Image from "next/image";
import Link from "next/link";
import userImg from "@/assets/user.png"
import NavLinks from "./NavLinks";
import { Suspense } from "react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    return (
        <div className="container mx-auto flex justify-between mt-5">
            <div>
                <h2>{user?.name}</h2>
            </div>
            <Suspense fallback={<div>loading....</div>}>
                <ul className="flex items-center gap-3">
                    <li><NavLinks href={"/"}>Home</NavLinks></li>
                    <li><NavLinks href={"/about"}>About</NavLinks></li>
                    <li><NavLinks href={"/career"}>Career</NavLinks></li>
                </ul>
            </Suspense>
            <div className="flex items-center gap-3 justify-center ">
                {
                    isPending ? "Loading....." :
                        user ? <div className="flex gap-3">
                            <Image src={user?.image || userImg} width={40} height={40} alt="user" />
                            <button onClick={async () => await authClient.signOut()} className="btn bg-black text-white">Logout</button>
                        </div> : <Link href="/login"><button className="btn bg-black text-white">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;