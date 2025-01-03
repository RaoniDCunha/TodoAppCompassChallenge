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

interface TaskProps {
    id: number;
    done: boolean;
    title: string
}

export const Task = ({id,done,title}:TaskProps) => {
    return (
        <>
            <TaskView done={done}>
                { done ? (
                        <TaskViewCircleDone>
                            <Feather name='check' size={16} color="white" />
                        </TaskViewCircleDone>
                )
                    :(
                    <TaskViewCircle />
                )
                }

                <TaskViewTextContainer  >
                    <TaskViewText done={done}>{title}</TaskViewText>
                </TaskViewTextContainer>
                <AntDesign name="delete" size={16} color={colors.gray["500"]} />
            </TaskView>
        </>
    );
};
