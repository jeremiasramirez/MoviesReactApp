export interface MOVIE_INTERFACE {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    name?: string;
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    media_type:string;
  }
  

  export interface detailMovie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: string;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Productioncompany[];
    production_countries: Productioncountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Spokenlanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  interface Spokenlanguage {
    iso_639_1: string;
    name: string;
  }
  
  interface Productioncountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface Productioncompany {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  
  
  export interface RespuestaCredits {
    id: number;
    cast: Cast[];
    crew: Crew[];
  }
  
  export interface Crew {
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path?: string;
  }
  
  export interface Cast {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path?: string;
  }
  
  
  export const sugestion = [
    { name: 'Ava'},
    { name: 'Spiderman' },
    { name: 'Lucifer' },
    { name: 'Vampires' },
    { name: 'Action' },
    { name: 'Drama' },
    { name: 'Comedy' },
    { name: 'World' },
    { name: 'Galaxy' },
    { name: 'Tecnology' },
    { name: 'Zombies' },
    { name: 'Terror' },
    { name: 'Hard' },
    { name: 'Van damme' },
    { name: 'Rambo' },
    { name: 'Rambo II' },
  ]