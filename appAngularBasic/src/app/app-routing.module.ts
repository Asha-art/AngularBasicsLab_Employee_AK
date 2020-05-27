import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from './comp-one/comp-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { WelcomelistComponent } from './welcomelist/welcomelist.component';


const routes: Routes = [
  { path: 'one', component: CompOneComponent },
  { path: 'two', component: ComponentTwoComponent },
  { path: 'list', component: WelcomelistComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


