import React, { Component } from "react";
import { Greeting, Language, Socialmedia } from "../header/translate";
import Nuuvem from "../../media/nuvem.png";
import { AiFillHtml5, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCss3, DiJavascript, DiReact } from "react-icons/di";
import { SiTypescript, SiNodedotjs } from "react-icons/si";
import * as S from "./main.styled";

export default class Main extends Component {
  state = {
    card: [
      {
        image: <AiFillHtml5 />,
      },
      {
        image: <DiCss3 />,
      },
      {
        image: <DiJavascript />,
      },
      {
        image: <DiReact />,
      },
      {
        image: <SiTypescript />,
      },
      {
        image: <SiNodedotjs />,
      },
    ],
    social: [
      {
        image: <AiFillGithub />,
        link: "https://github.com/eduu17",
      },
      {
        image: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/edu-sampaio17/",
      },
    ],
  };
  render() {
    return (
      <>
        <S.container>
          <S.first>
            <S.divider>
              <Greeting />
            </S.divider>
            <S.divider>
              <img src={Nuuvem} alt="Bitmoji em nuvem" />
            </S.divider>
          </S.first>
          <S.second>
            <Language />
            <S.map>
              {this.state.card.map((item) => (
                <div>
                  <p>{item.image}</p>
                </div>
              ))}
            </S.map>
          </S.second>
          <S.terciary>
            <h2>
              <Socialmedia />
            </h2>
            <S.map>
              {this.state.social.map((item) => (
                <div>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <p>{item.image}</p>
                  </a>
                </div>
              ))}
            </S.map>
          </S.terciary>
        </S.container>
      </>
    );
  }
}
