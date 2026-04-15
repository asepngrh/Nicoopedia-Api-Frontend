/**
 * ONE-SHOT SCRIPT: Adds `example` property to every endpoint in sources.js
 * based on the upstream _sources.ts data.
 * 
 * Run: node src/utils/add-examples.cjs
 * Then delete this file.
 */

const fs = require('fs');
const path = require('path');

// ── Upstream example data ─────────────────────────────────────────
// Source → Route → Example mapping from _sources.ts
const UPSTREAM_EXAMPLES = {
  // ─── ANIME ───
  anichin: {
    "/home": "/home",
    "/search/:query": "/search/soul%20land",
    "/detail/:slug": "/detail/soul-land-2-the-unrivaled-tang-sect",
    "/episode/:slug": "/episode/soul-land-2-the-unrivaled-tang-sect-episode-87-subtitle-indonesia/",
    "/az-list/:letter/:page": "/az-list/A/1",
    "/completed": "/completed",
    "/ongoing": "/ongoing",
    "/genres": "/genres",
    "/seasons": "/seasons",
    "/latest/:page": "/latest/1",
    "/schedule": "/schedule",
    "/az-list": "/az-list",
  },
  animasu: {
    "/home": "/home",
    "/search/:query": "/search/one%20piece?page=1",
    "/detail/:slug": "/detail/one-piece-sub-indonesia",
    "/episode/:slug": "/episode/nonton-one-piece-episode-1148",
    "/advanced-search": "/advanced-search?genres=aksi&status=ongoing",
    "/genre/:slug": "/genre/aksi?page=1",
    "/character/:slug": "/character/berjuang?page=1",
    "/popular": "/popular",
    "/latest": "/latest",
    "/movies": "/movies",
    "/ongoing": "/ongoing",
    "/completed": "/completed",
    "/schedule": "/schedule",
    "/animelist": "/animelist",
    "/genres": "/genres",
    "/characters": "/characters",
  },
  animeindo: {
    "/episode/:slug": "/episode/one-piece-episode-1000",
    "/anime/:slug": "/anime/naruto",
    "/genres/:slug": "/genres/action?page=1",
    "/schedule": "/schedule",
    "/search/:query": "/search/naruto",
    "/latest": "/latest",
    "/popular": "/popular",
    "/movies": "/movies",
    "/list": "/list",
    "/genres": "/genres",
  },
  animekuindo: {
    "/episode/:slug": "/episode/one-piece-episode-1150",
    "/detail/:slug": "/detail/one-piece-subtitle-indonesia",
    "/seasons/:slug": "/seasons/fall-2024",
    "/genres/:slug": "/genres/action",
    "/search/:query": "/search/one%20piece",
    "/home": "/home",
    "/latest": "/latest",
    "/popular": "/popular",
    "/movie": "/movie",
    "/schedule": "/schedule",
    "/genres": "/genres",
    "/seasons": "/seasons",
  },
  animesail: {
    "/home": "/home",
    "/terbaru": "/terbaru",
    "/donghua": "/donghua",
    "/movie": "/movie",
    "/list": "/list",
    "/schedule": "/schedule",
    "/genres": "/genres",
    "/search/{q}": "/search/naruto",
    "/genre/{genreId}": "/genre/action",
    "/season/{seasonId}": "/season/fall-2024",
    "/studio/{studioId}": "/studio/mappa",
    "/detail/{animeId}": "/detail/naruto",
    "/episode/{episodeId}": "/episode/naruto-episode-1",
  },
  anoboy: {
    "/home": "/home",
    "/search/:query": "/search/one%20piece?page=1",
    "/genre/:slug": "/genre/action?page=1",
    "/anime/:slug": "/anime/digimon-beatbreak/",
    "/episode/:slug": "/episode/digimon-beatbreak-episode-1-subtitle-indonesia/",
    "/az-list": "/az-list",
    "/genres": "/genres",
    "/list": "/list",
  },
  otakudesu: {
    "/home": "/home",
    "/search": "/search?q=naruto",
    "/genres/:slug": "/genres/action?page=1",
    "/anime/:slug": "/anime/enen-shouboutai-season-3-p2-sub-indo",
    "/episode/:slug": "/episode/sd-p2-episode-10-sub-indo",
    "/server/:id": "/server/6DBBB9-5-9D5u",
    "/batch/:slug": "/batch/jshk-s2-batch-sub-indo",
    "/schedule": "/schedule",
    "/anime": "/anime",
    "/genres": "/genres",
    "/ongoing": "/ongoing",
    "/completed": "/completed",
  },
  samehadaku: {
    "/home": "/home",
    "/search": "/search?q=one%20piece",
    "/genres/:slug": "/genres/action",
    "/anime/:slug": "/anime/one-piece",
    "/episode/:slug": "/episode/one-piece-episode-1141",
    "/server/:id": "/server/9AAB5-69-xhmyrq",
    "/batch/:slug": "/batch/kusuriya-no-hitorigoto-season-2-episode-1-24-batch",
    "/genres": "/genres",
    "/anime": "/anime",
    "/schedule": "/schedule",
    "/recent": "/recent",
    "/ongoing": "/ongoing",
    "/completed": "/completed",
    "/popular": "/popular",
    "/movies": "/movies",
    "/batch": "/batch",
  },
  kusonime: {
    "/latest": "/latest",
    "/search/:query": "/search/fumetsu?page=1",
    "/type/:type": "/type/ona?page=1",
    "/genre/:slug": "/genre/action?page=1",
    "/season/:slug": "/season/fall-2022",
    "/detail/:slug": "/detail/fumetsu-no-anata-e-s2-subtitle-indonesia",
    "/all-anime": "/all-anime",
    "/movie": "/movie",
    "/all-genres": "/all-genres",
    "/all-seasons": "/all-seasons",
  },
  nimegami: {
    "/live-action/detail/:slug": "/live-action/detail/3d-kanojo-real-girl-live-action-sub-indo",
    "/drama/detail/:slug": "/drama/detail/ah-wilderness-drama-movie-sub-indo",
    "/type/:slug": "/type/tv?page=1",
    "/season/:slug": "/season/winter-2024?page=1",
    "/genre/:slug": "/genre/action?page=1",
    "/watch/:slug": "/watch/ah-wilderness-drama-movie-sub-indo",
    "/detail/:slug": "/detail/naruto",
    "/search/:query": "/search/one-piece",
    "/home": "/home",
    "/genres": "/genres",
    "/seasons": "/seasons",
    "/types": "/types",
    "/drama": "/drama",
    "/live-action": "/live-action",
  },
  oploverz: {
    "/home": "/home",
    "/search/:query": "/search/one%20piece",
    "/anime/:slug": "/anime/one-piece",
    "/episode/:slug": "/episode/one-piece-episode-004-remastered",
    "/schedule": "/schedule",
    "/list": "/list",
    "/ongoing": "/ongoing",
    "/completed": "/completed",
  },
  winbu: {
    "/server": "/server?post=66146&nume=1&type=schtml",
    "/episode/:id": "/episode/my-gift-lvl-9999-unlimited-gacha-episode-8",
    "/film/:id": "/film/resurrection-road-2025",
    "/series/:id": "/series/love-on-the-turquoise-land",
    "/anime/:id": "/anime/my-gift-lvl-9999-unlimited-gacha",
    "/genre/:slug": "/genre/action",
    "/search": "/search?q=one%20piece",
    "/schedule": "/schedule?day=senin",
    "/home": "/home",
    "/update": "/update",
    "/latest": "/latest",
    "/populer": "/populer",
    "/all-anime": "/all-anime",
    "/all-anime-reverse": "/all-anime-reverse",
    "/list": "/list",
    "/catalog": "/catalog",
    "/film": "/film",
    "/movie": "/movie",
    "/series": "/series",
    "/animedonghua": "/animedonghua",
    "/tvshow": "/tvshow",
    "/others": "/others",
    "/genres": "/genres",
    "/ongoing": "/ongoing",
    "/completed": "/completed",
  },
  donghub: {
    "/home": "/home",
    "/search/:query": "/search/Little%20Fairy%20Yao",
    "/detail/:slug": "/detail/little-fairy-yao",
    "/episode/:slug": "/episode/the-other-side-of-deep-space-episode-01-subtitle-indonesia/",
    "/list": "/list",
    "/schedule": "/schedule",
    "/latest": "/latest",
    "/popular": "/popular",
    "/movie": "/movie",
  },
  alqanime: {
    "/home": "/home",
    "/schedule": "/schedule",
    "/anime": "/anime",
    "/genres": "/genres",
    "/popular": "/popular",
    "/ongoing": "/ongoing",
    "/completed": "/completed",
    "/movies": "/movies",
    "/search": "/search?q=naruto",
    "/genres/{genreId}": "/genres/action",
    "/season/{seasonId}": "/season/fall-2024",
    "/anime/{animeId}": "/anime/naruto",
  },

  // ─── COMIC ───
  comic: {
    "/search": "/search?q=naruto",
    "/comic/{slug}": "/comic/it-all-starts-with-trillions-of-nether-currency",
    "/chapter/{slug}": "/chapter/it-all-starts-with-trillions-of-nether-currency-chapter-156",
    "/type/{type}": "/type/manga",
    "/genre/{genre}": "/genre/action",
    "/pustaka/{page}": "/pustaka/1",
    "/terbaru": "/terbaru",
    "/populer": "/populer",
    "/trending": "/trending",
    "/homepage": "/homepage",
    "/genres": "/genres",
    "/random": "/random",
  },
  bacakomik: {
    "/only/:type": "/only/manga",
    "/search/:query": "/search/one%20piece",
    "/genre/:genre": "/genre/action",
    "/detail/:slug": "/detail/nano-machine",
    "/chapter/:slug": "/chapter/nano-machine-chapter-1",
    "/komikberwarna/:page": "/komikberwarna/1",
    "/latest": "/latest",
    "/populer": "/populer",
    "/top": "/top",
    "/list": "/list",
    "/genres": "/genres",
    "/recomen": "/recomen",
  },
  komikstation: {
    "/popular": "/popular?page=1",
    "/ongoing": "/ongoing?page=1",
    "/az-list/:letter": "/az-list/A?page=1",
    "/genre/:slug/:page": "/genre/action",
    "/search/:query/:page": "/search/naruto",
    "/manga/:slug": "/manga/solo-leveling",
    "/chapter/:slug": "/chapter/solo-leveling-chapter-1",
    "/list": "/list",
    "/home": "/home",
    "/recommendation": "/recommendation",
    "/top-weekly": "/top-weekly",
    "/genres": "/genres",
  },
  maid: {
    "/latest": "/latest?page=1",
    "/manga": "/manga/onii-chan-wa-oshimai",
    "/chapter": "/chapter/onii-chan-wa-oshimai-chapter-104-bahasa-indonesia",
    "/genres/:slug": "/genres/adventure?page=2",
    "/search": "/search?title=boku&page=1",
    "/list": "/list",
    "/api": "/api",
    "/genres": "/genres",
  },
  komikindo: {
    "/latest/:page": "/latest/1",
    "/detail/:slug": "/detail/one-piece",
    "/chapter/:slug": "/chapter/one-piece-chapter-1",
    "/search/:query/:page": "/search/naruto/1",
    "/library": "/library",
    "/genres": "/genres",
  },
  mangakita: {
    "/list": "/list?order=update&page=1",
    "/projects/:page": "/projects/1",
    "/daftar-manga/:page": "/daftar-manga/1",
    "/genres/:slug/:page": "/genres/action/1",
    "/search/:query/:page": "/search/one%20piece/1",
    "/detail/:slug": "/detail/one-piece",
    "/chapter/:slug": "/chapter/one-piece-chapter-1163-bahasa-indonesia",
    "/home": "/home",
    "/genres": "/genres",
    "/rekomendasi": "/rekomendasi",
  },
  soulscans: {
    "/home": "/home",
    "/projects/{page}": "/projects/1",
    "/list": "/list",
    "/all": "/all",
    "/azlist/{letter}": "/azlist/A",
    "/search/{query}": "/search/one-piece",
    "/detail/{slug}": "/detail/one-piece",
    "/chapter/{slug}": "/chapter/one-piece-chapter-1",
  },
  bacaman: {
    "/home": "/home",
    "/list": "/list",
    "/search/{query}": "/search/one-piece",
    "/detail/{slug}": "/detail/one-piece",
    "/chapter/{slug}": "/chapter/one-piece-chapter-1",
    "/popular": "/popular",
    "/latest": "/latest",
    "/update": "/update",
    "/completed": "/completed",
    "/genres": "/genres",
    "/genres/{slug}": "/genres/action",
    "/type/{type}": "/type/manga",
    "/az/{page}": "/az/1",
  },
  meganei: {
    "/home/:page": "/home/1",
    "/list": "/list?page=1",
    "/search/:query": "/search/One%20Piece",
    "/info/:slug": "/info/one-piece-batch-pdf",
  },
  softkomik: {
    "/type/:type": "/type/manga?page=1",
    "/genre/:name": "/genre/Action",
    "/detail/:slug": "/detail/henkyou-kishidan-no-oryourigakari-suterare-youjo-desu-ga-kahogo-na-kazoku-ni-hirowarete-oishii-gohan-o-tsukurimasu-bahasa-indonesia",
    "/chapter/:slug/:ch": "/chapter/henkyou-kishidan-no-oryourigakari-suterare-youjo-desu-ga-kahogo-na-kazoku-ni-hirowarete-oishii-gohan-o-tsukurimasu-bahasa-indonesia/001",
    "/home": "/home",
    "/list": "/list",
    "/update": "/update",
    "/ongoing": "/ongoing",
    "/completed": "/completed",
    "/library": "/library",
    "/search": "/search",
    "/genres": "/genres",
  },
  westmanga: {
    "/genre/:id": "/genre/13?page=1",
    "/genres-filter": "/genres-filter?ids=13,344&page=1",
    "/search": "/search?q=solo+leveling&page=1",
    "/detail/:slug": "/detail/solo-leveling",
    "/chapter/:slug": "/chapter/solo-leveling-chapter-175-bahasa-indonesia",
    "/home": "/home",
    "/genres": "/genres",
    "/list": "/list",
    "/latest": "/latest",
    "/popular": "/popular",
    "/ongoing": "/ongoing",
    "/completed": "/completed",
    "/manga": "/manga",
    "/manhua": "/manhua",
    "/manhwa": "/manhwa",
    "/az": "/az",
    "/za": "/za",
    "/added": "/added",
    "/colored": "/colored",
    "/uncolored": "/uncolored",
    "/projects": "/projects",
    "/others": "/others",
  },
  kmkindo: {
    "/config": "/config",
    "/list": "/list?genre=Action,Isekai&status=Ongoing",
    "/search/:query/:page": "/search/solo/1",
    "/populer/:page": "/populer/1",
    "/latest/:page": "/latest/1",
    "/type/:type/:page": "/type/Manhwa/1",
    "/colorized/:val/:page": "/colorized/1/1",
    "/detail/:id": "/detail/347199",
    "/chapter/:id": "/chapter/347199",
    "/filter/:term/:val/:page": "/filter/genres/Action/1",
  },
  mangasusuku: {
    "/home/:page": "/home/1",
    "/latest/:page": "/latest/1",
    "/popular/:page": "/popular/1",
    "/list/:page": "/list/1",
    "/list-by-char/:char/:page": "/list-by-char/A/1",
    "/search/:query/:page": "/search/A+Bachelor+in+the+Country/1",
    "/genres": "/genres",
    "/genre/:genreId/:page": "/genre/action/1",
    "/detail/:slug": "/detail/sleepless-train-uncensored",
    "/chapter/:slug": "/chapter/sleepless-train-uncensored-chapter-1",
  },
  kiryuu: {
    "/home": "/home",
    "/popular": "/popular",
    "/recommendations": "/recommendations",
    "/latest": "/latest",
    "/top-weekly": "/top-weekly",
    "/search/:query/:page": "/search/one-piece/1",
    "/manga/:slug": "/manga/one-piece",
    "/chapter/:slug": "/chapter/one-piece-chapter-1",
  },
  cosmicscans: {
    "/home": "/home",
    "/projects/{page}": "/projects/1",
    "/latest/{page}": "/latest/1",
    "/search/{query}/{page}": "/search/one-piece/1",
    "/manga/{slug}": "/manga/solo-leveling",
    "/chapter/{slug}": "/chapter/solo-leveling-chapter-1",
  },

  // ─── NOVEL ───
  sakuranovel: {
    "/home": "/home?page=1",
    "/search": "/search?q=majo",
    "/advanced-search": "/advanced-search?status=completed",
    "/detail/:slug": "/detail/eiyuu-to-majo-no-tensei-rabu-kome",
    "/read/:slug": "/read/eiyuu-to-majo-no-tensei-rabu-kome-short-story-bahasa-indonesia",
    "/genres": "/genres",
    "/genre/:slug": "/genre/action",
    "/tags": "/tags",
    "/tag/:slug": "/tag/mismatched-couple",
    "/daftar-novel": "/daftar-novel",
  },
};

