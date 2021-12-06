import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

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

    const {btnbio, btncodigos, btncontato, imgLogo, imgSlide1, imgSlide2, imgSlide3} = data.alldata.headers[0]
    return (
        <S.Container>
            <S.Box>
                <S.BoxImg>
                    <img src={imgLogo.url} />
                </S.BoxImg>
                <S.BoxBtn>
                    <button>{btncodigos}</button>
                    <button>{btnbio}</button>
                    <button>{btncontato}</button>
                </S.BoxBtn>
                <S.BoxNoturnMode>
                    <button>MN</button>
                </S.BoxNoturnMode>
            </S.Box>
                <S.BoxSlide>
                    <h3>slide</h3>
                </S.BoxSlide>
        </S.Container>
    )
}