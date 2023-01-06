import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(
    // public authService: AuthService,
    // public router: Router
  ) {}

  // public logout(): void {
  //   this.authService.isAuthorized = false;
  //   this.router.navigate(['/login']);
  // }

}
