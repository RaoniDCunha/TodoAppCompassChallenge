import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'https://dummyjson.com/todos';

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}


interface TodosResponse {
    todos: Todo[];
    total: number;
    skip: number;
    limit: number;
}


interface SingleTodoResponse {
    todo: Todo;
}



interface TodoPayload {
    todo: string;
    completed?: boolean;
    userId?: number
}

const todoService = {

    async getAllTodos(): Promise<TodosResponse> {
        try {
            const response: AxiosResponse<TodosResponse> = await axios.get(`${API_BASE_URL}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar todos os TODOs:', error);
            throw error;
        }
    },


    async getTodoById(id: number): Promise<SingleTodoResponse> {
        try {
            const response: AxiosResponse<Todo> = await axios.get(`${API_BASE_URL}/${id}`);
            return { todo: response.data };
        } catch (error) {
            console.error(`Erro ao buscar TODO com ID ${id}:`, error);
            throw error;
        }
    },


    async createTodo(payload: TodoPayload): Promise<SingleTodoResponse> {
        try {
            const response: AxiosResponse<Todo> = await axios.post(API_BASE_URL + '/add', payload);
            return { todo: response.data };
        } catch (error) {
            console.error('Erro ao criar TODO:', error);
            throw error;
        }
    },

    async updateTodo(id: number, payload: TodoPayload): Promise<SingleTodoResponse> {
        try {
            const response: AxiosResponse<Todo> = await axios.put(`${API_BASE_URL}/${id}`, payload);
            return { todo: response.data };
        } catch (error) {
            console.error(`Erro ao atualizar TODO com ID ${id}:`, error);
            throw error;
        }
    },



    async deleteTodo(id: number): Promise<void> {
        try {
            await axios.delete(`${API_BASE_URL}/${id}`);
        } catch (error) {
            console.error(`Erro ao deletar TODO com ID ${id}:`, error);
            throw error;
        }
    },
};

export default todoService;
