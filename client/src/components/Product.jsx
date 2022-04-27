import { Link } from "react-router-dom";
import styled from "styled-components";
import CurrencyFormat from 'react-currency-format';

const ButtonContainer = styled.div`
    position: absolute;
    top: 256px;
    left: 0;
    display: none;
`

const Container = styled.div`
    text-align: left;
    margin-bottom: 20px;
    position: relative;

    & a {
        text-decoration: none;
    }

    &:hover ${ButtonContainer} {
        display: block;
    }
`;

const ImageContainer = styled.div`
    padding-top: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
`
  
const Image = styled.img`
    position: absolute;
    top: 0;
    left: 34%;
    max-width: 67%;
    height: 100%;
    transform: translateX(-50%);
`;

const Title = styled.h3`
    margin-bottom: 10px;
    color: #202124;
    font-size: 16px;
    font-weight: 500;
    max-width: 70%;
`
const Price = styled.div`
    margin-bottom: 10px;
    color: #4d4d4d;
    font-size: 15px;
    font-weight: 300;
`

const Button = styled.button`
    border: none;
    padding: 16px 65px;
    background-color: #ffa15f;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
`

const SoldOut = styled.div`
    padding: 5px 10px;
    background-color: #808080;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    position: absolute;
    top: 240px;
    left: -5px;
`

const Product = ({ item }) => {
    return (
        <Container>
                <Link to={`/product/${item._id}`}>
                    <ImageContainer>
                        <Image src={item.img} />
                            <ButtonContainer>
                                <Button>Quick shop</Button>
                            </ButtonContainer>
                    </ImageContainer>
                    <Title>{item.title}</Title>
                </Link>
                {item.inStock ? '' : <SoldOut>Sold out</SoldOut>}
                <Price>
                    <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </Price>
        </Container>
    );
};
  
export default Product;