import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";
import {TouchableOpacityProps} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export const ButtonView = styled.TouchableOpacity`
    background-color: #fff;
    height: 42px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${colors.purple.dark};
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

export const Button = ({onPress,children}:TouchableOpacityProps) => {
    return (
        <>
            <ButtonView onPress={onPress}>
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
        <AntDesign name={name} size={24} color="white" />

    )
}


Button.Title = Title
Button.Icon = Icon

