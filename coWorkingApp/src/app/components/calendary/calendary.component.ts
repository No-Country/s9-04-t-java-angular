import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrls: ['./calendary.component.css']
})

export class CalendaryComponent {

  showEntradaCalendar: boolean = false;
  showSalidaCalendar: boolean = false;

  showCalendar(type: string) {
    if (type === 'entrada') {
      this.showEntradaCalendar = !this.showEntradaCalendar;
      this.showSalidaCalendar = false;
    } else if (type === 'salida') {
      this.showSalidaCalendar = !this.showSalidaCalendar;
      this.showEntradaCalendar = false;
    }
  }

  public events: any[];
  public options: any;

  ngOnInit() {

    this.options = {
      plugins: [dayGridPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      header:{
        left:'Prev, next',
        center: 'title',
        right: 'dayGridMonth, timeGridweek, timeGridDay'
      },
      editable: false
    }

    this.events = [
      {
        title: "Evento 1",
        start: new Date (),
        description: "Evento 1 nashe"
      },
      {
        title: "Evento 2",
        start: new Date(new Date().getTime() + 86400000),
        description: "Evento 2 nashe"
      },
      {
        title: "Evento 3",
        start: new Date(new Date().getTime() + (86400000 * 2) ),
        end: new Date(new Date().getTime() + (86400000 * 3) ),
        description: "Evento 3 nashe"
      }
    ]

  }

}
