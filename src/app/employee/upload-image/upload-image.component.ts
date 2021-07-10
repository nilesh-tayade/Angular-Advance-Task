import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute ,private router:Router) { }

id;

  ngOnInit(): void {
this.id=this.route.snapshot.params.id
  }

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    
  }

  onUpload() {
    console.log(this.selectedFile);
    
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.http.post('http://localhost:8080/employees/upload/'+this.id, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          Swal.fire('Success...', 'Profile Image Uploaded  Successfully!', 'success')
          this.router.navigate(['/employee/employee-list']);
        } else {
          Swal.fire('Error...', 'Something Went Wrong !', 'error')
        }
      }
      );
  }


}
