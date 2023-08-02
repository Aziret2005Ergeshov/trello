import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const MainPage = () => {
        const StyledLink ={
                display: 'flex',
                marginLeft: '90.50%',
                marginTop: '-25.50%',
                backgroundColor: 'blue',
                width: '6%',
                height: '40px',
                border: '1px solid blue',
                borderRadius: '5px',
                padding: '7px 23px',
                color: 'black',
                textDecoration: 'none',
                fontSize: '18px'

        }
        return (
                <div>

                        <Img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png" alt="" />
                        <Img2 src="https://img.icons8.com/?size=1x&id=21049&format=png" alt="" />
                        <H2>Trello</H2>
                        <H1>Trello помогает командам эффективно решать рабочие задача.</H1>
                        <P>Работайте в команде, управляйте проектами и выводите продуктивность на новый уровень собственным уникальным способом вместе с Trello.</P>

                        <Link style={StyledLink}  to="/login">Login</Link>

                </div>
        );
};

export default MainPage;


const Img = styled.img`

        height: 570px;
        margin-top: 90px;
        margin-left: 900px;

`

const Img2 = styled.img`

        display: flex;
        margin-top: -640px;
        margin-left: 20px;

`

const H2 = styled.h2`

        display: flex;
        margin-top: -45px;
        margin-left: 70px;
        font-size: 32px;

`

const H1 = styled.h1`
    
        display: flex;
        width: 500px;
        margin-left: 330px;
        margin-top: 150px;

`

const P = styled.p`
    
        display: flex;
        width: 500px;
        margin-left: 330px;
        margin-top: 20px;

`
