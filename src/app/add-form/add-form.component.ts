import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../service/form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  title = "Add Group";
  submit = false;
  index: any;
  item: any;

  constructor(
    private form: FormBuilder,
    private serviceArr: FormService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.index = this.activeRoute.snapshot.paramMap.get('index');
    if (this.index !== null && +this.index >= 0 && +this.index < this.serviceArr.serviceArray.length) {
      this.item = this.serviceArr.serviceArray[+this.index];
      this.addform.patchValue({
        Name: this.item.Name,
      });
    } else {
      this.index = null;  // reset index if invalid
      this.item = null;
    }
  }

  addform = this.form.group({
    Name: ['', Validators.required],
  });

  get formData() {
    return this.addform.controls;
  }

  onSubmit() {
    this.submit = true;

    if (this.addform.valid) {
      const formValue = this.addform.value;
      const group = {
        Name: formValue.Name,
        roles: this.item ? this.item.roles : []
      };

      this.serviceArr.addOrUpdateGroup(this.index, group);
      this.route.navigate(['']);
      this.addform.reset();
    }
  }

  resetForm() {
    this.addform.reset();
  }
}
