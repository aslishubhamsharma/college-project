import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service:EmployeeService,
         private firestore:AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }
       
  resetForm(from?:NgForm){
    if(from !=null)

    from.resetForm();
    this.service.formData={

      id: null,
      fullName: '',
      position: '',
      empCode: '',
      mobile: '',
    }
  }
  onSubmit(form: NgForm) {
    let data =form.value;
  
    this.firestore.collection('employees').add(data);
    this.resetForm(form);   
    
  }

  clickMethod(name: string) {
    if(confirm("Are you sure to Submit Details "+name)) {
      //console.log("Implement delete functionality here");
    }
  }
}



