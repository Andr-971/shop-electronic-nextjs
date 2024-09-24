import Breadcrumbs from "@/utils/Breadcrumbs";
import PromotionDetails from "@/components/PromotionDetails";
import routeName from "../../../../public/routeName";

type StockProps = {
    params: {
        stock: string;
    };
};
export async function generateMetadata({ params: { stock } }: StockProps) {
    let description;
    routeName.map((el) => {
        if (el.page === stock) {
            return (description = el.description);
        }
    });
    routeName.map((el) => {
        if (el.page === stock) {
            return (stock = el.title);
        }
    });
    return {
        title: stock,
        description: description,
    };
}

export default function Stock({ params: { stock } }: StockProps) {

    return (
        <>
            <section className="section-stock">
                <div className="g-container">
                    <Breadcrumbs></Breadcrumbs>
                    <section className="stock">
                        <PromotionDetails></PromotionDetails>
                    </section>
                </div>
            </section>
        </>
    );
}
