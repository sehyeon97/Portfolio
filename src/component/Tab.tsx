

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

const Tab = (settings: TabSettings) => {
    const order = settings.tabOrder;
    const tabName = settings.tabName;
    const textColor = settings.textColor;
    const backgroundColor = settings.backgroundColor ? settings.backgroundColor : "wheat";
    const width = settings.width;
    const height = settings.height;
    const paddingLeft = settings.paddingLeft;
    const paddingRight = settings.paddingRight;

    const TabFlexStyle = {
        // flex: 1,
        order: order,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
    }

    const TabStyle = {
        textColor: textColor,
        backgroundColor: backgroundColor,
        width: width ? width : "150px",
        height: height ? height : "50px",
        cursor: "pointer"
    }

    return (
        <div style={TabFlexStyle}>
            <button style={TabStyle} onClick={() => alert("hello")}>{tabName}</button>
        </div>
    );
}

export default Tab;