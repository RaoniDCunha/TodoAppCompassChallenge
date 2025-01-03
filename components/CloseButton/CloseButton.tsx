import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";
import {TouchableOpacityProps} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import {CloseButtonBox} from "@/components/CloseButton/CloseButtonStyle";

interface CloseButtonProps  {
    onClick?: () => void;
}

export const CloseButton = ({onClick}:CloseButtonProps) => {
    return (
        <>
            <CloseButtonBox onPress={onClick}>
                <AntDesign name={'close'} size={24} color={colors.gray["500"]} />
            </CloseButtonBox>
        </>
    );
};
