import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {CustomerComponent} from './customer/customer.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        ViewDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
