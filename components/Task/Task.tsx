import {TaskView, TaskViewCircle, TaskViewText, TaskViewTextContainer} from "@/components/Task/taskstyle";
import AntDesign from '@expo/vector-icons/AntDesign';
import {colors} from "@/styles/theme";

export const Task = () => {
    return (
        <>
            <TaskView>
                <TaskViewCircle />
                <TaskViewTextContainer>
                    <TaskViewText>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</TaskViewText>
                </TaskViewTextContainer>
                <AntDesign name="delete" size={16} color={colors.gray["500"]} />
            </TaskView>
        </>
    );
};
