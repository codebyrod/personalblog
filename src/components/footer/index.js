import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Link } from 'gatsby'
import * as S from "./style"

export function Footer() {

    const data = useStaticQuery(graphql` 
    query{
        alldata{
            footers{
                imgGithub {
                    url
                  }
                  imgInstagram {
                    url
                  }
                  imgLinkedin {
                    url
                  }
                  imgCoracao{
                      url
                  }
            }
        }
    }
    `)

    const {imgGithub, imgInstagram, imgLinkedin, imgCoracao} = data.alldata.footers[0]

    return (
        <S.Container>
            <S.BoxBtn>
                <button>Início</button>
                <button>Codes</button>
                <button>Bio</button>
            </S.BoxBtn>
            <S.BoxCodes>
                <S.BtnCodes to='/taxi'> Uloax Taxi</S.BtnCodes>
                <S.BtnCodes to='/harrypotter'>Harry Potter</S.BtnCodes>
                <S.BtnCodes to='/shoppingcar'>Shopping Car</S.BtnCodes>
                <S.BtnCodes to='/homeverse'>Homeverse</S.BtnCodes>
                <S.BtnCodes to='/starwars'>Star Wars</S.BtnCodes>
                <S.BtnCodes to='/berk'>Berk</S.BtnCodes>
            </S.BoxCodes>
            <S.BoxSocial>
                <h3>Um bora nos conectar?</h3>
                <S.BoxLogos>
                    <Link to='https://www.linkedin.com/in/codebyrod/'>
                    <div>
                        <img src={imgLinkedin.url} />
                    </div>
                    </Link>
                    <Link to='https://github.com/codebyrod'>
                    <div>
                        <img src={imgGithub.url} />
                    </div>
                    </Link>
                    <Link to='https://www.instagram.com/codebyrod/'>
                    <div>
                        <img src={imgInstagram.url} />
                    </div>
                    </Link>
                </S.BoxLogos>
            </S.BoxSocial>
            <S.BoxSignature>
                <p>desenvolvido com <span><img src={imgCoracao.url} /></span> por <S.Signature to ='https://linktr.ee/codebyrod'>@codebyrod</S.Signature></p>
            </S.BoxSignature>
        </S.Container>
    )
}
