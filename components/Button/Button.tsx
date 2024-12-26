import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";

export const ButtonView = styled.View`
    background-color: #fff;
    height: 42px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${colors.purple.dark};
`;

export const ButtonText = styled.Text`
    font-family: ${fontFamily.input};
    font-size: 16px;
    color: ${colors.gray["100"]};

`;


export const Button = () => {
    return (
        <>
            <ButtonView>
                <ButtonText> Login</ButtonText>
            </ButtonView>
        </>
    )
}
