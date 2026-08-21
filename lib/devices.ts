import { R } from "@/lib/routes";

/**
 * Device support matrix. Rendered by `DeviceMatrix` on the hub and on every
 * cluster-B page, so one row change updates every device page at once.
 *
 * `support` is deliberately blunt: "native" means the app runs as designed,
 * "sideload" means it runs but you must install it by hand, "emulated" means it
 * runs inside something else, and "none" means it does not run at all.
 */

export type SupportLevel = "native" | "sideload" | "emulated" | "cast" | "none";

export type DeviceRow = {
  device: string;
  reborn: SupportLevel;
  v2: SupportLevel;
  method: string;
  difficulty: "Easy" | "Moderate" | "Fiddly";
  /** The cluster page that owns this device's install intent. */
  guide: string;
  note: string;
};

export const supportLabels: Record<SupportLevel, string> = {
  native: "Full support",
  sideload: "Sideload",
  emulated: "Emulator only",
  cast: "Cast only",
  none: "Not supported",
};

export const deviceMatrix: readonly DeviceRow[] = [
  {
    device: "Android phone",
    reborn: "sideload",
    v2: "native",
    method: "Install the APK directly, or get StreamFlix 2.0 from Google Play",
    difficulty: "Easy",
    guide: R.install,
    note:
      "StreamFlix 2.0 is on Play, so it needs no sideloading. Reborn is not, so it does.",
  },
  {
    device: "Android tablet",
    reborn: "sideload",
    v2: "native",
    method: "Identical to phone — the same universal package",
    difficulty: "Easy",
    guide: R.install,
    note: "Both variants scale to tablet layouts without a separate build.",
  },
  {
    device: "Android TV box",
    reborn: "native",
    v2: "none",
    method: "Sideload via a file manager or a sideload helper app",
    difficulty: "Moderate",
    guide: R.androidTv,
    note:
      "Reborn ships a real leanback interface. StreamFlix 2.0 has no TV layout and is painful with a D-pad.",
  },
  {
    device: "Google TV",
    reborn: "native",
    v2: "none",
    method: "Sideload, then launch from the Apps row or a shortcut app",
    difficulty: "Moderate",
    guide: R.androidTv,
    note:
      "Google TV hides sideloaded apps from the main launcher; you will need a shortcut.",
  },
  {
    device: "Amazon Fire TV Stick",
    reborn: "native",
    v2: "none",
    method: "Downloader app, then the direct APK URL",
    difficulty: "Moderate",
    guide: R.firestick,
    note:
      "Fire OS is Android underneath, so Reborn's TV interface works properly here.",
  },
  {
    device: "Windows PC",
    reborn: "emulated",
    v2: "emulated",
    method: "BlueStacks, LDPlayer, or Windows Subsystem for Android",
    difficulty: "Fiddly",
    guide: R.pc,
    note: "There is no native Windows build of either app. Everything else is an emulator.",
  },
  {
    device: "Mac",
    reborn: "emulated",
    v2: "emulated",
    method: "BlueStacks Air on Apple silicon, or an Android emulator",
    difficulty: "Fiddly",
    guide: R.pc,
    note: "Apple silicon Macs run Android emulators; Intel Macs are slower and less reliable.",
  },
  {
    device: "iPhone and iPad",
    reborn: "none",
    v2: "none",
    method: "No method exists — iOS cannot install an APK",
    difficulty: "Fiddly",
    guide: R.ios,
    note:
      "Any page offering a 'StreamFlix APK for iPhone' is offering you something else entirely.",
  },
  {
    device: "Samsung TV (Tizen)",
    reborn: "cast",
    v2: "cast",
    method: "Cast from an Android phone, or use a plugged-in streaming stick",
    difficulty: "Easy",
    guide: R.smartTv,
    note: "Tizen is not Android and cannot run an APK under any circumstances.",
  },
  {
    device: "LG TV (webOS)",
    reborn: "cast",
    v2: "cast",
    method: "Cast from an Android phone, or use a plugged-in streaming stick",
    difficulty: "Easy",
    guide: R.smartTv,
    note: "webOS is not Android either. Casting is the only route.",
  },
  {
    device: "Chromecast with Google TV",
    reborn: "native",
    v2: "none",
    method: "Sideload — it runs full Google TV, so Reborn installs properly",
    difficulty: "Moderate",
    guide: R.smartTv,
    note:
      "Do not confuse this with an older cast-only Chromecast dongle, which runs no apps at all.",
  },
  {
    device: "Nvidia Shield TV",
    reborn: "native",
    v2: "none",
    method: "Sideload via a file manager",
    difficulty: "Easy",
    guide: R.androidTv,
    note: "The most capable Android TV hardware for this app — no transcoding bottleneck.",
  },
];

export function devicesForGuide(guide: string) {
  return deviceMatrix.filter((row) => row.guide === guide);
}
