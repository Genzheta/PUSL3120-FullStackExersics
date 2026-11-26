//app.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {

  title = 'train-app';

  trains: any[] = [];

  constructor(public httpClient: HttpClient) {}

  ngOnInit() {

    this.httpClient.get(
      'https://web.socem.plymouth.ac.uk/COMP3006/trains/trains/'
    ).subscribe((res: any) => {
      this.trains = res.trains;
    });

  }
}
