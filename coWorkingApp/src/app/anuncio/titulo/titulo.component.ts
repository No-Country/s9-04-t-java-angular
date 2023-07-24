import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PostService } from '../services-anuncio/services-anuncio/post.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent {
  faLeft=faArrowLeft;
  inputData:string='';
  apiResponse: any;




  constructor(private postcowo: PostService) { }

  sendData() {
    const dataToSend = {
      inputData : this.inputData
    };

    this.postcowo.postToApi(dataToSend).subscribe(
      (response) => {
        console.log('API response:', response);
        this.apiResponse = response;
      }
    );
  }
}
