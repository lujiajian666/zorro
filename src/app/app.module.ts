import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HttpClient } from "@angular/common/http"
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ZorroComponent } from './zorro/zorro.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

                                       

import { AppComponent } from './app.component';
import { UserService } from './service/user/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChildrenComponent } from './children/children.component';
import { Children2Component } from './children2/children2.component';
import { AlbumComponent } from './album/album.component';
import { TypeComponent } from './type/type.component';
import { HttpService } from './common/http.server'; 
import { AlbumService } from './album/album.server';




const appRoutes = [
  { path: 'main' , component: HomeComponent , children: [
      { path: '', component: ChildrenComponent},
      { path: 'childrenTwo', component: Children2Component},
    ]},
  { path: 'login', component: LoginComponent},
  { path: 'zorro', component: ZorroComponent, children: [
      { path: '', component: AlbumComponent},
      { path: 'type', component: TypeComponent},
    ]},
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
    ZorroComponent,
    AlbumComponent,
    TypeComponent,
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
  providers: [UserService,HttpService,AlbumService,HttpClient]
})
export class AppModule {
}
