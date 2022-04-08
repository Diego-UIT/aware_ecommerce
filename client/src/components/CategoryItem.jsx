import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    color: white;
    font-weight: normal;
    margin-bottom: 10px;
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

const Divider = styled.div`
    height: 0.5px;
    width: 80%;
    background: #eaeaea;
`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Divider></Divider>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;
