import { TaskGraphNode } from "./task-graph-node.model";
import { Task } from "./task.model";

export class TaskGraph {
  root: TaskGraphNode;
  nodes: {[key: number]: TaskGraphNode};
  tasks: {[key: number]: Task}
}
