import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  column-gap: 0.5rem;
  row-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SeeMore = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
