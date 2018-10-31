import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'diffDate'
})
export class DiffDatePipe implements PipeTransform {

  transform(date: string): any {
    const eDate = moment();
    const sDate = moment(date);

    const duration = eDate.diff(sDate, 'minutes');

    if (duration <= 60) {
      const min = eDate.diff(sDate, 'minutes');
      return `HÁ ${min} MINUTOS`;
    } else if (duration <= 1440) {
      const hrs = eDate.diff(sDate, 'hours');
      return `HÁ ${hrs} HORAS`;
    } else {
      const days = eDate.diff(sDate, 'days');
      return `HÁ ${days} DIAS`;
    }
  }

}
