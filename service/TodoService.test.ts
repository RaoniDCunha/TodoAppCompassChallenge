import axios, { AxiosResponse } from 'axios';
import todoService from "@/service/TodoService";


interface Todo {
    id: string;
    todo: string;
    completed: boolean;
    userId: number;
}

type TodosResponse = Todo[];

interface SingleTodoResponse {
    todo: Todo;
}

interface TodoPayload {
    todo: string;
    completed?: boolean;
    userId?: number
}

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const API_BASE_URL = 'http://10.0.2.2:3000';

describe('testes do todoService', () => {
    const mockTodo: Todo = {
        id: '1',
        todo: 'Test Todo',
        completed: false,
        userId: 1,
    };

    const mockTodos: Todo[] = [
        { id: '1', todo: 'Todo 1', completed: false, userId: 1 },
        { id: '2', todo: 'Todo 2', completed: true, userId: 2 },
    ];

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('retorna um array de todos', async () => {
        mockedAxios.get.mockResolvedValue({ data: mockTodos } as AxiosResponse<Todo[]>);

        const todos = await todoService.getAllTodos();
        expect(todos).toEqual(mockTodos);
        expect(mockedAxios.get).toHaveBeenCalledWith(`${API_BASE_URL}/tarefas`);
    });

    it('teste retorna erro quando na fetch', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Failed to fetch todos'));

        await expect(todoService.getAllTodos()).rejects.toThrow('Failed to fetch todos');
        expect(mockedAxios.get).toHaveBeenCalledWith(`${API_BASE_URL}/tarefas`);
    });



    it('cria um novo todo', async () => {
        mockedAxios.post.mockResolvedValue({ data: mockTodo } as AxiosResponse<Todo>);

        const newTodo = { todo: 'New Todo', completed: false, userId: 1 };
        const createdTodo = await todoService.createTodo(newTodo);

        expect(createdTodo).toEqual({ todo: mockTodo });
        expect(mockedAxios.post).toHaveBeenCalledWith(`${API_BASE_URL}/tarefas`, newTodo);
    });

    it('createTodo retorna erro em falha', async () => {
        mockedAxios.post.mockRejectedValue(new Error('Failed to create todo'));
        const newTodo = { todo: 'New Todo', completed: false, userId: 1 };

        await expect(todoService.createTodo(newTodo)).rejects.toThrow('Failed to create todo');
        expect(mockedAxios.post).toHaveBeenCalledWith(`${API_BASE_URL}/tarefas`, newTodo);
    });


    it('updateTodo atualiza o todo', async () => {
        mockedAxios.put.mockResolvedValue({ data: mockTodo } as AxiosResponse<Todo>);

        const updatedTodo = { todo: 'Updated Todo', completed: true };
        const result = await todoService.updateTodo('1', updatedTodo);

        expect(result).toEqual({ todo: mockTodo });
        expect(mockedAxios.put).toHaveBeenCalledWith(`${API_BASE_URL}/tarefas/1`, updatedTodo);
    });

    it('updateTodo retorna erro quando falha', async () => {
        mockedAxios.put.mockRejectedValue(new Error('Failed to update todo'));
        const updatedTodo = { todo: 'Updated Todo', completed: true };

        await expect(todoService.updateTodo('1', updatedTodo)).rejects.toThrow('Failed to update todo');
        expect(mockedAxios.put).toHaveBeenCalledWith(`${API_BASE_URL}/tarefas/1`, updatedTodo);
    });

    it('deleteTodo deleta com sucesso o todo', async () => {
        mockedAxios.delete.mockResolvedValue({} as AxiosResponse<void>);
        await todoService.deleteTodo('1');
        expect(mockedAxios.delete).toHaveBeenCalledWith(`${API_BASE_URL}/tarefas/1`);
    });

    it('deleteTodo retorna erro quando falha', async () => {
        mockedAxios.delete.mockRejectedValue(new Error('Failed to delete todo'));

        await expect(todoService.deleteTodo('1')).rejects.toThrow('Failed to delete todo');
        expect(mockedAxios.delete).toHaveBeenCalledWith(`${API_BASE_URL}/tarefas/1`);
    });
});
