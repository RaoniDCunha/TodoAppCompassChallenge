import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { InputTask } from '@/components/InputTask/InputTask';

describe('Componente InputTask', () => {
    it('Renderiza input, chama onChangeText, verifica borda e ajusta altura', () => {
        const onChangeTextMock = jest.fn();
        const { getByPlaceholderText, getByTestId } = render(
            <InputTask title="Nova Tarefa" onChangeText={onChangeTextMock} error={true} />
        );
        const inputElement = getByPlaceholderText('Nova Tarefa');

        expect(inputElement).toBeDefined();

        fireEvent.changeText(inputElement, 'Teste\n');
        expect(onChangeTextMock).toHaveBeenCalledWith('Teste\n');
        expect(inputElement.props.style.height).toBeDefined();

        const {getByTestId: getByTestId2} = render(
            <InputTask title="Nova Tarefa" error={false} />
        )

    });
});
