
"use client";
import React from "react"
import Link from "next/link";

const BreadCrumbs = () => {
    return (
        <>
            <div className="bread-crumbs">
                <ul className="bread-crumbs__block">
                    <Link href="/" className="bread-crumbs__link">
                        Главная
                    </Link>
                </ul>
            </div>
        </>
    );
}

export { BreadCrumbs };