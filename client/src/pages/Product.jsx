import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addItem } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
    padding-top: 50%;
    position: relative;
    overflow: hidden;
`;

const Image = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 500;
  color: #202124;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 25px;
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
  font-size: 20px;
  font-weight: 400;
`;

const AddTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const FilterColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
      opacity: 0.8;
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border: 2px solid #d4d3d3;
  width: 50%;
  margin-top: 10px;
`;

const Amount = styled.span`
    width: 80px;
    height: 40px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const ColorContainer = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button`
    padding: 20px 35px;
    width: 100%;
    border: none;
    color: #fff;
    background-color: #5f6dff;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    margin-top: 30px;
    &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border: 1px solid #5f6dff;
        background-color: #fff;
        color: #5f6dff;
    }
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    console.log(product)
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
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                <FilterSizeOption disabled>Size</FilterSizeOption>
                                {product.size?.map((s) => (
                                <FilterSizeOption key={s}>{s.value}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <ColorContainer>
                                {product.color?.map((c) => (
                                <FilterColor color={c.value} key={c} onClick={() => setColor(c.value)}/>
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
                        <Button onClick={handleClick}>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Product;
