import styled from 'styled-components/native';
import {fontFamily} from "@/styles/font-family";
import {colors} from "@/styles/colors";

export const ModalBackground = styled.View`
    background-color: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
`;

export const ModalView = styled.View`
    background-color: ${colors.gray["100"]};
    max-height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    
`

export const ModalRow = styled.View`
    display: flex;
    flex-direction: row;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 8px;
    padding-bottom: 40px;
    align-items: center; 
    justify-content: space-between;
    gap: 8px;
    
    
`
export const ModalDescriptionTitle = styled.Text`
    color: ${colors.gray["500"]};
    font-family: ${fontFamily.subtitle};
    font-weight: bold;
    font-size: 14px;
    
`

export const ModalDescriptionText = styled.Text`
    color: ${colors.gray["600"]};
    font-family: ${fontFamily.textMd};
    font-size: 13px;
    
`


export const ModalErrorDescriptionTitle = styled.Text`
    color: ${colors.gray["500"]};
    font-family: ${fontFamily.subtitle};
    font-weight: bold;
    font-size: 14px;
    
`

export const ModalErrorDescriptionButton = styled.TouchableOpacity`
  display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    
`
export const ModalErrorDescriptionButtonText = styled.Text`
    color: ${colors.gray["500"]};
    font-family: ${fontFamily.subtitle};
    font-weight: bold;
    font-size: 14px;
    
`

export const ModalErrorDescriptionText = styled.Text`
    color: ${colors.gray["500"]};
    font-family: ${fontFamily.textMd};
    font-size: 16px;
    
`

