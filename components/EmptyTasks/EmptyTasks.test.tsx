import React from 'react';
import { render } from '@testing-library/react-native';
import { EmptyTasks } from '@/components/EmptyTasks/EmptyTasks';

describe('Componente EmptyTasks', () => {
    it('Renderiza o componente com ícone e textos', () => {
        const { getByTestId, getByText } = render(<EmptyTasks />);

        const iconElement = getByTestId('Feather');
        expect(iconElement).toBeDefined();
        expect(iconElement.props.name).toBe('clipboard');

        expect(getByText('Você ainda não tem tarefas cadastradas')).toBeDefined();
        expect(getByText('Crie tarefas e organize seus itens a fazer')).toBeDefined();
    });
});
