import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";
import {TouchableOpacityProps} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import {CloseButtonBox} from "@/components/CloseButton/CloseButtonStyle";
import {Feather} from "@expo/vector-icons";
import {ErrorMessageText, ErrorMessageView} from "@/components/ErrorMessage/ErrorMessageStyle";


interface ErrorMessageProps {
    text: string;
}

export const ErrorMessage = ({text}:ErrorMessageProps) => {
    return (
        <>
        <ErrorMessageView>
            <ErrorMessageText>{text}</ErrorMessageText>
        </ErrorMessageView>
        </>
    );
};
