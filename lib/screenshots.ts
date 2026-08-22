/**
 * In-app screenshots. Dimensions are declared here rather than measured at
 * request time so every `<img>` ships width/height and contributes zero CLS.
 * Source files are the store screenshots, re-encoded by `scripts/build-screenshots.mjs`.
 */

export type AppScreenshotAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export const screenshots = {
  home: {
    src: "/screenshots/streamflix-apk-home-layout.webp",
    width: 720,
    height: 1154,
    alt: "StreamFlix APK home screen with For You, Movies and TV Shows tabs",
    caption:
      "The home tab opens on a featured title with Trending Now and Best TV-Shows rails beneath it.",
  },
  genres: {
    src: "/screenshots/streamflix-apk-genres.webp",
    width: 720,
    height: 1154,
    alt: "StreamFlix APK genre browser showing action, comedy and horror categories",
    caption:
      "Genre browsing keeps navigation to two taps: pick a category, then a title.",
  },
  favourites: {
    src: "/screenshots/streamflix-apk-add-favourites.webp",
    width: 720,
    height: 1154,
    alt: "Adding a movie to favourites in the StreamFlix app",
    caption:
      "Favourites are stored on the device. There is no account, so nothing syncs to a server.",
  },
  contentDetails: {
    src: "/screenshots/streamflix-apk-content-details.webp",
    width: 720,
    height: 1154,
    alt: "StreamFlix APK title page showing rating, runtime and genre",
    caption:
      "Each title carries runtime, release year, genre, and a star rating before you commit to playing it.",
  },
  details: {
    src: "/screenshots/streamflix-apk-title-details.webp",
    width: 1280,
    height: 1042,
    alt: "StreamFlix detail page for a film with Play, Download, Trailer and Report actions",
    caption:
      "The detail view on a tablet: Play and Download sit above overview, original language, release date, budget, revenue and director.",
  },
  library: {
    src: "/screenshots/streamflix-apk-wide-range-content.webp",
    width: 1280,
    height: 1042,
    alt: "Wide range of movies and TV shows in the StreamFlix catalog",
    caption:
      "Catalog breadth is the aggregator's main selling point. The titles come from third-party providers, not from StreamFlix itself.",
  },
  daily: {
    src: "/screenshots/streamflix-apk-latest-content-daily.webp",
    width: 1280,
    height: 1042,
    alt: "Latest content added daily in the StreamFlix app",
    caption:
      "New rows appear as providers index new releases, which is why the catalog changes without an app update.",
  },
  moviesTv: {
    src: "/screenshots/streamflix-apk-movies-tv-shows.webp",
    width: 1280,
    height: 1111,
    alt: "StreamFlix movies and TV shows app interface",
    caption:
      "Movies and series share one interface, with the same player and the same provider picker.",
  },
} satisfies Record<string, AppScreenshotAsset>;

export type ScreenshotKey = keyof typeof screenshots;

export const screenshotUrls = Object.values(screenshots).map((item) => item.src);

/** Ordered gallery used on the hub page. */
export const galleryOrder: ScreenshotKey[] = [
  "home",
  "genres",
  "contentDetails",
  "favourites",
  "details",
  "library",
  "daily",
  "moviesTv",
];
