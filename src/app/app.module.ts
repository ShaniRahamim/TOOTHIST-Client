import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from './../providers/auth-service';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { Users } from '../pages/users/users';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Treatments} from "../pages/treatments/treatments";
import {ClientService} from "../providers/client-service";
import {TreatmentService} from "../providers/treatment-service";
import {AudioRecorder} from "../providers/AudioRecorder";
import {Home} from "../pages/home/home";
import {HomeModule} from "../pages/home/home.module";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Users,
    Treatments,

  ],
  imports: [
    BrowserModule,
    HomeModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Users,
    Treatments,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    AudioRecorder,
    AuthService,
    TreatmentService,
    Users,
    Treatments,
    ClientService,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
