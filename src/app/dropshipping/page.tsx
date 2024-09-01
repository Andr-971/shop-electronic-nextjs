import Breadcrumbs from "@/utils/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Продажа от производителя",
    description: "Хорошие условия продажи от производителя",
};

export default function Dropshipping() {
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
