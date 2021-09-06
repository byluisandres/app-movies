# App movies
Mostrar películas con buscador

## Instalación
```
Clonar el repositorio
Ejecutar 'npm install' para instalar las dependencias

```

## Demo

## Construido con 🛠️
- HTML5
- React/Redux
- Bootstrap
<<<<<<< HEAD
- react-slick
=======
>>>>>>> d6e9802505e548023759cfe525cd2645334322f9

## Backend 
```
Se ha usado la api de the movie db
```
### **Endpoints**
```
<<<<<<< HEAD
https://api.themoviedb.org/3/{params}?api_key={secret}language=es-ES
=======
https://api.themoviedb.org/3/?api_key={secret}language=es-ES
>>>>>>> d6e9802505e548023759cfe525cd2645334322f9
```
#### Obtener las todas la películas
- **GET** /movie/now_playing
```json
{
    "dates": {
        "maximum": "2021-09-04",
        "minimum": "2021-07-18"
    },
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
            "genre_ids": [
                28,
                878,
                12
            ],
            "id": 588228,
            "original_language": "en",
            "original_title": "The Tomorrow War",
            "overview": "Un día el mundo se paraliza cuando un grupo de viajeros en el tiempo se transporta desde el año 2051 para entregar un mensaje urgente: La humanidad está perdiendo la guerra mundial contra una especie alienígena letal. La única esperanza de supervivencia es que los soldados y los ciudadanos del presente sean transportados al futuro y se unan a la lucha. Entre los reclutados está el profesor de instituto y padre de familia Dan Forester (Chris Pratt) quien, decidido a salvar el mundo por su hija, se une a una brillante científica (Yvonne Strahovski) y a su padre (J.K. Simmons) en una búsqueda desesperada por reescribir el destino del planeta.",
            "popularity": 4564.402,
            "poster_path": "/tzp6VzED2TBc02bkYoYnQa6r2OK.jpg",
            "release_date": "2021-09-03",
            "title": "La guerra del mañana",
            "video": false,
            "vote_average": 8,
            "vote_count": 199
        },
        {...}
    ],
    "total_pages": 59,
    "total_results": 1171
}
```
#### Obtener el detalle de la pelicula
- **GET** /movie/:id
```json
{
    "adult": false,
    "backdrop_path": "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
    "belongs_to_collection": {
        "id": 848922,
        "name": "明日之战（系列）",
        "poster_path": "/AgRf30cGWYWa08ynPId7qJLZvd9.jpg",
        "backdrop_path": "/yKSNSOwHOeiZv2DxwHAlpiEXBB4.jpg"
    },
    "budget": 200000000,
    "genres": [
        {
            "id": 28,
            "name": "Acción"
        },
        {
            "id": 878,
            "name": "Ciencia ficción"
        },
        {
            "id": 12,
            "name": "Aventura"
        }
    ],
    "homepage": "https://www.amazon.com/dp/B093CQZ2SM",
    "id": 588228,
    "imdb_id": "tt9777666",
    "original_language": "en",
    "original_title": "The Tomorrow War",
    "overview": "Un día el mundo se paraliza cuando un grupo de viajeros en el tiempo se transporta desde el año 2051 para entregar un mensaje urgente: La humanidad está perdiendo la guerra mundial contra una especie alienígena letal. La única esperanza de supervivencia es que los soldados y los ciudadanos del presente sean transportados al futuro y se unan a la lucha. Entre los reclutados está el profesor de instituto y padre de familia Dan Forester (Chris Pratt) quien, decidido a salvar el mundo por su hija, se une a una brillante científica (Yvonne Strahovski) y a su padre (J.K. Simmons) en una búsqueda desesperada por reescribir el destino del planeta.",
    "popularity": 4564.402,
    "poster_path": "/tzp6VzED2TBc02bkYoYnQa6r2OK.jpg",
    "production_companies": [
        {
            "id": 82819,
            "logo_path": "/5Z8WWr0Lf1tInVWwJsxPP0uMz9a.png",
            "name": "Skydance Media",
            "origin_country": "US"
        },
        {
            "id": 423,
            "logo_path": "/uvA6e2O31qaonsbYd8tjvgqmNXh.png",
            "name": "Phantom Four",
            "origin_country": "US"
        },
        {
            "id": 125000,
            "logo_path": null,
            "name": "Lit Entertainment Group",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2021-09-03",
    "revenue": 0,
    "runtime": 140,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "La lucha por el mañana comienza hoy.",
    "title": "La guerra del mañana",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 222
}
```
#### Obtener el casting
- **GET** /movie/:id/credits
```json
{
    "id": 588228,
    "cast": [
        {
            "adult": false,
            "gender": 2,
            "id": 73457,
            "known_for_department": "Acting",
            "name": "Chris Pratt",
            "original_name": "Chris Pratt",
            "popularity": 25.959,
            "profile_path": "/gXKyT1YU5RWWPaE1je3ht58eUZr.jpg",
            "cast_id": 2,
            "character": "Dan Forester",
            "credit_id": "5dcaf0b5ab1bc7001308f242",
            "order": 0
        },
        {
            [...]
        }
    ],
    "crew": [
        {
            "adult": false,
            "gender": 2,
            "id": 3893,
            "known_for_department": "Writing",
            "name": "David S. Goyer",
            "original_name": "David S. Goyer",
            "popularity": 4.505,
            "profile_path": "/gf44Hr3HJuWK7ZMHQKzDNBe0ylI.jpg",
            "credit_id": "5dcaf1bcab1bc70015098ff6",
            "department": "Production",
            "job": "Producer"
        },
        {
            [...]
        }
    ]
}
```
#### Obtener las películas similares
- **GET** /movie/:id/similar
```json
{
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/sU8BrL7SVAzeKXpMNL6spYNrJ9s.jpg",
            "genre_ids": [
                10752,
                28,
                35,
                18
            ],
            "id": 10015,
            "title": "El sargento de hierro",
            "original_language": "en",
            "original_title": "Heartbreak Ridge",
            "overview": "El sargento Tom Highway, conocido como `Gunny´, es un perdedor en el plano personal, aficionado al alcohol, que sacrificó a su mujer, a su familia, a sus amigos y su reputación, por llegar a lo más alto en la carrera militar. Veterano de guerra en Vietnam y Corea, vuelve a los Estados Unidos para llevar a cabo su última misión: instruir a un grupo de novatos para convertirlos en auténticos marines.",
            "popularity": 24.97,
            "poster_path": "/kqahkdYsUJyp2XAw20qupebw5tS.jpg",
            "release_date": "1986-12-05",
            "video": false,
            "vote_average": 6.782,
            "vote_count": 674
        },
      {
          [...]
      }
    ],
    "total_pages": 500,
    "total_results": 10000
}
```
#### Buscar película
- **GET** /search/movie&query={text}
```json
{

    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                35,
                18,
                10749
            ],
            "id": 67084,
            "original_language": "es",
            "original_title": "Mañana te cuento",
            "overview": "On Halloween night in Lima, four rich kids spend a night on the town, goofing, getting into trouble, and deciding to help Manuel lose his virginity. From Juan Diego's house they hire three call girls, not much older than they, and they pair up (El Gordo declines - he wants to be true to his girlfriend). The young women are sweet and street smart, the boys are naïve and full of bravado, Romance and violence are possibilities during this night of surprises and self discovery",
            "popularity": 2.289,
            "poster_path": "/j4a6UST2XExMQ8ZRSIWJaVny1ip.jpg",
            "release_date": "2005-04-28",
            "title": "Mañana te cuento",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 16
        },
        {
            [...]
        }
    ],
    "total_pages": 8,
    "total_results": 148
<<<<<<< HEAD
}
```
## Frontend
![imagen](https://user-images.githubusercontent.com/48489792/132247557-ac61baba-badf-4303-b9f0-3d0ecd21f175.png)
![imagen](https://user-images.githubusercontent.com/48489792/132247590-cd0428fc-fcb5-4d52-851c-069d77beb36b.png)
=======

}
```
>>>>>>> d6e9802505e548023759cfe525cd2645334322f9
