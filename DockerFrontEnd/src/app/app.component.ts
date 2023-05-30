import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DockerFrontEnd';

  config = {
    ApiUrl: 'https://localhost:4015',
  };

  response = 'Error: Loading Data';

  constructor(private home: HomeService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.refreshData();
    }, 2000);
  }

  refreshData() {
    this.home.getData().subscribe((data) => {
      this.response = data;
    });
  }
}
