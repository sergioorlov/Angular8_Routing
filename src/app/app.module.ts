import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutExtraComponent,
    HomeComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
