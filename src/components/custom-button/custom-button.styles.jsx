import styled, { css } from "styled-components";

const IsGoogleBtn = css`
    background-color: #4285F4;

    &:hover {
        background-color: #2c78f3;
        color: #fff;
        border: none;
    }
`;

const Inverted = css`
    background-color: #fff;
    color: #111;
    border: 2px solid #111;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

const extraStyles = (props) => {
    if (props.isGoogleBtn) {
        return IsGoogleBtn;
    }

    return props.inverted ? Inverted : ``
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bold;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: #fff;
        color: #111;
        border: 2px solid #111;
    }

    ${extraStyles}
`;