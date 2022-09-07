import React from "react";
import { useDispatch, useSelector } from "react-redux";


const Count = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div className="block">
            {count}
            <div className="button-block">
                <button onClick={() => dispatch({type: 'plus'})}>+</button>
                <button onClick={() => dispatch({type: 'res'})}>RESET</button>
                <button onClick={() => dispatch({type: 'minus'})}>-</button>
            </div>
        </div>
    );
};

export default Count;
