// __tests__/TaskInformationButton.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TaskInformationButton } from '@/components/TaskInformationButton/TaskInformation';

import { colors } from '@/styles/colors';



test('TaskInformationButton renders with correct title and number', () => {
    const titleText = 'Test Title';
    const numberValue = 5;
    const { getByText } = render(
        <TaskInformationButton number={numberValue} title={titleText} color={'purple'} onpress={()=>{}}/>
    );

    const titleElement = getByText(titleText);
    const numberElement = getByText(String(numberValue));

    expect(titleElement).toBeDefined();
    expect(numberElement).toBeDefined();
});


test('TaskInformationButton renders with correct color for count view', () => {
    const titleText = 'Test Title';
    const numberValue = 5;
    const { getByText } = render(
        <TaskInformationButton number={numberValue} title={titleText} color={'green'} onpress={()=>{}}/>
    );

    const countViewElement = getByText(String(numberValue)).parentElement

    expect(countViewElement).toHaveStyle({ backgroundColor: colors.green.light });
});

test('TaskInformationButton renders with correct color for count text', () => {
    const titleText = 'Test Title';
    const numberValue = 5;
    const { getByText } = render(
        <TaskInformationButton number={numberValue} title={titleText} color={'green'} onpress={()=>{}}/>
    );

    const countTextElement = getByText(String(numberValue));

    expect(countTextElement).toHaveStyle({ color: colors.green.dark });
});

test('TaskInformationButton renders with correct color for count view when color is purple', () => {
    const titleText = 'Test Title';
    const numberValue = 5;
    const { getByText } = render(
        <TaskInformationButton number={numberValue} title={titleText} color={'purple'} onpress={()=>{}}/>
    );
    const countViewElement = getByText(String(numberValue)).parentElement

    expect(countViewElement).toHaveStyle({ backgroundColor: colors.purple.light });
});

test('TaskInformationButton renders with correct color for count text when color is purple', () => {
    const titleText = 'Test Title';
    const numberValue = 5;
    const { getByText } = render(
        <TaskInformationButton number={numberValue} title={titleText} color={'purple'} onpress={()=>{}}/>
    );
    const countTextElement = getByText(String(numberValue));
    expect(countTextElement).toHaveStyle({ color: colors.purple.dark });
});


test('TaskInformationButton calls onpress when pressed', () => {
    const onpressMock = jest.fn();
    const titleText = 'Test Title';
    const numberValue = 5;
    const { getByText } = render(
        <TaskInformationButton number={numberValue} title={titleText} color={'purple'} onpress={onpressMock} />
    );
    const touchableElement = getByText(titleText).parentElement.parentElement;

    fireEvent.press(touchableElement);
    expect(onpressMock).toHaveBeenCalled();
});
