import {Routes} from '@angular/router';
import {NavbarComponent} from './navbar.component';
import {MediumComponent} from '../../entity/medium/medium.component';
import {EditorjsComponent} from '../../entity/editorjs/editorjs.component';

export const NAV_ROUTE:
Routes = [
  {
    path: '',
    outlet: 'navbar',
    component: NavbarComponent
  }
];

export const ENTITY_ROUTE: Routes  = [
  {
    path: 'medium',
    component: MediumComponent
  },
  {
    path: 'editorjs',
    component: EditorjsComponent
  }
]
