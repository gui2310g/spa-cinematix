import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'search',
        component: SearchComponent
    }
];
