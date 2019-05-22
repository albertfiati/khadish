import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {CharacterListComponent} from "./components/character-list/character-list.component";

const routes: Routes = [
    {
        path: '',
        component: MovieListComponent
    },
    {
        path: ':movie',
        component: CharacterListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [MovieListComponent, CharacterListComponent]
