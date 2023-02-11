import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media (max-width: 900px) {
    width: 100%;
  }

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;
