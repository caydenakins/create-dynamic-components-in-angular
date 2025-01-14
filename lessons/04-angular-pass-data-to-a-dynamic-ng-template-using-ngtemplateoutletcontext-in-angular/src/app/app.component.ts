import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PeopleService } from './people/people.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular tabs</h1>
    <ngx-tabs>
      <ngx-tab tabTitle="People List">
        <app-people-list [people]="people"></app-people-list>
      </ngx-tab>
      <ngx-tab tabTitle="Tab 2" [template]="personEdit" [dataContext]="people[0]"></ngx-tab>
    </ngx-tabs>

    <ng-template let-person="data" #personEdit>
      Hi, I'm {{ person?.name }}.
    </ng-template>
  `
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('personEdit', { static: true }) personEditTemplate;
  people;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  ngAfterViewInit() {
    console.log(this.personEditTemplate);
  }
}
