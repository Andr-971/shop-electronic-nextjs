// contact

import Breadcrumbs from "../../utils/Breadcrumbs.jsx";
import { Metadata } from "next";
import TitleH1 from "../../components/TitleH1";

export const metadata: Metadata = {
    title: "Контакты",
    description: "Контакты магазина",
};

export default function Contact() {
    return (
        <>
            <div className="g-container">
                <Breadcrumbs></Breadcrumbs>
                <TitleH1 title="Контакты"></TitleH1>
                <section className="contact">
                </section>
            </div>
        </>
    );
}
