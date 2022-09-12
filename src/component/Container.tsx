import { useState } from "react";

interface states {
    canFlip: boolean,
    title?: string,
    text?: string,
    textColor?: string
}

const Container = (states: states) => {
    const [flipped, setFlipped] = useState(false);
    const [myBGColor, setMyBGColor] = useState("black");
    const [text, setText] = useState(states.title);

    const flipContainer = () => {
        setFlipped(!flipped);
    }

    const flipText = () => {
        if (flipped) {
            setText(states.text);
        } else {
            setText(states.title);
        }
    }

    const onClickContainer = () => {
        if (states.canFlip) {
            flipContainer();

            if (flipped) {
                setMyBGColor("blue");
            } else {
                setMyBGColor("black");
            }

            flipText();
        }
    }

    const CustomStyle = {
        backgroundColor: myBGColor,
        width: "250px",
        height: "250px",
    }

    return (
        <div style={CustomStyle} onClick={onClickContainer}>
            <p style={{color: states.textColor}}>{text}</p>
        </div>
    );
    
}

export default Container;