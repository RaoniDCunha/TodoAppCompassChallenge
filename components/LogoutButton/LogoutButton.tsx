import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";
import {TouchableOpacityProps} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import {CloseButtonBox} from "@/components/CloseButton/CloseButtonStyle";
import {Feather} from "@expo/vector-icons";

export const LogoutButton = () => {
    return (
        <>
            <CloseButtonBox>
                <Feather name="log-out" size={24} color={colors.gray["500"]} />
            </CloseButtonBox>
        </>
    );
};
