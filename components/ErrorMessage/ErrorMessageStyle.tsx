import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";
import {TouchableOpacityProps} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export const ErrorMessageView = styled.View`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: row;
    
`

export const ErrorMessageText = styled.Text`
    font-family: ${fontFamily.textSm};
    font-size: 12px;
    font-weight: 700;
    line-height: 14.4px;
    color: ${colors.red.danger};
    text-align: start;
    
`
