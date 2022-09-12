import { useState } from "react";

interface states {
    canFlip: boolean,
    title?: string,
    text?: string
}

const Container = (canFlip: states) => {
    const [flipped, setFlipped] = useState(false);
    const [myBGColor, setMyBGColor] = useState("black");

    const flipContainer = () => {
        setFlipped(!flipped);
    }

    const onClickContainer = () => {
        flipContainer();

        if (myBGColor === "black") {
            setMyBGColor("blue");
        } else {
            setMyBGColor("black");
        }
    }

    const CustomStyle = {
        backgroundColor: myBGColor,
        width: "250px",
        height: "250px",
        
    }

    return (
        <div style={CustomStyle} onClick={onClickContainer}>
            
        </div>
    );
    
}

export default Container;