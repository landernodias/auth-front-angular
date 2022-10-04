import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  public msgError!:string; //primeiro ele é vasio depois é uma string

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService
      ) {

  }

  ngOnInit(): void {
  }

  public submitForm(){
    if(this.formAuth.valid) {
      this.authService.sign({
        email: this.formAuth.value.email,
        password: this.formAuth.value.password,
      }).subscribe({ //subscribe escuta as requisiões http
        next: (res) => res,
        error: (e) => (this.msgError = e),
      })
    }
  }

}
