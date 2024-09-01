import Breadcrumbs from "@/utils/Breadcrumbs";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Рассрочка",
    description: "Все виды рассрочки",
};

export default function Installment() {
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
