import React from 'react'
import { useSelector } from "react-redux"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 25px 50px;
    height: 75vh;
`
const InfoContainer = styled.div`
    width: 400px;
    height: 150px;
    padding: 30px;
    background-color: #f9f9f9;
    
`
const Info = styled.div`
    margin-bottom: 30px;
`
const Text = styled.p`
    & b {
        font-weight: 600;
    }
    margin-bottom: 10px;
`
const Title = styled.h1`
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 10px;
`

const Profile = () => {
    const user = useSelector(state => state.user.currentUser)

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>My Account</Title>
                <InfoContainer>
                    <Info>
                        <Text><b>Name</b></Text>
                        <Text>{user.username}</Text>
                    </Info>
                    <Info>
                        <Text><b>Email</b></Text>
                        <Text>{user.email}</Text>
                    </Info>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>        
    )
}

export default Profile