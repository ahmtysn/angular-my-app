import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title: string = 'Task Tracker';
    btnName: string = 'Header button';

    toggleAddTask() {
        console.log('toggle')
    }
}
