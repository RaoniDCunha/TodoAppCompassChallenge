import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import todoService from "@/service/TodoService";
import {Task} from "@/components/Task/Task";

jest.mock("@/service/TodoService") // Mock do service

describe('Componente Task', () => {
    const mockRefreshList = jest.fn();
    const mockOnClick = jest.fn()

    it('Deve renderizar a task com o título correto e o círculo correspondente', () => {
        const { getByText, getByTestId } = render(
            <Task id="1" done={false} title="Minha tarefa" onClick={mockOnClick} refreshList={mockRefreshList} />
        );
        expect(getByText('Minha tarefa')).toBeDefined();
        expect(getByTestId('task-circle')).toBeDefined();

        const { getByTestId: getByTestIdDone } = render(
            <Task id="1" done={true} title="Minha tarefa" onClick={mockOnClick} refreshList={mockRefreshList} />
        );
        expect(getByTestIdDone('task-circle-done')).toBeDefined();
    });


    it('Deve chamar o updateTask ao clicar no circulo e o onClick ao clicar no ícone de deletar', async () => {
        const { getByTestId } = render(
            <Task id="1" done={false} title="Minha tarefa" onClick={mockOnClick} refreshList={mockRefreshList} />
        );

        const circle = getByTestId('task-circle');
        await fireEvent.press(circle);
        expect(todoService.updateTodo).toHaveBeenCalled();

        const deleteIcon = getByTestId('AntDesign');
        await fireEvent.press(deleteIcon);
        expect(mockOnClick).toHaveBeenCalledTimes(1)

    });
});
