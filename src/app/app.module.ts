import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ZorroComponent } from './zorro/zorro.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserService } from './service/user/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChildrenComponent } from './children/children.component';
import { Children2Component } from './children2/children2.component';


const appRoutes = [
  { path: 'main' , component: HomeComponent , children: [
      { path: '', component: ChildrenComponent},
      { path: 'childrenTwo', component: Children2Component},
    ]},
  { path: 'login', component: LoginComponent},
  { path: 'zorro', component: ZorroComponent},
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ChildrenComponent,
    Children2Component,
    ZorroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {
}
