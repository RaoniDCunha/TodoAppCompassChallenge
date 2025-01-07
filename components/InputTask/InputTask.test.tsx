// __tests__/seuComponente.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Text } from 'react-native';
import {InputTask} from "@/components/InputTask/InputTask";


test('seuComponente renders com a props texto correta', () => {
    const textoProps = 'Teste de texto';
    const {getByText} = render(<InputTask title={textoProps} />)

    const textElement = getByText(textoProps)

    expect(textElement).toBeDefined()


});

test('InputTask renders with correct placeholder', () => {
    const titleText = 'Test Input';
    const { getByPlaceholderText } = render(
        <InputTask title={titleText} />
    );

    const inputElement = getByPlaceholderText(titleText);
    expect(inputElement).toBeDefined();
});


test('InputTask calls onChangeText when text changes', () => {
    const onChangeTextMock = jest.fn();
    const titleText = 'Test Input';
    const { getByPlaceholderText } = render(<InputTask title={titleText} onChangeText={onChangeTextMock}/>);

    const inputElement = getByPlaceholderText(titleText);
    fireEvent.changeText(inputElement, 'Teste');

    expect(onChangeTextMock).toHaveBeenCalledWith('Teste');
});


test('InputTask renders with error style if error prop is true', () => {
    const titleText = 'Test Input';
    const { getByPlaceholderText, getByTestId } = render(
        <InputTask title={titleText} error={true} />
    );


    const inputElement = getByPlaceholderText(titleText)
    const viewElement = inputElement.parentElement;
    expect(viewElement).toHaveStyle({
        borderColor: '#DC3545',
    });

});


test('InputTask renders without error style if error prop is false', () => {
    const titleText = 'Test Input';
    const { getByPlaceholderText, getByTestId } = render(
        <InputTask title={titleText} error={false} />
    );

    const inputElement = getByPlaceholderText(titleText)
    const viewElement = inputElement.parentElement;
    expect(viewElement).toHaveStyle({
        borderColor: '#CED4DA',
    });

});
