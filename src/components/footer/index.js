import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
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
            }
        }
    }
    `)

    const {imgGithub, imgInstagram, imgLinkedin} = data.alldata.footers[0]

    return (
        <S.Container>
            <S.BoxBtn>
                <button>Início</button>
                <button>Codes</button>
                <button>Bio</button>
            </S.BoxBtn>
            <S.BoxCodes>
                <button>Uloax Taxi</button>
                <button>Harry Potter</button>
                <button>Shopping Car</button>
                <button>Homeverse</button>
                <button>Star Wars</button>
                <button>Berk</button>
            </S.BoxCodes>
            <S.BoxSocial>
                <h3>Um bora nos conectar?</h3>
                <S.BoxLogos>
                    <div>
                        <img src={imgLinkedin.url} />
                    </div>
                    <div>
                        <img src={imgGithub.url} />
                    </div>
                    <div>
                        <img src={imgInstagram.url} />
                    </div>
                </S.BoxLogos>
            </S.BoxSocial>
            <S.BoxAssinature>
                <p>desenvolvido com <span><img src="https://imagepng.org/wp-content/uploads/2017/10/coracao.png" /></span> por <span>@codebyrod</span></p>
            </S.BoxAssinature>
        </S.Container>
    )
}
