import React, { useState } from 'react';
import Modal from './Modal';

const Render = () => {
    const [isClicked, setIsClicked] = useState(false);
    const styles = "text-white bg-transparent p-0 border-0 focus:outline-none";

    const clickHandler = () => {
        setIsClicked(!isClicked);
    }

    return (
        <>
            <button className={styles} onClick={clickHandler}>
                Login
            </button>
            <Modal isActivated={isClicked} />
        </>
    );
}

export default Render;