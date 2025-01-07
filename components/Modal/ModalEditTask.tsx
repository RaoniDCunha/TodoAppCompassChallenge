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
import {DisabledButton} from "@/components/Button/DisabledButton";


interface ModalEditTaskProps {
    title?: string;
    modalvisible?: boolean;
    onClick?: () => void;
    focusTask?: Todo;
    refreshList: () => void;
}

interface Todo {
    id: number;
    tarefa: string;
    status: boolean;
}

interface TodoPayload {
    tarefa: string;
    completed?: boolean;

}

export const ModalEditTask = ({title,modalvisible,onClick,focusTask,refreshList}:ModalEditTaskProps) => {

    const [newTaskName,setNewTaskName] = useState<string>("");
    const [disabled,setDisabled] = useState<boolean>(true);

    const newTask = async (task:string) => {

        const newTask:TodoPayload = {
            tarefa: `${newTaskName}`,
            completed: focusTask?.status,

        }

         await todoService.updateTodo(focusTask?.id!,newTask);

        refreshList();

        if (onClick) {
            onClick();
        }
    }

    const changeText = (text:string) => {
        setNewTaskName(text)

        if(text !== ""){
            setDisabled(false);
        } else{
            setDisabled(true);
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
                                <InputTask title={'Editar Tarefa'} onChangeText={(text) => changeText(text)}/>
                            </View>
                            <View style={{flex: 1}}>
                                {disabled ? (
                                    <DisabledButton >
                                        <Button.Icon name="plus-circle" />
                                    </DisabledButton>
                                ) : (
                                    <Button onPress={ () => newTask(newTaskName)}>
                                        <Button.Icon name="plus-circle" />
                                    </Button>
                                )}
                            </View>
                        </ModalRow>
                    </ModalView>
                </ModalBackground>
            </Modal>
        </>
    )
}
