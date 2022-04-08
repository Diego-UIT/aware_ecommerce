import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 15px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 100px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px 15px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img``;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const AuthContainer = styled.div`
    display: flex;
`

const ButtonLogin = styled.button`
    border: 1px solid #ffa15f;
    border-radius: 100px;
    padding: 10px 35px;
    background-color: #fff;
    color: #ffa15f;
    cursor: pointer;
    font-weight: 500;
    transition: color .3s ease;
    &:hover {
        background-color: #ffa15f;
        color: #fff;
    }
`
const ButtonRegister = styled.button`
    border: none;
    padding: 10px 35px;
    background-color: #fff;
    color: #4d4d4d;
    cursor: pointer;
    font-weight: 500;
    transition: color .3s ease;
    &:hover {
        background-color: #4d4d4d;
        border-radius: 100px;
        color: #fff;
    }
`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector((state) => state.user.currentUser)

    return (
        <Container>
            <Wrapper>
                <Left>
                <SearchContainer>
                    <Input placeholder="Search" />
                    <Search style={{ color: "gray", fontSize: 20 }} />
                </SearchContainer>
                </Left>
                <Center>
                    <Link to="/"><Logo src={logo}></Logo></Link>
                </Center>
                <Right>
                    { user ? user.username :  
                        <AuthContainer>
                            <MenuItem>
                                <Link to="/register">
                                    <ButtonRegister>
                                        Register
                                    </ButtonRegister>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/login">
                                    <ButtonLogin>
                                        Log in
                                    </ButtonLogin>
                                </Link>
                            </MenuItem>
                        </AuthContainer>
                    }
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="secondary">
                            <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
