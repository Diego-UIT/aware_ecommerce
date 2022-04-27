import banner from "../assets/images/banner.jpg"
import styled from "styled-components";

const Container = styled.div`
    padding: 20px 70px 20px 70px;
`
const Banner = styled.div`
    height: 100vh;
    background-image: url(${banner});
    background-size: cover;
    position: relative;
`;

const Title = styled.h1`
    font-size: 70px;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #fff;
    font-weight: 600;
    font-family: 'Domine', serif;
    font-size: 56px;
    position: absolute;
    top: 80px;
    right: 50px;
`;

const Button = styled.button`
    border:none;
    padding: 14px 55px;
    background-color: #ffa15f;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    margin-top: 10px;
    font-size: 15px;
    position: absolute;
    bottom: 50px;
    right: 80px;
`;

const Newsletter = () => {
  return (
    <Container>
        <Banner>
            <Title>Outfit of the week</Title>
            <Button>Shop now</Button>
        </Banner>
    </Container>
  );
};

export default Newsletter;
