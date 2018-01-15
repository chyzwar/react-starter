import axios from axios;

const TODOS_API = '/todos'

export const read = (): Promise<Todo[]> => {
  return axios.get(TODOS_API);
}

export const create = (todo: Todo): Promise<Todo> => {
  return axios.post(
    TODOS_API,
    todo
  );
}

export const update = (todo: Todo): Promise<Todo> => {
  return axios.put(
    TODOS_API,
    todo
  );
}

export const delete = (todo: Todo): Promise<Status> => {
  return axios.delete(
    TODOS_API,
    todo
  );
}

