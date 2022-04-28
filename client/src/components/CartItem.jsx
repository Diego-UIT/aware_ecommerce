import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateItem, removeItem } from '../redux/cartReducer'
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import CurrencyFormat from 'react-currency-format';

const Product = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid rgb(187, 187, 187);
    padding: 20px 0;
`;

const ProductDetail = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

const Image = styled.img`
    width: 100px;
    max-width: 100%;
    margin-right: 25px;
`;

const Details = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
`;

const ProductName = styled.h2`
    font-size: 16px;
    font-weight: 500;
`;

const ColorContainer = styled.div`
    width: 22%;
    margin-left: 55px;
    margin-top: 50px;
`

const ProductColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const SizeContainer = styled.div`
    margin-top: 50px;   
    margin-left: 15px;
`

const ProductSize = styled.span`
    font-size: 18px;
    font-weight: 500;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    border: 2px solid #d4d3d3;
    padding: 6px;
    width: 130px;
    max-width: 100%;
    margin-right: 50px;
`;

const ProductAmount = styled.div`
    font-size: 20px;
    width: 73px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

const ProductPrice = styled.div`
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
    width: 10%;
`;

const RemoteItemCart = styled.div`
    margin-top: 30px;
    & span {
        cursor: pointer;
        font-size: 14px;
    }

    & span:hover {
        color: #f63f45;
    }
`

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 30%;
`

const CartItem = props => {

    const dispatch = useDispatch()

    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = (opt) => {
        if (opt === '+') {
            dispatch(updateItem({...item, quantity: quantity + 1}))
        }
        if (opt === '-') {
            dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))
        }
    }

    const removeCartItem = () => {
        dispatch(removeItem(item))
    }

    return (
        <Product>
            <ProductDetail>
                <Details>
                    <Image src={item.img} />
                    <NameContainer>
                        <ProductName>{item.title}</ProductName>
                        <RemoteItemCart>
                            <span onClick={() => removeCartItem()}>Remove</span>
                        </RemoteItemCart>
                    </NameContainer>
                    <ColorContainer>
                        <ProductColor color={item.color} />
                    </ColorContainer>
                    <SizeContainer>
                        <ProductSize>{item.size}</ProductSize>
                    </SizeContainer>
                </Details>
                <ProductAmountContainer>
                    <Remove onClick={() => updateQuantity('-')}/>
                    <ProductAmount>{item.quantity}</ProductAmount>
                    <Add onClick={() => updateQuantity('+')}/>
                </ProductAmountContainer>
                <ProductPrice>
                    <CurrencyFormat value={item.price * item.quantity} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </ProductPrice>
            </ProductDetail>
        </Product>
    )
}

export default CartItem
