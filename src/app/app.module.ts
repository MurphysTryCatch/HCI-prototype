import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ImagesGridComponent } from "./imagesGrid/imagesGrid.component";
import { CartComponent } from "./cart/cart.component";
import { DataService } from "./data.service";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ImagesGridComponent,
        CartComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
