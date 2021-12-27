import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.div`
background-color: azure;
`

export const Box = styled.div` 
background-color: aquamarine;
`

export const ContainerCard = styled.div`
background-color: #f72648;
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
justify-content: center;

&:hover{
    transition: 500ms;
}
`

export const ImgTaxi = styled.img`
width: 80%;
&:hover{
    transition: 500ms;
    width: 90%;
}
`
export const ImgHarryPotter = styled.img`
width: 80%;
&:hover{
    transition: 500ms;
    width: 100%;
}
`
export const imgShoppingCar = styled.img`
width: 40%;
&:hover{
    transition: 500ms;
    width: 50%;
}
`
export const ImgHomeVerse = styled.img`
width: 70%;
&:hover{
    transition: 500ms;
    width: 80%;
}
`
export const ImgStarWars = styled.img`
width: 80%;
&:hover{
    transition: 500ms;
    width: 90%;
}
`
export const ImgBerk = styled.img`
width: 50%;
&:hover{
    transition: 500ms;
    width: 70%;
}
`

export const BoxTop = styled.div`
background: linear-gradient(#f5562f, #FCCB3C );
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
`

export const Btn = styled(Link) `
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
display: flex;
justify-content: center;
align-items: center;

&:hover{
    transition: 800ms;
    background: linear-gradient(#FCCB3C, #f72648);
}
`

export const ContainerBio = styled.div` 
background-color: #FCCB3C;
display: flex;
justify-content: space-around;
align-items: center;
height: 40vw;
padding: 2rem;
`
export const BoxBio = styled.div` 
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 50vw;
padding-left: 2rem;

color:  #f72648 ;
color: #362727;
line-height: 1.4rem;
span{
    font-size: 120%;
    font-weight: 700;

}
`
export const FigureBio = styled.div` 
width: 40vw;
display: flex;
align-items: center;
justify-content: center;
img{
    width: 70%;
}
`