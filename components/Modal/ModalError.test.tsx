import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {ModalError} from "@/components/Modal/ModalError";

describe('Componente ModalError', () => {
    it('Renderiza modal de erro e chama funções ao clicar', () => {
        const mockRefreshList = jest.fn();
        const mockCloseModal = jest.fn();

        const { getByText } = render(
            <ModalError
                modalvisible={true}
                refreshList={mockRefreshList}
                closemodal={mockCloseModal}
            />
        );

        expect(getByText('ERRO')).toBeDefined();
        expect(getByText('Erro ao receber dados da API.')).toBeDefined();

        const tryAgainButton = getByText('Tentar novamente');
        fireEvent.press(tryAgainButton);
        expect(mockRefreshList).toHaveBeenCalledTimes(1);
        expect(mockCloseModal).toHaveBeenCalledTimes(1);
    });
});
