import styled from "styled-components/native";
import {colors} from "@/styles/colors";
import {fontFamily} from "@/styles/theme";



export const TaskInformationView = styled.View`
    background-color: ${colors.gray["100"]};
    height: 4.6875rem;
    width: 100%;
    border: 1px solid ${colors.gray["200"]};
    display: flex;
    align-items: center;
    justify-content: start;
    border-radius: 8px;
    flex-direction: row;
    padding: 0.75rem ;
    gap: 6px;
`;


export const TaskViewText = styled.Text`
    color: ${colors.gray["600"]};
    font-family: ${fontFamily.textSm};
    
`;
