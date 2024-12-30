import styled from "styled-components/native";
import {colors} from "@/styles/colors";
import {fontFamily} from "@/styles/theme";



export const TaskView = styled.View`
    background-color: ${colors.gray["100"]};
    height: 4.6875rem;
    width: 100%;
    border: 1px solid ${colors.gray["200"]};
    display: flex;
    align-items: start;
    justify-content: center;
    border-radius: 8px;
    flex-direction: row;
    padding: 12px ;
    gap: 10px;
`;

export const TaskViewCircle = styled.View`
    background-color: ${colors.gray["300"]};
    height: 22px;
    width: 22px;
    border: 1px solid ${colors.purple.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-direction: row;
    
`;

export const TaskViewTextContainer = styled.Text`
    width: 243px;
    
    
`;

export const TaskViewText = styled.Text`
    color: ${colors.gray["600"]};
    font-family: ${fontFamily.textSm};
    
    
`;
