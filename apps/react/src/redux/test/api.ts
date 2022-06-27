import axios, { AxiosResponse } from "axios";


export const testApi = (): Promise<AxiosResponse> => axios.get('https://jsonplaceholder.typicode.com/todos')