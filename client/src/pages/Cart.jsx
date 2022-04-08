import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 25px;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    align-items: center;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
`;

const ProductName = styled.h2`
    font-size: 20px;
    font-weight: 500;
    width: 35%;
`;

const ProductColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
    font-size: 18px;
`;

const PriceDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    border: 2px solid #d4d3d3;
    padding: 8px;
`;

const ProductAmount = styled.div`
    font-size: 22px;
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 25px;
    font-weight: 600;
    margin-top: 10px;
    ${mobile({ marginBottom: "20px" })}
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
    height: 60vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 500;
    font-size: 20px;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #ff5f6d;
    color: white;
    font-weight: 600;
    font-size: 17px;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Container>
        <Navbar />
        <Wrapper>
            <Title>MY BAG</Title>
            <Top>
            <Link to="/">
                <TopButton>CONTINUE SHOPPING</TopButton>
            </Link>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map((product) => (
                    <Product>
                        <ProductDetail>
                            <Image src={product.img} />
                            <Details>
                                <ProductName>
                                    {product.title}
                                </ProductName>
                                <ProductColor color={product.color} />
                                <ProductSize>
                                    <b>Size:</b> {product.size}
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ {product.price * product.quantity}
                            </ProductPrice>
                        </PriceDetail>
                    </Product>
                    ))}
                    <Hr />
                </Info>
                <Summary>
                    <SummaryTitle>Total</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Shipping & Handling:</SummaryItemText>
                        <SummaryItemPrice>Free</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Total product:</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <Divider />
                    <SummaryItem type="total">
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Check out</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  );
};

export default Cart;