import React from "react";
import { Link } from "react-router-dom";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./Projects.elements";
/*              <ProductInfo>
<ProductTitle>{product.name}</ProductTitle>
<ProductDesc>{product.desc}</ProductDesc>
<ProductPrice>{product.price}</ProductPrice>
<ProductButton>{product.button}</ProductButton>
</ProductInfo>*/
const Project = ({ product, index }) => {
  const [description, showDescription] = React.useState(false);
  function handleClick() {
    showDescription(!description);
  }

  return (
    <ProductCard key={index}>
      {description === false ? (
        <ProductImg
          onClick={handleClick}
          src={product.img}
          alt={product.alt}
          onMouseOver={(e) => {
            product.gif && (e.currentTarget.src = product.gif);
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = product.img;
          }}
        />
      ) : (
        <ProductInfo onClick={handleClick}>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDesc>{product.desc}</ProductDesc>
          <ProductPrice>{product.price}</ProductPrice>
          <a href={product.url} target="_blank">
            <ProductButton>{product.button}</ProductButton>
          </a>
        </ProductInfo>
      )}
    </ProductCard>
  );
};

const Projects = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return <Project index={index} product={product} />;
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Projects;
