export type ColumnType = "todo" | "inprogress" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  column: ColumnType;
}

export interface Column {
  id: ColumnType;
  title: string;
}
