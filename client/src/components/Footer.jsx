import {
  Facebook,
  Instagram,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import logo from "../assets/images/logo.png"

const Container = styled.div`
    height: 50px;
    ${mobile({ flexDirection: "column" })}
`;

const Wrapper = styled.div`
    padding: 20px 50px;
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
const Logo = styled.img`
    width: 25%;
    height: 70%;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background-color: #b7b7b7;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ display: "none" })}
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
`;

const ListItem = styled.li``;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo src={logo}></Logo>
            </Left>
            <Center>
                <List>
                <ListItem>Home</ListItem>
                <ListItem>Products</ListItem>
                <ListItem>Services</ListItem>
                <ListItem>About us</ListItem>
                <ListItem>Help</ListItem>
                <ListItem>Contacts</ListItem>
                </List>
            </Center>
            <Right>
                <SocialContainer>
                <SocialIcon>
                    <Facebook />
                </SocialIcon>
                <SocialIcon>
                    <Instagram />
                </SocialIcon>
                <SocialIcon>
                    <Twitter />
                </SocialIcon>
                </SocialContainer>
            </Right>
        </Wrapper>
    </Container>
  );
};

export default Footer;
