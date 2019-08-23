import { Component , OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TestTutorial';
  dayInWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  timezones: [''];
  timeZoneIndex: string;
  disambiguation: string;
  firstHourDigit: number;
  secondHourDigit: number;
  firstMinuteDigit: number;
  secondMinuteDigit: number;
  firstSecondDigit: number;
  secondSecondDigit: number;

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.setDateTime();
    });
  }

  public setDateTime() {
    const datetime = new Date();
    const hours = this.padding(datetime.getHours());
    const minutes = this.padding(datetime.getMinutes());
    const seconds = this.padding(datetime.getSeconds());

    this.firstHourDigit = parseInt(hours[0], 0);
    this.secondHourDigit = parseInt(hours[1], 0);
    this.firstMinuteDigit = parseInt(minutes[0], 0);
    this.secondMinuteDigit = parseInt(minutes[1], 0);
    this.firstSecondDigit = parseInt(seconds[0], 0);
    this.secondSecondDigit = parseInt(seconds[1], 0);

    this.updateDayDisplay(datetime.getDay());
    this.updateBackgroundTheme(datetime.getHours());

    return true;
  }

  public padding(n: number): string {
    let txtNumber = n.toString();

    if (n < 10) {
      txtNumber = `0${txtNumber}`;
    }
    return txtNumber;
  }

  public updateDayDisplay(dayOfWeek: number) {
    const weekElements = document.querySelectorAll('.date');

    weekElements.forEach((element, key) => {
      if (key === dayOfWeek) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });

    return true;
  }

  public updateBackgroundTheme(hours: number) {
    const daylight = document.getElementsByClassName('daylight') as HTMLCollectionOf<HTMLElement>;
    const nightlight = document.getElementsByClassName('nightlight') as HTMLCollectionOf<HTMLElement>;

    if (5 < hours && hours > 18) {
      daylight[0].style.display = 'none';
      nightlight[0].style.display = 'block';
      return 0;
    } else {
      daylight[0].style.display = 'block';
      nightlight[0].style.display = 'none';
      return 1;
    }
  }
}
