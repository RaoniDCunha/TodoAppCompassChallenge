
import {
    ModalBackground,
    ModalDescriptionText,
    ModalDescriptionTitle,
    ModalRow, ModalRowText,
    ModalView
} from "@/components/Modal/Modalstyle";
import React, { useState, useEffect } from 'react';
import {
    Image, Keyboard,
    Modal, Text, View

} from 'react-native';
import {colors} from "@/styles/colors";
import {Button} from "@/components/Button/Button";
import {router} from "expo-router";
import {Input} from "@/components/Input/Input";
import {CloseButton} from "@/components/CloseButton/CloseButton";
import todoService from "@/service/TodoService";

interface Todo {
    id: number ;
    tarefa: string;
    status: boolean;
}

interface ModalEditTaskProps {
    title?: string;
    modalvisible?: boolean;
    onClick?: () => void;
    onClickEdit?: () => void;
    focusTask?: Todo;
    refreshList: () => void;
}

export const ModalDelete = ({title,modalvisible,onClick,focusTask,onClickEdit,refreshList}:ModalEditTaskProps) => {

    const deleteItem = async (taskid:number | undefined ) => {
        try {

            Keyboard.dismiss()
            const response = await todoService.deleteTodo(taskid!);
            refreshList()
            if (onClick) {
                onClick();
            }


        } catch (error) {

        }
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
                        <ModalRow style={{paddingTop:20}}>
                            <ModalDescriptionTitle>Tarefa : {focusTask?.id}</ModalDescriptionTitle>

                                <View style={{ flex: 1, alignItems: 'flex-end'}}>
                                    <CloseButton onClick={onClick} />
                                </View>

                        </ModalRow>
                        <ModalRowText >
                            <ModalDescriptionText>{focusTask?.tarefa}</ModalDescriptionText>
                        </ModalRowText>
                       <ModalRow>


                               <View style={{flex: 1}}>
                                   <Button onPress={() => onClickEdit?.()}>
                                       <Button.Title>Editar</Button.Title>
                                   </Button>
                               </View>
                            <View style={{flex: 1}}>
                               <Button onPress={() => deleteItem(focusTask?.id)}>
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
