import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule, CanActivate } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    // Only Components, Directives and Pipes
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  // Root Application Component - AppComponent
  // Bootstrap Array should only be used in Root App Module - AppModule
  // Other Angular Modules won't have bootstrap Array
  bootstrap: [AppComponent]
})
export class AppModule { }
