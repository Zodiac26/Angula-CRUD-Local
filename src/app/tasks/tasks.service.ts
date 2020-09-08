import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tasks } from './tasks';
import * as data  from '../../assets/tasks.json';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  nextId:number = 0;
  constructor(private http: HttpClient) { }

  tasks:Tasks[] = data.data;

  getTasks() {
    return this.tasks.filter(x=>x.isDelete == false);
  }

  getTasksById(id:string) {
    return this.tasks.find(x=>x.id == id);
  }
  
  addTasks(task:Tasks) {
    return this.tasks.push(task);
  }

  updateTasks(task:Tasks) {
      task.isDelete = false;
      if(task.id){
      let index = this.tasks.findIndex(x=>x.id == task.id);
      console.log(index);
      if(index != -1){
        this.tasks[index] = task;
      }
      else{
       this.tasks.push(task);
      }
    }
    return this.tasks;
  }

  deleteTasks(id:string) {
    if(id){
      let index = this.tasks.findIndex(x=>x.id == id);
      if (index !== -1) {
        this.tasks[index].isDelete = true;
      }  
    }
    return this.tasks;
  }

  generateTaskId(){
    let lastId = 0;
      if(this.nextId == 0 && this.tasks.length != 0){
      lastId = parseInt(this.tasks[this.tasks.length-1].id.split('-')[1]);
    }
    lastId = lastId;
    return 'T-' + (lastId + 1);
  }
}
