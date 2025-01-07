import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import todoService from "@/service/TodoService";
import {ModalCreateTask} from "@/components/Modal/ModalCreateTask";

jest.mock('@/service/TodoService');

describe('Componente ModalCreateTask', () => {
    it('Renderiza o modal, cria tarefa e fecha modal', async () => {
        const mockRefreshList = jest.fn();
        const mockOnClick = jest.fn();
        const { getByPlaceholderText, getByRole } = render(
            <ModalCreateTask
                modalvisible={true}
                onClick={mockOnClick}
                refreshList={mockRefreshList}
            />
        );
        const inputElement = getByPlaceholderText('Criar uma Nova Tarefa');
        fireEvent.changeText(inputElement, 'Tarefa de Teste');

        const addButton = getByRole('button');
        await fireEvent.press(addButton);

        expect(todoService.createTodo).toHaveBeenCalled();
        expect(mockRefreshList).toHaveBeenCalledTimes(1);


        const closeButton = getByRole('button', { name: 'close' });
        fireEvent.press(closeButton);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
