import { Badge } from "@material-ui/core";
import { Search, ShoppingCart, ArrowDropDown } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import logo from "../assets/images/logo@2x.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../data";

const Container = styled.div`
    height: 130px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 15px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const WrapperBottom = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 2px solid #cccccc;
  border-radius: 100px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 7px 12px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  color: #cccccc;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
    width: 25%;
    height: 25%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
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
    font-weight: bold;
    cursor: pointer;
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

const DisplayUser = styled.p`
    & a {
        color: #000;
        text-decoration: none;
    }
`
const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;

    & a {
        text-decoration: none;
    }
`;

const ListItem = styled.li`
    color: #202124;
    font-size: 14px;
    font-weight: 500;
    margin-left: 30px;
    display: flex;
    align-items: center;
`;

const Navbar = () => {
    const cart = useSelector(state=>state.cart.value)
    const user = useSelector((state) => state.user.currentUser)

    return (
        <Container>
            <Wrapper>
                <Left>
                <SearchContainer>
                    <Input placeholder="Search" />
                    <Search style={{ color: "gray", fontSize: 25 }} />
                </SearchContainer>
                </Left>
                <Center>
                    <Link to="/"><Logo src={logo}></Logo></Link>
                </Center>
                <Right>
                    { user ? <DisplayUser><Link to="/profile">{user.username}</Link></DisplayUser>
                            :  
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
                            <Badge badgeContent={cart.length} color="secondary">
                            <ShoppingCart />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
            <WrapperBottom>
                <Center>
                    <List>
                        {categories.map((item) => (
                            <Link to={`/products/${item.cat}`}>
                                <ListItem key={item.id}>{item.title} <ArrowDropDown/></ListItem>
                            </Link>
                        ))} 
                    </List>
                </Center>
            </WrapperBottom>
        </Container>
    );
};

export default Navbar;
