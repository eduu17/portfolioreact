import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  gap: 20px;
  max-width: 1440px;
`;

export const first = styled.section`
  display: flex;
  align-items: center;
`;

export const divider = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1,
  h2 {
    font-size: min(2rem, 5vw);
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #612f74;
  }
  h2 {
    font-size: min(1.5rem, 5vw);
  }
  h1 strong,
  h2 strong {
    font-weight: 700;
    text-transform: uppercase;
    color: #03bb85;
  }
`;

export const second = styled.section`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  h2 {
    width: 35%;
    font-size: min(2rem, 4vw);
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #612f74;
  }
  h2 strong {
    color: #03bb85;
    text-transform: uppercase;
  }
`;

export const map = styled.div`
  width: 25%;
  display: flex;
  flex-wrap: wrap;
  p {
    font-size: min(8rem, 11vw);
  }
  a {
    color: #ccc;
  }
  a:hover {
    color: #fff;
    transition: 1s;
  }
`;

export const terciary = styled.section`
  display: flex;
  align-items: center;
  h2 {
    font-size: min(2rem, 4vw);
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #612f74;
  }
  h2 strong {
    color: #03bb85;
    text-transform: uppercase;
  }
`;
