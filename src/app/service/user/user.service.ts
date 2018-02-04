import { Injectable } from '@angular/core';

import { userData } from './userData';
@Injectable()
export class UserService {
  // 获得全部数据
  getUsers() {
    return userData;
  }
  login(username: string, password: string): boolean {
    const arr = userData;
    let res = false;
    arr.forEach(function (value) {
      if (value.username === username && value.password === password) {
          res = true;
      }
    });
    return res;
  }
}
