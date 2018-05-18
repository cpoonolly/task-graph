import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "../task.model";

// This is bad practice but just doing it to see if i can >:D
@Pipe({
  name: 'taskSearch',
  pure: false
})
export class TaskSearchFilterPipe implements PipeTransform {
  transform(tasks: Task[], searchQuery: string): Task[] {
    if (!searchQuery) {
      return tasks;
    }

    return tasks
      .filter((task) => task.taskName.includes(searchQuery))
      .sort((taskA: Task, taskB: Task) => {
        let queryMatchPositionA = taskA.taskName.indexOf(searchQuery);
        let queryMatchPositionB = taskB.taskName.indexOf(searchQuery);

        return queryMatchPositionB - queryMatchPositionA;
      });
  }
}
