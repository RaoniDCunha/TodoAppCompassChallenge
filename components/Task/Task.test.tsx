// __tests__/Task.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Task } from '@/components/Task/Task';


test('Task renders with correct title', () => {
    const titleText = 'Test Task';
    const { getByText } = render(
        <Task id='1' done={false} title={titleText} refreshList={()=>{}}/>
    );
    const titleElement = getByText(titleText);

    expect(titleElement).toBeDefined();
});


test('Task renders a circle when not done', () => {
    const { getByTestId } = render(
        <Task id='1' done={false} title='test' refreshList={()=>{}}/>
    );

    const circleElement =  getByTestId('circleView');

    expect(circleElement).toBeDefined();

});

test('Task renders a circle with check icon when done', () => {
    const { getByTestId, getByText } = render(
        <Task id='1' done={true} title='test' refreshList={()=>{}}/>
    );

    const checkIcon = getByTestId('circleViewDone');

    expect(checkIcon).toBeDefined()

});



test('Task calls updateTask when circle is pressed', async () => {
    const refreshListMock = jest.fn();
    const updateTodoMock = jest.fn()
    const { getByTestId } = render(<Task id='1' done={false} title='test' refreshList={refreshListMock}/>)
    const circleElement =  getByTestId('circleView');
    fireEvent.press(circleElement)


    await new Promise(resolve => setTimeout(resolve, 0));
    expect(refreshListMock).toHaveBeenCalled()
});

test('Task calls onClick when delete button is pressed', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
        <Task id='1' done={false} title='test' onClick={onClickMock} refreshList={()=>{}}/>
    );
    const deleteButton = getByText('delete');

    fireEvent.press(deleteButton);
    expect(onClickMock).toHaveBeenCalled();
});
