import { Component } from '@angular/core';
import { FormService } from '../service/form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent {

  constructor(private service: FormService, private route: Router, private activeRoute: ActivatedRoute) { }

  Arr = this.service.serviceArray

  RolesArr = this.service.rolesArray

  currentGroup: any = null


  setUser(id: any, $event: any) {
    if ($event.target.checked) {
      this.currentGroup.roles.push(id)
    } else {
      this.currentGroup.roles = this.currentGroup.roles.filter(function (item: number) {
        return item !== id
      })
    }
  }

  pickGroup(index: any) {
    this.currentGroup = index
  }

  edit(index: any) {
    this.route.navigate(['add-form/edit/' + index])
  }
}
