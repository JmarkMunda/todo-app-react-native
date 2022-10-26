import { ActionType, ITask } from "../reducer/reducer.interface";

export type ITaskProps = {
  data: ITask;
  dispatch: React.Dispatch<ActionType>;
};
