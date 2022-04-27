import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateItem, removeItem } from '../redux/cartReducer'
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import CurrencyFormat from 'react-currency-format';

const Product = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
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
`;

const ProductPrice = styled.div`
    font-size: 25px;
    font-weight: 600;
    margin-top: 10px;
`;

const RemoteItemCart = styled.div`
    margin-top: 30px;
    & span {
        cursor: pointer;
    }

    & span:hover {
        color: #f63f45;
    }
`

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
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
                <Image src={item.img} />
                <Details>
                    <NameContainer>
                        <ProductName>
                            {item.title}
                        </ProductName>
                        <RemoteItemCart>
                            <span onClick={() => removeCartItem()}>Remove</span>
                        </RemoteItemCart>
                    </NameContainer>
                    <ProductColor color={item.color} />
                    <ProductSize>
                        <b>Size:</b> {item.size}
                    </ProductSize>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                    <Remove onClick={() => updateQuantity('-')}/>
                    <ProductAmount>{item.quantity}</ProductAmount>
                    <Add onClick={() => updateQuantity('+')}/>
                </ProductAmountContainer>
                <ProductPrice>
                    <CurrencyFormat value={item.price * item.quantity} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </ProductPrice>
            </PriceDetail>
        </Product>
    )
}

export default CartItem
