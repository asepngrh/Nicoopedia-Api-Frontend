/**
 * UPSTREAM EXAMPLE MAP
 * 
 * Maps source → route → example path from the upstream _sources.ts.
 * Used by the endpoint selector to provide one-click fetch with prebuilt examples.
 * 
 * For routes NOT in this map, a sensible default is auto-generated at runtime
 * by resolveExample().
 */

const EXAMPLES = {
  // ─── ANIME ────────────────────────────────────────
  anichin: {
    "/search/{keyword}": "/search/soul%20land",
    "/detail/{slug}": "/detail/soul-land-2-the-unrivaled-tang-sect",
    "/episode/{slug}": "/episode/soul-land-2-the-unrivaled-tang-sect-episode-87-subtitle-indonesia",
    "/az-list/{letter}/{page}": "/az-list/A/1",
    "/latest/{page}": "/latest/1",
  },
  animasu: {
    "/search/{keyword}": "/search/one%20piece?page=1",
    "/detail/{slug}": "/detail/one-piece-sub-indonesia",
    "/episode/{slug}": "/episode/nonton-one-piece-episode-1148",
    "/genre/{slug}": "/genre/aksi?page=1",
    "/character/{slug}": "/character/berjuang?page=1",
  },
  animeindo: {
    "/search/{query}": "/search/naruto",
    "/anime/{slug}": "/anime/naruto",
    "/episode/{slug}": "/episode/one-piece-episode-1000",
    "/genres/{slug}": "/genres/action?page=1",
  },
  animekuindo: {
    "/search/{query}": "/search/one%20piece",
    "/detail/{slug}": "/detail/one-piece-subtitle-indonesia",
    "/episode/{slug}": "/episode/one-piece-episode-1150",
    "/seasons/{slug}": "/seasons/fall-2024",
    "/genres/{slug}": "/genres/action",
  },
  animesail: {
    "/search/{q}": "/search/naruto",
    "/genre/{genreId}": "/genre/action",
    "/season/{seasonId}": "/season/fall-2024",
    "/studio/{studioId}": "/studio/mappa",
    "/detail/{animeId}": "/detail/naruto",
    "/episode/{episodeId}": "/episode/naruto-episode-1",
  },
  anoboy: {
    "/search/{keyword}": "/search/one%20piece?page=1",
    "/genre/{slug}": "/genre/action?page=1",
    "/anime/{slug}": "/anime/digimon-beatbreak",
    "/episode/{slug}": "/episode/digimon-beatbreak-episode-1-subtitle-indonesia",
  },
  otakudesu: {
    "/genres/{slug}": "/genres/action?page=1",
    "/anime/{slug}": "/anime/enen-shouboutai-season-3-p2-sub-indo",
    "/episode/{slug}": "/episode/sd-p2-episode-10-sub-indo",
    "/server/{id}": "/server/6DBBB9-5-9D5u",
    "/batch/{slug}": "/batch/jshk-s2-batch-sub-indo",
  },
  samehadaku: {
    "/genres/{slug}": "/genres/action",
    "/anime/{slug}": "/anime/one-piece",
    "/episode/{slug}": "/episode/one-piece-episode-1141",
    "/server/{id}": "/server/9AAB5-69-xhmyrq",
    "/batch/{slug}": "/batch/kusuriya-no-hitorigoto-season-2-episode-1-24-batch",
  },
  kusonime: {
    "/search/{query}": "/search/fumetsu?page=1",
    "/type/{type}": "/type/ona?page=1",
    "/genre/{slug}": "/genre/action?page=1",
    "/season/{slug}": "/season/fall-2022",
    "/detail/{slug}": "/detail/fumetsu-no-anata-e-s2-subtitle-indonesia",
  },
  nimegami: {
    "/search/{query}": "/search/one-piece",
    "/detail/{slug}": "/detail/naruto",
    "/watch/{slug}": "/watch/ah-wilderness-drama-movie-sub-indo",
    "/genre/{slug}": "/genre/action?page=1",
    "/season/{slug}": "/season/winter-2024?page=1",
    "/type/{slug}": "/type/tv?page=1",
    "/drama/detail/{slug}": "/drama/detail/ah-wilderness-drama-movie-sub-indo",
    "/live-action/detail/{slug}": "/live-action/detail/3d-kanojo-real-girl-live-action-sub-indo",
  },
  oploverz: {
    "/search/{keyword}": "/search/one%20piece",
    "/anime/{slug}": "/anime/one-piece",
    "/episode/{slug}": "/episode/one-piece-episode-004-remastered",
  },
  winbu: {
    "/episode/{id}": "/episode/my-gift-lvl-9999-unlimited-gacha-episode-8",
    "/film/{id}": "/film/resurrection-road-2025",
    "/series/{id}": "/series/love-on-the-turquoise-land",
    "/anime/{id}": "/anime/my-gift-lvl-9999-unlimited-gacha",
    "/genre/{slug}": "/genre/action",
  },
  donghub: {
    "/search/{query}": "/search/Little%20Fairy%20Yao",
    "/detail/{slug}": "/detail/little-fairy-yao",
    "/episode/{slug}": "/episode/the-other-side-of-deep-space-episode-01-subtitle-indonesia",
  },
  alqanime: {
    "/genres/{genreId}": "/genres/action",
    "/season/{seasonId}": "/season/fall-2024",
    "/anime/{animeId}": "/anime/naruto",
  },

  // ─── COMIC ────────────────────────────────────────
  comic: {
    "/comic/{slug}": "/comic/it-all-starts-with-trillions-of-nether-currency",
    "/chapter/{slug}": "/chapter/it-all-starts-with-trillions-of-nether-currency-chapter-156",
    "/type/{type}": "/type/manga",
    "/genre/{genre}": "/genre/action",
    "/pustaka/{page}": "/pustaka/1",
  },
  bacakomik: {
    "/only/{type}": "/only/manga",
    "/search/{query}": "/search/one%20piece",
    "/genre/{genre}": "/genre/action",
    "/detail/{slug}": "/detail/nano-machine",
    "/chapter/{slug}": "/chapter/nano-machine-chapter-1",
    "/komikberwarna/{page}": "/komikberwarna/1",
  },
  komikstation: {
    "/az-list/{letter}": "/az-list/A?page=1",
    "/genre/{slug}/{page}": "/genre/action",
    "/search/{query}/{page}": "/search/naruto",
    "/manga/{slug}": "/manga/solo-leveling",
    "/chapter/{slug}": "/chapter/solo-leveling-chapter-1",
  },
  maid: {
    "/genres/{slug}": "/genres/adventure?page=2",
  },
  komikindo: {
    "/latest/{page}": "/latest/1",
    "/detail/{slug}": "/detail/one-piece",
    "/chapter/{slug}": "/chapter/one-piece-chapter-1",
    "/search/{query}/{page}": "/search/naruto/1",
  },
  mangakita: {
    "/projects/{page}": "/projects/1",
    "/daftar-manga/{page}": "/daftar-manga/1",
    "/genres/{slug}/{page}": "/genres/action/1",
    "/search/{query}/{page}": "/search/one%20piece/1",
    "/detail/{slug}": "/detail/one-piece",
    "/chapter/{slug}": "/chapter/one-piece-chapter-1163-bahasa-indonesia",
  },
  soulscans: {
    "/projects/{page}": "/projects/1",
    "/azlist/{letter}": "/azlist/A",
    "/search/{query}": "/search/one-piece",
    "/detail/{slug}": "/detail/one-piece",
    "/chapter/{slug}": "/chapter/one-piece-chapter-1",
  },
  bacaman: {
    "/search/{query}": "/search/one-piece",
    "/detail/{slug}": "/detail/one-piece",
    "/chapter/{slug}": "/chapter/one-piece-chapter-1",
    "/genres/{slug}": "/genres/action",
    "/type/{type}": "/type/manga",
    "/az/{page}": "/az/1",
  },
  meganei: {
    "/home/{page}": "/home/1",
    "/search/{query}": "/search/One%20Piece",
    "/info/{slug}": "/info/one-piece-batch-pdf",
  },
  softkomik: {
    "/type/{type}": "/type/manga?page=1",
    "/genre/{name}": "/genre/Action",
    "/detail/{slug}": "/detail/henkyou-kishidan-no-oryourigakari-suterare-youjo-desu-ga-kahogo-na-kazoku-ni-hirowarete-oishii-gohan-o-tsukurimasu-bahasa-indonesia",
    "/chapter/{slug}/{ch}": "/chapter/henkyou-kishidan-no-oryourigakari-suterare-youjo-desu-ga-kahogo-na-kazoku-ni-hirowarete-oishii-gohan-o-tsukurimasu-bahasa-indonesia/001",
  },
  westmanga: {
    "/genre/{id}": "/genre/13?page=1",
    "/detail/{slug}": "/detail/solo-leveling",
    "/chapter/{slug}": "/chapter/solo-leveling-chapter-175-bahasa-indonesia",
  },
  kmkindo: {
    "/search/{query}/{page}": "/search/solo/1",
    "/populer/{page}": "/populer/1",
    "/latest/{page}": "/latest/1",
    "/type/{type}/{page}": "/type/Manhwa/1",
    "/colorized/{val}/{page}": "/colorized/1/1",
    "/detail/{id}": "/detail/347199",
    "/chapter/{id}": "/chapter/347199",
    "/filter/{term}/{val}/{page}": "/filter/genres/Action/1",
  },
  mangasusuku: {
    "/home/{page}": "/home/1",
    "/latest/{page}": "/latest/1",
    "/popular/{page}": "/popular/1",
    "/list/{page}": "/list/1",
    "/list-by-char/{char}/{page}": "/list-by-char/A/1",
    "/search/{query}/{page}": "/search/A+Bachelor+in+the+Country/1",
    "/genre/{genreId}/{page}": "/genre/action/1",
    "/detail/{slug}": "/detail/sleepless-train-uncensored",
    "/chapter/{slug}": "/chapter/sleepless-train-uncensored-chapter-1",
  },
  kiryuu: {
    "/search/{query}/{page}": "/search/one-piece/1",
    "/manga/{slug}": "/manga/one-piece",
    "/chapter/{slug}": "/chapter/one-piece-chapter-1",
  },
  cosmicscans: {
    "/projects/{page}": "/projects/1",
    "/latest/{page}": "/latest/1",
    "/search/{query}/{page}": "/search/one-piece/1",
    "/manga/{slug}": "/manga/solo-leveling",
    "/chapter/{slug}": "/chapter/solo-leveling-chapter-1",
  },

  // ─── NOVEL ────────────────────────────────────────
  sakuranovel: {
    "/detail/{slug}": "/detail/eiyuu-to-majo-no-tensei-rabu-kome",
    "/read/{slug}": "/read/eiyuu-to-majo-no-tensei-rabu-kome-short-story-bahasa-indonesia",
    "/genre/{slug}": "/genre/action",
    "/tag/{slug}": "/tag/mismatched-couple",
  },
};

