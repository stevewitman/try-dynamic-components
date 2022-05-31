import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { BlockRendererComponent } from './utility/block-renderer/block-renderer.component';
// import { BlockNotFoundComponent } from './blocks/block-not-found/block-not-found.component';
import { BlocksService } from './services/blocks.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlockRendererComponent,
    // BlockNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BlocksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
