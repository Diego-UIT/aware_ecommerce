import {
  Facebook,
  Instagram,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import logo from "../assets/images/logo@2x.png"

const Container = styled.div`
    height: 50px;
    ${mobile({ flexDirection: "column" })}
`;

const Wrapper = styled.div`
    padding: 60px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #ececec;
    ${mobile({ padding: "10px 0px" })}
`;

const WrapperBottom = styled.div`
    padding: 30px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #ececec;
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
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    & svg {
        font-size: 22px;
        color: #b7b7b7;
    }
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

const ListItem = styled.li`
    color: #b7b7b7;
    font-size: 15px;
    margin-left: 50px;
`;

const ListBottomItem = styled.li`
    color: #b7b7b7;
    font-size: 13px;
    margin-left: 20px;

    &:nth-child(1) {
        margin-left: 0;
    }
`

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
                    <ListItem>About</ListItem>
                    <ListItem>Help</ListItem>
                    <ListItem>Contacts</ListItem>
                </List>
            </Center>
            <Right>
                <SocialContainer>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                </SocialContainer>
            </Right>
        </Wrapper>
        <WrapperBottom>
            <Left>
                <List>
                    <ListBottomItem>Home</ListBottomItem>
                    <ListBottomItem>Products</ListBottomItem>
                    <ListBottomItem>Services</ListBottomItem>
                    <ListBottomItem>About</ListBottomItem>
                    <ListBottomItem>Help</ListBottomItem>
                    <ListBottomItem>Contacts</ListBottomItem>
                </List>
            </Left>
            <Right>
                <List>
                    <ListBottomItem>Privacy Policy</ListBottomItem>
                    <ListBottomItem>Terms & Conditions</ListBottomItem>
                </List>
            </Right>
        </WrapperBottom>
    </Container>
  );
};

export default Footer;
