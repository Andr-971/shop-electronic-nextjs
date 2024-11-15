"use client"
import React from "react"
import Image from "next/image"
import { useSession } from "next-auth/react";
import Link from "next/link";
import graph1 from "../../../public/svg/icon-graph-1.svg"
import graph2 from "../../../public/svg/icon-graph-2.svg"
import { useCompare } from "@/store";

const ComparisonBtn = () => {
    const session = useSession();
    const { compare } = useCompare();
    return (
        <>
            {session.status === "authenticated" && (
                <Link
                    href={"/compare"}
                    type="button"
                    className="header__btn header__btn_compare"
                >
                    {compare.length > 0 ? (
                        <>
                            <div className="compare__block">
                                <span className="compare__num">
                                    {compare.length}
                                </span>
                            </div>
                            <Image
                                src={graph2}
                                alt="graph-icon"
                                className="header__btn_compare"
                            ></Image>
                        </>
                    ) : (
                        <Image
                            src={graph1}
                            alt="graph-icon"
                            className="header__btn_compare"
                        ></Image>
                    )}
                </Link>
            )}
        </>
    );
}

export default ComparisonBtn;