import styled from "styled-components/native";
import {colors} from "@/styles/colors";
import {fontFamily} from "@/styles/theme";


export const EmptyTasksView = styled.View`
    height: 185px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    border-top-color: ${colors.gray["300"]};
    border-top-style: solid;
    border-top-width: 1px;
    
`;


export const EmptyTaksMainText = styled.Text`
    color: ${colors.gray["500"]};
    font-family: ${fontFamily.subtitle};
    font-weight: 600;
    font-size: 14px;
`;



export const EmptyTaksSecondaryText = styled.Text`
    color: ${colors.gray["500"]};
    font-family: ${fontFamily.textSm};
    font-weight: 400;
    
`;
