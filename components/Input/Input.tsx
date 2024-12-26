import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";

export const InputView = styled.View`
    background-color: #fff;
    height: 42px;
    width: 100%;
    border: 1px solid ${colors.purple.dark};
    background-color: ${colors.gray["100"]};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const InputText = styled.TextInput`
    background-color: #fff;
    font-family: ${fontFamily.input};
    font-size: 16px;
    color: ${colors.gray["500"]};
    background-color: ${colors.gray["100"]};;

`;


export const Input = () => {
    return (
        <>
            <InputView >
                <InputText placeholder={'Texto aqui'}/>
            </InputView>
        </>
    )
}
