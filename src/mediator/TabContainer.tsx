import Tab from "../component/Tab";

const flexContainer = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row" as "row",
    marginLeft: "150px",
    marginRight: "150px",
    marginTop: "150px",
    backgroundColor: "cornflowerblue"
}

const TabContainer = () => {
    const tabNames = ["Chapter 15", "Chapter 17", "Chapter 18", "Chapter 19", "Chapter 20", "Chapter 21"];

    return (
        <div style={flexContainer}>
            <Tab tabName={tabNames[0]} tabOrder="1" backgroundColor="red" paddingRight="20px"/>
            <Tab tabName={tabNames[1]} tabOrder="2" backgroundColor="red" textColor="cornflowerblue" paddingRight="20px"/>
            <Tab tabName={tabNames[3]} tabOrder="4" backgroundColor="red" paddingRight="20px"/>
            <Tab tabName={tabNames[2]} tabOrder="3" backgroundColor="red" paddingRight="20px"/>
            <Tab tabName={tabNames[4]} tabOrder="5" backgroundColor="red" paddingRight="20px"/>
            <Tab tabName={tabNames[5]} tabOrder="6" backgroundColor="red"/>
        </div>
    );
}

export default TabContainer;