import React from 'react';
import styled from 'styled-components'
import { useState } from 'react';


const EmailPassword = () => {
        const [value, setValue] = useState('')
        const [open, setOpen] = useState(false)

        const openHandler = () => {
                setOpen((prevOpen) => !prevOpen);
        }
        const inputHandler = (e) => {
                setValue(e.target.value)
        }
        const clickHandler = (e) => {
                e.preventDefault()
                const list = {
                        id: Math.random().toString(),
                        value: value
                }
                console.log(list);
        }


        const [values, setValues] = useState();
        const [todo, setTodo] = useState([]);
        const handleClick = () => {
                if (values !== "" && todo !== "") {
                        setTodo([...todo, values]);
                }
        }


        return (
                <>
                        <Container>

                                <Div2>

                                        <Div1>
                                                <Img1 src="https://img.icons8.com/?size=512&id=VnAs16Q9VvJP&format=png" alt="" />
                                                <H2>Boards</H2>
                                        </Div1>

                                        <Div3>
                                                <Img2 src="https://img.icons8.com/?size=1x&id=ObuWtTlsoTj6&format=png" alt="" />
                                        </Div3>

                                        <Div4>
                                                <Img3 src="https://img.icons8.com/?size=512&id=VnAs16Q9VvJP&format=png" alt="" />
                                                <H1>Trello</H1>
                                        </Div4>

                                        <Div5>
                                                <Img4 src="https://img.icons8.com/?size=512&id=zZ0v36WZj1qj&format=png" alt="" />
                                        </Div5>

                                        <Div6>
                                                <Img5 src="https://avatars.mds.yandex.net/i?id=aab0d5262d20d2a66d88a6247a26eb82d7d0bb17-9226866-images-thumbs&n=13" alt="" />
                                                <Name>Aziret Ergeshov</Name>
                                        </Div6>

                                        <div>
                                                <Img6 src="https://avatars.mds.yandex.net/i?id=52b7a5ab5013051e94df76d347dad1cb074b5c73-9067973-images-thumbs&n=13https://avatars.mds.yandex.net/i?id=52b7a5ab5013051e94df76d347dad1cb074b5c73-9067973-images-thumbs&n=13" alt="" />
                                        </div>

                                </Div2>



                                <div>

                                        {!open && <div>
                                                <Divbtn onClick={openHandler}>+ Добавьте ещё одну колонку</Divbtn>
                                        </div>}

                                        {open &&
                                                <div onSubmit={clickHandler}>
                                                        <in value={value} onChange={inputHandler} placeholder='Ввести заголовок списка' /><br />
                                                        <Div7>
                                                                <Input2 onChange={(e) => setValues(e.target.value)} value={values} type="text" placeholder='Ввессти заголок списка' />
                                                                <Btn onClick={handleClick}>Добавить список</Btn>
                                                                <Logy onClick={openHandler} src='https://img.icons8.com/?size=1x&id=FWpoGgZY6IsM&format=png' ></Logy>
                                                        </Div7>
                                                        <Containerdiv>
                                                                <Divinp>
                                                                        <Backgroundinput>

                                                                                {todo.map((todos) => (
                                                                                        <Li>{todos}</Li>
                                                                                ))}

                                                                        </Backgroundinput>

                                                                </Divinp>
                                                        </Containerdiv>

                                                </div>}


                                </div>



                        </Container>

                </>
        );
};

export default EmailPassword;

const Li = styled.li`
        
        list-style: none;

`

const Containerdiv = styled.div`
        
        margin-left: 10px;

`
const Backgroundinput = styled.div`

        background-color: white;
        padding: 10px 30px;


`
const Divinp = styled.div`
        
        background-color: #3e3636;
        width: 320px;
        padding: 20px 20px;
        border-radius: 5px;

`

const Divbtn = styled.div`
        
        background-color: rgba(164, 179, 208, 0.5);
        width: 300px;
        height: 40px;
        margin-left: 10px;
        margin-top: 10px;
        padding: 8px 15px;
        border-radius: 5px;
        color: white;

`
const Logy = styled.img`

        width: 30px;
        height: 30px;
        margin-left: 175px;
        margin-top: -33px;
        display: flex;

`
const Div7 = styled.div`
        
        margin-left: 10px;
        background-color: white;
        width: 300px;
        height: 100px;  

`
const Btn = styled.button`

        padding: 10px 20px;
        margin-left: 10px;
        display: flex;
        margin-top: 10px;

`
const Input2 = styled.input`
        
        /* display: flex; */
        padding: 10px 40px;
        border: 2px solid black;
        margin-left: 10px;
        margin-top: 5px;

`






const Button1 = styled.button`
                
                width: 235px;
                height: 35px;

        `



const Img6 = styled.img`

        width: 60px;
        height: 60px;
        margin-top: 20px;
        border-radius: 5px;
        margin-left: 30px;

`

const Div6 = styled.div`

        display: flex;
        background-color: rgba(80, 119, 196, 0.5);
        margin-top: 18px;
        margin-left: 3%;
        width: 20%;
        height: 60px;

`
const Img5 = styled.img`

        width: 50px;
        height: 50px;
        margin-top: 5px;
        margin-left: 3px;
        border-radius: 5px;

`
const Name = styled.h1`

        text-shadow: 5px 8px 4px black; 
        color: white;
        font-size: 30px;
        padding: 5px 10px;

`

const Div5 = styled.div`

        background-color: rgba(80, 119, 196, 0.5);
        width: 70px;
        height: 70px;
        margin-left: 10%;
        padding: 10px 10px;
        margin-top: 13px;
        border-radius: 5px;

`
const Img4 = styled.img`

        width: 50px;
        height: 50px;

`

const Div4 = styled.div`

        display: flex;
        margin-top: 20px;
        margin-left: 13%

`
const Img3 = styled.img`

        width: 50px;
        height: 50px;

`
const H1 = styled.h1`
    
        font-family: italic;
        text-shadow: 5px 8px 4px black; 
        margin-left: 10px;
        color: white;
        margin-top: 5px

`

const Div3 = styled.div`
    
        background-color: rgba(80, 119, 196, 0.5);
        margin-top: 15px;
        margin-left: 20px;
        width: 20%;
        height: 65px;
        border-radius: 5px;

`
const Img2 = styled.img`
    
        width: 50px;
        height: 50px;
        margin-left: 80%;
        margin-top: 8px;

`

const Div2 = styled.div`
    
        background-color: #0e0e8f;
        height: 100px;
        display: flex;

`

const Div1 = styled.div`

        display: flex;
        background-color: rgba(80, 119, 196, 0.5);
        width: 140px;
        height: 70px;
        margin-left: 20px;
        margin-top: 12px;
        border-radius: 5px;

`
const Img1 = styled.img`
    
        width: 40px;
        height: 45px;
        margin-top: 10px;
        margin-left: 10px;
        color: blue;

`
const H2 = styled.h2`
    
        margin-left: 4px;
        margin-top: 13px;
        color: white;

`

const Container = styled.div`
    
        background-color: blue;
        width: 100%;
        height: 100vh;

`       