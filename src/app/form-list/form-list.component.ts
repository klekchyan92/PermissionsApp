import { Component, OnInit } from '@angular/core';
import { FormService } from '../service/form.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
  Arr = this.service.serviceArray;
  RolesArr = this.service.rolesArray;
  filteredRoles = this.RolesArr;
  currentGroup: any = null;
  searchTerm: string = '';
  filterOption: string = 'all';
  currentPage: number = 1;

  constructor(private service: FormService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.filterRoles();
  }

  setUser(id: any, $event: any) {
    if ($event.target.checked) {
      this.currentGroup.roles.push(id);
    } else {
      this.currentGroup.roles = this.currentGroup.roles.filter((item: number) => item !== id);
    }
  }

  pickGroup(group: any) {
    this.currentGroup = group;
    this.filterRoles();
  }

  edit(index: any) {
    this.route.navigate(['add-form/edit/' + index]);
  }

  filterRoles() {
    let roles = this.RolesArr;

    if (this.filterOption === 'marked') {
      roles = roles.filter(role => this.currentGroup.roles.includes(role.id));
    } else if (this.filterOption === 'label') {
    }

    if (this.searchTerm) {
      roles = roles.filter(role => role.Name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    this.filteredRoles = roles;
  }
}
