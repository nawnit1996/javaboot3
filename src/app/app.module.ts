import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPageComponent } from './new-page/new-page.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ArticlesComponent } from './articles/articles.component';
import { GistComponent } from './gist/gist.component';
import {DynamicHTMLModule}  from 'ng-dynamic';
import { PagesComponent ,SafeHtmlPipe} from './pages/pages.component';
import { FocusInputDirective } from "./directives/FocusInputDirective";

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NewPageComponent,
    AdminPageComponent,
    ArticlesComponent,
    GistComponent,
    SafeHtmlPipe,
    FocusInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DynamicHTMLModule.forRoot({
      components: [
        { component: GistComponent, selector: 'gist' },
      ]
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
