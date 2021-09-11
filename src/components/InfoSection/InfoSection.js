import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../theme/GlobalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  ImgWrapper,
} from "./InfoSection.elements";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  topLine,
  primary,
  start,
  img,
  alt,
}) => {
  return (
    <InfoSec lightBg={lightBg}>
      <Container>
        <TextWrapper>
          <InfoColumn>
            <InfoRow justify="flex-start">
              <Img src={img} alt={alt} />

              <InfoRow justify="flex-start">
                <InfoColumn>
                  <TopLine lightTopLine={lightTopLine}>
                    <div dangerouslySetInnerHTML={topLine} />
                  </TopLine>
                  <Heading lightText={lightText}>
                    <div dangerouslySetInnerHTML={headLine} />
                  </Heading>
                </InfoColumn>
              </InfoRow>
            </InfoRow>

            <Subtitle lightTextDesc={lightTextDesc}>
              <div dangerouslySetInnerHTML={description} />
            </Subtitle>
            <Link to="/sign-up">
              <Button label={buttonLabel} big fontBig primary={primary}>
                {buttonLabel}
              </Button>
            </Link>
          </InfoColumn>
        </TextWrapper>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
