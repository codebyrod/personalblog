import styled from "styled-components";

export const Container = styled.div` 

`

export const Box = styled.div`
display: flex;
background-color: #f72648;
`

export const BoxImg = styled.figure` 
width: 47vw;
padding-left: 2rem;

img{
    padding: 0.3rem;
    width: 15%;
}
`

export const BoxBtn = styled.div` 
width: 47vw;
display: flex;
justify-content: space-around;
align-items: center;

button{
    width: 25%;
    height: 40%;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #FFB102;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    color: #FFFFFF;

    &:hover{
        background-color: #FFFFFF;
        transition: 200ms;
        letter-spacing: 0.3rem;
        color: #545454;
    }
}
`

export const BoxNoturnMode = styled.div`
width: 7vw;
display: flex;
align-items: center;
justify-content: center;

button{
    width: 40%;
    height: 40%;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background-color: #FFB102;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    color: #FFFFFF;
    &:hover{
        background-color: #335577;
        transition: 200ms;
    }
}
`

export const BoxSlide = styled.div`
height: 30vw;
background-color: #D3FFCE;

`

