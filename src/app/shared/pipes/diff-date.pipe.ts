import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'diffDate'
})
export class DiffDatePipe implements PipeTransform {

  transform(date: string): any {
    moment.updateLocale('pt', {
      relativeTime: {
        future: 'em %s',
        past: '%s atrás',
        s: 'alguns segundos',
        ss: '%d segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mê',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos'
      }
    });
    const sDate = moment(date);
    return sDate.fromNow();
  }

}
