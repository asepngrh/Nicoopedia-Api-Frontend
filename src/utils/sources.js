export const sourcesConfig = [
  {
    "id": "anime",
    "name": "Anime",
    "subSources": [
      {
        "id": "alqanime",
        "name": "Alqanime",
        "fetchSource": "alqanime",
        "endpoints": [
          {
            "id": "home",
            "name": "Home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "schedule",
            "name": "Schedule",
            "originalRoute": "/schedule",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/schedule"
          },
          {
            "id": "anime",
            "name": "Anime List",
            "originalRoute": "/anime",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/anime"
          },
          {
            "id": "genres",
            "name": "Genres",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "popular",
            "name": "Popular Anime",
            "originalRoute": "/popular",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/popular"
          },
          {
            "id": "ongoing",
            "name": "Ongoing Anime",
            "originalRoute": "/ongoing",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/ongoing"
          },
          {
            "id": "completed",
            "name": "Completed Anime",
            "originalRoute": "/completed",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/completed"
          },
          {
            "id": "movies",
            "name": "Movies",
            "originalRoute": "/movies",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/movies"
          },
          {
            "id": "search",
            "name": "Search Anime",
            "originalRoute": "/search",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/search"
          },
          {
            "id": "genres/{genreId}",
            "name": "Genre Detail",
            "originalRoute": "/genres/{genreId}",
            "hasQuery": true,
            "queryParam": "genreId",
            "isRouteParam": true,
            "example": "/genres/action"
          },
          {
            "id": "season/{seasonId}",
            "name": "Season Detail",
            "originalRoute": "/season/{seasonId}",
            "hasQuery": true,
            "queryParam": "seasonId",
            "isRouteParam": true,
            "example": "/season/fall-2024"
          },
          {
            "id": "anime/{animeId}",
            "name": "Anime Detail",
            "originalRoute": "/anime/{animeId}",
            "hasQuery": true,
            "queryParam": "animeId",
            "isRouteParam": true,
            "example": "/anime/naruto"
          }
        ]
      },
      {
        "id": "anichin",
        "name": "Anichin",
        "fetchSource": "anichin",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Halaman home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "search/:query",
            "name": "🔍 Search",
            "originalRoute": "/search/:query",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/soul%20land"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Donghua",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/soul-land-2-the-unrivaled-tang-sect"
          },
          {
            "id": "episode/:slug",
            "name": "📖 Nonton Donghua",
            "originalRoute": "/episode/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/episode/soul-land-2-the-unrivaled-tang-sect-episode-87-subtitle-indonesia/"
          },
          {
            "id": "az-list/:letter/:page",
            "name": "🔤 Daftar A-Z (per huruf)",
            "originalRoute": "/az-list/:letter/:page",
            "hasQuery": true,
            "queryParam": "letter,page",
            "isRouteParam": true,
            "example": "/az-list/A/1"
          },
          {
            "id": "completed",
            "name": "Donghua Completed",
            "originalRoute": "/completed",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/completed"
          },
          {
            "id": "ongoing",
            "name": "Donghua Ongoing",
            "originalRoute": "/ongoing",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/ongoing"
          },
          {
            "id": "genres",
            "name": "Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "seasons",
            "name": "Seasons",
            "originalRoute": "/seasons",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/seasons"
          },
          {
            "id": "latest/:page",
            "name": "Donghua Terbaru",
            "originalRoute": "/latest/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/latest/1"
          },
          {
            "id": "schedule",
            "name": "Jadwal Rilis",
            "originalRoute": "/schedule",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/schedule"
          },
          {
            "id": "az-list",
            "name": "Daftar A-Z",
            "originalRoute": "/az-list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/az-list"
          }
        ]
      },
      {
        "id": "animasu",
        "name": "Animasu",
        "fetchSource": "animasu",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Halaman Home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "search/:query",
            "name": "🔍 Pencarian Anime",
            "originalRoute": "/search/:query",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/one%20piece?page=1"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Anime",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/one-piece-sub-indonesia"
          },
          {
            "id": "episode/:slug",
            "name": "📖 Nonton Anime (Stream)",
            "originalRoute": "/episode/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/episode/nonton-one-piece-episode-1148"
          },
          {
            "id": "advanced-search",
            "name": "🧪 Pencarian Lanjutan (Filter)",
            "originalRoute": "/advanced-search",
            "hasQuery": true,
            "queryParam": "genres,status",
            "isRouteParam": false,
            "example": "/advanced-search?genres=aksi&status=ongoing"
          },
          {
            "id": "genre/:slug",
            "name": "🎭 Anime Berdasarkan Genre",
            "originalRoute": "/genre/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genre/aksi?page=1"
          },
          {
            "id": "character/:slug",
            "name": "👤 Anime Berdasarkan Karakter",
            "originalRoute": "/character/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/character/berjuang?page=1"
          },
          {
            "id": "popular",
            "name": "Anime Populer",
            "originalRoute": "/popular",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/popular"
          },
          {
            "id": "latest",
            "name": "Anime Terbaru (Latest)",
            "originalRoute": "/latest",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/latest"
          },
          {
            "id": "movies",
            "name": "Anime Movie",
            "originalRoute": "/movies",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/movies"
          },
          {
            "id": "ongoing",
            "name": "Anime Ongoing",
            "originalRoute": "/ongoing",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/ongoing"
          },
          {
            "id": "completed",
            "name": "Anime Tamat",
            "originalRoute": "/completed",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/completed"
          },
          {
            "id": "schedule",
            "name": "Jadwal Rilis",
            "originalRoute": "/schedule",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/schedule"
          },
          {
            "id": "animelist",
            "name": "Daftar Anime (A-Z)",
            "originalRoute": "/animelist",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/animelist"
          },
          {
            "id": "genres",
            "name": "List Semua Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "characters",
            "name": "List Semua Tipe Karakter",
            "originalRoute": "/characters",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/characters"
          }
        ]
      },
      {
        "id": "animeindo",
        "name": "AnimeIndo",
        "fetchSource": "animeindo",
        "endpoints": [
          {
            "id": "episode/:slug",
            "name": "📖 Watch Episode",
            "originalRoute": "/episode/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/episode/one-piece-episode-1000"
          },
          {
            "id": "anime/:slug",
            "name": "ℹ️ Detail Anime",
            "originalRoute": "/anime/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/anime/naruto"
          },
          {
            "id": "genres/:slug",
            "name": "🎭 Genre Detail",
            "originalRoute": "/genres/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genres/action?page=1"
          },
          {
            "id": "schedule",
            "name": "📅 Schedule (Jadwal)",
            "originalRoute": "/schedule",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/schedule"
          },
          {
            "id": "search/:query",
            "name": "🔍 Search Anime",
            "originalRoute": "/search/:query",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/naruto"
          },
          {
            "id": "latest",
            "name": "Latest Release",
            "originalRoute": "/latest",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/latest"
          },
          {
            "id": "popular",
            "name": "Popular Series",
            "originalRoute": "/popular",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/popular"
          },
          {
            "id": "movies",
            "name": "Anime Movies",
            "originalRoute": "/movies",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/movies"
          },
          {
            "id": "list",
            "name": "Anime List (A-Z)",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "genres",
            "name": "Genre List",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          }
        ]
      },
      {
        "id": "animekuindo",
        "name": "Animekuindo",
        "fetchSource": "animekuindo",
        "endpoints": [
          {
            "id": "episode/:slug",
            "name": "📖 Nonton/Download Episode",
            "originalRoute": "/episode/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/episode/one-piece-episode-1150"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Anime",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/one-piece-subtitle-indonesia"
          },
          {
            "id": "seasons/:slug",
            "name": "📅 Anime per Season",
            "originalRoute": "/seasons/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/seasons/fall-2024"
          },
          {
            "id": "genres/:slug",
            "name": "🎭 Anime per Genre",
            "originalRoute": "/genres/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genres/action"
          },
          {
            "id": "search/:query",
            "name": "🔍 Pencarian",
            "originalRoute": "/search/:query",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/one%20piece"
          },
          {
            "id": "home",
            "name": "Halaman Home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "latest",
            "name": "Anime Terbaru (Latest)",
            "originalRoute": "/latest",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/latest"
          },
          {
            "id": "popular",
            "name": "Anime Populer",
            "originalRoute": "/popular",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/popular"
          },
          {
            "id": "movie",
            "name": "Daftar Movie",
            "originalRoute": "/movie",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/movie"
          },
          {
            "id": "schedule",
            "name": "Jadwal Rilis",
            "originalRoute": "/schedule",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/schedule"
          },
          {
            "id": "genres",
            "name": "List Semua Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "seasons",
            "name": "List Semua Season",
            "originalRoute": "/seasons",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/seasons"
          }
        ]
      },
      {
        "id": "animesail",
        "name": "AnimeSail",
        "fetchSource": "animesail",
        "endpoints": [
          {
            "id": "home",
            "name": "Home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "terbaru",
            "name": "Rilisan Terbaru",
            "originalRoute": "/terbaru",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/terbaru"
          },
          {
            "id": "donghua",
            "name": "Donghua",
            "originalRoute": "/donghua",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/donghua"
          },
          {
            "id": "movie",
            "name": "Movies",
            "originalRoute": "/movie",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/movie"
          },
          {
            "id": "list",
            "name": "Anime List",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "schedule",
            "name": "Schedule",
            "originalRoute": "/schedule",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/schedule"
          },
          {
            "id": "genres",
            "name": "All Genres",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "search/{q}",
            "name": "Search Anime",
            "originalRoute": "/search/{q}",
            "hasQuery": true,
            "queryParam": "q",
            "isRouteParam": true,
            "example": "/search/naruto"
          },
          {
            "id": "genre/{genreId}",
            "name": "Genre Detail",
            "originalRoute": "/genre/{genreId}",
            "hasQuery": true,
            "queryParam": "genreId",
            "isRouteParam": true,
            "example": "/genre/action"
          },
          {
            "id": "season/{seasonId}",
            "name": "Season Detail",
            "originalRoute": "/season/{seasonId}",
            "hasQuery": true,
            "queryParam": "seasonId",
            "isRouteParam": true,
            "example": "/season/fall-2024"
          },
          {
            "id": "studio/{studioId}",
            "name": "Studio Detail",
            "originalRoute": "/studio/{studioId}",
            "hasQuery": true,
            "queryParam": "studioId",
            "isRouteParam": true,
            "example": "/studio/mappa"
          },
          {
            "id": "detail/{animeId}",
            "name": "Anime Detail",
            "originalRoute": "/detail/{animeId}",
            "hasQuery": true,
            "queryParam": "animeId",
            "isRouteParam": true,
            "example": "/detail/naruto"
          },
          {
            "id": "episode/{episodeId}",
            "name": "Episode Detail",
            "originalRoute": "/episode/{episodeId}",
            "hasQuery": true,
            "queryParam": "episodeId",
            "isRouteParam": true,
            "example": "/episode/naruto-episode-1"
          }
        ]
      },
      {
        "id": "anoboy",
        "name": "Anoboy",
        "fetchSource": "anoboy",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Halaman Home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "search/:query",
            "name": "🔍 Pencarian Anime",
            "originalRoute": "/search/:query",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/one%20piece?page=1"
          },
          {
            "id": "genre/:slug",
            "name": "🎭 Anime Berdasarkan Genre",
            "originalRoute": "/genre/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genre/action?page=1"
          },
          {
            "id": "anime/:slug",
            "name": "ℹ️ Detail Anime",
            "originalRoute": "/anime/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/anime/digimon-beatbreak/"
          },
          {
            "id": "episode/:slug",
            "name": "📖 Nonton Anime (Episode)",
            "originalRoute": "/episode/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/episode/digimon-beatbreak-episode-1-subtitle-indonesia/"
          },
          {
            "id": "az-list",
            "name": "Daftar Anime (A-Z)",
            "originalRoute": "/az-list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/az-list"
          },
          {
            "id": "genres",
            "name": "List Semua Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "list",
            "name": "Filter List Anime",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          }
        ]
      },
      {
        "id": "otakudesu",
        "name": "Otakudesu",
        "fetchSource": "otakudesu",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Halaman home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "search",
            "name": "🔍 Pencarian anime",
            "originalRoute": "/search",
            "hasQuery": true,
            "queryParam": "q",
            "isRouteParam": false,
            "example": "/search?q=naruto"
          },
          {
            "id": "genres/:slug",
            "name": "🎭 Anime berdasarkan genre",
            "originalRoute": "/genres/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genres/action?page=1"
          },
          {
            "id": "anime/:slug",
            "name": "ℹ️ Detail lengkap anime",
            "originalRoute": "/anime/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/anime/enen-shouboutai-season-3-p2-sub-indo"
          },
          {
            "id": "episode/:slug",
            "name": "📖 Nonton anime (Episode)",
            "originalRoute": "/episode/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/episode/sd-p2-episode-10-sub-indo"
          },
          {
            "id": "server/:id",
            "name": "🔗 Link server buat nonton",
            "originalRoute": "/server/:id",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/server/6DBBB9-5-9D5u"
          },
          {
            "id": "batch/:slug",
            "name": "📦 Download batch anime",
            "originalRoute": "/batch/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/batch/jshk-s2-batch-sub-indo"
          },
          {
            "id": "schedule",
            "name": "Jadwal rilis",
            "originalRoute": "/schedule",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/schedule"
          },
          {
            "id": "anime",
            "name": "Semua anime",
            "originalRoute": "/anime",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/anime"
          },
          {
            "id": "genres",
            "name": "Semua genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "ongoing",
            "name": "Anime sedang tayang",
            "originalRoute": "/ongoing",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/ongoing"
          },
          {
            "id": "completed",
            "name": "Anime sudah tamat",
            "originalRoute": "/completed",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/completed"
          }
        ]
      },
      {
        "id": "samehadaku",
        "name": "Samehadaku",
        "fetchSource": "samehadaku",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Halaman home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "search",
            "name": "🔍 Pencarian anime",
            "originalRoute": "/search",
            "hasQuery": true,
            "queryParam": "q",
            "isRouteParam": false,
            "example": "/search?q=one%20piece"
          },
          {
            "id": "genres/:slug",
            "name": "🎭 Anime berdasarkan genre",
            "originalRoute": "/genres/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genres/action"
          },
          {
            "id": "anime/:slug",
            "name": "ℹ️ Detail lengkap anime",
            "originalRoute": "/anime/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/anime/one-piece"
          },
          {
            "id": "episode/:slug",
            "name": "📖 Nonton anime (Episode)",
            "originalRoute": "/episode/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/episode/one-piece-episode-1141"
          },
          {
            "id": "server/:id",
            "name": "🔗 Link server buat nonton",
            "originalRoute": "/server/:id",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/server/9AAB5-69-xhmyrq"
          },
          {
            "id": "batch/:slug",
            "name": "📦 Download batch anime",
            "originalRoute": "/batch/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/batch/kusuriya-no-hitorigoto-season-2-episode-1-24-batch"
          },
          {
            "id": "genres",
            "name": "Semua genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "anime",
            "name": "Semua anime",
            "originalRoute": "/anime",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/anime"
          },
          {
            "id": "schedule",
            "name": "Jadwal rilis",
            "originalRoute": "/schedule",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/schedule"
          },
          {
            "id": "recent",
            "name": "Anime terbaru",
            "originalRoute": "/recent",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/recent"
          },
          {
            "id": "ongoing",
            "name": "Anime sedang tayang",
            "originalRoute": "/ongoing",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/ongoing"
          },
          {
            "id": "completed",
            "name": "Anime sudah tamat",
            "originalRoute": "/completed",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/completed"
          },
          {
            "id": "popular",
            "name": "Anime terpopuler",
            "originalRoute": "/popular",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/popular"
          },
          {
            "id": "movies",
            "name": "Anime movie",
            "originalRoute": "/movies",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/movies"
          },
          {
            "id": "batch",
            "name": "Batch-batch anime",
            "originalRoute": "/batch",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/batch"
          }
        ]
      },
      {
        "id": "kusonime",
        "name": "Kusonime",
        "fetchSource": "kusonime",
        "endpoints": [
          {
            "id": "latest",
            "name": "🏠 Halaman Home (Latest)",
            "originalRoute": "/latest",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/latest"
          },
          {
            "id": "search/:query",
            "name": "🔍 Pencarian Anime",
            "originalRoute": "/search/:query",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/fumetsu?page=1"
          },
          {
            "id": "type/:type",
            "name": "🧩 List Berdasarkan Tipe (OVA/ONA/Special)",
            "originalRoute": "/type/:type",
            "hasQuery": true,
            "queryParam": "type",
            "isRouteParam": true,
            "example": "/type/ona?page=1"
          },
          {
            "id": "genre/:slug",
            "name": "🎭 Anime Berdasarkan Genre",
            "originalRoute": "/genre/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genre/action?page=1"
          },
          {
            "id": "season/:slug",
            "name": "📅 Anime Berdasarkan Season",
            "originalRoute": "/season/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/season/fall-2022"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Anime (Download Link)",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/fumetsu-no-anata-e-s2-subtitle-indonesia"
          },
          {
            "id": "all-anime",
            "name": "List Semua Anime (Batch)",
            "originalRoute": "/all-anime",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/all-anime"
          },
          {
            "id": "movie",
            "name": "List Movie",
            "originalRoute": "/movie",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/movie"
          },
          {
            "id": "all-genres",
            "name": "List Semua Genre",
            "originalRoute": "/all-genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/all-genres"
          },
          {
            "id": "all-seasons",
            "name": "List Semua Season",
            "originalRoute": "/all-seasons",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/all-seasons"
          }
        ]
      },
      {
        "id": "oploverz",
        "name": "Oploverz",
        "fetchSource": "oploverz",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Halaman Home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "search/:query",
            "name": "🔍 Pencarian Anime",
            "originalRoute": "/search/:query",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/one%20piece"
          },
          {
            "id": "anime/:slug",
            "name": "ℹ️ Detail Anime",
            "originalRoute": "/anime/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/anime/one-piece"
          },
          {
            "id": "episode/:slug",
            "name": "📖 Nonton/Download Episode",
            "originalRoute": "/episode/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/episode/one-piece-episode-004-remastered"
          },
          {
            "id": "schedule",
            "name": "Jadwal Rilis",
            "originalRoute": "/schedule",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/schedule"
          },
          {
            "id": "list",
            "name": "Daftar Anime (Filter)",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "ongoing",
            "name": "Anime Ongoing",
            "originalRoute": "/ongoing",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/ongoing"
          },
          {
            "id": "completed",
            "name": "Anime Completed",
            "originalRoute": "/completed",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/completed"
          }
        ]
      },
      {
        "id": "nimegami",
        "name": "Nimegami",
        "fetchSource": "nimegami",
        "endpoints": [
          {
            "id": "live-action/detail/:slug",
            "name": "🎭 Detail Live Action",
            "originalRoute": "/live-action/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/live-action/detail/3d-kanojo-real-girl-live-action-sub-indo"
          },
          {
            "id": "drama/detail/:slug",
            "name": "📺 Detail J-Drama",
            "originalRoute": "/drama/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/drama/detail/ah-wilderness-drama-movie-sub-indo"
          },
          {
            "id": "type/:slug",
            "name": "🧩 Anime Berdasarkan Tipe",
            "originalRoute": "/type/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/type/tv?page=1"
          },
          {
            "id": "season/:slug",
            "name": "📅 Anime Berdasarkan Season",
            "originalRoute": "/season/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/season/winter-2024?page=1"
          },
          {
            "id": "genre/:slug",
            "name": "🎭 Anime Berdasarkan Genre",
            "originalRoute": "/genre/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genre/action?page=1"
          },
          {
            "id": "watch/:slug",
            "name": "📖 Nonton Anime (Episode)",
            "originalRoute": "/watch/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/watch/ah-wilderness-drama-movie-sub-indo"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Anime (Batch & Stream)",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/naruto"
          },
          {
            "id": "search/:query",
            "name": "🔍 Pencarian Anime",
            "originalRoute": "/search/:query",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/one-piece"
          },
          {
            "id": "home",
            "name": "Halaman Home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "genres",
            "name": "List Semua Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "seasons",
            "name": "List Semua Season",
            "originalRoute": "/seasons",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/seasons"
          },
          {
            "id": "types",
            "name": "List Semua Tipe",
            "originalRoute": "/types",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/types"
          },
          {
            "id": "drama",
            "name": "List J-Drama (A-Z)",
            "originalRoute": "/drama",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/drama"
          },
          {
            "id": "live-action",
            "name": "List Live Action (A-Z)",
            "originalRoute": "/live-action",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/live-action"
          }
        ]
      },
      {
        "id": "winbu",
        "name": "Winbu",
        "fetchSource": "winbu",
        "endpoints": [
          {
            "id": "server",
            "name": "🔗 Get Embed URL",
            "originalRoute": "/server",
            "hasQuery": true,
            "queryParam": "post,nume,type",
            "isRouteParam": false,
            "example": "/server?post=66146&nume=1&type=schtml"
          },
          {
            "id": "episode/:id",
            "name": "📖 Detail Episode",
            "originalRoute": "/episode/:id",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/episode/my-gift-lvl-9999-unlimited-gacha-episode-8"
          },
          {
            "id": "film/:id",
            "name": "🎬 Detail Film",
            "originalRoute": "/film/:id",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/film/resurrection-road-2025"
          },
          {
            "id": "series/:id",
            "name": "📺 Detail Series",
            "originalRoute": "/series/:id",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/series/love-on-the-turquoise-land"
          },
          {
            "id": "anime/:id",
            "name": "ℹ️ Detail Anime",
            "originalRoute": "/anime/:id",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/anime/my-gift-lvl-9999-unlimited-gacha"
          },
          {
            "id": "genre/:slug",
            "name": "🎭 Detail Genre",
            "originalRoute": "/genre/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genre/action"
          },
          {
            "id": "search",
            "name": "🔍 Pencarian",
            "originalRoute": "/search",
            "hasQuery": true,
            "queryParam": "q",
            "isRouteParam": false,
            "example": "/search?q=one%20piece"
          },
          {
            "id": "schedule",
            "name": "📅 Jadwal Rilis",
            "originalRoute": "/schedule",
            "hasQuery": true,
            "queryParam": "day",
            "isRouteParam": false,
            "example": "/schedule?day=senin"
          },
          {
            "id": "home",
            "name": "Halaman Home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "update",
            "name": "Anime Terbaru (Animasu)",
            "originalRoute": "/update",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/update"
          },
          {
            "id": "latest",
            "name": "Terbaru Ditambahkan",
            "originalRoute": "/latest",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/latest"
          },
          {
            "id": "populer",
            "name": "Populer",
            "originalRoute": "/populer",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/populer"
          },
          {
            "id": "all-anime",
            "name": "All Anime (A-Z)",
            "originalRoute": "/all-anime",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/all-anime"
          },
          {
            "id": "all-anime-reverse",
            "name": "All Anime (Z-A)",
            "originalRoute": "/all-anime-reverse",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/all-anime-reverse"
          },
          {
            "id": "list",
            "name": "Catalog Filter",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "catalog",
            "name": "Catalog (Alias)",
            "originalRoute": "/catalog",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/catalog"
          },
          {
            "id": "film",
            "name": "List Film",
            "originalRoute": "/film",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/film"
          },
          {
            "id": "movie",
            "name": "List Movie (Alias)",
            "originalRoute": "/movie",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/movie"
          },
          {
            "id": "series",
            "name": "List Series",
            "originalRoute": "/series",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/series"
          },
          {
            "id": "animedonghua",
            "name": "List Anime Donghua",
            "originalRoute": "/animedonghua",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/animedonghua"
          },
          {
            "id": "tvshow",
            "name": "List TV Show",
            "originalRoute": "/tvshow",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/tvshow"
          },
          {
            "id": "others",
            "name": "List Others",
            "originalRoute": "/others",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/others"
          },
          {
            "id": "genres",
            "name": "List Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "ongoing",
            "name": "Ongoing Anime",
            "originalRoute": "/ongoing",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/ongoing"
          },
          {
            "id": "completed",
            "name": "Completed Anime",
            "originalRoute": "/completed",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/completed"
          }
        ]
      },
      {
        "id": "donghub",
        "name": "Donghub",
        "fetchSource": "donghub",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Halaman Home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "search/:query",
            "name": "🔍 Pencarian",
            "originalRoute": "/search/:query",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/Little%20Fairy%20Yao"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Anime",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/little-fairy-yao"
          },
          {
            "id": "episode/:slug",
            "name": "📖 Nonton Episode",
            "originalRoute": "/episode/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/episode/the-other-side-of-deep-space-episode-01-subtitle-indonesia/"
          },
          {
            "id": "list",
            "name": "List Anime (Filter)",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "schedule",
            "name": "Jadwal Rilis",
            "originalRoute": "/schedule",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/schedule"
          },
          {
            "id": "latest",
            "name": "Anime Terbaru",
            "originalRoute": "/latest",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/latest"
          },
          {
            "id": "popular",
            "name": "Anime Populer",
            "originalRoute": "/popular",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/popular"
          },
          {
            "id": "movie",
            "name": "Movie",
            "originalRoute": "/movie",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/movie"
          }
        ]
      }
    ]
  },
  {
    "id": "movies",
    "name": "Movies",
    "subSources": [
      {
        "id": "lk21",
        "name": "Layarkaca 21",
        "fetchSource": "lk21",
        "endpoints": [
          {
            "id": "search/{title}",
            "group": "Search & Discover",
            "name": "Cari Film / Drama (Gunakan :title)",
            "originalRoute": "/search/{title}",
            "hasQuery": true,
            "queryParam": "title",
            "isRouteParam": true,
            "example": "/search/avengers"
          },
          {
            "id": "movies",
            "group": "Movies",
            "name": "Mendapatkan Film Terbaru",
            "originalRoute": "/movies",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/movies?page=1"
          },
          {
            "id": "popular/movies",
            "group": "Movies",
            "name": "Mendapatkan Film Populer",
            "originalRoute": "/popular/movies",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/popular/movies?page=1"
          },
          {
            "id": "recent-release/movies",
            "group": "Movies",
            "name": "Mendapatkan Film Rilis Terbaru",
            "originalRoute": "/recent-release/movies",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/recent-release/movies?page=1"
          },
          {
            "id": "top-rated/movies",
            "group": "Movies",
            "name": "Mendapatkan Film Rating Tertinggi",
            "originalRoute": "/top-rated/movies",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/top-rated/movies?page=1"
          },
          {
            "id": "movies/{id}",
            "group": "Movies",
            "name": "Detail Film (Gunakan :id)",
            "originalRoute": "/movies/{id}",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/movies/godzilla-x-kong-the-new-empire-2024"
          },
          {
            "id": "movies/{id}/stream",
            "group": "Movies",
            "name": "Link Stream Film (Gunakan :id)",
            "originalRoute": "/movies/{id}/stream",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/movies/godzilla-x-kong-the-new-empire-2024/stream"
          },
          {
            "id": "movies/{id}/download",
            "group": "Movies",
            "name": "Link Download Film (Gunakan :id)",
            "originalRoute": "/movies/{id}/download",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/movies/godzilla-x-kong-the-new-empire-2024/download"
          },
          {
            "id": "drama",
            "group": "Drama & Series",
            "name": "Mendapatkan Drama/Series Terbaru (Global)",
            "originalRoute": "/drama",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/drama?page=1"
          },
          {
            "id": "drama/{category}",
            "group": "Drama & Series",
            "name": "Mendapatkan Drama per Kategori",
            "originalRoute": "/drama/{category}",
            "hasQuery": true,
            "queryParam": "category",
            "isRouteParam": true,
            "example": "/drama/korea"
          },
          {
            "id": "popular/drama",
            "group": "Drama & Series",
            "name": "Mendapatkan Drama Terpopuler",
            "originalRoute": "/popular/drama",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/popular/drama?page=1"
          },
          {
            "id": "drama/{id}",
            "group": "Drama & Series",
            "name": "Detail Drama / Series (Judul, Season, Eps)",
            "originalRoute": "/drama/{id}",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/drama/squid-game-2021"
          },
          {
            "id": "drama/{id}/stream",
            "group": "Drama & Series",
            "name": "Link Stream Drama (Pilih Season & Eps)",
            "originalRoute": "/drama/{id}/stream",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/drama/squid-game-2021/stream?season=1&episode=1"
          },
          {
            "id": "drama/{id}/download",
            "group": "Drama & Series",
            "name": "Link Download Drama",
            "originalRoute": "/drama/{id}/download",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/drama/squid-game-2021/download"
          },
          {
            "id": "genres",
            "group": "Search & Discover",
            "name": "Daftar Semua Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "genres/{genre}",
            "group": "Search & Discover",
            "name": "Berdasarkan Genre (Gunakan :genre)",
            "originalRoute": "/genres/{genre}",
            "hasQuery": true,
            "queryParam": "genre",
            "isRouteParam": true,
            "example": "/genres/action"
          },
          {
            "id": "countries",
            "group": "Search & Discover",
            "name": "Daftar Semua Negara",
            "originalRoute": "/countries",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/countries"
          },
          {
            "id": "countries/{country}",
            "group": "Search & Discover",
            "name": "Berdasarkan Negara (Gunakan :country)",
            "originalRoute": "/countries/{country}",
            "hasQuery": true,
            "queryParam": "country",
            "isRouteParam": true,
            "example": "/countries/south-korea"
          },
          {
            "id": "years",
            "group": "Search & Discover",
            "name": "Daftar Semua Tahun",
            "originalRoute": "/years",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/years"
          },
          {
            "id": "years/{year}",
            "group": "Search & Discover",
            "name": "Berdasarkan Tahun (Gunakan :year)",
            "originalRoute": "/years/{year}",
            "hasQuery": true,
            "queryParam": "year",
            "isRouteParam": true,
            "example": "/years/2024"
          }
        ]
      }
    ]
  },
  {
    "id": "comic",
    "name": "Comic",
    "subSources": [
      {
        "id": "comic",
        "name": "Komiku",
        "fetchSource": "comic",
        "endpoints": [
          {
            "id": "search",
            "name": "🔍 Search Komik",
            "originalRoute": "/search",
            "hasQuery": true,
            "queryParam": "q",
            "isRouteParam": false,
            "example": "/search?q=naruto"
          },
          {
            "id": "comic/{slug}",
            "name": "📝 Detail Komik",
            "originalRoute": "/comic/{slug}",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/comic/it-all-starts-with-trillions-of-nether-currency"
          },
          {
            "id": "chapter/{slug}",
            "name": "📄 Read Chapter",
            "originalRoute": "/chapter/{slug}",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/chapter/it-all-starts-with-trillions-of-nether-currency-chapter-156"
          },
          {
            "id": "type/{type}",
            "name": "📚 Filter by Type",
            "originalRoute": "/type/{type}",
            "hasQuery": true,
            "queryParam": "type",
            "isRouteParam": true,
            "example": "/type/manga"
          },
          {
            "id": "genre/{genre}",
            "name": "🎭 Comics by Genre",
            "originalRoute": "/genre/{genre}",
            "hasQuery": true,
            "queryParam": "genre",
            "isRouteParam": true,
            "example": "/genre/action"
          },
          {
            "id": "pustaka/{page}",
            "name": "📚 Pustaka (Paginasi)",
            "originalRoute": "/pustaka/{page}",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/pustaka/1"
          },
          {
            "id": "terbaru",
            "name": "📖 Komik Terbaru",
            "originalRoute": "/terbaru",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/terbaru"
          },
          {
            "id": "populer",
            "name": "🔥 Komik Populer",
            "originalRoute": "/populer",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/populer"
          },
          {
            "id": "trending",
            "name": "🔥 Trending Comics",
            "originalRoute": "/trending",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/trending"
          },
          {
            "id": "homepage",
            "name": "🏠 Homepage Data",
            "originalRoute": "/homepage",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/homepage"
          },
          {
            "id": "genres",
            "name": "🏷️ List Genres",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "random",
            "name": "🎲 Random Comics",
            "originalRoute": "/random",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/random"
          }
        ]
      },
      {
        "id": "bacakomik",
        "name": "BacaKomik",
        "fetchSource": "bacakomik",
        "endpoints": [
          {
            "id": "only/:type",
            "name": "🧩 Filter by Type",
            "originalRoute": "/only/:type",
            "hasQuery": true,
            "queryParam": "type",
            "isRouteParam": true,
            "example": "/only/manga"
          },
          {
            "id": "search/:query",
            "name": "🔎 Cari Komik",
            "originalRoute": "/search/:query",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/one%20piece"
          },
          {
            "id": "genre/:genre",
            "name": "🎭 Filter by Genre",
            "originalRoute": "/genre/:genre",
            "hasQuery": true,
            "queryParam": "genre",
            "isRouteParam": true,
            "example": "/genre/action"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Komik",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/nano-machine"
          },
          {
            "id": "chapter/:slug",
            "name": "📖 Baca Chapter",
            "originalRoute": "/chapter/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/chapter/nano-machine-chapter-1"
          },
          {
            "id": "komikberwarna/:page",
            "name": "📢 Komik Berwarna",
            "originalRoute": "/komikberwarna/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/komikberwarna/1"
          },
          {
            "id": "latest",
            "name": "📰 Komik Terbaru",
            "originalRoute": "/latest",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/latest"
          },
          {
            "id": "populer",
            "name": "🌟 Komik Populer",
            "originalRoute": "/populer",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/populer"
          },
          {
            "id": "top",
            "name": "🏆 Top Komik",
            "originalRoute": "/top",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/top"
          },
          {
            "id": "list",
            "name": "📚 Daftar Semua Komik",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "genres",
            "name": "🏷️ Daftar Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "recomen",
            "name": "💡 Rekomendasi",
            "originalRoute": "/recomen",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/recomen"
          }
        ]
      },
      {
        "id": "komikstation",
        "name": "Komikstation",
        "fetchSource": "komikstation",
        "endpoints": [
          {
            "id": "popular",
            "name": "🔥 Manhwa Populer",
            "originalRoute": "/popular",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/popular?page=1"
          },
          {
            "id": "ongoing",
            "name": "📅 Komik Ongoing",
            "originalRoute": "/ongoing",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/ongoing?page=1"
          },
          {
            "id": "az-list/:letter",
            "name": "🔠 Daftar A-Z",
            "originalRoute": "/az-list/:letter",
            "hasQuery": true,
            "queryParam": "letter",
            "isRouteParam": true,
            "example": "/az-list/A?page=1"
          },
          {
            "id": "genre/:slug/:page",
            "name": "🎭 Filter by Genre",
            "originalRoute": "/genre/:slug/:page",
            "hasQuery": true,
            "queryParam": "slug,page",
            "isRouteParam": true,
            "example": "/genre/action"
          },
          {
            "id": "search/:query/:page",
            "name": "🔍 Search Komikstation",
            "originalRoute": "/search/:query/:page",
            "hasQuery": true,
            "queryParam": "query,page",
            "isRouteParam": true,
            "example": "/search/naruto"
          },
          {
            "id": "manga/:slug",
            "name": "📖 Detail Manga",
            "originalRoute": "/manga/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/manga/solo-leveling"
          },
          {
            "id": "chapter/:slug",
            "name": "📄 Baca Chapter",
            "originalRoute": "/chapter/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/chapter/solo-leveling-chapter-1"
          },
          {
            "id": "list",
            "name": "🗂️ Daftar Komik (Filter)",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "home",
            "name": "🏠 Komikstation Homepage",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "recommendation",
            "name": "⭐ Rekomendasi",
            "originalRoute": "/recommendation",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/recommendation"
          },
          {
            "id": "top-weekly",
            "name": "🏆 Top Weekly",
            "originalRoute": "/top-weekly",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/top-weekly"
          },
          {
            "id": "genres",
            "name": "🏷️ Daftar Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          }
        ]
      },
      {
        "id": "maid",
        "name": "Maid Comic",
        "fetchSource": "maid",
        "endpoints": [
          {
            "id": "latest",
            "name": "📰 Komik Terbaru",
            "originalRoute": "/latest",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/latest?page=1"
          },
          {
            "id": "manga",
            "name": "ℹ️ Detail Komik",
            "originalRoute": "/manga",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/manga/onii-chan-wa-oshimai"
          },
          {
            "id": "chapter",
            "name": "📖 Baca Chapter",
            "originalRoute": "/chapter",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/chapter/onii-chan-wa-oshimai-chapter-104-bahasa-indonesia"
          },
          {
            "id": "genres/:slug",
            "name": "🎭 Filter by Genre",
            "originalRoute": "/genres/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genres/adventure?page=2"
          },
          {
            "id": "search",
            "name": "🔎 Pencarian Lanjutan",
            "originalRoute": "/search",
            "hasQuery": true,
            "queryParam": "title,page",
            "isRouteParam": false,
            "example": "/search?title=boku&page=1"
          },
          {
            "id": "list",
            "name": "🔠 List All Manga",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "api",
            "name": "🔥 Homepage",
            "originalRoute": "/api",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/api"
          },
          {
            "id": "genres",
            "name": "🏷️ Daftar Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          }
        ]
      },
      {
        "id": "komikindo",
        "name": "Komikindo",
        "fetchSource": "komikindo",
        "endpoints": [
          {
            "id": "latest/:page",
            "name": "📰 Komik Terbaru",
            "originalRoute": "/latest/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/latest/1"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Komik",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/one-piece"
          },
          {
            "id": "chapter/:slug",
            "name": "📖 Baca Chapter",
            "originalRoute": "/chapter/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/chapter/one-piece-chapter-1"
          },
          {
            "id": "search/:query/:page",
            "name": "🔎 Cari Komik",
            "originalRoute": "/search/:query/:page",
            "hasQuery": true,
            "queryParam": "query,page",
            "isRouteParam": true,
            "example": "/search/naruto/1"
          },
          {
            "id": "library",
            "name": "📚 Library / Daftar Komik",
            "originalRoute": "/library",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/library"
          },
          {
            "id": "genres",
            "name": "🏷️ Daftar Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          }
        ]
      },
      {
        "id": "mangakita",
        "name": "Mangakita",
        "fetchSource": "mangakita",
        "endpoints": [
          {
            "id": "list",
            "name": "📚 Comic List (Filter)",
            "originalRoute": "/list",
            "hasQuery": true,
            "queryParam": "order,page",
            "isRouteParam": false,
            "example": "/list?order=update&page=1"
          },
          {
            "id": "projects/:page",
            "name": "🚀 Project Updates",
            "originalRoute": "/projects/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/projects/1"
          },
          {
            "id": "daftar-manga/:page",
            "name": "🗂️ All Manga List",
            "originalRoute": "/daftar-manga/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/daftar-manga/1"
          },
          {
            "id": "genres/:slug/:page",
            "name": "🎭 Filter by Genre",
            "originalRoute": "/genres/:slug/:page",
            "hasQuery": true,
            "queryParam": "slug,page",
            "isRouteParam": true,
            "example": "/genres/action/1"
          },
          {
            "id": "search/:query/:page",
            "name": "🔍 Search Comic",
            "originalRoute": "/search/:query/:page",
            "hasQuery": true,
            "queryParam": "query,page",
            "isRouteParam": true,
            "example": "/search/one%20piece/1"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Comic",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/one-piece"
          },
          {
            "id": "chapter/:slug",
            "name": "📖 Read Chapter",
            "originalRoute": "/chapter/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/chapter/one-piece-chapter-1163-bahasa-indonesia"
          },
          {
            "id": "home",
            "name": "🏠 Homepage",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "genres",
            "name": "🏷️ All Genres",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "rekomendasi",
            "name": "💡 Recommendations",
            "originalRoute": "/rekomendasi",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/rekomendasi"
          }
        ]
      },
      {
        "id": "soulscan",
        "name": "SoulScans",
        "fetchSource": "soulscan",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Homepage",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "projects/{page}",
            "name": "🚀 Project Updates",
            "originalRoute": "/projects/{page}",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/projects/1"
          },
          {
            "id": "list",
            "name": "📚 Comic List (Filter)",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "all",
            "name": "📜 All Comics (A-Z List Mode)",
            "originalRoute": "/all",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/all"
          },
          {
            "id": "azlist/{letter}",
            "name": "🔤 A-Z List (By Letter)",
            "originalRoute": "/azlist/{letter}",
            "hasQuery": true,
            "queryParam": "letter",
            "isRouteParam": true,
            "example": "/azlist/A"
          },
          {
            "id": "search/{query}",
            "name": "🔍 Search Comic",
            "originalRoute": "/search/{query}",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/naruto"
          },
          {
            "id": "detail/{slug}",
            "name": "ℹ️ Detail Comic",
            "originalRoute": "/detail/{slug}",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/example"
          },
          {
            "id": "chapter/{slug}",
            "name": "📖 Read Chapter",
            "originalRoute": "/chapter/{slug}",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/chapter/example"
          }
        ]
      },
      {
        "id": "bacaman",
        "name": "Bacaman",
        "fetchSource": "bacaman",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Home",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "list",
            "name": "📄 Project List",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "search/{query}",
            "name": "🔍 Search Comic",
            "originalRoute": "/search/{query}",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/naruto"
          },
          {
            "id": "detail/{slug}",
            "name": "ℹ️ Comic Info",
            "originalRoute": "/detail/{slug}",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/example"
          },
          {
            "id": "chapter/{slug}",
            "name": "📖 Read Chapter",
            "originalRoute": "/chapter/{slug}",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/chapter/example"
          },
          {
            "id": "popular",
            "name": "🔥 Popular",
            "originalRoute": "/popular",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/popular"
          },
          {
            "id": "latest",
            "name": "📊 Latest",
            "originalRoute": "/latest",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/latest"
          },
          {
            "id": "update",
            "name": "✨ Update",
            "originalRoute": "/update",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/update"
          },
          {
            "id": "completed",
            "name": "👌🏽 Completed",
            "originalRoute": "/completed",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/completed"
          },
          {
            "id": "genres",
            "name": "🏷️ Genre List",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "genres/{slug}",
            "name": "🎭 By Genre",
            "originalRoute": "/genres/{slug}",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genres/example"
          },
          {
            "id": "type/{type}",
            "name": "🎌 By Type",
            "originalRoute": "/type/{type}",
            "hasQuery": true,
            "queryParam": "type",
            "isRouteParam": true,
            "example": "/type/manga"
          },
          {
            "id": "az/{page}",
            "name": "♨️ By A-Z list",
            "originalRoute": "/az/{page}",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/az/1"
          }
        ]
      },
      {
        "id": "meganei",
        "name": "Meganei",
        "fetchSource": "meganei",
        "endpoints": [
          {
            "id": "home/:page",
            "name": "🏠 Home",
            "originalRoute": "/home/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/home/1"
          },
          {
            "id": "list",
            "name": "📄 List",
            "originalRoute": "/list",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/list?page=1"
          },
          {
            "id": "search/:query",
            "name": "🔍 Search Comic",
            "originalRoute": "/search/:query",
            "hasQuery": true,
            "queryParam": "query",
            "isRouteParam": true,
            "example": "/search/One%20Piece"
          },
          {
            "id": "info/:slug",
            "name": "ℹ️ Detail Comic",
            "originalRoute": "/info/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/info/one-piece-batch-pdf"
          }
        ]
      },
      {
        "id": "softkomik",
        "name": "Softkomik",
        "fetchSource": "softkomik",
        "endpoints": [
          {
            "id": "type/:type",
            "name": "📂 Filter by Type New",
            "originalRoute": "/type/:type",
            "hasQuery": true,
            "queryParam": "type",
            "isRouteParam": true,
            "example": "/type/manga?page=1"
          },
          {
            "id": "genre/:name",
            "name": "🎭 Filter by Genre",
            "originalRoute": "/genre/:name",
            "hasQuery": true,
            "queryParam": "name",
            "isRouteParam": true,
            "example": "/genre/Action"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Komik",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/henkyou-kishidan-no-oryourigakari-suterare-youjo-desu-ga-kahogo-na-kazoku-ni-hirowarete-oishii-gohan-o-tsukurimasu-bahasa-indonesia"
          },
          {
            "id": "chapter/:slug/:ch",
            "name": "📖 Baca Chapter",
            "originalRoute": "/chapter/:slug/:ch",
            "hasQuery": true,
            "queryParam": "slug,ch",
            "isRouteParam": true,
            "example": "/chapter/henkyou-kishidan-no-oryourigakari-suterare-youjo-desu-ga-kahogo-na-kazoku-ni-hirowarete-oishii-gohan-o-tsukurimasu-bahasa-indonesia/001"
          },
          {
            "id": "home",
            "name": "🏠 Homepage Next.js",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "list",
            "name": "📋 Comic List New",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "update",
            "name": "🔥 Latest Updates New",
            "originalRoute": "/update",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/update"
          },
          {
            "id": "ongoing",
            "name": "▶️ Ongoing Comics New",
            "originalRoute": "/ongoing",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/ongoing"
          },
          {
            "id": "completed",
            "name": "✅ Completed Comics New",
            "originalRoute": "/completed",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/completed"
          },
          {
            "id": "library",
            "name": "📚 Library / Arsip",
            "originalRoute": "/library",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/library"
          },
          {
            "id": "search",
            "name": "⚡ Fast Search (V2)",
            "originalRoute": "/search",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/search"
          },
          {
            "id": "genres",
            "name": "🏷️ Daftar Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          }
        ]
      },
      {
        "id": "westmanga",
        "name": "Westmanga",
        "fetchSource": "westmanga",
        "endpoints": [
          {
            "id": "genre/:id",
            "name": "🎭 Filter by Genre",
            "originalRoute": "/genre/:id",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/genre/13?page=1"
          },
          {
            "id": "genres-filter",
            "name": "🎯 Filter Multi Genre",
            "originalRoute": "/genres-filter",
            "hasQuery": true,
            "queryParam": "ids,page",
            "isRouteParam": false,
            "example": "/genres-filter?ids=13,344&page=1"
          },
          {
            "id": "search",
            "name": "🔍 Search Comic",
            "originalRoute": "/search",
            "hasQuery": true,
            "queryParam": "q,page",
            "isRouteParam": false,
            "example": "/search?q=solo+leveling&page=1"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Comic",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/solo-leveling"
          },
          {
            "id": "chapter/:slug",
            "name": "📖 Read Chapter",
            "originalRoute": "/chapter/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/chapter/solo-leveling-chapter-175-bahasa-indonesia"
          },
          {
            "id": "home",
            "name": "🏠 Homepage",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "genres",
            "name": "🏷️ Daftar Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "list",
            "name": "📚 Manga List (Filter Lengkap)",
            "originalRoute": "/list",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/list"
          },
          {
            "id": "latest",
            "name": "📰 Update Terbaru",
            "originalRoute": "/latest",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/latest"
          },
          {
            "id": "popular",
            "name": "🔥 Komik Populer",
            "originalRoute": "/popular",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/popular"
          },
          {
            "id": "ongoing",
            "name": "⏳ Status: Ongoing",
            "originalRoute": "/ongoing",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/ongoing"
          },
          {
            "id": "completed",
            "name": "✅ Status: Completed",
            "originalRoute": "/completed",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/completed"
          },
          {
            "id": "manga",
            "name": "🇯🇵 Manga (Jepang)",
            "originalRoute": "/manga",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/manga"
          },
          {
            "id": "manhua",
            "name": "🇨🇳 Manhua (China)",
            "originalRoute": "/manhua",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/manhua"
          },
          {
            "id": "manhwa",
            "name": "🇰🇷 Manhwa (Korea)",
            "originalRoute": "/manhwa",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/manhwa"
          },
          {
            "id": "az",
            "name": "🔤 Urutkan A-Z",
            "originalRoute": "/az",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/az"
          },
          {
            "id": "za",
            "name": "🔡 Urutkan Z-A",
            "originalRoute": "/za",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/za"
          },
          {
            "id": "added",
            "name": "🆕 Baru Ditambahkan",
            "originalRoute": "/added",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/added"
          },
          {
            "id": "colored",
            "name": "🎨 Komik Berwarna",
            "originalRoute": "/colored",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/colored"
          },
          {
            "id": "uncolored",
            "name": "⚫ Komik Tidak Berwarna",
            "originalRoute": "/uncolored",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/uncolored"
          },
          {
            "id": "projects",
            "name": "🚀 Project Westmanga",
            "originalRoute": "/projects",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/projects"
          },
          {
            "id": "others",
            "name": "📑 Komik Lainnya",
            "originalRoute": "/others",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/others"
          }
        ]
      },
      {
        "id": "kmkindo",
        "name": "Kmkindo",
        "fetchSource": "kmkindo",
        "endpoints": [
          {
            "id": "config",
            "name": "⚙️ Config List",
            "originalRoute": "/config",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/config"
          },
          {
            "id": "list",
            "name": "🧪 Advanced Filter",
            "originalRoute": "/list",
            "hasQuery": true,
            "queryParam": "genre,status",
            "isRouteParam": false,
            "example": "/list?genre=Action,Isekai&status=Ongoing"
          },
          {
            "id": "search/:query/:page",
            "name": "🔍 Search Comic",
            "originalRoute": "/search/:query/:page",
            "hasQuery": true,
            "queryParam": "query,page",
            "isRouteParam": true,
            "example": "/search/solo/1"
          },
          {
            "id": "populer/:page",
            "name": "🔥 Komik Populer",
            "originalRoute": "/populer/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/populer/1"
          },
          {
            "id": "latest/:page",
            "name": "📰 Komik Terbaru",
            "originalRoute": "/latest/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/latest/1"
          },
          {
            "id": "type/:type/:page",
            "name": "🎌 Filter by Type",
            "originalRoute": "/type/:type/:page",
            "hasQuery": true,
            "queryParam": "type,page",
            "isRouteParam": true,
            "example": "/type/Manhwa/1"
          },
          {
            "id": "colorized/:val/:page",
            "name": "🎨 Colorized Filter",
            "originalRoute": "/colorized/:val/:page",
            "hasQuery": true,
            "queryParam": "val,page",
            "isRouteParam": true,
            "example": "/colorized/1/1"
          },
          {
            "id": "detail/:id",
            "name": "ℹ️ Detail Comic",
            "originalRoute": "/detail/:id",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/detail/347199"
          },
          {
            "id": "chapter/:id",
            "name": "📖 Read Chapter",
            "originalRoute": "/chapter/:id",
            "hasQuery": true,
            "queryParam": "id",
            "isRouteParam": true,
            "example": "/chapter/347199"
          },
          {
            "id": "filter/:term/:val/:page",
            "name": "🏷️ Simple Filter",
            "originalRoute": "/filter/:term/:val/:page",
            "hasQuery": true,
            "queryParam": "term,val,page",
            "isRouteParam": true,
            "example": "/filter/genres/Action/1"
          }
        ]
      },
      {
        "id": "mangasusuku",
        "name": "Mangasusuku",
        "fetchSource": "mangasusuku",
        "endpoints": [
          {
            "id": "home/:page",
            "name": "🏠 Mangasusuku Homepage",
            "originalRoute": "/home/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/home/1"
          },
          {
            "id": "latest/:page",
            "name": "📰 Latest Manga",
            "originalRoute": "/latest/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/latest/1"
          },
          {
            "id": "popular/:page",
            "name": "🔥 Manga Populer",
            "originalRoute": "/popular/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/popular/1"
          },
          {
            "id": "list/:page",
            "name": "📚 All Manga List",
            "originalRoute": "/list/:page",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/list/1"
          },
          {
            "id": "list-by-char/:char/:page",
            "name": "📚 Detail All Manga List",
            "originalRoute": "/list-by-char/:char/:page",
            "hasQuery": true,
            "queryParam": "char,page",
            "isRouteParam": true,
            "example": "/list-by-char/A/1"
          },
          {
            "id": "search/:query/:page",
            "name": "🔍 Search Mangasusuku",
            "originalRoute": "/search/:query/:page",
            "hasQuery": true,
            "queryParam": "query,page",
            "isRouteParam": true,
            "example": "/search/A+Bachelor+in+the+Country/1"
          },
          {
            "id": "genres",
            "name": "🏷️ Daftar Genre",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "genre/:genreId/:page",
            "name": "🎭 Filter by Genre",
            "originalRoute": "/genre/:genreId/:page",
            "hasQuery": true,
            "queryParam": "genreId,page",
            "isRouteParam": true,
            "example": "/genre/action/1"
          },
          {
            "id": "detail/:slug",
            "name": "📖 Detail Manga",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/sleepless-train-uncensored"
          },
          {
            "id": "chapter/:slug",
            "name": "📄 Baca Chapter",
            "originalRoute": "/chapter/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/chapter/sleepless-train-uncensored-chapter-1"
          }
        ]
      },
      {
        "id": "kiryuu",
        "name": "Kiryuu",
        "fetchSource": "kiryuu",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Kiryuu Homepage",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "popular",
            "name": "🔥 Manhwa Populer",
            "originalRoute": "/popular",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/popular"
          },
          {
            "id": "recommendations",
            "name": "⭐ Rekomendasi",
            "originalRoute": "/recommendations",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/recommendations"
          },
          {
            "id": "latest",
            "name": "📰 Latest Manga",
            "originalRoute": "/latest",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/latest"
          },
          {
            "id": "top-weekly",
            "name": "🏆 Top Weekly",
            "originalRoute": "/top-weekly",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/top-weekly"
          },
          {
            "id": "search/:query/:page",
            "name": "🔍 Search Kiryuu",
            "originalRoute": "/search/:query/:page",
            "hasQuery": true,
            "queryParam": "query,page",
            "isRouteParam": true,
            "example": "/search/one-piece/1"
          },
          {
            "id": "manga/:slug",
            "name": "📖 Detail Manga",
            "originalRoute": "/manga/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/manga/one-piece"
          },
          {
            "id": "chapter/:slug",
            "name": "📄 Baca Chapter",
            "originalRoute": "/chapter/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/chapter/one-piece-chapter-1"
          }
        ]
      },
      {
        "id": "cosmic",
        "name": "Cosmic Scans",
        "fetchSource": "cosmic",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Cosmic Scans Homepage",
            "originalRoute": "/home",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/home"
          },
          {
            "id": "projects/{page}",
            "name": "🚀 Project List",
            "originalRoute": "/projects/{page}",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/projects/1"
          },
          {
            "id": "latest/{page}",
            "name": "📰 Latest Update",
            "originalRoute": "/latest/{page}",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": true,
            "example": "/latest/1"
          },
          {
            "id": "search/{query}/{page}",
            "name": "🔍 Search Comic",
            "originalRoute": "/search/{query}/{page}",
            "hasQuery": true,
            "queryParam": "query,page",
            "isRouteParam": true,
            "example": "/search/naruto/1"
          },
          {
            "id": "manga/{slug}",
            "name": "📖 Detail Komik",
            "originalRoute": "/manga/{slug}",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/manga/example"
          },
          {
            "id": "chapter/{slug}",
            "name": "📄 Baca Chapter",
            "originalRoute": "/chapter/{slug}",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/chapter/example"
          }
        ]
      }
    ]
  },
  {
    "id": "novel",
    "name": "Novel",
    "subSources": [
      {
        "id": "sakuranovel",
        "name": "SakuraNovel",
        "fetchSource": "sakuranovel",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Home / Latest",
            "originalRoute": "/home",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/home?page=1"
          },
          {
            "id": "search",
            "name": "🔍 Search Novel",
            "originalRoute": "/search",
            "hasQuery": true,
            "queryParam": "q",
            "isRouteParam": false,
            "example": "/search?q=majo"
          },
          {
            "id": "advanced-search",
            "name": "🧪 Advanced Search",
            "originalRoute": "/advanced-search",
            "hasQuery": true,
            "queryParam": "status",
            "isRouteParam": false,
            "example": "/advanced-search?status=completed"
          },
          {
            "id": "detail/:slug",
            "name": "ℹ️ Detail Novel",
            "originalRoute": "/detail/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/detail/eiyuu-to-majo-no-tensei-rabu-kome"
          },
          {
            "id": "read/:slug",
            "name": "📖 Read Chapter",
            "originalRoute": "/read/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/read/eiyuu-to-majo-no-tensei-rabu-kome-short-story-bahasa-indonesia"
          },
          {
            "id": "genres",
            "name": "🏷️ List Genres",
            "originalRoute": "/genres",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/genres"
          },
          {
            "id": "genre/:slug",
            "name": "🎭 Filter by Genre",
            "originalRoute": "/genre/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genre/action"
          },
          {
            "id": "tags",
            "name": "📌 List Tags",
            "originalRoute": "/tags",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/tags"
          },
          {
            "id": "tag/:slug",
            "name": "📍 Filter by Tag",
            "originalRoute": "/tag/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/tag/mismatched-couple"
          },
          {
            "id": "daftar-novel",
            "name": "📜 Daftar Novel A-Z",
            "originalRoute": "/daftar-novel",
            "hasQuery": false,
            "queryParam": "",
            "isRouteParam": false,
            "example": "/daftar-novel"
          }
        ]
      },
      {
        "id": "novelcool",
        "name": "NovelCool",
        "fetchSource": "novelcool",
        "endpoints": [
          {
            "id": "home",
            "name": "🏠 Home / Latest",
            "originalRoute": "/home",
            "hasQuery": true,
            "queryParam": "page",
            "isRouteParam": false,
            "example": "/home?page=1"
          },
          {
            "id": "search",
            "name": "🔍 Search Novel",
            "originalRoute": "/search",
            "hasQuery": true,
            "queryParam": "q",
            "isRouteParam": false,
            "example": "/search?q=majo"
          },
          {
            "id": "genre/:slug",
            "name": "🎭 Filter by Genre",
            "originalRoute": "/genre/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/genre/action"
          },
          {
            "id": "read/:slug",
            "name": "📖 Read Chapter",
            "originalRoute": "/read/:slug",
            "hasQuery": true,
            "queryParam": "slug",
            "isRouteParam": true,
            "example": "/read/example"
          }
        ]
      }
    ]
  }
];

// Clean formatting: Remove emojis/non-ASCII icons from endpoint names
sourcesConfig.forEach(category => {
  if (category.subSources) {
    category.subSources.forEach(source => {
      if (source.endpoints) {
        source.endpoints.forEach(endpoint => {
          if (endpoint.name) {
            // Strip any character outside basic printable ASCII (removes all emojis & variation selectors)
            endpoint.name = endpoint.name.replace(/[^\x20-\x7E]/g, '').trim();
          }
        });
      }
    });
  }
});
