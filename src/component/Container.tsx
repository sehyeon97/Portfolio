import { useEffect, useState } from "react";

interface states {
    canFlip: boolean,
    title?: string,
    text?: string,
    textColor?: string,
    width?: string,
    height?: string,
    backgroundColor?: string
}

const Container = (states: states) => {
    const backgroundColor = states.backgroundColor ? states.backgroundColor : "black";
    const width = states.width ? states.width : "250px";
    const height = states.height ? states.height : "250px";

    const [flipped, setFlipped] = useState(false);
    const [myBGColor, setMyBGColor] = useState(backgroundColor);

    // By default, text is displayed, not title
    const [text, setText] = useState(states.text);
    
    // on component mount (first render), if flashcard, title is displayed.
    useEffect(() => {
        if (states.canFlip) {
            setText(states.title);
        }
    }, [states.canFlip, states.title]);

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
        width: width,
        height: height,
    }

    return (
        <div style={CustomStyle} onClick={onClickContainer}>
            <p style={{color: states.textColor}}>{text}</p>
        </div>
    );
    
}

export default Container;