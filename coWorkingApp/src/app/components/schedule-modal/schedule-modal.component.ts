import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Month, months } from 'src/app/interfaces/months';

@Component({
  selector: 'app-schedule-modal',
  templateUrl: './schedule-modal.component.html',
  styleUrls: ['./schedule-modal.component.css']
})
export class ScheduleModalComponent implements OnInit{

  @ViewChild('modalSchedule') modalSchedule!: TemplateRef<any>;

  private overlayRef: OverlayRef | null = null;
 

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) { }

  weekDays: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  months: Month[] = months;
  daysArray: number[] = [];
  startDayOfWeek: number = 0;
  selectedMonth: Month | null = null;
  selectedMonthIndex: number = 0;
  selectedDayIndex: number | null = null;
  selectedDayName: string | null = null;
 
  selectedDaysMap: { [monthNumber: number]: number[] } = {};


  ngOnInit() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    this.selectedMonthIndex = currentMonth;
    this.selectedMonth = this.months[currentMonth];
    this.generateDaysArray(this.selectedMonth.days);
    this.calculateStartDayOfWeek(this.selectedMonth);
  }
  

  generateDaysArray(numDays: number) {
    this.daysArray = Array.from({ length: numDays }, (_, i) => i + 1);
  }
  
  getDaysArray(month: Month): number[] {
    return Array.from({ length: month.days }, (_, i) => i + 1);
  }

 
 
  selectMonth(monthStartDay){
     this.monthName = monthStartDay.name
    console.log(monthStartDay)
  }
 
  monthName: string | null = null;
  
 

  selectDay(day: number) {
    this.selectedDayIndex = day;
    const startDay = this.startDayOfWeek;
    const dayOfWeek = (day + startDay - 1) % 7;
    this.selectedDayName = this.weekDays[dayOfWeek];
    console.log("Día seleccionado:", day);
   

  }
  
  
  isDaySelected(day: number): boolean {
    const monthNumber = this.selectedMonth.number;
    return this.selectedDaysMap[monthNumber]?.includes(day) ?? false;
  }

  
  getMonthsToShow(currentMonthIndex: number) {
    const numMonths = this.months.length;
    const prevMonthIndex = (currentMonthIndex - 1 + numMonths) % numMonths;
    const nextMonthIndex = (currentMonthIndex + 1) % numMonths;

    const extendedMonths = [];

    for (let i = prevMonthIndex; i < numMonths + nextMonthIndex + 1; i++) {
      const monthIndex = i % numMonths;
      const month = this.months[monthIndex];
      const startDay = (i - prevMonthIndex) * month.days % 7;
      const extendedMonth = {
        number: month.number,
        name: month.name,
        days: month.days,
        startDay: startDay,
      };
      extendedMonths.push(extendedMonth);
    }

    return extendedMonths;
  }
  
  
  calculateStartDayOfWeek(month: Month) {
    const year = new Date().getFullYear(); 
    const startDate = new Date(year, month.number - 1, 1); 
    let startDay = startDate.getDay();
    if (startDay === 0) {
      startDay = 6; 
    } else {
      startDay -= 1; 
    }
    this.startDayOfWeek = startDay;
    console.log(this.startDayOfWeek); 
  }
  

  
  getColumnStart(index: number): number {
    return (index + this.startDayOfWeek) % 7 + 1; 
  }
  


  openModalSchedule(): void {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
        hasBackdrop: true
      });
      this.overlayRef.attach(new TemplatePortal(this.modalSchedule, this.viewContainerRef));
    }
  }


  closeModalSchedule(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null!;
    }
  }
}
