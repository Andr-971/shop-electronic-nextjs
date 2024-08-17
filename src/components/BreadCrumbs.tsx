
"use client";
import React from "react"
import Link from "next/link";
import routeName from "../../public/routeName"
import { useRouter } from "next/router"; 
import { usePathname } from "next/navigation";

const BreadCrumbs = () => {
    // const pathname = usePathname();
    // console.log(pathname);
    // console.log(routeName[0]);
    return (
        <>
            <div className="bread-crumbs">
                <ul className="bread-crumbs__block">
                    <Link href="/" className="bread-crumbs__link">
                        Главная
                    </Link>
                    {}
                </ul>
            </div>
        </>
    );
}

export { BreadCrumbs };