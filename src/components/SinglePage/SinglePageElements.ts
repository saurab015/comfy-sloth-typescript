import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";

export const SinglePageMain = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  max-width: 124rem;
  margin: 0 auto;
  padding: 3rem;
  padding-bottom: 10rem;
  font-weight: 500;

  @media screen and (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
  }
`;

export const BackToProdbtn = styled(Link)`
  background-color: rgb(83, 20, 16);
  padding: 0.75rem 1rem;
  color: #fff;
  border: 1px solid transparent;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 3px;
  display: inline-block;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #fff;
    color: rgb(83, 20, 16);
    border: 1px solid rgb(83, 20, 16);
  }
`;

export const SinglePageImg = styled.article``;

export const ProductName = styled.h1`
  text-transform: capitalize;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  display: inline-block;
`;

export const SinglePageText = styled.article`
  li {
    font-size: 1.7rem;
    font-weight: 600;
    margin: 1.5rem 0;
    text-transform: capitalize;
  }

  span {
    font-weight: 500;
    margin-left: 6rem;
    display: inline-block;
  }
`;
export const SinglePageH1 = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
`;
export const Star = styled(BsStar)`
  color: #ffb900;
  width: 2rem;
  height: 2rem;
`;
export const StarFill = styled(BsStarFill)`
  color: #ffb900;
  width: 2rem;
  height: 2rem;
`;

export const StarHalf = styled(BsStarHalf)`
  color: #ffb900;
  width: 2rem;
  height: 2rem;
`;
export const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  p {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }
`;
export const Price = styled.p`
  font-weight: 600;
  margin: 1rem 0;
  font-size: 1.6rem;
  letter-spacing: 1px;
`;
export const Description = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;
export const Available = styled.div`
  display: flex;
  flex-direction: column;
`;
