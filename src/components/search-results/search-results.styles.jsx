import styled from "styled-components";

export const SearchResultsContainer = styled.div`
  margin: 0 auto;
  width: 85%;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const SearchResultsTitle = styled.h2`
  font-size: 23px;
  margin: 25px auto 35px auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SearchResultsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 40px;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
  }
`;
