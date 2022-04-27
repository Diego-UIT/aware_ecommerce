import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RelatedProduct from "../components/Product";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addItem } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import axios from 'axios'
import CurrencyFormat from 'react-currency-format';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    width: 50%;
    flex-wrap: wrap;
    padding-top: 50%;
    position: relative;
    overflow: hidden;
`;

const Image = styled.img`
    position: absolute;
    background-size: cover;
    top: 0;
    left: 50%;
    width: 500px;
    height: 620px;
    transform: translateX(-50%);
    ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
    flex-grow: 1;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 500;
    color: #202124;
    font-size: 30px;
`;

const Price = styled.span`
    font-weight: 300;
    font-size: 28px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    flex-direction: column;
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    margin-bottom: 20px;
`;

const FilterTitle = styled.span`
    font-size: 18px;
    font-weight: 500;
`;

const AddTitle = styled.span`
    font-size: 18px;
    font-weight: 500;
    margin-right: 25px;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    border: 2px solid #d4d3d3;
    width: 42%;
    margin-top: 10px;
`;

const Amount = styled.span`
    width: 56px;
    height: 40px;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px 5px;
`;

const ColorContainer = styled.div`
    display: flex;
    align-items: center;    
`
const FilterColor = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 10px;
    cursor: pointer;
    margin-top: 15px;
    &:hover {
        opacity: 0.8;
    }
`;

const SizeContainer = styled.div`
    display: flex;
    align-items: center;
`
const FilterSize = styled.div`
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #808080;
    color: #202124;
    margin: 0px 10px;
    cursor: pointer;
    margin-top: 15px;
    display:flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #ffa15f;
        color: #fff;
        border-color: #ffa15f;
    }
`;

const Button = styled.button`
    padding: 20px 35px;
    width: 90%;
    border: 1px solid #5f6dff;
    color: #fff;
    background-color: #5f6dff;
    cursor: pointer;
    font-weight: 600;
    font-size: 17px;
    line-height: 25px;
    margin-top: 30px;
    &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border: 1px solid #5f6dff;
        background-color: #fff;
        color: #5f6dff;
    }
`;

const Hr = styled.div`
    width: 90%;
    background-color: #979797;
    height: 1px;
    margin-top: 30px;
`;

const DescContainer = styled.div`
    margin-top: 30px;
`;

const Desc = styled.p`
    color: #202124;
    font-size: 15px;
    margin-bottom: 10px;

    &:nth-child(1) {
        font-weight: 500;
    }
`;

const RelatedProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;

const RelatedHeader = styled.div`
    display: flex;
    color: #979797;

    &:before,
    &:after {
        content: '';
        margin: auto 20px;
        border-bottom: solid 1px;
        flex: 1;
    }
`;

const RelatedTitle = styled.h1`
    position: relative;
    padding: 5px 10px;
    overflow: hidden;
    color: #202124;
    font-weight: 500;
    font-size: 20px;
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
        try {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
        } catch {}
        };
        getProduct();
    }, [id]);

    useEffect(() => {
        const getProducts = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/products")
            setProducts(res.data);
        } catch (err) {}
        };
        getProducts();
    }, []);

    const handleQuantity = (type) => {
        if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
        } else {
        setQuantity(quantity + 1);
        }
    };

    const check = () => {
        if (size === undefined) {
            Swal.fire({
                title: 'Please choose size!',
                icon: 'info',
              })
            return false
        }
        if (color === undefined) {
            Swal.fire({
                title: 'Please choose color!',
                icon: 'info',
              })
            return false
        }
        return true
    }

    const handleClick = () => {
        if (check()) {
            dispatch(
                addItem({ ...product, quantity, color, size })
            );
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You have added a product to your cart!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Price>
                        <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <SizeContainer>
                                {product.size?.map((s) => (
                                    <FilterSize 
                                        key={s.value} 
                                        onClick={() => setSize(s.value)}>
                                            {s.value}
                                    </FilterSize>
                                ))}
                            </SizeContainer>
                        </Filter>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <ColorContainer>
                                {product.color?.map((c) => (
                                    <FilterColor 
                                        color={c.value} 
                                        key={c.value} 
                                        onClick={() => setColor(c.value)} 
                                    />
                                ))}
                            </ColorContainer>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AddTitle>Quantity</AddTitle>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                    </AddContainer>
                    <Button onClick={handleClick}>Add to cart</Button>
                    <Hr/>
                    <DescContainer>
                        <Desc>Model wearing size S</Desc>
                        <Desc>- Chest: 36”</Desc>
                        <Desc>- Length: 25.75”</Desc>
                    </DescContainer>
                </InfoContainer>
            </Wrapper>
            <RelatedHeader>
                <RelatedTitle>You may also like</RelatedTitle>
            </RelatedHeader>
            <Wrapper>
                <RelatedProducts>
                {products
                    .slice(0, 6)
                    .map((item) => <RelatedProduct item={item} key={item.id} />)}
                </RelatedProducts>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Product;
