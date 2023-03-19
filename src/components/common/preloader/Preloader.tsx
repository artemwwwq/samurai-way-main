import React from 'react';
import loader from "../../../assist/image/Blocks-1s-200px.svg";

const Preloader = () => {
    return (
        <div>
            <img src={loader}/>
        </div>
    );
};

export default Preloader;