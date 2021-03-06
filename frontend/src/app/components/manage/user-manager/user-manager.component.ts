import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserType } from 'models/user-type.model';
import { UserTypeService } from 'services/user-type.service';
import { UserService } from 'services/user.service';

@Component({
  selector: 'crs-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  public manageForm: FormGroup;
  public userTypes: UserType[];
  public errors: string[];
  public success;

  constructor(
    private userTypeService: UserTypeService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.manageForm = this.initManageForm();
    this.getUserTypes();
    this.getUser();
  }

  submit() {
    if (this.manageForm.invalid) { return; }

    this.userService.updateUser(this.manageForm.value).subscribe(res => {
      this.errors = null;
      this.success = true;
    }, err => {
      this.errors = err.error.errors ? err.error.errors.map(error => error.description) : err.error.Password;
    });
  }

  reset() {
    this.manageForm.reset();
  }

  public getUserTypes() {
    this.userTypeService.getUserTypes().subscribe(userTypes => this.userTypes = userTypes, err => console.error(err));
  }

  private getUser() {
    this.userService.getUser().subscribe(res => {
      res.userTypeId = res.userType.id;
      this.manageForm.patchValue(res);
    }, err => console.error(err));
  }

  private initManageForm(): FormGroup {
    return new FormGroup({
      userName: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
      userTypeId: new FormControl(null, Validators.required)
    });
  }

  get userName() { return this.manageForm.get('userName'); }
  get firstName() { return this.manageForm.get('firstName'); }
  get lastName() { return this.manageForm.get('lastName'); }
  get email() { return this.manageForm.get('email'); }
  get userTypeId() { return this.manageForm.get('userTypeId'); }
}
