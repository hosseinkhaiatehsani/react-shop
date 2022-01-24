import styled from "styled-components";


export const SpinnerOverlay = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpinnerContainer = styled.div`
    display: inline-block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid rgba(195, 195, 195, 0.6);
    border-top-color: #636767;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;

    @keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
`;