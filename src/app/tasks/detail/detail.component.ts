import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from '../tasks';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  taskForm:FormGroup;
  taskDetail:Tasks;
  taskId:string;
  initFormValue:any;
  isSubmit:boolean = false;

  constructor(private _fb : FormBuilder,private _tasksService:TasksService,private activatedRoute: ActivatedRoute,private router: Router) {
    this.taskForm = _fb.group({
      id: new FormControl(this.getnewTaskId()),
      task: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      status: new FormControl('',Validators.required),
      priority: new FormControl('',Validators.required),
    })
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.taskId = params['id'];
      this.taskDetail = this._tasksService.getTasksById(this.taskId);
      if(this.taskDetail){
        this.taskForm.patchValue(this.taskDetail);
      }
      this.initFormValue = this.taskForm.value;
    });
  }

  get frm(){
    return this.taskForm.controls;
  }

  getnewTaskId(){
    return this._tasksService.generateTaskId();
  }

  resetForm(){
    this.isSubmit = false;
    this.taskForm.reset(this.initFormValue);
  }

  submit(){
    this.isSubmit=true;
    if(!this.taskForm.valid){
      return false;
    }
    let task:Tasks = this.taskForm.value;
    this._tasksService.updateTasks(task);
    this.router.navigate(['/tasks']);
  }
}
