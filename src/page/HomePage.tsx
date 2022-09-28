import Tab from "../component/Tab";
import TextLink from "../component/TextLink";

const flexContainer = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row" as "row",
    marginLeft: "150px",
    marginRight: "150px",
    marginTop: "150px"
}

const HomePage = () => {
    const tabNames = ["Chapter 15", "Chapter 17", "Chapter 18", "Chapter 19", "Chapter 20", "Chapter 21"];

    return (
        <div style={flexContainer}>
            <Tab tabName={tabNames[0]} tabOrder="1" padding={true} paddingRight="20px"/>
            <Tab tabName={tabNames[1]} tabOrder="2" padding={false}/>
        </div>
    );
}

export default HomePage;