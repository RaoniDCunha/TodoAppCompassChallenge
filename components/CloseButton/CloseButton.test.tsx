import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CloseButton } from '@/components/CloseButton/CloseButton';

describe('Componente CloseButton', () => {
    it('Renderiza o botão e chama onClick ao clicar', () => {
        const onClickMock = jest.fn();
        const { getByTestId, getByRole } = render(<CloseButton onClick={onClickMock} />);
        const iconElement = getByTestId('AntDesign');
        const buttonElement = getByRole('button');

        expect(iconElement).toBeDefined();
        expect(iconElement.props.name).toBe('close');
        expect(iconElement.props.size).toBe(24);
        expect(iconElement.props.color).toBe('#6b7280');

        fireEvent.press(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
