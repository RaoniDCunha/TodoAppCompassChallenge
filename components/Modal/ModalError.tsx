
import {
    ModalBackground,
    ModalDescriptionTitle, ModalErrorDescriptionButton, ModalErrorDescriptionButtonText, ModalErrorDescriptionText,
    ModalErrorDescriptionTitle,
    ModalRow,
    ModalView
} from "@/components/Modal/Modalstyle";
import React, { useState, useEffect } from 'react';
import {
    Image,
    Modal, Text, View

} from 'react-native';
import {colors} from "@/styles/colors";
import {Button} from "@/components/Button/Button";
import {router} from "expo-router";
import {Input} from "@/components/Input/Input";
import {CloseButton} from "@/components/CloseButton/CloseButton";

export const ModalError = ({title,modalvisible}:any) => {
    return (
        <>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalvisible}
            >
                <ModalBackground>
                    <ModalView >
                        <ModalRow style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
                            <ModalErrorDescriptionTitle>ERRO</ModalErrorDescriptionTitle>

                        </ModalRow>
                       <ModalRow>
                           <ModalErrorDescriptionText>Erro ao receber dados da API.</ModalErrorDescriptionText>
                       </ModalRow>
                        <ModalRow>
                            <ModalErrorDescriptionButton>
                                <ModalErrorDescriptionButtonText>Tentar novamente</ModalErrorDescriptionButtonText>
                            </ModalErrorDescriptionButton>
                        </ModalRow>


                    </ModalView>
                </ModalBackground>

            </Modal>
        </>
    )
}
