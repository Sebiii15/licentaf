import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@app/_models';
import { UserService } from './users.service';

@Component({
  selector: 'user-edit.dialog',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UserEditDialogComponent {

  form: FormGroup;
 
  options: string[] = ['1', '2', '3' ,'4'];

  constructor(public dialogRef: MatDialogRef<UserEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User, public userService: UserService) {
    this.initForm();
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(id: string): void {
    this.userService.updateUser(this.form.value).subscribe(data => {
      this.userService.dialogData = data;
      this.dialogRef.close();
    },
      (error: HttpErrorResponse) => {
        
      });
  }

  private initForm() {
    this.form = new FormGroup(
      { 'id': new FormControl(this.data.id, [Validators.required]),
        'username': new FormControl(this.data.username, [Validators.required]),
        'password': new FormControl(this.data.password, [Validators.required]),
        'email': new FormControl(this.data.email, [Validators.required]),
        'role': new FormControl(this.data.role, [Validators.required])
      });
  }

}
