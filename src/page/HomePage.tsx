import Tab from "../component/Tab";
import TextLink from "../component/TextLink";

const HomePage = () => {
    const tabNames = [<TextLink text="Chapter 15" redirectLink="/Chapter15_Fluids"/>, "Chapter 17", "Chapter 18", "Chapter 19", "Chapter 20", "Chapter 21"];

    return (
        <div>
            <Tab numberOfTabs={6} tabNames={tabNames}/>
        </div>
    );
}

export default HomePage;