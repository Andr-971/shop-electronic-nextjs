
import React from "react"

const BtnParametrs = ({
    setChangeTab1 = (e: any) => e,
    setChangeTab2 = (e: any) => e,
    setChangeTab3 = (e: any) => e,
    setChangeTab4 = (e: any) => e,
}: any) => {
    function handlerButton() {
        setChangeTab1((e: any) => (e = !e)); 
        setChangeTab2((e: any) => (e = !e)); 
        setChangeTab3((e: any) => (e = !e)); 
        setChangeTab4((e: any) => (e = !e)); 
    }
    return (
        <>
            <div className="parameters__button-box" onClick={handlerButton}>
                <button className="parameters__button">Изменить</button>
            </div>
        </>
    );
};

export default BtnParametrs;