import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Оптом",
    description: "Выгодные условия для оптовой покупки",
};

import Breadcrumbs from "@/utils/Breadcrumbs";

export default function Wholesale() {
    return (
        <>
            <section className="section-about">
                <div className="g-container">
                    <Breadcrumbs></Breadcrumbs>
                </div>
            </section>
        </>
    );
}
