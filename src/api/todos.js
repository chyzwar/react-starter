import axios from 'axios';

const TODOS_API = '/todos';

export const read = (): Promise<Todo[]> => axios.get(
  TODOS_API
);

export const create = (todo: Todo): Promise<Todo> => axios.post(
  TODOS_API,
  todo,
);

export const update = (todo: Todo): Promise<Todo> => axios.put(
  `TODOS_API/${todo.id}`,
  todo,
);

export const remove = (todo: Todo): Promise<Status> => axios.delete(
  `TODOS_API/${todo.id}`,
  todo,
);

