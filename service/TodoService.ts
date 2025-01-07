import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://10.0.2.2:3000';

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

const todoService = {
    async getAllTodos(): Promise<Todo[]> {
        try {
            const response: AxiosResponse<Todo[]> = await axios.get<Todo[]>(`${API_BASE_URL}/tarefas`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar todos os TODOs:', error);
            throw error;
        }
    },

    async getTodoById(id: string): Promise<SingleTodoResponse> {
        try {
            const response: AxiosResponse<Todo> = await axios.get(`${API_BASE_URL}/tarefas/${id}`);
            return { todo: response.data };
        } catch (error) {
            console.error(`Erro ao buscar TODO com ID ${id}:`, error);
            throw error;
        }
    },

    async createTodo(payload: TodoPayload): Promise<SingleTodoResponse> {
        try {
            const response: AxiosResponse<Todo> = await axios.post(`${API_BASE_URL}/tarefas`, payload);
            return { todo: response.data };
        } catch (error) {
            console.error('Erro ao criar TODO:', error);
            throw error;
        }
    },

    async updateTodo(id: string, payload: TodoPayload): Promise<SingleTodoResponse> {
        try {
            const response: AxiosResponse<Todo> = await axios.put(`${API_BASE_URL}/tarefas/${id}`, payload);
            return { todo: response.data };
        } catch (error) {
            console.error(`Erro ao atualizar TODO com ID ${id}:`, error);
            throw error;
        }
    },

    async deleteTodo(id: string): Promise<void> {
        try {
            await axios.delete(`${API_BASE_URL}/tarefas/${id}`);
        } catch (error) {
            console.error(`Erro ao deletar TODO com ID ${id}:`, error);
            throw error;
        }
    },
};

export default todoService;
