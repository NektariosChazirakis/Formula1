import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './core/layout/components/layout/layout.module';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { HomeModule } from './features/home/components/home/home.module';
import {MAT_SELECT_SCROLL_STRATEGY_PROVIDER} from '@angular/material/select';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        LayoutModule,
        HomeModule,
        MatSidenavModule
    ],
    providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
    bootstrap: [AppComponent]
})
export class AppModule { }
