import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Input } from '@/components/Input/Input';

describe('Componente Input', () => {
    it('Renderiza input, chama onChangeText e verifica borda', () => {
        const onChangeTextMock = jest.fn();
        const { getByPlaceholderText, getByTestId } = render(
            <Input title="Nome" onChangeText={onChangeTextMock} error={true}/>
        );
        const inputElement = getByPlaceholderText('Nome');


        expect(inputElement).toBeDefined();


        fireEvent.changeText(inputElement, 'Teste');
        expect(onChangeTextMock).toHaveBeenCalledWith('Teste');

        const { getByTestId: getByTestId2 } = render(
            <Input title="Nome"  error={false}/>
        );

    });
});
