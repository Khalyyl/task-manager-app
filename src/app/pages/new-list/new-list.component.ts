import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.scss'
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
      
  }

  createList(title:String){
    this.taskService.createList('title').subscribe((response: any) => {
      console.log(response);
      // Need to navigate to new list
    })

  }
}
