import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://www.todoapi.com/';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// Define o tipo de resposta para uma lista de TODOs
interface TodosResponse {
    data: Todo[];
}

// Define o tipo para a resposta de um único TODO
interface SingleTodoResponse {
    data: Todo;
}


// Define o tipo para o payload ao criar/atualizar um TODO
interface TodoPayload {
    title: string;
    completed?: boolean;
}

const todoService = {
    // Buscar todos os TODOs
    async getAllTodos(): Promise<TodosResponse> {
        try {
            const response: AxiosResponse<Todo[]> = await axios.get(`${API_BASE_URL}todos`);
            return { data: response.data }; // Retorna um objeto com os dados
        } catch (error) {
            console.error('Erro ao buscar todos os TODOs:', error);
            throw error;
        }
    },

    // Buscar um TODO específico por ID
    async getTodoById(id: number): Promise<SingleTodoResponse> {
        try {
            const response: AxiosResponse<Todo> = await axios.get(`${API_BASE_URL}todos/${id}`);
            return { data: response.data };
        } catch (error) {
            console.error(`Erro ao buscar TODO com ID ${id}:`, error);
            throw error;
        }
    },

    // Criar um novo TODO
    async createTodo(payload: TodoPayload): Promise<SingleTodoResponse> {
        try {
            const response: AxiosResponse<Todo> = await axios.post(`${API_BASE_URL}todos`, payload);
            return { data: response.data };
        } catch (error) {
            console.error('Erro ao criar TODO:', error);
            throw error;
        }
    },
    // Atualizar um TODO existente
    async updateTodo(id: number, payload: TodoPayload): Promise<SingleTodoResponse> {
        try {
            const response: AxiosResponse<Todo> = await axios.put(`${API_BASE_URL}todos/${id}`, payload);
            return { data: response.data };
        } catch (error) {
            console.error(`Erro ao atualizar TODO com ID ${id}:`, error);
            throw error;
        }
    },


    // Deletar um TODO por ID
    async deleteTodo(id: number): Promise<void> {
        try {
            await axios.delete(`${API_BASE_URL}todos/${id}`);
        } catch (error) {
            console.error(`Erro ao deletar TODO com ID ${id}:`, error);
            throw error;
        }
    },
};

export default todoService;
