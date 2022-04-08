import {
  ShoppingCartOutlined
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
    border:none;
    padding: 15px 25px;
    background-color: #ffa15f;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    margin-top: 10px;
    display: flex;
    align-items: center;
`;

const Product = ({ item }) => {
    return (
        <Container>
        <Circle />
        <Image src={item.img} />
        <Link to={`/product/${item._id}`}>
            <Info>
                <Icon>
                    <Button>
                        <ShoppingCartOutlined/>
                        Quick shop
                    </Button>
                </Icon>
            </Info>
        </Link>
        </Container>
    );
};

export default Product;
