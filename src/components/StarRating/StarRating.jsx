
import React from "react"
import { useState} from "react";
import StarOne from "../../libs/star/StarOne"
// import s from "./rating.module.css"
import "./rating.css"

const StarRating = ({ count = 5, currentItem = undefined, setCurrentItem = (i)=>(i), starRating }) => {
    const [hoverItem, setHoverItem] = useState();
    const [hoverActive, setHoverActive] = useState(false);
    const itemArray = Array(count).fill("★");
    const choiceRating = "#FBB13C";
    const colorDefault = "rgb(200, 202, 203)";
    function handlerCurrentItem(i) {
        setCurrentItem(i);
    }
    function handlerMoveItem(i) {
        return setHoverItem(i);
    }
    function handlerOutItem() {
        return setHoverItem();
    }
    function activeTrackMove() {
        return setHoverActive(true);
    }
    function activeTrackOut() {
        function time() {
            setHoverActive(false);
        }
        return setTimeout(time, 5000);
    }

    return (
        <>
            <div className="rating__wrrap">
                <div
                    className={`rating__line_track ${hoverActive ? "hidden" : ""}`}
                    style={{ width: starRating + "%" }}
                    onMouseMove={() => activeTrackMove()}
                    onMouseOut={() => activeTrackOut()}
                ></div>
                {itemArray.map((el, i) => {
                    return (
                        <div
                            className={`item`}
                            key={i}
                            onMouseMove={() => handlerMoveItem(i)}
                            onMouseOut={() => handlerOutItem()}
                            onClick={() => handlerCurrentItem(i)}
                        >
                            {i <= currentItem || i <= hoverItem ? (
                                <StarOne colorDefault={choiceRating}></StarOne>
                            ) : (
                                <StarOne colorDefault={colorDefault}></StarOne>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default StarRating;