import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { FormService } from '../service/form.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  title = "Add Group"
  submit = false
  // editData :any;
  FormDataArray: any[] = []
  index: any;
  item: any;

  ngOnInit(): void {
    this.index = this.activeRoute.snapshot.paramMap.get('index');
    console.log('Index is', this.index);
    if (this.index >= 0 && this.index < this.serviceArr.serviceArray.length) {

      this.item = this.serviceArr.serviceArray[this.index];
      console.log('Item is', this.item);
      this.addform.patchValue({
        Name: this.item.Name,
      });
    } else {
      console.error('Invalid index');
    }

  }

  constructor(private form: FormBuilder,
    private serviceArr: FormService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }


  addform = this.form.group({
    Name: ['', Validators.required],
  })

  get formData() {
    return this.addform.controls;
  }

  onSubmit() {
    this.submit = true;

    if (this.addform.valid) {
      if (this.item && this.item.Name) {
        this.item = this.addform.value
        const itemIndex = this.serviceArr.serviceArray.findIndex((element) => element.id === this.item.id);
        this.serviceArr.serviceArray[itemIndex] = this.item;
        console.log(this.serviceArr.serviceArray[itemIndex]);


      } else {
        this.FormDataArray.push(this.addform.value);
        this.serviceArr.serviceArray.push(this.addform.value);
        console.log(this.serviceArr.serviceArray);
        const newItem = this.addform.value;
        // this.serviceArr.serviceArray.push(newItem);
      }

      this.route.navigate(['']);
      this.addform.reset();


    }
  }


  resetForm() {
    this.addform.reset();
  }

}




