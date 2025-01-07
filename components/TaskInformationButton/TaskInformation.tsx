import {TaskView, TaskViewCircle, TaskViewText} from "@/components/Task/taskstyle";
import AntDesign from '@expo/vector-icons/AntDesign';
import {
    TaskInformationCountText,
    TaskInformationCountView,
    TaskInformationText,
    TaskInformationView
} from "@/components/TaskInformationButton/taskinformationstyle";
import {TouchableOpacity} from "react-native";

interface TaskInformationTodoProps {
    number: number;
    title: string;
    color: any;
    onpress: () => void;
}

export const TaskInformationButton = ({number,title,color,onpress}:TaskInformationTodoProps) => {
    return (
        <>
            <TouchableOpacity onPress={onpress}>
                <TaskInformationView>
                    <TaskInformationText>{title}</TaskInformationText>
                    <TaskInformationCountView color={color}>
                        <TaskInformationCountText color={color} > {number} </TaskInformationCountText>
                    </TaskInformationCountView>
                </TaskInformationView>
            </TouchableOpacity>

        </>
    );
};
