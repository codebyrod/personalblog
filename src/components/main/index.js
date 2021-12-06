import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export function Main() {
    const data = useStaticQuery(graphql`
    query{
        alldata{
            mains{
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
                imgToDoHooks {
                    url
                }
                titleTaxi
                txtTaxi
            }
        }
    }
    `)

    const {imgBerk,
    imgHarryPotter,
    imgHomeverse,
    imgShoppingCar,
    imgStarWars,
    imgTaxi,
    imgToDoHooks,
    titleTaxi,
    txtTaxi} = data.alldata.mains[0]

    return (
        <S.Container>
            <S.Box>
                <p>Div de texto</p>
            </S.Box>
            <S.ContainerCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>{titleTaxi}</h4>
                            <p>{txtTaxi}</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            <img src={imgTaxi.url} />
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <button>Ver Mais</button>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>Harry Potter</h4>
                            <p>Para o projeto usamos GraphCms, Gatsby, Graphql, Styled Components, React, consumo de API’s.</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            <img src={imgHarryPotter.url} />
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <button>Ver Mais</button>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>Shopping Car</h4>
                            <p>Para o projeto usamos props dentro de Styled Components, React e Consumo de API's.</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            <img src={imgShoppingCar.url} />
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <button>Ver Mais</button>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>Homeverse</h4>
                            <p>Para o projeto usamos props em Styled Components, React e Consumo de API’s.</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            <img src={imgHomeverse.url} />
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <button>Ver Mais</button>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>Star Wars</h4>
                            <p>Projeto em HTML e CSS. Estudando Position, Z-index, Hover e Responsividade.</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            <img src={imgStarWars.url} />
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <button>Ver Mais</button>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            <S.BoxCard>
                <S.Card>
                    <S.BoxTop>
                        <S.BoxTxt>
                            <h4>Berk</h4>
                            <p>Projeto em HTML e CSS. Estudando Display Flex, Hover e Responsividade.</p>
                        </S.BoxTxt>
                        <S.BoxImg>
                            <img src={imgBerk.url} />
                        </S.BoxImg>
                    </S.BoxTop>
                    <S.BoxButton>
                        <button>Ver Mais</button>
                    </S.BoxButton>
                </S.Card>
            </S.BoxCard>
            </S.ContainerCard>
        </S.Container>
    )
}
