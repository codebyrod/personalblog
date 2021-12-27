import React from 'react'
import { graphql, useStaticQuery, Link} from 'gatsby'
import { Bio } from './bio'
import * as S from './style'

export function Main() {
    const data = useStaticQuery(graphql`
    query{
        alldata{
            mains{
                imgBio{
                    url
                }
                imgBerk {
                    url
                }
                imgHarryPotter {
                    url
                }
                imgHomeverse {
                    url
                }
                imgShoppingCar {
                    url
                }
                imgStarWars {
                    url
                }
                imgTaxi {
                    url
                }
                titleTaxi
                txtBio
                txtTaxi
            }
        }
    }
    `)

    const {
    imgBerk,
    imgHarryPotter,
    imgHomeverse,
    imgShoppingCar,
    imgStarWars,
    imgTaxi,
    titleTaxi,
    txtTaxi} = data.alldata.mains[0]
 

   
    return (
        <S.Container>
            <S.ContainerCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>{titleTaxi}</h4>
                            <p>{txtTaxi}</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            {/* <Link to='https://competent-payne-72fcf9.netlify.app/'> */}
                            <S.ImgTaxi src={imgTaxi.url}/>
                           {/*  </Link> */}
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <S.Btn to='/taxi'>Mais Detalhes</S.Btn>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>Harry Potter</h4>
                            <p>{txtTaxi}</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            <S.ImgHarryPotter src={imgHarryPotter.url} />
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <S.Btn to='/harrypotter'>Mais Detalhes</S.Btn>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>Shopping Car</h4>
                            <p>{txtTaxi}</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            <S.imgShoppingCar src={imgShoppingCar.url} />
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <S.Btn to='/shoppingcar'>Mais Detalhes</S.Btn>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>HomeVerse</h4>
                            <p>{txtTaxi}</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            <S.ImgHomeVerse src={imgHomeverse.url} />
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <S.Btn to='/homeverse'>Mais Detalhes</S.Btn>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>Star Wars</h4>
                            <p>{txtTaxi}</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            <S.ImgStarWars src={imgStarWars.url} />
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <S.Btn to='/starwars'>Mais Detalhes</S.Btn>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>Berk</h4>
                            <p>{txtTaxi}</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            <S.ImgBerk src={imgBerk.url} />
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <S.Btn to='/berk'>Mais Detalhes</S.Btn>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            </S.ContainerCard>
            <Bio />
           {/* <S.ContainerBio>
                <S.BoxBio>
                    <p>{txtBio}</p>
                </S.BoxBio>
                <S.FigureBio>
                    <img src={imgBio.url} />
                </S.FigureBio>
            </S.ContainerBio> */}
        </S.Container>
    ) 
}
