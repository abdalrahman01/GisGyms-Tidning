import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EleverComponent } from './elever/elever.component';
import { HomeComponent } from './home/home.component';
import { LunchComponent } from './lunch/lunch.component';


const routes: Routes = [
{
  path:"",
  component: HomeComponent,
},
{
  path:"about",
  component: AboutComponent,
},
{
  path:"lunch",
  component: LunchComponent,
},
{
  path:"elever",
  component: EleverComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
