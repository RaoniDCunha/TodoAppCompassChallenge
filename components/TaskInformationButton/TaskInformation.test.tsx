import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TaskInformationButton } from '@/components/TaskInformationButton/TaskInformation';
import { colors } from '@/styles/colors';

describe('Componente TaskInformationButton', () => {
    it('Deve renderizar o botão com título, número e cor corretos', () => {
        const titleText = 'Test Title';
        const numberValue = 5;
        const { getByText } = render(
            <TaskInformationButton number={numberValue} title={titleText} color={'purple'} onpress={() => {}} />
        );

        const titleElement = getByText(titleText);
        const numberElement = getByText(String(numberValue));
        const countViewElement = getByText(String(numberValue)).parentElement;

        expect(titleElement).toBeDefined();
        expect(numberElement).toBeDefined();
    });


    it('Deve chamar a função onPress quando o botão é clicado', () => {
        const onPressMock = jest.fn();
        const titleText = 'Test Title';
        const numberValue = 5;
        const { getByText } = render(
            <TaskInformationButton number={numberValue} title={titleText} color={'purple'} onpress={onPressMock} />
        );
        const touchableElement = getByText(titleText).parentElement.parentElement;

        fireEvent.press(touchableElement);
        expect(onPressMock).toHaveBeenCalled();
    });
});
