import Breadcrumbs from "@/utils/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Сервис и гарантия",
    description: "Самый лучий сервис",
};

export default function Warranty() {
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
