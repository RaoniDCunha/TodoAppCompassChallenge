import {TaskView, TaskViewCircle, TaskViewText} from "@/components/Task/taskstyle";
import AntDesign from '@expo/vector-icons/AntDesign';

export const Task = () => {
    return (
        <>
            <TaskView>
                <TaskViewCircle />
                <TaskViewText>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</TaskViewText>
                <AntDesign name="delete" size={24} color="black" />
            </TaskView>
        </>
    );
};
