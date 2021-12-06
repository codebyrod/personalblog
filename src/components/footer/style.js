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

}
`
export const BoxCodes = styled.div` 
width: 60%;
height: 10%;
display: flex;
justify-content: space-around;
align-items: center;

button{
    width: 15%;
    height: 80%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #f2dfdf;
    font-weight: 700;
    cursor: pointer;
}
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
    background-color: #f2dfdf;
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
export const BoxAssinature = styled.div` 
color: #f2dfdf;
font-weight: 700;
text-align: center;
img{
    width: 1%;
}
`
