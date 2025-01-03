import {Image, View, Text, ActivityIndicator, FlatList, TouchableOpacity} from "react-native";
import {Task} from "@/components/Task/Task";
import {colors} from "@/styles/colors";
import {Input} from "@/components/Input/Input";
import {Button} from "@/components/Button/Button";
import { useRouter } from 'expo-router';
import {TaskInformationButton} from "@/components/TaskInformationButton/TaskInformation";
import { ModalCreateTask} from "@/components/Modal/ModalCreateTask";
import {ModalError} from "@/components/Modal/ModalError";
import {ModalEdit} from "@/components/Modal/ModalEdit";
import React from "react";
import {LogoutButton} from "@/components/LogoutButton/LogoutButton";
import {useAuth} from "@/context/AuthContext";
import todoService from "@/service/TodoService";

enum TodoStatus{
    LOADING,EMPTY, TASKS
}

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

export default function Home() {

    const { isLoggedIn,logout } = useAuth();
    const router = useRouter();
    const [currentType, setCurrentType] = React.useState(TodoStatus.TASKS);
    const [taskSearch, setTaskSearch] = React.useState<string>();
    const [errorModalVisible, setErrorModalVisible] = React.useState(false);
    const [createTaskModalVisible, setCreateTaskModalVisible] = React.useState(false);
    const [editTaskModalVisible, setEditTaskModalVisible] = React.useState(false);
    const [modalActiveInformation,setModalActiveInformation] = React.useState();
    const [todos, setTodos] = React.useState<Todo[]>([]);

    React.useEffect(() => {
        if (!isLoggedIn) {
            router.replace("/");
        }
    }, [isLoggedIn]);

    React.useEffect(() => {
        const fetchTodos = async () => {
            try {
                setCurrentType(TodoStatus.LOADING);
                const response = await todoService.getAllTodos();
                setTodos(response.todos);
                if (response.todos.length === 0) {
                    setCurrentType(TodoStatus.EMPTY);
                } else {
                    setCurrentType(TodoStatus.TASKS);
                }


            } catch (error) {
                setErrorModalVisible(true);
                setCurrentType(TodoStatus.EMPTY);
            }
        };

        fetchTodos();
    }, []);



    const handleLogout = () => {
        logout();
        router.replace("/");
    };

    const handleModalEdit = () => {

        setEditTaskModalVisible(true)
    }

    const renderItem = ({ item }:any) => (
        <Task key={item.id} title={item.todo} done={item.completed}  id={item.id} onClick={() => setEditTaskModalVisible(true)}  />
    );

    const ItemSeparator = () => <View style={{marginVertical: 5}} />;

    const renderComponent = () => {
        switch (currentType) {
            case TodoStatus.EMPTY:
                return <View style={{ flex: 6, alignItems:  'center',justifyContent: 'flex-start',paddingHorizontal:20, paddingVertical: 40,gap: 10 }}>
                    <Text>Vazio</Text>
                </View>;
            case TodoStatus.LOADING:
                return <View style={{ flex: 6, alignItems:  'center',justifyContent: 'center',paddingHorizontal:20, paddingVertical: 40,gap: 10 }}>
                    <ActivityIndicator size="large" color={colors.gray["200"]} />
                </View>;
            case TodoStatus.TASKS:
                return <View style={{ flex: 6, alignItems:  'center',justifyContent: 'flex-start',paddingHorizontal:20, paddingVertical: 40,gap: 10 }}>
                    <View style={{ flexDirection: 'row',marginBottom: 10,marginTop: 20,paddingHorizontal: 40,justifyContent: 'space-between',gap: 50}}>
                        <TaskInformationButton number={8} title={'Tarefas criadas'} color={'purple'} />
                        <TaskInformationButton number={16} title={'Concluidas'} color={'green'} />
                    </View>


                    <FlatList
                            data={todos}
                            renderItem={renderItem}
                            keyExtractor={(item) => String(item.id)}
                            ItemSeparatorComponent={ItemSeparator}

                    />






                </View>;
            default:
                return <View><Text>Componente Desconhecido</Text></View>;
        }
    };

    if (!isLoggedIn) {
        return null
    }

    return (
        <View style={{ flex: 1  }}>
            <View style={{ flex: 1, alignItems:  'center',justifyContent: 'center',backgroundColor: colors.gray["200"],padding: 40 }}>
                <View style={{justifyContent: 'flex-end',flexDirection:'row',width: 350}}>
                    <View style={{width: 32}}>
                        <TouchableOpacity onPress={handleLogout}>
                            <LogoutButton  />
                        </TouchableOpacity>

                    </View>
                </View>
                <Image source={require("../assets/Logo.png")} height={400} width={400} style={{marginVertical:20}}/>
                <View style={{  alignItems:  'center',justifyContent: 'center',flexDirection: 'row', gap: 8, marginBottom: -50 }}>
                    <View style={{flex: 5}}>
                        <Input title={'Pesquisar tarefa'} onChangeText={(text) => setTaskSearch(text)} />
                    </View>
                    <View style={{flex: 1}}>
                        <Button onPress={() => router.push("/home")}>
                            <Button.Icon name="search" />
                        </Button>
                    </View>
                </View>
            </View>
            {renderComponent()}


            <View style={{ flex: 1, alignItems:  'flex-end',justifyContent: 'flex-end',paddingHorizontal:20, paddingVertical: 40,gap: 10 }}>
                <View style={{width:85}}>
                    <Button onPress={() => setCreateTaskModalVisible(true)}>
                        <Button.Title> Criar</Button.Title>
                        <Button.Icon name="plus-circle" />
                    </Button>
                </View>

            </View>
            <ModalEdit modalvisible={editTaskModalVisible} onClick={() => setEditTaskModalVisible(false)} />
            <ModalError modalvisible={errorModalVisible} />
            <ModalCreateTask modalvisible={createTaskModalVisible} onClick={() => setCreateTaskModalVisible(false)} />
        </View>
    )
}
