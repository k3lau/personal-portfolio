import styled from "styled-components";

export const InfoSec = styled.div`
  background: ${({ lightBg }) => (lightBg ? "grey" : "#101522")};
  height: 100vh;
  width: 100%;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(justify) => (justify ? justify : "center")};
  width: 100%;
  padding-bottom: 10px;
  @media screen and (max-width: 480px) {
    flex-flow: column wrap;
    justify-content: center;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  justify-content: ${(justify) => (justify ? justify : "center")};
  flex-flow: column wrap;
  flex: 1;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: -80px;
  height: 100%;

  @media screen and (max-width: 480px) {
    text-align: center;
    margin-top: 0px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
`;

export const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
  p {
    margin-bottom: 10px;
  }
  b {
    font-size: 20px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? "#3ff2ec" : "#1c2237")};
    padding-right: 4px;
    padding-left: 4px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 200px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  border: 0;
  border-radius: 50%;
  padding: 5px 5px;
  margin-right: 20px;
  width: auto;
  height: auto;
  max-width: 100px;
  max-height: 100px;
  @media screen and (max-width: 480px) {
    margin: auto;
  }
`;
