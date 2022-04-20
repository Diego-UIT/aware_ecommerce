import { useState } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import { login } from "../redux/callAPI";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import FormInput from "../components/FormInput"

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

const Login = () => {
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        username: "",
        password: "",
      });
    
    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
              "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
          id: 2,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
    ];
    
    const handleSubmit = (e) => {
        e.preventDefault();
        login(dispatch, values);
    };
    
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    return (
        <Container>
            <Wrapper>
                <Title>Log in</Title>
                <Form onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                        ))}
                        <Button>Login</Button>
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
