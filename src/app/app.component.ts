import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly examples = [
    { label: '10 seconds ago', value: this.getIsoBefore(10 * 1000) },
    { label: '5 minutes ago', value: this.getIsoBefore(5 * 60 * 1000) },
    { label: '2 hours ago', value: this.getIsoBefore(2 * 60 * 60 * 1000) },
    { label: '3 days ago', value: this.getIsoBefore(3 * 24 * 60 * 60 * 1000) },
    { label: '8 months ago', value: this.getIsoBefore(240 * 24 * 60 * 60 * 1000) }
  ];

  private getIsoBefore(milliseconds: number): string {
    return new Date(Date.now() - milliseconds).toISOString();
  }
}
