export type ITask = {
  id?: number;
  title?: string;
  completed?: boolean;
};

export type ActionType = { type: string; payload: ITask };
