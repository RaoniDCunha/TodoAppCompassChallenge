import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";
import {TouchableOpacityProps} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import {Feather} from "@expo/vector-icons";

export const ButtonView = styled.TouchableOpacity`
    background-color: #fff;
    height: 42px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${colors.gray["500"]};
    flex-direction: row;
    gap: 8px;
`;

export const ButtonText = styled.Text`
    font-family: ${fontFamily.input};
    font-size: 16px;
    color: ${colors.gray["100"]};

`;

type ButtonProps = TouchableOpacityProps & {
    isDisabled?: boolean;
}

export const DisabledButton = ({children}:TouchableOpacityProps) => {
    return (
        <>
            <ButtonView disabled={true}>
                {children}
            </ButtonView>
        </>
    )
}

export const Title = ({children}:any) => {
    return (
        <ButtonText>{children}</ButtonText>

    )
}

export const Icon = ({name}:any) => {
    return (
    <Feather name={name} size={24} color="white" />

    )
}


DisabledButton.Title = Title
DisabledButton.Icon = Icon

