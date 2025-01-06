import styled from "styled-components/native";
import {colors} from "@/styles/colors";
import {fontFamily} from "@/styles/theme";

type ColorType = 'green' | 'purple';

interface TaskInformationCountViewProps {
    color?: ColorType;
}

export const TaskInformationView = styled.View`
    height: 1.375rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 8px;
    flex-direction: row;
    padding: 0.75rem ;
    gap: 6px;
    margin-bottom: 12px;
    
`;


export const TaskInformationText = styled.Text`
    color: ${colors.gray["500"]};
    font-family: ${fontFamily.textSm};
    font-weight: 700;
    font-size: 15px;
`;

export const TaskInformationCountView = styled.View<TaskInformationCountViewProps>`
    background-color: ${({ color }) => color === 'green' ? colors.green.light : colors.purple.light};
    max-width: 30px;
    border: 1px solid ${colors.gray["200"]};
    display: flex;
    align-items: center;
    justify-content: start;
    border-radius: 8px;
    flex-direction: row;
    padding: 0.75rem ;
    gap: 6px;
`;

export const TaskInformationCountText = styled.Text<TaskInformationCountViewProps>`
    color: ${({ color }) => color === 'green' ? colors.green.dark : colors.purple.dark};
    font-family: ${fontFamily.subtitle};
    font-weight: 700;
    
`;
