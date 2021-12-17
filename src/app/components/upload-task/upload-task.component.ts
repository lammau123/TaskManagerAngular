import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event){
    const files: File[] = event.target.files;
    if(files.length > 0){
      const formData = new FormData();
      formData.append("file", files[0]);
      const upload = this.http.post<any>(`${environment.taskService}/upload`, formData);
      upload.subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }
  }
}
