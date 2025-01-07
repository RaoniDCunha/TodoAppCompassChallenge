import {
    TaskView,
    TaskViewCircle,
    TaskViewCircleDone,
    TaskViewText,
    TaskViewTextContainer
} from "@/components/Task/taskstyle";
import AntDesign from '@expo/vector-icons/AntDesign';
import {colors} from "@/styles/theme";
import {Feather} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";
import todoService from "@/service/TodoService";
import {useState} from "react";

interface TaskProps {
    id: string;
    done: boolean;
    title: string;
    onClick?: () => void;
    refreshList: () => void;
}

interface TodoPayload {
    tarefa: string;
    status?: boolean;
}

export const Task = ({id,done,title,onClick,refreshList}:TaskProps) => {

    const payload:TodoPayload = {
        tarefa: title,
        status: !done,
    }

    const updateTask = async () => {
        await todoService.updateTodo(id,payload);
        refreshList();
    }



    return (
        <>
            <TaskView done={done}>
                { done ? (
                        <TouchableOpacity onPress={updateTask}>
                            <TaskViewCircleDone>
                                <Feather name='check' size={16} color="white" />
                            </TaskViewCircleDone>
                        </TouchableOpacity>

                )
                    :(
                        <TouchableOpacity onPress={updateTask}>
                            <TaskViewCircle />
                        </TouchableOpacity>
                )
                }

                <TaskViewTextContainer  >
                    <TaskViewText done={done}>{title}</TaskViewText>
                </TaskViewTextContainer>
                <TouchableOpacity onPress={onClick}>
                    <AntDesign name="delete" size={16} color={colors.gray["500"]} />
                </TouchableOpacity>
            </TaskView>
        </>
    );
};
