import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import todoService from "@/service/TodoService";
import {ModalDelete} from "@/components/Modal/ModalDelete";

jest.mock('@/service/TodoService');

describe('Componente ModalDelete', () => {
    it('Renderiza o modal, deleta tarefa, fecha e chama editar', async () => {
        const mockRefreshList = jest.fn();
        const mockOnClick = jest.fn();
        const mockOnClickEdit = jest.fn();

        const mockTask = {
            id: '1',
            todo: 'Tarefa de Teste',
            completed: false,
            userId: 4,
        };

        const { getByText, getByRole } = render(
            <ModalDelete
                modalvisible={true}
                onClick={mockOnClick}
                focusTask={mockTask}
                refreshList={mockRefreshList}
                onClickEdit={mockOnClickEdit}
            />
        );
        expect(getByText(`Tarefa : 1`)).toBeDefined();
        expect(getByText('Tarefa de Teste')).toBeDefined();


        const deleteButton = getByRole('button', { name: 'Remover' });
        await fireEvent.press(deleteButton);
        expect(todoService.deleteTodo).toHaveBeenCalledWith('1');
        expect(mockRefreshList).toHaveBeenCalledTimes(1);


        const closeButton = getByRole('button', { name: 'close' });
        fireEvent.press(closeButton);
        expect(mockOnClick).toHaveBeenCalledTimes(1);

        const editButton = getByRole('button', { name: 'Editar' });
        fireEvent.press(editButton);
        expect(mockOnClickEdit).toHaveBeenCalledTimes(1);
    });
});
