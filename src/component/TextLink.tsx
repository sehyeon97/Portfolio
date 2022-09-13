import { useNavigate } from 'react-router-dom';

interface mapping {
    text: string,
    redirectLink: string,
}

const TextLink = (myTextLink: mapping) => {
    const navigate = useNavigate();

    return (
        <div>
            <text onClick={() => navigate(myTextLink.redirectLink)}>{myTextLink.text}</text>
        </div>
    );
}

export default TextLink;