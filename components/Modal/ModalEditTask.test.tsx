import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import todoService from "@/service/TodoService";
import {ModalEditTask} from "@/components/Modal/ModalEditTask";

jest.mock('@/service/TodoService');

describe('Componente ModalEditTask', () => {
    it('Renderiza o modal, edita tarefa e fecha o modal', async () => {
        const mockRefreshList = jest.fn();
        const mockOnClick = jest.fn();

        const mockTask = {
            id: '1',
            todo: 'Tarefa de Teste',
            completed: false,
            userId: 4,
        };

        const { getByPlaceholderText, getByRole } = render(
            <ModalEditTask
                modalvisible={true}
                onClick={mockOnClick}
                focusTask={mockTask}
                refreshList={mockRefreshList}
            />
        );
        const inputElement = getByPlaceholderText('Editar Tarefa');
        fireEvent.changeText(inputElement, 'Tarefa Editada');

        const addButton = getByRole('button');
        await fireEvent.press(addButton);

        expect(todoService.updateTodo).toHaveBeenCalled();
        expect(mockRefreshList).toHaveBeenCalledTimes(1)

        const closeButton = getByRole('button', { name: 'close' });
        fireEvent.press(closeButton);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
