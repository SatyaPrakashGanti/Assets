import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
registrationForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // this.registrationForm=new FormGroup({
    //   userName: new FormControl(null,Validators.required),
    //   email: new FormControl(null,[Validators.required,Validators.email]),
    //   password: new FormControl(null,[Validators.required]),
    //   confirmPassword:new FormControl(null,[Validators.required]),
    //   mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    // },this.passwordMatchingValidator);
    this.createregistrationForm();
  }
  passwordMatchingValidator(fg:FormGroup): Validators
  {
    return fg.get('password').value===fg.get('confirmPassword').value? null: {notmatched:true};
  }
  // Getter methods for all form controls
  get UserName()
  {
    return this.registrationForm.get('userName') as FormControl;
  }
  get Email()
  {
    return this.registrationForm.get('email') as FormControl;
  }
  get Password()
  {
    return this.registrationForm.get('password') as FormControl;
  }
  get ConfirmPassword()
  {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get Mobile()
  {
    return this.registrationForm.get('mobile') as FormControl;
  }
  createregistrationForm()
  {
      this.registrationForm= this.fb.group({
      userName: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required]),
      confirmPassword:new FormControl(null,[Validators.required]),
      mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    },{validators:this.passwordMatchingValidator});
  }
  onSubmit()
  {
    console.log(this.registrationForm);
  }
}
