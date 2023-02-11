import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  @media (max-width: 900px) {
    max-width: 90%;
    gap: 3rem;
    padding-bottom: 2rem;
    flex-direction: column;
  }
`;
