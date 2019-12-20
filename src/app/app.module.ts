import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, FirstDirective } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipieListComponent } from './recipies/recipie-list/recipie-list.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './recipies/recipie-list/recipie-item/recipie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { LoggerHttpInterceptor } from './services/logger-http-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    FirstDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoggerHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
