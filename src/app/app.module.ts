import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersianTimeAgoModule } from './persian-time-ago/persian-time-ago.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PersianTimeAgoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
