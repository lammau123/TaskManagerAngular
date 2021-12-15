import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {

  constructor(/*private http: HttpClient*/) { }

  ngOnInit(): void {
  }

  onFileSelected(event){
    const file: File = event.target.files[0];
    if(file){
      console.log(file.name);
      const formData = new FormData();
      formData.append("file", file);
      //const upload$ = this.http.post("/api/thumbnail-upload", formData);
      //upload$.subscribe();
    }
  }
}
