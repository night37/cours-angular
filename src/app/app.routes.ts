import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TextInterpolation } from './lessons/text-interpolation/text-interpolation';
import { PropertyBinding } from './lessons/property-binding/property-binding';
import { EventBinding } from './lessons/event-binding/event-binding';
import { FriendsList } from './exo/friends-list/friends-list';


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
  path:"exo/friend-list",
  component: FriendsList
},
{
path:'about',
  loadComponent:()=>import('./about/about').then(m=>m.About)

},
{
  path:'**',
  loadComponent:()=>import('./shared/not-found/not-found').then(m=>m.NotFound)
}
];
