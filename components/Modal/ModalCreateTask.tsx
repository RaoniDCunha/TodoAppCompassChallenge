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
import {DisabledButton} from "@/components/Button/DisabledButton";

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
    const [disabled,setDisabled] = useState<boolean>(true);

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
                            <ModalDescriptionTitle>Nova Tarefa</ModalDescriptionTitle>
                            <View style={{ flex: 1, alignItems: 'flex-end'}}>
                                <CloseButton onClick={onClick} />
                            </View>
                        </ModalRow>
                        <ModalRow>
                            <View style={{flex: 5}}>
                                <InputTask title={'Criar uma Nova Tarefa'}  onChangeText={(text) => changeText(text)} />
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
