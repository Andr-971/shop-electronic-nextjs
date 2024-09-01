
import React from "react"

interface TitleProps {
    title: string;
}

const TitleH1 = ({title}: TitleProps) => {
    return (
        <>
            <div className="stocks__title-box">
                <h1 className="stocks__title">{ title }</h1>
            </div>
        </>
    );
}

export default TitleH1;

