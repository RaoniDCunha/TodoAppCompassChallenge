
import {
    ModalBackground,
    ModalDescriptionText,
    ModalDescriptionTitle,
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

interface ModalEditTaskProps {
    title?: string;
    modalvisible?: boolean;
    onClick?: () => void;
}

export const ModalEdit = ({title,modalvisible,onClick}:ModalEditTaskProps) => {
    return (
        <>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalvisible}
            >
                <ModalBackground>
                    <ModalView >
                        <ModalRow style={{paddingTop:20}}>
                            <ModalDescriptionTitle>Tarefa : id</ModalDescriptionTitle>

                                <View style={{ flex: 1, alignItems: 'flex-end'}}>
                                    <CloseButton onClick={onClick} />
                                </View>

                        </ModalRow>
                        <ModalRow >
                            <ModalDescriptionText>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</ModalDescriptionText>
                        </ModalRow>
                       <ModalRow>


                               <View style={{flex: 1}}>
                                   <Button onPress={() => router.push("/home")}>
                                       <Button.Title>Editar</Button.Title>
                                   </Button>
                               </View>
                            <View style={{flex: 1}}>
                               <Button onPress={() => router.push("/home")}>
                                   <Button.Title>Remover</Button.Title>
                               </Button>
                           </View>

                       </ModalRow>


                    </ModalView>
                </ModalBackground>

            </Modal>
        </>
    )
}
