

type ProductProps = {
    params: {
        stock: string;
    };
};

export default function Products({ params: { stock } }: ProductProps) {
    return (
        <>
            <section className="section-About">
                <div className="g-container">
                    <h1 className="h1">Динамическая Каталог</h1>
                </div>
            </section>
        </>
    );
}