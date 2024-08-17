"use client";
import React, { useEffect, useState } from "react";
import {usePathname} from "next/navigation";
// import { useRouter, usePathname, useSearchParams } from "next/navigation";
import routeName from "../../public/routeName";
import Link from "next/link";

const Breadcrumbs = () => {
    const [breadcrumbs, setBreadcrumbs] = useState(null);
    const router = usePathname();
    useEffect(() => {
        if (router) {
            const linkPath = router.split("/"); // Получаем массив из страниц папок
            linkPath.shift();
            const titlePath = [] // Создаём массив из названий страниц
            linkPath.map((el, i) => {
                routeName.map((item, index) => { // Перебираем и присваеваем вместо страниц папок названия страниц
                    if (el === item.page) {
                        return titlePath.push(item.title);
                    }
                });
            });
            const pathArray = titlePath.map((path, i) => {
                return {
                    breadcrumb: path,
                    href: "/" + linkPath.slice(0, i + 1).join("/"),
                };
            });
            setBreadcrumbs(pathArray);
        }
    }, [router]);
    if (!breadcrumbs) {
        return null;
    }

    return (
        <>
            <div className="bread-crumbs">
                <ul className="bread-crumbs__block">
                    <Link href="/" className="bread-crumbs__link">
                        Главная
                    </Link>
                    {breadcrumbs.map((breadcrumb) => {
                        return (
                            <Link
                                href={breadcrumb.href}
                                key={breadcrumb.href}
                                className="bread-crumbs__link"
                            >
                                {breadcrumb.breadcrumb}
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};
export default Breadcrumbs;
