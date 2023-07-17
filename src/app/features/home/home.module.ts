import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [HomeRoutingModule, MatButtonModule],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule {}
