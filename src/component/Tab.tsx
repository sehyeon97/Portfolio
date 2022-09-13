import Container from "./Container";

interface TabSettings {
    numberOfTabs: number,
    tabNames: any,
    width?: string,
}

const Tab = (settings: TabSettings) => {
    let tabContainer = [];
    const text = settings.tabNames;

    for (let i = 0; i < settings.numberOfTabs; i++) {
        tabContainer[i] = <Container canFlip={false} width="150px" height="50px" backgroundColor="wheat" text={text[i]} textColor="black"/>
    }

    const TabStyles = {
        display: "flex",
        justifyContent: "center"
    }

    return (
        <div style={TabStyles}>
            {tabContainer.map(tab => (
                <h1 style={{padding: "10px"}}>{tab}</h1>
            ))}
        </div>
    );
}

export default Tab;