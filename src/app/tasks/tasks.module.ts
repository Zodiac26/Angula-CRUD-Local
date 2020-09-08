import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { TasksService } from './tasks.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
{path:'',component:ListComponent},
{path:'detail',component:DetailComponent},
{path:'detail/:id',component:DetailComponent}
];
@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers:[TasksService]
})
export class TasksModule { }
