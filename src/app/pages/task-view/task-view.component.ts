import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [HttpClientModule,RouterModule,NgFor,CommonModule],
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: any[] = [];
  tasks: any;


  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

 ngOnInit(){
  this.route.params.subscribe(
    (params: Params) => {
      console.log(params);
      this.taskService.getTasks(params['listId']).subscribe((tasks: any) => {
        this.tasks = tasks;
      }
      )
    }
  );

  this.taskService.getLists().subscribe((lists: any) => {
    this.lists = lists;
    
  })
  
   
    }
   

  

   

}