// ── Default param values for auto-generation ────────────────────
const DEFAULT_PARAMS = {
  query: 'naruto', keyword: 'naruto', q: 'naruto',
  slug: 'example', id: '1', page: '1',
  genreId: 'action', genre: 'action', name: 'action',
  seasonId: 'fall-2024', studioId: 'mappa',
  animeId: 'naruto', episodeId: 'naruto-episode-1',
  type: 'manga', letter: 'A', char: 'A',
  val: '1', term: 'genres', ch: '001',
};

/**
 * Resolves the example path for a given source + endpoint.
 * Priority:
 *   1. Upstream example from the EXAMPLES map
 *   2. Auto-generated from originalRoute by replacing {params}
 *   3. originalRoute as-is (for static routes)
 */
export function resolveExample(sourceId, endpoint) {
  const route = endpoint.originalRoute;
  
  // 1. Try upstream known example
  const sourceMap = EXAMPLES[sourceId];
  if (sourceMap && sourceMap[route]) {
    return sourceMap[route];
  }

  // 2. If route has params, auto-generate
  if (endpoint.hasQuery || route.includes('{')) {
    return route.replace(/\{([^}]+)\}/g, (_, param) => {
      return DEFAULT_PARAMS[param] || 'example';
    });
  }

  // 3. Static route — use as-is
  return route;
}

/**
 * Extracts a human-readable hint from an example path.
 * e.g. "/search/soul%20land" → "soul land"
 *      "/detail/one-piece" → "one-piece"
 */
export function extractExampleHint(example) {
  if (!example) return '';
  // Get the last meaningful segment
  const clean = example.split('?')[0]; // strip query string
  const segments = clean.split('/').filter(Boolean);
  if (segments.length <= 1) return '';
  const last = segments[segments.length - 1];
  return decodeURIComponent(last).replace(/-/g, ' ');
}
