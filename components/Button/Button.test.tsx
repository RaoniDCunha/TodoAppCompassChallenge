import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '@/components/Button/Button';

describe('Componente Button', () => {
    it('Renderiza o botão e chama onPress ao clicar', () => {
        const onPressMock = jest.fn();
        const { getByRole, getByText } = render(
            <Button onPress={onPressMock}>
                <Button.Title>Clique Aqui</Button.Title>
            </Button>
        );

        const buttonElement = getByRole('button');
        expect(buttonElement).toBeDefined();
        expect(getByText('Clique Aqui')).toBeDefined();

        fireEvent.press(buttonElement);
        expect(onPressMock).toHaveBeenCalledTimes(1);
    });
});

describe('Componente Title', () => {
    it('Renderiza o texto corretamente', () => {
        const { getByText } = render(<Button.Title>Título do Botão</Button.Title>);
        expect(getByText('Título do Botão')).toBeDefined();
    });
});

describe('Componente Icon', () => {
    it('Renderiza o ícone corretamente', () => {
        const { getByTestId } = render(<Button.Icon name="heart" />);
        expect(getByTestId('Feather')).toBeDefined();
    });
});
