import { Image, View, Text, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { Task } from "@/components/Task/Task";
import { colors } from "@/styles/colors";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { useRouter } from 'expo-router';
import { TaskInformationButton } from "@/components/TaskInformationButton/TaskInformation";
import { ModalCreateTask } from "@/components/Modal/ModalCreateTask";
import { ModalError } from "@/components/Modal/ModalError";
import { ModalDelete } from "@/components/Modal/ModalDelete";
import React from "react";
import { LogoutButton } from "@/components/LogoutButton/LogoutButton";
import { useAuth } from "@/context/AuthContext";
import todoService from "@/service/TodoService";
import { ModalEditTask } from "@/components/Modal/ModalEditTask";
import { EmptyTasks } from "@/components/EmptyTasks/EmptyTasks";

enum TodoStatus {
    LOADING, EMPTY, TASKS
}

interface Todo {
    id: string;
    todo: string;
    completed: boolean;
    userId: number;
}

export default function Home() {

    const { isLoggedIn, logout } = useAuth();
    const router = useRouter();
    const [currentType, setCurrentType] = React.useState(TodoStatus.EMPTY);
    const [taskSearch, setTaskSearch] = React.useState<string>();
    const [errorModalVisible, setErrorModalVisible] = React.useState(false);
    const [createTaskModalVisible, setCreateTaskModalVisible] = React.useState(false);
    const [editTaskModalVisible, setEditTaskModalVisible] = React.useState(false);
    const [deleteTaskModalVisible, setDeleteTaskModalVisible] = React.useState(false);
    const [modalActiveInformation, setModalActiveInformation] = React.useState();
    const [focusTask, setFocusTask] = React.useState<Todo>();
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [completedtodos, setCompletedTodos] = React.useState<Todo[]>([]);
    const [uncompletedtodos, setUncompletedTodos] = React.useState<Todo[]>([]);

    React.useEffect(() => {
        if (!isLoggedIn) {
            router.replace("/");
        }
    }, [isLoggedIn]);


    const fetchTodos = async () => {
        try {
            setCurrentType(TodoStatus.LOADING);
            const response: Todo[] = await todoService.getAllTodos();
            setTodos(response);
            const completed = response.filter(todo => todo.completed);
            const uncompleted = response.filter(todo => !todo.completed);

            setCompletedTodos(completed);
            setUncompletedTodos(uncompleted);


            if (response.length === 0) {
                setCurrentType(TodoStatus.EMPTY);
            } else {
                setCurrentType(TodoStatus.TASKS);
            }


        } catch (error) {
            console.error('Erro ao buscar todos os TODOs:', error);
            setErrorModalVisible(true);
            setCurrentType(TodoStatus.EMPTY);
        }
    };

    React.useEffect(() => {
        fetchTodos();
    }, []);



    const onClickEdit = () => {
        setEditTaskModalVisible(true);
        setDeleteTaskModalVisible(false);
    }

    const handleLogout = () => {
        logout();
        router.replace("/");
    };

    const handleModalEdit = (item: Todo) => {
        setFocusTask(item);
        setDeleteTaskModalVisible(true);
    }

    const renderItem = ({ item }: any) => (
        <Task key={item.id} title={item.todo} done={item.completed} id={item.id} onClick={() => handleModalEdit(item)} refreshList={fetchTodos}  />
    );

    const ItemSeparator = () => <View style={{ marginVertical: 5 }} />;

    const renderComponent = () => {
        switch (currentType) {
            case TodoStatus.EMPTY:
                return <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 40, gap: 10 }}>
                    <View style={{
                        flexDirection: 'row',
                        marginBottom: 10,
                        marginTop: 20,
                        justifyContent: 'space-between',
                        gap: 40
                    }}>
                        <TaskInformationButton number={uncompletedtodos.length} title={'Tarefas pendentes'} color={'purple'} />
                        <TaskInformationButton number={completedtodos.length} title={'Concluídas'} color={'green'} />
                    </View>
                    <EmptyTasks />
                </View>;
            case TodoStatus.LOADING:
                return <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 40, gap: 10 }}>
                    <ActivityIndicator size="large" color={colors.gray["200"]} />
                </View>;
            case TodoStatus.TASKS:
                return <View style={{ flex: 4, justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 40, gap: 10 }}>
                    <View style={{
                        flexDirection: 'row',
                        marginBottom: 10,
                        marginTop: 20,
                        justifyContent: 'space-between',
                        gap: 40
                    }}>
                        <TaskInformationButton number={uncompletedtodos.length} title={'Tarefas pendentes'} color={'purple'} />
                        <TaskInformationButton number={completedtodos.length} title={'Concluídas'} color={'green'} />
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
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.gray["200"], padding: 20 }}>
                <View style={{ justifyContent: 'flex-end', flexDirection: 'row', width: 350 }}>
                    <View style={{ width: 32 }}>
                        <TouchableOpacity onPress={handleLogout}>
                            <LogoutButton />
                        </TouchableOpacity>

                    </View>
                </View>
                <Image source={require("../assets/Logo.png")} height={400} width={400} style={{ marginVertical: 20 }} />
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8, marginBottom: -20 }}>
                    <View style={{ flex: 5 }}>
                        <Input title={'Pesquisar tarefa'} onChangeText={(text) => setTaskSearch(text)} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button onPress={() => router.push("/home")}>
                            <Button.Icon name="search" />
                        </Button>
                    </View>
                </View>
            </View>
            {renderComponent()}


            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', paddingHorizontal: 20, paddingVertical: 40, gap: 10 }}>
                <View style={{ width: 85 }}>
                    <Button onPress={() => setCreateTaskModalVisible(true)}>
                        <Button.Title> Criar</Button.Title>
                        <Button.Icon name="plus-circle" />
                    </Button>
                </View>

            </View>
            <ModalDelete modalvisible={deleteTaskModalVisible} onClick={() => setDeleteTaskModalVisible(false)} focusTask={focusTask} onClickEdit={onClickEdit} refreshList={fetchTodos} />
            <ModalError modalvisible={errorModalVisible} />
            <ModalCreateTask modalvisible={createTaskModalVisible} onClick={() => setCreateTaskModalVisible(false)} refreshList={fetchTodos} />
            <ModalEditTask modalvisible={editTaskModalVisible} onClick={() => setEditTaskModalVisible(false)} focusTask={focusTask}  />
        </View>
    )
}
