import Container from "./TabProp";

interface TabSettings {
    tabName: string,
    tabOrder: string,
    textColor?: string,
    backgroundColor?: string,
    padding: boolean,
    paddingLeft?: string,
    paddingRight?: string
}

const Tab = (settings: TabSettings) => {
    const text = settings.tabName;
    const order = settings.tabOrder;
    const padding = settings.padding;

    let paddingLeft = undefined;
    let paddingRight = undefined;

    if (padding) {
        paddingLeft = settings.paddingLeft;
        paddingRight = settings.paddingRight;
    }

    const TabStyle = {
        flex: 1,
        order: order,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight
    }

    return (
        <div style={TabStyle}>
            <Container canFlip={false} width="150" height="50px" backgroundColor="wheat" text={text} textColor="black"/>
        </div>
    );
}

export default Tab;