import { Component } from '@angular/core';
import { UserService } from '../service/user/user.service';
@Component({
  selector: ' app-login ',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
   res: boolean
   name = ''
   password = ''
   constructor(private userService: UserService) {
   }
   submit() {
      this.res = this.userService.login(this.name, this.password);
      if (this.res) {
        alert('登录成功 ');
        location.href = '/main';
      } else {
        alert('账号或密码错误 ');
      }
   }
}
