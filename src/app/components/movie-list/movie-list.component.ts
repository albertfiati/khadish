import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../shared/service/movie.service";
import {Movie} from "../../shared/model/movie";
import {Router} from "@angular/router";

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css'],
    providers: [MovieService]
})
export class MovieListComponent implements OnInit {
    movies: Movie[];

    constructor(private movieService: MovieService, private router: Router) {
    }

    // load all movies
    loadMovies() {
        this.movieService.fetch().subscribe((success) => {
            if (success.status == 200) {
                this.movies = success.results
            }
        }, (error) => {
            console.log(error)
        })
    }

    // navigate to the characters page
    loadMovie(path) {
        this.router.navigate([path]);
    }

    ngOnInit() {
        this.loadMovies()
    }
}
