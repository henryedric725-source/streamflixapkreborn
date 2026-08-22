import { R } from "@/lib/routes";

/**
 * Per-page source lists.
 *
 * Every factual claim about either app traces back to a primary source. Listing
 * those sources visibly — and in `citation` on the article node — is the
 * difference between asserting a version number and evidencing one, which is
 * the trust signal this category almost universally omits.
 *
 * All rendered with rel="nofollow noopener".
 */

export type Citation = {
  title: string;
  publisher: string;
  url: string;
  /** What this source is being cited for. */
  supports: string;
};

const GITHUB: Citation = {
  title: "streamflix-reborn2/streamflix",
  publisher: "GitHub",
  url: "https://github.com/streamflix-reborn2/streamflix",
  supports:
    "StreamFlix Reborn source code, Apache 2.0 licence, release history, and the project's own statement that it hosts no content",
};

const UPTODOWN: Citation = {
  title: "StreamFlix Reborn for Android",
  publisher: "Uptodown",
  url: "https://com-streamflixreborn-streamflix.en.uptodown.com/android",
  supports:
    "StreamFlix Reborn package name, version, file size, and minimum Android requirement",
};

const PLAY: Citation = {
  title: "StreamFlix 2.0: HD Movies & TV",
  publisher: "Google Play",
  url: "https://play.google.com/store/apps/details?id=com.ajpro.streamflix2",
  supports:
    "StreamFlix 2.0 package name, build number, content rating, and developer",
};

const APKPURE: Citation = {
  title: "StreamFlix HD Movies TV App",
  publisher: "APKPure",
  url: "https://apkpure.com/streamflix-hd-movies-tv-app/com.ajpro.streamflix2",
  supports: "StreamFlix 2.0 file size and build history",
};

const SOFTONIC: Citation = {
  title: "StreamFlix Movies TV Shows for Android",
  publisher: "Softonic",
  url: "https://streamflix-movies-tv-shows-izv.en.softonic.com/android",
  supports: "StreamFlix 2.0 feature set and subtitle language coverage",
};

const FILEHIPPO: Citation = {
  title: "StreamFlix 2.0 HD Movies & TV",
  publisher: "FileHippo",
  url: "https://filehippo.com/android/download_streamflix-2-0-hd-movies-tv/",
  supports: "StreamFlix 2.0 release date and package details",
};

const TROYPOINT: Citation = {
  title: "StreamFlix Reborn review and Firestick install",
  publisher: "TROYPOINT",
  url: "https://troypoint.com/streamflix/",
  supports:
    "The DMCA takedown of the original StreamFlix, malware scan results, and the Firestick install method",
};

const ANDROID_UNKNOWN_SOURCES: Citation = {
  title: "Android 8.0 behaviour changes: install unknown apps",
  publisher: "Android Developers",
  url: "https://developer.android.com/about/versions/oreo/android-8.0-changes",
  supports:
    "The per-app install-from-unknown-sources permission model introduced in Android 8.0",
};

const PLAY_PROTECT: Citation = {
  title: "Google Play Protect",
  publisher: "Google",
  url: "https://developers.google.com/android/play-protect",
  supports:
    "What Play Protect scans, and why sideloaded apps trigger a notice rather than a detection",
};

const SIGNING: Citation = {
  title: "Sign your app",
  publisher: "Android Developers",
  url: "https://developer.android.com/studio/publish/app-signing",
  supports:
    "Why an overlay install requires a matching signing certificate, and why repackaged builds break updates",
};

const SCOPED_STORAGE: Citation = {
  title: "Storage updates in Android 11",
  publisher: "Android Developers",
  url: "https://developer.android.com/about/versions/11/privacy/storage",
  supports:
    "Scoped storage, and why app downloads are invisible to file managers and deleted on uninstall",
};

const APACHE: Citation = {
  title: "Apache License, Version 2.0",
  publisher: "Apache Software Foundation",
  url: "https://www.apache.org/licenses/LICENSE-2.0",
  supports: "The licence terms under which StreamFlix Reborn is published",
};

const DMCA_LAW: Citation = {
  title: "17 U.S. Code § 512 — Limitations on liability",
  publisher: "Cornell Law School, Legal Information Institute",
  url: "https://www.law.cornell.edu/uscode/text/17/512",
  supports:
    "The DMCA safe-harbour and takedown framework referenced throughout the legality discussion",
};

const DEVELOPER_OPTIONS: Citation = {
  title: "Amazon Fire TV developer options",
  publisher: "Amazon Developer",
  url: "https://developer.amazon.com/docs/fire-tv/connecting-adb-to-device.html",
  supports:
    "Enabling Developer Options and unknown-app installs on Fire OS devices",
};

/** Sources shown on every page, because both apps' core specs underpin everything. */
const CORE = [GITHUB, UPTODOWN, PLAY];

export const citationsByPath: Record<string, Citation[]> = {
  [R.home]: [...CORE, APKPURE, TROYPOINT],
  [R.reborn]: [GITHUB, UPTODOWN, APACHE, TROYPOINT],
  [R.v2]: [PLAY, APKPURE, SOFTONIC, FILEHIPPO],
  [R.oldVersions]: [GITHUB, UPTODOWN, PLAY, SIGNING],
  [R.changelog]: [GITHUB, PLAY, UPTODOWN],
  [R.mod]: [GITHUB, SIGNING, PLAY_PROTECT],
  [R.install]: [ANDROID_UNKNOWN_SOURCES, PLAY_PROTECT, SIGNING, ...CORE],
  [R.firestick]: [DEVELOPER_OPTIONS, TROYPOINT, GITHUB],
  [R.androidTv]: [ANDROID_UNKNOWN_SOURCES, GITHUB, UPTODOWN],
  [R.pc]: [GITHUB, UPTODOWN],
  [R.ios]: [PLAY, GITHUB],
  [R.smartTv]: [GITHUB, DEVELOPER_OPTIONS],
  [R.howToUse]: [GITHUB, PLAY, SOFTONIC],
  [R.offline]: [SCOPED_STORAGE, PLAY, SOFTONIC],
  [R.notWorking]: [SIGNING, PLAY_PROTECT, ANDROID_UNKNOWN_SOURCES, GITHUB],
  [R.update]: [SIGNING, PLAY, GITHUB],
  [R.safe]: [PLAY_PROTECT, SIGNING, TROYPOINT, GITHUB],
  [R.legal]: [DMCA_LAW, TROYPOINT, GITHUB, APACHE],
  [R.vpn]: [TROYPOINT, DEVELOPER_OPTIONS],
  [R.privacy]: [SCOPED_STORAGE, PLAY, GITHUB],
  [R.alternatives]: [GITHUB, TROYPOINT, PLAY],
  [R.bestMovieApks]: [GITHUB, UPTODOWN, PLAY, TROYPOINT],
  [R.bestTvApks]: [GITHUB, TROYPOINT, DEVELOPER_OPTIONS],
  [R.vsPaid]: [PLAY, GITHUB],
  [R.blog]: CORE,
  [R.about]: [...CORE, APKPURE, SOFTONIC, FILEHIPPO],
};

export function citationsFor(path: string): Citation[] {
  return citationsByPath[path] ?? CORE;
}
