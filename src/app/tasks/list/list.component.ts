import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tasks';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  taskList:Tasks[] = [];

  constructor(private _taskService:TasksService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.taskList = this._taskService.getTasks();
    console.log(this.taskList);
  }

  deleteTask(id:string){
    this._taskService.deleteTasks(id);
    this.getList();
  }
}
