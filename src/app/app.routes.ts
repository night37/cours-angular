import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TextInterpolation } from './lessons/text-interpolation/text-interpolation';
import { PropertyBinding } from './lessons/property-binding/property-binding';
import { EventBinding } from './lessons/event-binding/event-binding';
import { FriendsList } from './exo/friends-list/friends-list';
import { Parent } from './lessons/parent/parent';
import { TaskListFirebase } from './lessons/task-list-firebase/task-list-firebase';
import { Register } from './auth/register/register';
import { Login } from './auth/login/login';
import { AuthGuardService } from './services/auth-guard.service';
import { ListRendering } from './lessons/list-rendering/list-rendering';


export const routes: Routes = [{
  path: 'home',
  component: Home
},
{
  path:"lessons/text-interpolation",
  component: TextInterpolation
},
{
  path:"lessons/property-binding",
  component: PropertyBinding
},
{
  path:"lessons/event-binding",
  component: EventBinding
},
{
  path:"lessons/task-list",
  component: TaskListFirebase
},
{
  path:"lessons/parent",
  component: Parent
},
{
  path:"exo/friend-list",
  component: FriendsList
},
{
  path:"register",
  component: Register
},
{
  path:"register",
  component: Register
},
{
  path:"login",
  component: Login
},
{
  path:'dashboard',
  canActivate: [AuthGuardService],
  loadComponent:()=>import('./auth/dashboard/dashboard').then(m=>m.Dashboard)
},
{
path:'about',
  loadComponent:()=>import('./about/about').then(m=>m.About)

},
{
path:'lessons/meteo',
  loadComponent:()=>import('./lessons/meteo-api/meteo-api').then(m=>m.MeteoApi)

},
{
path:'exo/pokemon',
  loadComponent:()=>import('./exo/pokemon/pokemon').then(m=>m.Pokemon)

},
{
  path:"exo/list-rendering",
  loadComponent:()=>import('./exo/list-rendering/list-rendering').then(m=>m.ListRendering)

},

{
  path:'**',
  loadComponent:()=>import('./shared/not-found/not-found').then(m=>m.NotFound)
}
];
