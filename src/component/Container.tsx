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

    const onClickContainer = () => {
        if (states.canFlip) {
            setFlipped(!flipped);

            if (flipped) {
                setMyBGColor("blue");
                setText(states.text);
            } else {
                setMyBGColor("black");
                setText(states.title);
            }
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