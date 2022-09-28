import Tab from "../component/Tab";


const TabContainer = () => {
    const tabNames = ["Project 1", "Project 2", "Project 3", "Contact Me"];
    const tabWidth = 150;
    const numberOfTabs = tabNames.length;
    const width = tabWidth * numberOfTabs;

    const flexContainer = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row" as "row",
        marginTop: "150px",
        marginLeft: "25%",
        backgroundColor: "cornflowerblue",
        width: width + "px"
    }

    return (
        <div style={flexContainer}>
            <Tab tabName={tabNames[0]} tabOrder="1" backgroundColor="wheat" paddingRight="20px" width="150px"/>
            <Tab tabName={tabNames[1]} tabOrder="2" backgroundColor="wheat" textColor="cornflowerblue" paddingRight="20px" width="150px"/>
            <Tab tabName={tabNames[3]} tabOrder="4" backgroundColor="wheat" width="150px"/>
            <Tab tabName={tabNames[2]} tabOrder="3" backgroundColor="wheat" paddingRight="20px" width={tabWidth + ""}/>
        </div>
    );
}

export default TabContainer;