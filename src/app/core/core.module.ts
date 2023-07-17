import { NgModule } from "@angular/core"
import { HeaderComponent } from "./layout/header.component"
import { BrowserModule } from "@angular/platform-browser"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"

@NgModule({
  exports: [HeaderComponent],
  imports: [BrowserModule, CommonModule, RouterLink],
  declarations: [HeaderComponent],
  providers: [],
})
export class CoreModule {}