// ── Normalize route for matching ──────────────────────────────────
// Upstream uses `:param`, sources.js uses `{param}` — handle both
function normalizeRoute(route) {
  return route
    .replace(/\{([^}]+)\}/g, ':$1')   // {param} → :param
    .replace(/\/$/, '');               // strip trailing /
}

// ── Load and transform ───────────────────────────────────────────
const sourcesPath = path.join(__dirname, 'sources.js');
const raw = fs.readFileSync(sourcesPath, 'utf-8');

// Parse just the array from the export
const match = raw.match(/export const sourcesConfig = (\[[\s\S]*\]);?\s*$/);
if (!match) { console.error('Could not parse sourcesConfig'); process.exit(1); }

const config = eval(match[1]); // safe for local dev script

let added = 0;
let missed = 0;

function processEndpoints(sourceId, endpoints) {
  const exampleMap = UPSTREAM_EXAMPLES[sourceId];
  if (!exampleMap) {
    console.warn(`⚠️  No upstream examples for source: ${sourceId}`);
    return;
  }

  endpoints.forEach(ep => {
    const normalized = normalizeRoute(ep.originalRoute);
    
    // Try all these keys to find a match
    const candidates = [
      ep.originalRoute,
      normalized,
    ];
    
    let found = null;
    for (const key of candidates) {
      if (exampleMap[key]) { found = exampleMap[key]; break; }
    }

    if (found) {
      ep.example = found;
      added++;
    } else if (ep.hasQuery) {
      // For parameterized endpoints without upstream examples, generate one
      const route = ep.originalRoute;
      // Replace {param} and :param with sensible defaults
      let generated = route
        .replace(/\{query\}|\:query/g, 'naruto')
        .replace(/\{keyword\}|\:keyword/g, 'naruto')
        .replace(/\{slug\}|\:slug/g, 'example')
        .replace(/\{q\}|\:q/g, 'naruto')
        .replace(/\{page\}|\:page/g, '1')
        .replace(/\{genreId\}|\:genreId/g, 'action')
        .replace(/\{seasonId\}|\:seasonId/g, 'fall-2024')
        .replace(/\{studioId\}|\:studioId/g, 'mappa')
        .replace(/\{animeId\}|\:animeId/g, 'naruto')
        .replace(/\{episodeId\}|\:episodeId/g, 'naruto-episode-1')
        .replace(/\{type\}|\:type/g, 'manga')
        .replace(/\{genre\}|\:genre/g, 'action')
        .replace(/\{letter\}|\:letter/g, 'A')
        .replace(/\{id\}|\:id/g, '1')
        .replace(/\{name\}|\:name/g, 'action')
        .replace(/\{char\}|\:char/g, 'A')
        .replace(/\{val\}|\:val/g, '1')
        .replace(/\{term\}|\:term/g, 'genres')
        .replace(/\{ch\}|\:ch/g, '001');
      ep.example = generated;
      added++;
      console.log(`  Generated example: ${sourceId} ${route} → ${generated}`);
    } else {
      // Static route — example = route itself
      ep.example = ep.originalRoute;
      added++;
    }
  });
}

config.forEach(source => {
  // Handle top-level endpoints
  if (source.endpoints) {
    processEndpoints(source.id, source.endpoints);
  }
  // Handle subSources
  if (source.subSources) {
    source.subSources.forEach(sub => {
      const subId = sub.fetchSource || sub.id;
      processEndpoints(subId, sub.endpoints);
    });
  }
});

// ── Write back ───────────────────────────────────────────────────
const output = `export const sourcesConfig = ${JSON.stringify(config, null, 2)};\n`;
fs.writeFileSync(sourcesPath, output, 'utf-8');

console.log(`\n✅ Done! Added ${added} examples. Check sources.js.`);
