import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  message = '';
  dtOptions: DataTables.Settings = {};
  item:[any];
  selectedMemberBody:''
  url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private httpClient: HttpClient) { }

  rowClickHandler(member: any): void {
    this.selectedMemberBody=member.body
  }

  ngOnInit(): void {
    this.httpClient.get(this.url).subscribe((res) => {
      this.item=<any>res
    });
  }
}