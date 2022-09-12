import Container from "../component/Container";
import Tab from "../component/Tab";

const HomePage = () => {
    return (
        <div>
            <div>
                <Tab numberOfTabs={6}/>
            </div>
            <Container canFlip={true} title="Fluids" text="this is my test box" textColor='white'/>
        </div>
    );
}

export default HomePage;