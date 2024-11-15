"use client"
import React from "react"
import Image from "next/image";
import heart from "@/../public/svg/heart-1.svg";
import heartRed from "@/../public/svg/heart-2.svg";
import { useFavourites } from "@/store";
import Link from "next/link";
import { useSession } from "next-auth/react";

const FavouritesBtn = () => {
    const { favourites } = useFavourites();
    const session = useSession();
    return (
        <>
            {session.status === "authenticated" && (
                <>
                    <Link
                        href={"/personal/favourite"}
                        type="button"
                        className="header__btn header__btn_favourites"
                    >
                        {favourites.length > 0 ? (
                            <>
                                <div className="favourites__block">
                                    <span className="favourites__num">
                                        {favourites.length}
                                    </span>
                                </div>
                                <Image src={heartRed} alt="heart-icon"></Image>
                            </>
                        ) : (
                            <Image src={heart} alt="heart-icon"></Image>
                        )}
                    </Link>
                </>
            )}
        </>
    );
}

export default FavouritesBtn;