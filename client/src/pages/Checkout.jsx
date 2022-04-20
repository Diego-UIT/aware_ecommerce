import { useState, useEffect } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { userRequest } from "../requestMethods"
import Swal from 'sweetalert2'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://img.freepik.com/free-photo/young-female-cashier-scanning-grocery-items_171337-2419.jpg?t=st=1650356235~exp=1650356835~hmac=2f0f12f3183455ad396373704f51a10e6f2be74ad2e3d1c7fc61344d82f628a2&w=996")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 50px;
    background-color: #fff;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: #ffa15f;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 60px;
    margin-top: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &:disabled {
        color: #ffa15f;
        cursor: not-allowed;
    }
`;

const Checkout = () => {
    const [address, setAddress] = useState('')
    const currentUser = useSelector((state) => state.user.currentUser)
    const carts = useSelector((state) => state.cart.value)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(carts.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
    }, [carts])

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const createOrder = async () => {
            try {
                await userRequest.post("/orders", {
                    userId: currentUser._id,
                    products: carts.map((item) => ({
                    productId: item._id,
                    quantity: item._quantity,
                    })),
                    amount: totalPrice,
                    address: address
                });
            } catch {}
          }
        createOrder()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your order has been successfully placed!',
            showConfirmButton: false,
            timer: 1500
        })
        localStorage.removeItem('cartItems')
        localStorage.removeItem('persist:root')
        navigate('/')
    }

    return (
        <Container>
            <Wrapper>
                <Title>Checkout</Title>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button>Checkout</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Checkout;
