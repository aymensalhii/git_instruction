import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { WindowService } from 'src/app/common/services/window.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signup: boolean = false;

  countries: any[] = [
    {name: '+973', code: 'BH', flag: 'bh', mask: '99-999999'},
    {name: '+965', code: 'KW', flag: 'kw', mask: '9999-9999'},
    {name: '+968', code: 'OM', flag: 'om', mask: '9999-9999'},
    {name: '+974', code: 'QA', flag: 'qa', mask: '9999-9999'},
    {name: '+966', code: 'SA', flag: 'sa', mask: '99-999-9999'},
    {name: '+971', code: 'AE', flag: 'ae', mask: '9999-9999'}
  ];

  selectedCountry: any = {name: '+974', code: 'QA', flag: 'qa', mask: '9999-9999'};
  tlf!: string;
  step: number = 0;
  winRef: any;
  verifyOtpString:string = "";

  constructor(
    windowRef: WindowService,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.winRef = windowRef;
  }

  ngOnInit() {}

  onCodeChanged(e: any) {

  }
  onCodeCompleted(e: any) {
    this.verifyOtpString = e;
    this.verifyOTP();
  }

  Login() {
    const auth = getAuth();

    this.winRef.RecaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
      "size": "invisible",
    }, auth);

    const appVerifier = this.winRef.RecaptchaVerifier;

    signInWithPhoneNumber(auth, this.selectedCountry.name+this.tlf, appVerifier)
    .then((confirmationResult) => {
      this.winRef.confirmationResult = confirmationResult;
      this.step++;
    }).catch((error) => {
      console.log(error);
    });
  }

  verifyOTP() {
    this.winRef.confirmationResult.confirm(this.verifyOtpString).then((res: any) => {
      const user = res.user;

      const userDocRef = this.afs.doc(`users/${user!.uid}`);

      const x = userDocRef.valueChanges().subscribe(res => {
        if(res === undefined) {
          userDocRef.set({
            completion: false,
            phoneCode: this.selectedCountry.name,
            tlf: this.tlf
          });
          console.log('User Created Successfully');
        } else {
          const key = 'completion';
          const completion = res![key as keyof typeof res];

          if(!completion) {
            this.router.navigate(["/profile-completion"]);
          } else {
            this.router.navigate(['/profile']);
          }
        }
      })
    })
  }

}
