import {ModalBackground, ModalDescriptionTitle, ModalRow, ModalView} from "@/components/Modal/Modalstyle";
import React from 'react';
import {
    Modal, View
} from 'react-native';
import {Button} from "@/components/Button/Button";
import {router} from "expo-router";
import {Input} from "@/components/Input/Input";
import {CloseButton} from "@/components/CloseButton/CloseButton";


interface ModalCreateTaskProps {
    title?: string;
    modalvisible?: boolean;
    onClick?: () => void;
}


export const ModalCreateTask = ({title,modalvisible,onClick}:ModalCreateTaskProps) => {
    return (
        <>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalvisible}
            >
                <ModalBackground>
                    <ModalView >
                        <ModalRow>
                            <ModalDescriptionTitle>Nova Tarefa</ModalDescriptionTitle>
                            <View style={{ flex: 1, alignItems: 'flex-end'}}>
                                <CloseButton onClick={onClick} />
                            </View>
                        </ModalRow>
                        <ModalRow>
                            <View style={{flex: 5}}>
                                <Input title={'Criar uma Nova Tarefa'} />
                            </View>
                            <View style={{flex: 1}}>
                                <Button onPress={() => router.push("/home")}>
                                    <Button.Icon name="search1" />
                                </Button>
                            </View>
                        </ModalRow>
                    </ModalView>
                </ModalBackground>
            </Modal>
        </>
    )
}
