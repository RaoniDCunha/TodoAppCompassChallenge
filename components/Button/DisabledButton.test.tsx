import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { DisabledButton } from '@/components/Button/DisabledButton';

describe('Componente DisabledButton', () => {
    it('Renderiza botão desabilitado e não chama onPress ao clicar', () => {
        const onPressMock = jest.fn();
        const { getByRole, getByText } = render(
            <DisabledButton onPress={onPressMock}>
                <DisabledButton.Title>Botão Desabilitado</DisabledButton.Title>
            </DisabledButton>
        );

        const buttonElement = getByRole('button');
        expect(buttonElement).toBeDefined();
        expect(buttonElement.props.disabled).toBe(true);
        expect(getByText('Botão Desabilitado')).toBeDefined();

        fireEvent.press(buttonElement);
        expect(onPressMock).toHaveBeenCalledTimes(0);
    });
});

describe('Componente Title (DisabledButton)', () => {
    it('Renderiza o texto corretamente', () => {
        const { getByText } = render(<DisabledButton.Title>Título Desabilitado</DisabledButton.Title>);
        expect(getByText('Título Desabilitado')).toBeDefined();
    });
});

describe('Componente Icon (DisabledButton)', () => {
    it('Renderiza o ícone corretamente', () => {
        const { getByTestId } = render(<DisabledButton.Icon name="heart" />);
        expect(getByTestId('Feather')).toBeDefined();
    });
});
