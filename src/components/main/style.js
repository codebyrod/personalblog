import styled from "styled-components";

export const Container = styled.div`
background-color: azure;
`

export const Box = styled.div` 
background-color: aquamarine;
`

export const ContainerCard = styled.div`
background-color: #f5e9e9;
display: flex;
justify-content: center;
flex-wrap: wrap;
`
export const BoxCard = styled.div` 
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
padding: 2.5rem;
`

export const Card = styled.div`
width: 20vw;
height: 30vw;
`

export const BoxTxt = styled.div` 
height: 42%;
display: flex;
flex-direction: column;
justify-content: center;
padding: 1.5rem;
color: #f2dfdf;

h4{
    font-size: 140%;
    font-weight: 700;
}
p{
    padding-top: 0.5rem;
    font-size: 80%;
}
`

export const BoxImg = styled.div` 
height: 54%;
display: flex;
align-items: center;
justify-content: flex-start;
padding-left: 5%;

&:hover{
    justify-content: flex-start;
    transition: 500ms;
}

img{
    width: 90%;
    
    &:hover{
        width: 114%;
        transition: 200ms;
    }

}
`

export const BoxTop = styled.div`
background: linear-gradient(#f72648, #FCCB3C );
height: 75%;
border-radius: 1.5rem 1.5rem 0 0;
`

export const BoxButton = styled.div` 
background-color: #fac69d;
height: 25%;
border-radius: 0 0  1.5rem 1.5rem;
display: flex;
justify-content: center;
align-items: center;

button{
    border: none;
    outline: none;
    border-radius: 2rem;
    background: linear-gradient(#f72648, #FCCB3C);
    color: #f2dfdf;
    width: 60%;
    height: 40%;
    font-size: 100%;
    font-weight: 700;
    letter-spacing: 0.1rem;

    &:hover{
        transition: 800ms;
        background: linear-gradient(#FCCB3C, #f72648);
        
    }
}
`