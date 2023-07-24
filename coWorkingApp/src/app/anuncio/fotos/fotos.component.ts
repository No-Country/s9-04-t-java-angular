import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'



@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent {
  faLeft=faArrowLeft;
  file: File | null = null

  dropFile(event: any) {
    const files: File[] = event.container.data; // Get the dropped files
    this.file = files[0]; // Only handle the first dropped file (you can modify this as needed)
    this.processFiles(this.file);
  }

  uploadFiles(event: any) {
    const files: FileList = event.target.files; // Get the selected files
    this.file = files[0]; // Only handle the first selected file (you can modify this as needed)
    this.processFiles(this.file);
  }

  processFiles(file: File) {
    // You can process the file here, for example, save it to a server or do something else with it.
    // For this example, let's just log the file name to the console.
    console.log('File name:', file.name);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Prevent the default behavior of showing the image preview
  }

  onDrop(event: DragEvent) {
    event.preventDefault(); // Prevent the default behavior of opening the dropped file
  }

}
