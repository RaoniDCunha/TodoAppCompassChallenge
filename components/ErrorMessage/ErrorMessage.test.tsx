import React from 'react';
import { render } from '@testing-library/react-native';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';

describe('Componente ErrorMessage', () => {
    it('Renderiza o componente com o texto fornecido', () => {
        const testText = 'Este é um erro de teste';
        const { getByText } = render(<ErrorMessage text={testText} />);
        expect(getByText(testText)).toBeDefined();
    });
});
