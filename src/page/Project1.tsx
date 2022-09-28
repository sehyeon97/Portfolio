import Container from "../component/Container";


const Project1 = () => {
    return (
        <div>
            <h1>Project 1 !!</h1>
            <Container canFlip={true} title="Fluids" text="this is my test box" textColor='white'/>
        </div>
    );
}

export default Project1;