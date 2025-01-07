import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {LogoutButton} from "@/components/LogoutButton/LogoutButton";


describe('Componente LogoutButton', () => {
    it('Deve renderizar o botão de logout corretamente', () => {
        const { getByTestId } = render(<LogoutButton onpress={() => {}} />);
        const iconElement = getByTestId('button');

        expect(iconElement).toBeDefined();
        expect(iconElement.props.name).toBe('log-out');
        expect(iconElement.props.size).toBe(24);
        expect(iconElement.props.color).toBe("#4b5563");
    });

    it('Deve chamar a função onPress quando o botão é clicado', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(<LogoutButton onpress={onPressMock} />);
        const buttonElement = getByTestId('button');
        fireEvent.press(buttonElement);
        expect(onPressMock).toHaveBeenCalledTimes(1);
    });
});
