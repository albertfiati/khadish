import {Character} from "./character";

export class Movie {
    title: String;
    episode_id: number;
    opening_crawl: String;
    director: String;
    producer: String;
    release_date: Date;
    created: Date;
    edited: Date;
    url: String;
    slug: String;
    year_of_release: number;
    characters: Character[];

    public constructor() {

    }
}
