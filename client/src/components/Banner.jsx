import banner from "../assets/images/banner.jpg"
import styled from "styled-components";

const Container = styled.div`
    padding: 50px;
`

const Banner = styled.div`
  height: 80vh;
  background-image: url(${banner});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: #fff;
`;

const Button = styled.button`
    border:none;
    padding: 15px 25px;
    background-color: #ffa15f;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    margin-top: 10px;
`;

const Newsletter = () => {
  return (
    <Container>
        <Banner>
            <Title>Outfit of the week</Title>
            <Button>SHOP NOW</Button>
        </Banner>
    </Container>
  );
};

export default Newsletter;
