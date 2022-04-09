import { useState } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import { login } from "../redux/callAPI";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 50px;
    background-color: #fff;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
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
    margin-bottom: 60px;
    margin-top: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &:disabled {
        color: #ffa15f;
        cursor: not-allowed;
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    font-weight: bold;
    text-align: right;
    text-decoration: none;
    cursor: pointer;
`;

const LinkRegister = styled.div`
    margin-top: 10px;
    text-align: center;
    & a {
        color: #ffa15f;
        margin-left: 5px;
        text-decoration: underline;
        font-size: 17px;
    }
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 0.5px;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
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
                    {error && <Error>Something went wrong...</Error>}
                    <Button onClick={handleClick} disabled={isFetching}>
                        LOGIN
                    </Button>
                </Form>
                <Hr />
                <LinkRegister>
                    Don’t have an account?
                    <Link to="/register">Register</Link>
                </LinkRegister>
            </Wrapper>
        </Container>
    );
};

export default Login;
