import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";

export const InputView = styled.View`
    background-color: #fff;
    height: 42px;
    width: 100%;
    border: 1px solid ${colors.gray["300"]};
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


export const Input = ({title}:any) => {
    return (
        <>
            <InputView >
                <InputText placeholder={title}/>
            </InputView>
        </>
    )
}
