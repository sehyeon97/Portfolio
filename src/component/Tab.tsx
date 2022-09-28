import { useNavigate } from 'react-router-dom';


interface TabSettings {
    tabOrder: string,
    tabName: string,
    text?: string,
    textColor?: string,
    fontSize?: string,
    backgroundColor?: string,
    width?: string,
    height?: string,
    paddingLeft?: string,
    paddingRight?: string
}

let mappedPaths = new Map();
mappedPaths.set("Project 1", "/Project1");
mappedPaths.set("Project 2", "/Project2");
mappedPaths.set("Project 3", "/Project3");
mappedPaths.set("Contact Me", "/Contact");

const Tab = (settings: TabSettings) => {
    const order = settings.tabOrder;
    const tabName = settings.tabName;
    const textColor = settings.textColor;
    const backgroundColor = settings.backgroundColor ? settings.backgroundColor : "red";
    const width = settings.width;
    const height = settings.height;

    const navigate = useNavigate();

    const TabFlexStyle = {
        flex: 1,
        order: order
    }

    const TabStyle = {
        textColor: textColor,
        backgroundColor: backgroundColor,
        width: width ? width : "150px",
        height: height ? height : "50px",
        cursor: "pointer"
    }

    const eventHandler = (path: string) => {
        const pathValue = mappedPaths.get(path);
        navigate(pathValue);
    }

    return (
        <div style={TabFlexStyle}>
            <button style={TabStyle} onClick={() => eventHandler(tabName)}>{tabName}</button>
        </div>
    );
}

export default Tab;