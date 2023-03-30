import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) { }
  logs: Array<{
    user_id: string,
    id: string,
    created_at: string,
    action: string,
  }> = []

  ngOnInit() {
    this.http.get<Array<{
      user_id: string,
      id: string,
      created_at: string,
      action: string,
    }>>('https://api.fms.software/admin/get/logs').subscribe((e) => {
      this.logs = e
    })
  }
}
