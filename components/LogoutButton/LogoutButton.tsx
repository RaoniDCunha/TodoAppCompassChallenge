import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";
import {TouchableOpacity, TouchableOpacityProps} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import {CloseButtonBox} from "@/components/CloseButton/CloseButtonStyle";
import {Feather} from "@expo/vector-icons";

interface LogoutButtonProps {
    onpress: () => void;
}

export const LogoutButton = ({onpress}:LogoutButtonProps) => {
    return (
        <>
            <TouchableOpacity onPress={onpress}>
                <CloseButtonBox>
                    <Feather name="log-out" size={24} color={colors.gray["600"]} />
                </CloseButtonBox>
            </TouchableOpacity>

        </>
    );
};
