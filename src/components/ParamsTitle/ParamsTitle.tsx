
import React from "react"

const ParamsTitle = ({title, active}:any) => {
    return (
        <>
            <div className="parameters__title-box">
                <h3
                    className={`parameters__title ${
                        active && "parameters__active"
                    }`}
                >
                    {title}
                </h3>
            </div>
        </>
    );
}
// Ваш заказ
export default ParamsTitle;