import React, { useState } from 'react';
import styled from 'styled-components'
import BackgorundImg from '../img.photo/photo_2023-07-16_16-50-13.jpg'
import { Link, useNavigate, } from 'react-router-dom';
import validation from './Validation'


const LoginPage = () => {

        const onClick = () => console.log("clicked");

        const onKeyPress = e => {
          const enterOrSpace =
            e.key === "Enter" ||
            e.key === " " ||
            e.key === "Spacebar" ||
            e.which === 13 ||
            e.which === 32;
          if (enterOrSpace) {
            e.preventDefault();
            onClick(e);
          }
        };


const navigate = useNavigate()
        const [values, setValues] = useState({
                email: 'aziret@gmail.com',
                password: '12345678'
        })

        const [errors, setErrors,] = useState(null)

        const handleInput = (e) => {
                setValues({ ...values, [e.target.name]: [e.target.value] })
        }

        function handleValidation(e) {
                e.preventDefault()
                // console.log(values);
                setErrors(validation(values))
                if(errors){
navigate('/title')
                }
        }

        const StyledLink = {
                display: 'flex',
                background: 'green',
                width: '255px',
                height: '30px',
                marginLeft: '70px',
                marginTop: '25px',
                padding: '1px 100px',
                textDecoration: 'none',
                fontSize: '20px',
        }

        return (
                <Container >



                        <Divimg>
                                <img src="https://img.icons8.com/?size=1x&id=21049&format=png" alt="" />
                                <h1>Trello</h1>
                        </Divimg>
                        <Card>
                                <Div>
                                        <P2>Вход в Trello</P2>

                                        <div>
                                                <form onSubmit={handleValidation}>
                                                        <label htmlFor="email"></label>
                                                        <Input1
                                                                type="email"
                                                                placeholder='Укажите адрес электронный почты'
                                                                onChange={handleInput}
                                                                name="email"
                                                        />

                                                        {errors && <p style={{color: 'red'}}>{errors.email}</p>}

                                                        <label htmlFor="password"></label>
                                                        <Input2
                                                                type="password"
                                                                placeholder='Введите пароль'
                                                                onChange={handleInput}
                                                                name="password"
                                                        />

                                                        {errors && <p style={{color: 'red'}}>{errors.password}</p>}


                                                        <div>
                                                                <Link onClick={handleValidation} style={StyledLink} to="/title">Войти</Link>
                                                        </div>
                                                </form>

                                                <P3>ИЛИ</P3>


                                                <Sayt1 href="https://www.google.kg/"><Img1 src='https://img.icons8.com/?size=1x&id=17949&format=png' />Войти через Google</Sayt1>
                                                <Sayt2 href=" http://microsoft.com/"><Img2 src='https://img.icons8.com/?size=1x&id=22989&format=png' />Войти через Microsoft</Sayt2>
                                                <Sayt3 href="https://www.apple.com/"><Img3 src='https://img.icons8.com/?size=1x&id=30840&format=png' />Войти через Apple</Sayt3>
                                                <Sayt4 href="">Вход с помощью SSO</Sayt4>
                                                <Hr />
                                                <Sayt5 href="">Не удается войти? Зарегистрировать акаунт</Sayt5>

                                        </div>

                                </Div>

                        </Card>
                </Container>
        );
};

export default LoginPage;
const Container = styled.div`
        background-image: url(${BackgorundImg});
        width: 100%;
        height: 94.50vh;
        background-size: cover;
        

`
const Divimg = styled.div`

        display: flex;
        margin-left: 45%;
        margin-top: 40px;

`
const Card = styled.div`
        display: flex;
        justify-content: center;

`
const Div = styled.div`

        border: 1px solid black;
        width: 400px;
        height: 550px;

`
const P2 = styled.p`

        text-align: center;
        font-size: 17px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #6e6e6e;
        margin-top: 40px;
        

`
const Input1 = styled.input`
    
        width: 255px;
        height: 30px;
        margin-left: 70px;
        margin-top: 40px;

`
const Input2 = styled.input`
    
        width: 255px;
        height: 30px;
        margin-left: 70px;
        margin-top: 25px;
    
`

const P3 = styled.p`
    
        font-family: 'Courier New', Courier, monospace;
        font-size: 20px;
        text-align: center;
    
`
const Sayt1 = styled.a`

        display: flex;
        justify-content: center;
        width: 255px;
        margin-left: 73px;
        border: 1px solid black;
        font-size: 18px;
        height: 30px;
        text-decoration: none;
        margin-top: 8%;

`
const Sayt2 = styled.a`
        
        display: flex;
        justify-content: center;
        width: 255px;
        margin-left: 73px;
        border: 1px solid black;
        margin-top: 10px;
        height: 30px;
        font-size: 18px;
        text-decoration: none;
`
const Sayt3 = styled.a`
        
        display: flex;
        justify-content: center;
        width: 255px;
        margin-left: 73px;
        border: 1px solid black;
        height: 30px;
        margin-top: 10px;
        font-size: 18px;
        text-decoration: none;

`
const Sayt4 = styled.a`

        display: flex;
        justify-content: center;
        text-decoration: none;

`
const Hr = styled.hr`

        width: 300px;
        height: 2px;
        margin-left: 50px;
        margin-top: 5px;

`
const Sayt5 = styled.a`

        display: flex;
        justify-content: center;
        text-decoration: none;
        margin-top: 5px;

`
const Img1 = styled.img`

        margin-right: 10px;

`
const Img2 = styled.img`

        margin-right: 10px;

`
const Img3 = styled.img`
        
        margin-right: 10px;

`
