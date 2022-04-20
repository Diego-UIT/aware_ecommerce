import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from 'react-router-dom'
import { login } from "../../redux/callAPI";
import background from "../../assets/images/rectangle-5@2x.png"
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url(${background})
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 20%;
    padding: 40px;
    background-color: rgba(61, 61, 63, 0.8);
`;

const Title = styled.h1`
    color: #ffa15f;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 15px;
    background: #f6f6f6;
    border: none;
    outline: none;
`;

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: #ffa15f;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 30px;
    margin-top: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &:disabled {
        color: #ffa15f;
        cursor: not-allowed;
    }
`;

const LinkRegister = styled.div`
    margin-top: 5px;
    text-align: center;
    color: #fff;
`
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
        navigate('/')
    };

    return (
        <Container>
            <Wrapper>
                <Title>Log in</Title>
                <Form>
                    <Input
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick}>
                        LOGIN
                    </Button>
                </Form>
                <Link to="/forgotPass">
                    <LinkRegister>
                        Forgot password
                    </LinkRegister>
                </Link>
            </Wrapper>
        </Container>
    );
};

export default Login;