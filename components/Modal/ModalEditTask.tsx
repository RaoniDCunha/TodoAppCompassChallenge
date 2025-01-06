import {ModalBackground, ModalDescriptionTitle, ModalRow, ModalView} from "@/components/Modal/Modalstyle";
import React, {useState} from 'react';
import {
    Modal, View
} from 'react-native';
import {Button} from "@/components/Button/Button";
import {router} from "expo-router";
import {Input} from "@/components/Input/Input";
import {CloseButton} from "@/components/CloseButton/CloseButton";
import {InputTask} from "@/components/InputTask/InputTask";
import todoService from "@/service/TodoService";


interface ModalEditTaskProps {
    title?: string;
    modalvisible?: boolean;
    onClick?: () => void;
    focusTask?: Todo;
}

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

interface TodoPayload {
    todo: string;
    completed?: boolean;
    userId?: number
}

export const ModalEditTask = ({title,modalvisible,onClick,focusTask}:ModalEditTaskProps) => {

    const [newTaskName,setNewTaskName] = useState<string>("");

    const newTask = async (task:string) => {

        const newTask:TodoPayload = {
            todo: `${newTaskName}`,
            completed: false,
            userId: 4
        }

        let response = await todoService.createTodo(newTask);

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
                            <ModalDescriptionTitle>Editar Tarefa: {focusTask?.id}</ModalDescriptionTitle>
                            <View style={{ flex: 1, alignItems: 'flex-end'}}>
                                <CloseButton onClick={onClick} />
                            </View>
                        </ModalRow>
                        <ModalRow>
                            <View style={{flex: 5}}>
                                <InputTask title={'Criar uma Nova Tarefa'} />
                            </View>
                            <View style={{flex: 1}}>
                                <Button onPress={() => newTask(newTaskName)}>
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
