import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import { Link } from 'gatsby'
import { SimpleSlider } from './simpleslider'

export function Header() {

    const data = useStaticQuery(graphql`
    query{
        alldata{
            headers{
                btnbio
                btncodigos
                btncontato
                imgLogo {
                url
                }
                imgSlide1 {
                url
                }
                imgSlide2 {
                url
                }
                imgSlide3 {
                url
                }
            }
        }
    }
`)

    const {btnbio, btncodigos, btncontato, imgLogo} = data.alldata.headers[0]
    
    return (
        <S.Container>
            <S.Box>
                <S.BoxImg>
                    <Link to="/">
                    <img src={imgLogo.url} />
                    </Link>
                </S.BoxImg>
                <S.BoxBtn>
                    <button>{btncodigos}</button>
                    <button>{btnbio}</button>
                    <button>{btncontato}</button>
                </S.BoxBtn>
                {/* <S.BoxNoturnMode>
                    <button>MN</button>
                </S.BoxNoturnMode> */}
            </S.Box>
            <SimpleSlider />
        </S.Container>
    )
}