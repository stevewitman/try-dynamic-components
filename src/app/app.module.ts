import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { BlockRendererComponent } from './utility/block-renderer/block-renderer.component';
import { PostComponent } from './blocks/post/post.component';
import { AdvertisementComponent } from './blocks/advertisement/advertisement.component';
import { BlockNotFoundComponent } from './blocks/block-not-found/block-not-found.component';
import { PollComponent } from './blocks/poll/poll.component';
import { BlocksService } from './services/blocks.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlockRendererComponent,
    AdvertisementComponent,
    PollComponent,
    PostComponent,
    BlockNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BlocksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
