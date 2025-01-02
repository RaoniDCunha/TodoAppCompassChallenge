import {Image, View, Text, ActivityIndicator} from "react-native";
import {Task} from "@/components/Task/Task";
import {colors} from "@/styles/colors";
import {Input} from "@/components/Input/Input";
import {Button} from "@/components/Button/Button";
import {router} from "expo-router";
import {TaskInformationButton} from "@/components/TaskInformationButton/TaskInformation";
import { ModalCreateTask} from "@/components/Modal/ModalCreateTask";
import {ModalError} from "@/components/Modal/ModalError";
import {ModalEdit} from "@/components/Modal/ModalEdit";
import React from "react";
import {LogoutButton} from "@/components/LogoutButton/LogoutButton";

enum TodoStatus{
    LOADING,EMPTY, TASKS
}

export default function Home() {

    const [currentType, setCurrentType] = React.useState(TodoStatus.LOADING);
    const [errorModalVisible, setErrorModalVisible] = React.useState(false);
    const [createTaskModalVisible, setCreateTaskModalVisible] = React.useState(false);
    const [editTaskModalVisible, setEditTaskModalVisible] = React.useState(false);

    const renderComponent = () => {
        switch (currentType) {
            case TodoStatus.EMPTY:
                return <View style={{ flex: 5, alignItems:  'center',justifyContent: 'flex-start',paddingHorizontal:20, paddingVertical: 40,gap: 10 }}>
                    <Text>Vazio</Text>
                </View>;
            case TodoStatus.LOADING:
                return <View style={{ flex: 5, alignItems:  'center',justifyContent: 'center',paddingHorizontal:20, paddingVertical: 40,gap: 10 }}>
                    <ActivityIndicator size="large" color={colors.gray["200"]} />
                </View>;
            case TodoStatus.TASKS:
                return <View style={{ flex: 5, alignItems:  'center',justifyContent: 'flex-start',paddingHorizontal:20, paddingVertical: 40,gap: 10 }}>
                    <View style={{ flexDirection: 'row',marginBottom: 10,paddingHorizontal: 40,justifyContent: 'space-around',gap: 50}}>
                        <TaskInformationButton number={8} title={'Tarefas criadas'} color={'purple'} />
                        <TaskInformationButton number={16} title={'Concluidas'} color={'green'} />
                    </View>

                    <Task />
                    <Task />
                    <Task />
                    <Task />




                </View>;
            default:
                return <View><Text>Componente Desconhecido</Text></View>;
        }
    };

    return (
        <View style={{ flex: 1  }}>
            <View style={{ flex: 1, alignItems:  'center',justifyContent: 'center',backgroundColor: colors.gray["200"],padding: 40 }}>
                <View style={{justifyContent: 'flex-end',flexDirection:'row',width: 350}}>
                    <View style={{width: 32}}>
                       <LogoutButton />
                    </View>
                </View>
                <Image source={require("../assets/Logo.png")} height={400} width={400} style={{marginVertical:20}}/>
                <View style={{  alignItems:  'center',justifyContent: 'center',flexDirection: 'row', gap: 8, marginBottom: -80 }}>
                    <View style={{flex: 5}}>
                        <Input title={'Pesquisar tarefa'} />
                    </View>
                    <View style={{flex: 1}}>
                        <Button onPress={() => router.push("/home")}>
                            <Button.Icon name="search1" />
                        </Button>
                    </View>
                </View>
            </View>
            {renderComponent()}


            <View style={{ flex: 1, alignItems:  'flex-end',justifyContent: 'flex-end',paddingHorizontal:20, paddingVertical: 40,gap: 10 }}>
                <View style={{width:85}}>
                    <Button onPress={() => setEditTaskModalVisible(true)}>
                        <Button.Title> Criar</Button.Title>
                        <Button.Icon name="search1" />
                    </Button>
                </View>

            </View>
            <ModalEdit modalvisible={editTaskModalVisible} />
            <ModalError modalvisible={errorModalVisible} />
            <ModalCreateTask modalvisible={createTaskModalVisible} />
        </View>
    )
}
