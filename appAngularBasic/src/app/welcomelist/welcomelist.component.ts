import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-welcomelist',
  templateUrl: './welcomelist.component.html',
  styleUrls: ['./welcomelist.component.css']
})
export class WelcomelistComponent implements OnInit {

  taskTitleList: any[];

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.getTasks().subscribe((listOfTasks) => {
      this.taskTitleList = listOfTasks.map((task: any) => {
        return task.title;
      })
    })
  }

  get dataList(): Person[] {
    return this.filterService.getPerson();
  }


}
