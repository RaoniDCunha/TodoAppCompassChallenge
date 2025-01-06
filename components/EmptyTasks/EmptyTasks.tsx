import {EmptyTaksMainText, EmptyTaksSecondaryText, EmptyTasksView} from "@/components/EmptyTasks/EmptyTasksStyle";
import {Feather} from "@expo/vector-icons";
import {colors} from "@/styles/colors";

export const EmptyTasks = () => {
    return (
        <>
            <EmptyTasksView >
                <Feather name="clipboard" size={48} color={colors.purple.light} />
                <EmptyTaksMainText>Você ainda não tem tarefas cadastradas</EmptyTaksMainText>
                <EmptyTaksSecondaryText>Crie tarefas e organize seus itens a fazer</EmptyTaksSecondaryText>
            </EmptyTasksView>
        </>
    );
};
