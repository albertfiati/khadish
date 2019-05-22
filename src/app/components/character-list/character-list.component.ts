import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../shared/service/character.service";
import {Character} from "../../shared/model/character";
import {Movie} from "../../shared/model/movie";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css'],
    providers: [CharacterService]
})
export class CharacterListComponent implements OnInit {
    characters: Character[]
    movie: Movie


    constructor(private characterService: CharacterService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    // read the movie title from the url
    initialize() {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['movie'] && params['movie'] !== '') {
                this.loadCharacters(params['movie'])
            }
        });
    }

    // load the characters
    loadCharacters(movie: String) {
        this.characterService.create({
            'movie': movie
        }).subscribe((success) => {
            if (success.status == 200) {
                this.characters = success.results
                this.movie = success.movie
            }
        }, (error) => {
            console.log(error)
        })
    }

    ngOnInit() {
        this.initialize()
    }

}
