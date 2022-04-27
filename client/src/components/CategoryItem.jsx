import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 10px;
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
    top: 150px;
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
    font-weight: 500;
    margin-bottom: 10px;
    font-family: 'Domine', serif;
`;

const Button = styled.button`
    border: none;
    padding: 15px 25px;
    background-color: #ffa15f;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    margin-top: 10px;
`;

const Divider = styled.div`
    height: 2px;
    width: 70%;
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
                    <Button>Shop now</Button>
                </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;
