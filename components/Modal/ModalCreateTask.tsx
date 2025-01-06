import {ModalBackground, ModalDescriptionTitle, ModalRow, ModalView} from "@/components/Modal/Modalstyle";
import React, {useState} from 'react';
import {
    Keyboard,
    Modal, View
} from 'react-native';
import {Button} from "@/components/Button/Button";
import {router} from "expo-router";
import {Input} from "@/components/Input/Input";
import {CloseButton} from "@/components/CloseButton/CloseButton";
import todoService from "@/service/TodoService";
import {InputTask} from "@/components/InputTask/InputTask";

interface ModalCreateTaskProps {
    title?: string;
    modalvisible?: boolean;
    onClick?: () => void;
    refreshList: () => void;
}

interface TodoPayload {
    todo: string;
    completed?: boolean;
    userId?: number
}

export const ModalCreateTask = ({title,modalvisible,onClick,refreshList}:ModalCreateTaskProps) => {

    const [newTaskName,setNewTaskName] = useState<string>("");

    const newTask = async (task:string) => {

        Keyboard.dismiss();
        const newTask:TodoPayload = {
            todo: `${newTaskName}`,
            completed: false,
            userId: 4
        }

        let response = await todoService.createTodo(newTask);
        refreshList();

        if (onClick) {
            onClick();
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
                        <ModalRow>
                            <ModalDescriptionTitle>Nova Tarefa</ModalDescriptionTitle>
                            <View style={{ flex: 1, alignItems: 'flex-end'}}>
                                <CloseButton onClick={onClick} />
                            </View>
                        </ModalRow>
                        <ModalRow>
                            <View style={{flex: 5}}>
                                <InputTask title={'Criar uma Nova Tarefa'}  onChangeText={(text) => setNewTaskName(text)} />
                            </View>
                            <View style={{flex: 1}}>
                                <Button onPress={ () => newTask('dd')}>
                                    <Button.Icon name="plus" />
                                </Button>
                            </View>
                        </ModalRow>
                    </ModalView>
                </ModalBackground>
            </Modal>
        </>
    )
}
