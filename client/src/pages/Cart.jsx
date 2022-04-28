import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartItem from "../components/CartItem"
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  ${mobile({ padding: "10px" })}
`;

const TitleHeader = styled.h1`
  font-weight: 500;
  font-size: 25px;
  text-align: left;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const CartItems = styled.div`
    flex: 3;
    margin-right: 20px;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Divider = styled.div`
    height: 1px;
    background: #979797;
`

const Summary = styled.div`
    flex: 1;
    background-color: #f9f9f9;
    padding: 25px;
    height: 22vh;
    margin-right: 30px;
    margin-top: 30px;
`;

const SummaryTitle = styled.h1`
    font-weight: 600;
    font-size: 18px;
`;

const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "600"};
    font-size: ${(props) => props.type === "total" && "19px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #ff5f6d;
    color: white;
    font-weight: 600;
    font-size: 15px;
    border: none;
    margin-top: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Titles = styled.div`
    margin: 30px 0 0 0;
    display: grid;
    align-items: center;
    grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
    column-gap: 100px;
`
const Title = styled.h3`
    font-size: 16px;
    font-weight: 600;
`


const Cart = () => {
    const carts = useSelector((state) => state.cart.value)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(carts.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
    }, [carts])

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <TitleHeader>My Bag</TitleHeader>
                <Top>
                    <Titles>
                        <Title>Product</Title>
                        <Title>Color</Title>
                        <Title>Size</Title>
                        <Title>Quantity</Title>
                        <Title>Amount</Title>
                    </Titles>
                </Top>
                <Bottom>
                    <CartItems>
                        {carts.map((item, i) => (
                            <CartItem key={i} item={item}/>
                        ))}
                        <Hr />
                    </CartItems>
                    <Summary>
                        <SummaryTitle>Total</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Shipping & Handling:</SummaryItemText>
                            <SummaryItemPrice>Free</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Total product:</SummaryItemText>
                            <SummaryItemPrice>
                                <CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </SummaryItemPrice>
                        </SummaryItem>
                        <Divider />
                        <SummaryItem type="total">
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>                    
                                <CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </SummaryItemPrice>
                        </SummaryItem>
                        <Link to="/checkout"><Button>Check out</Button></Link>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;