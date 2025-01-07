
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

interface ModalErrorProps {
    title?: string;
    modalvisible?: boolean;
    refreshList: () => void;
    closemodal: () => void;
}


export const ModalError = ({title,modalvisible,refreshList,closemodal}:ModalErrorProps) => {

    const refreshAndCloseModal = () => {
        refreshList();
        closemodal();
    }

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
                            <ModalErrorDescriptionButton onPress={refreshAndCloseModal}>
                                <ModalErrorDescriptionButtonText>Tentar novamente</ModalErrorDescriptionButtonText>
                            </ModalErrorDescriptionButton>
                        </ModalRow>


                    </ModalView>
                </ModalBackground>

            </Modal>
        </>
    )
}
