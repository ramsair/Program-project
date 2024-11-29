import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { HomeComponent } from './home/home.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
// import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';

// export const ngxUiLoaderConfig: NgxUiLoaderConfig = {
//   text: "Loading...",
//   textColor: "#FFFFFF",
//   textPosition: "center-center", // Fixed typo ("center-centre" -> "center-center")
//   pbColor: "red", // Progress bar color
//   // pbsColor: "red", // Progress bar shadow color
//   fgsColor: "red", // Foreground spinner color
//   fgsType: SPINNER.ballSpinClockwise, // Spinner type
//   fgsSize: 100, // Spinner size
//   pbDirection: PB_DIRECTION.leftToRight, // Progress bar direction
//   pbThickness: 5 // Progress bar thickness
// };

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    SignupComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    // NgxUiLoaderModule.forRoot(ncsgxUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
