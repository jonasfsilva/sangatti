import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogItemsComponent } from "./blog-items/blog-items.component";
import { HttpClientModule } from "@angular/common/http";
import { CleanHtmlPipe } from "./blog-items/clean-html.pipe";

@NgModule({
  declarations: [AppComponent, BlogItemsComponent, CleanHtmlPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
