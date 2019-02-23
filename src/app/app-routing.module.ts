import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { EventListComponent } from './event-list/event-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: UserListComponent },
    { path: 'add', component: CreateUserComponent },
    { path: 'findById', component: SearchUserComponent },
    { path: 'allEvents', component: EventListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
