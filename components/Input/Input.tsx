import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";
import React from "react";

export const InputView = styled.View<Error>`
    background-color: #fff;
    height: 42px;
    width: 100%;
    border: 1px solid ${props => props.error ? colors.red.danger : colors.gray["300"]};
    background-color: ${colors.gray["100"]};
    display: flex;
    align-items: start;
    justify-content: center;
    border-radius: 8px;
    padding-left: 8px;
`;

export const InputText = styled.TextInput`
    background-color: #fff;
    font-family: ${fontFamily.input};
    font-size: 16px;
    color: ${colors.gray["500"]};
    background-color: ${colors.gray["100"]};

`;

interface InputProps {
    title: string;
    visible?: boolean;
    onChangeText?: (text: string) => void;
    error?: boolean;
}

interface Error {
    error?: boolean;
}

export const Input: React.FC<InputProps> = ({ title, visible, onChangeText,error }) => {




    return (
        <>
            <InputView error={error} >
                <InputText placeholder={title} secureTextEntry={visible} onChangeText={onChangeText}   />
            </InputView>
        </>
    )
}
