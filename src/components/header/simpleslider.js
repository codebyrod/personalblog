import React from "react";
import Slider from "react-slick";
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as S from "./style"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function SimpleSlider() {

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    };

const data = useStaticQuery(graphql`
  query{
    alldata{
      headers {
        imgSlideBerk {
          url
          }
        imgSlideHarrypotter {
          url
          }
        imgSlideHomeverse {
          url
          }
        imgSlideShoppingCar {
          url
          }
        imgSlideStarwars {
          url
          }
        imgSlideTaxi {
          url
          }
      }
    }
  }
`)

const {imgSlideBerk, imgSlideHarrypotter, imgSlideHomeverse, imgSlideShoppingCar, imgSlideStarwars, imgSlideTaxi} = data.alldata.headers[0]
    
    return (
      <div style={{overflowX: 'hidden'}}>
        <Slider {...settings}>
            <div>
                <S.Slide>
                    <S.BoxTxt>
                        <h3>Projeto Uloax Taxi</h3>
                        <p>Produção de uma landing page, projeto usando Gatsby, GraphCMS, ReactSlick. Desafio realizado no módulo 3 da edtech Vai na Web.</p>
                    </S.BoxTxt>
                    <S.BoxImgSlide>
                        <Link to="/taxi">
                        <img src={imgSlideTaxi.url} />
                        </Link>
                    </S.BoxImgSlide>
                </S.Slide>
            </div>
            <div>
                <S.Slide>
                    <S.BoxTxt>
                        <h3>Projeto Harry Potter</h3>
                        <p>Projeto onstruído com React, nesse projeto usamos consumo de API via axios e  usamos as rotas via Gatsby Link</p>
                    </S.BoxTxt>
                    <S.BoxImgSlide>
                        <Link to="/harrypotter">
                        <img src={imgSlideHarrypotter.url} />
                        </Link>
                    </S.BoxImgSlide>
                </S.Slide>
            </div>
            <div>
                <S.Slide>
                    <S.BoxTxt>
                        <h3>Projeto Shopping Car</h3>
                        <p>Desafio final realizado no módulo 2 da edtech Vai na Web. </p>
                    </S.BoxTxt>
                    <S.BoxImgSlide>
                        <Link to="/shoppingcar">
                        <img src={imgSlideShoppingCar.url} />
                        </Link>
                    </S.BoxImgSlide>
                </S.Slide>
            </div>
            <div>
                <S.Slide>
                    <S.BoxTxt>
                        <h3>Projeto Homeverse</h3>
                        <p>Produção de uma landing page. Desafio realizado no módulo 2 da edtech Vai na Web. O Desafio consistiu em consumir dados a partir de uma API pública.</p>
                    </S.BoxTxt>
                    <S.BoxImgSlide>
                        <Link to="/homeverse">
                        <img src={imgSlideHomeverse.url} />
                        </Link>
                    </S.BoxImgSlide>
                </S.Slide>
            </div>
            <div>
                <S.Slide>
                    <S.BoxTxt>
                        <h3>Projeto Star Wars</h3>
                        <p>Projeto realizado para o desafio final do módulo 1 da edtech Vai na Web.</p>
                    </S.BoxTxt>
                    <S.BoxImgSlide>
                        <Link to="/starwars">
                        <img src={imgSlideStarwars.url} />
                        </Link>
                    </S.BoxImgSlide>
                </S.Slide>
            </div>
            <div>
                <S.Slide>
                    <S.BoxTxt>
                        <h3>Projeto Berk</h3>
                        <p>Projeto com foco na participação de processo seletivo, realizado próximo do final do módulo 1. Um aspecto importante trabalhado foi a responsividade.</p>
                    </S.BoxTxt>
                    <S.BoxImgSlide>
                        <Link to="/berk">
                        <img src={imgSlideBerk.url} />
                        </Link>
                    </S.BoxImgSlide>
                </S.Slide>
            </div>
        </Slider>
      </div>
    );
  }


