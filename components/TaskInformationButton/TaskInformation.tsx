import {TaskView, TaskViewCircle, TaskViewText} from "@/components/Task/taskstyle";
import AntDesign from '@expo/vector-icons/AntDesign';
import {
    TaskInformationCountText,
    TaskInformationCountView,
    TaskInformationText,
    TaskInformationView
} from "@/components/TaskInformationButton/taskinformationstyle";

export const TaskInformationButton = ({number,title,color}:any) => {
    return (
        <>
            <TaskInformationView>
                <TaskInformationText>{title}</TaskInformationText>
                <TaskInformationCountView color={color}>
                    <TaskInformationCountText color={color} > {number} </TaskInformationCountText>
                </TaskInformationCountView>
            </TaskInformationView>
        </>
    );
};
