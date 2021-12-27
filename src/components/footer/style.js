import { Link } from "gatsby";
import styled from "styled-components";


export const Container = styled.div`
background-color: #f72648;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 27vw;
padding: 2rem 2rem 1rem 2rem;
`
export const BoxBtn = styled.div` 
width: 50%;
height: 15%;
display: flex;
justify-content: space-around;
align-items: center;


button{
    width: 25%;
    height: 50%;
    outline: none;
    border: none;
    font-size: 100%;
    font-weight: 700;
    background-color: transparent;
    color: #f2dfdf;
    cursor: pointer;
    &:hover{
        border-radius: 1rem;
        background-color: #f2dfdf;
        color:  #f72648;
        transition: 300ms;

    }
}
`
export const BoxCodes = styled.div` 
width: 60%;
height: 10%;
display: flex;
justify-content: space-around;
align-items: center;

`
export const BtnCodes = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 1rem;
outline: none;
width: 15%;
height: 80%;
background-color: #FCCB3C;
color: #f72648;
font-weight: 700;
`

export const Btn = styled.button`
    width: 15%;
    height: 80%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #f2dfdf;
    font-weight: 700;
    cursor: pointer;
`

export const BoxSocial = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
h3{
    padding: 1rem;
    color: #f2dfdf;
}
`
export const BoxLogos = styled.div` 
display: flex;
justify-content: space-around;
align-items: center;
width: 20%;


div{
    width: 3rem;
    height: 3rem;
    background-color: #FCCB3C;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

img{
    width: 50%;
}
`
export const BoxSignature = styled.div` 
height: 2vw;
display: flex;
justify-content: center;
align-items: center;
color: #f2dfdf;
font-weight: 700;
text-align: center;
img{
    width: 2%;
}
`
export const Signature = styled(Link)`
color: #FCCB3C;

`
