import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Router, RouterModule } from '@angular/router';
import { List } from '../../models/list.model';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [RouterModule,HttpClientModule],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.scss'
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router){}

  ngOnInit(): void {
      
  }

  createListt(title: string) {
    this.taskService.createList(title).subscribe((list: List) => {
      console.log(list);
      // Now we navigate to /lists/task._id
      this.router.navigate([ '/lists', list._id ]); 
    });
  }
}
