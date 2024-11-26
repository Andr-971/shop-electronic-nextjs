
import Breadcrumbs from "../../../utils/Breadcrumbs.jsx";
import routeName from "../../../../public/routeName";
import ProductCardDetall from "../../../components/ProductCardDetall"
import productAll from "../../../../public/productAll"
import {getData} from "../../../services/query"

type ProductProps = {
    params: {
        product: string;
    };
};
// Вернуть список `params`, чтобы заполнить динамический сегмент [slug]
export async function generateStaticParams() {
    return productAll.map((el: any) => {
        return { product: el.path };
    });
}

export async function generateMetadata({ params: { product } }: ProductProps) {
    let description;
    routeName.map((el) => {
        if (el.page === product) {
            return (description = el.description);
        }
    });
    routeName.map((el) => {
        if (el.page === product) {
            return (product = el.title);
        }
    });
    return {
        title: product,
        description: description,
    };
}

export default async function Products({ params: { product } }: ProductProps) {
    // { params: { product } }: ProductProps

    // const catalogArray = await getData();
    const catalogArray = productAll;
    return (
        <>
            <div className="g-container">
                <Breadcrumbs></Breadcrumbs>
                <section className="card">
                    <div className="card__inner">
                        <ProductCardDetall
                            catalogArray={catalogArray}
                        ></ProductCardDetall>
                    </div>
                </section>
            </div>
        </>
    );
}