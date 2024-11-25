
import React from "react"

interface TitleProps {
    title: string;
}
const TitleH2 = ({ title }:TitleProps) => {
    return (
        <>
            <h2 className="title-h2">{title}</h2>
        </>
    );
};

export default TitleH2;