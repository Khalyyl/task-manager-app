import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  getLists() {
    // We want to send a web request to get all lists
    return this.webReqService.get('lists');
  }

  createList(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('lists', {title});
  }

  getTasks(listId: string) {
    // We want to send a web request to get all tasks
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  
}