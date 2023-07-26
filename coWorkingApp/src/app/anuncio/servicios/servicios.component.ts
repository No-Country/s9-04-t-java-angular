import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  faLeft=faArrowLeft;
  testform;

  services:any[]=[
    'Sala de reunion',
    'Wifi',
    'Estacionamiento',
    'Lockers',
    'Calefacción',
    'Aire acondicionado',
    'Impresora',
    'Espacio exterior',
  ]

  constructor (
    private fb : FormBuilder){
      this.testform=this.fb.group({
        services:this.fb.array([])
      })
    }

  handleServices(e:any){

    let serviceArr = this.testform.get('services') as FormArray;
    if(e.target.checked){
      serviceArr.push(new FormControl(e.target.value))
    }
    else{
      let i=0
      serviceArr.controls.forEach(
        (s:any)=>{
          if(s.value==e.taget.value){
            serviceArr.removeAt(i);
            return
          }
          i++
        }
      )
    }
    console.log(this.testform.get('services')?.value)
  }

}
