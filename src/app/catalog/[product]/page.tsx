
import Breadcrumbs from "@/utils/Breadcrumbs";
import routeName from "../../../../public/routeName";
import ProductCardDetall from "@/components/ProductCardDetall"
import {getData} from "../../api/catalog/[product]/route"
import { revalidatePath } from "next/cache";
// revalidatePath("../../api/catalog/[product]/route");

type ProductProps = {
    params: {
        product: string;
    };
};
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
    const catalogArray = await getData();
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