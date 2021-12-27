import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style' 

export function Bio() {
const data = useStaticQuery(graphql`
query{
    alldata{
        mains{
            imgBio{
                url
            }
            txtBio
        }
    }
}
`)

const {
    imgBio,
    txtBio} = data.alldata.mains[0]

    return (
        <div>
            <S.ContainerBio>
                <S.BoxBio>
                    <p>{txtBio}</p>
                </S.BoxBio>
                <S.FigureBio>
                    <img src={imgBio.url} />
                </S.FigureBio>
            </S.ContainerBio>
        </div>
    )
}
