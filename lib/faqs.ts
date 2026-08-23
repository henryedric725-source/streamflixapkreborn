import { REBORN, V2 } from "@/lib/variants";

/**
 * FAQ banks, one per cluster page.
 *
 * Answers are plain sentences with no markup because the same strings are reused
 * verbatim inside FAQPage JSON-LD. Two pages must never ship the same question,
 * because that would duplicate FAQPage markup across URLs. Enforced by
 * `scripts/audit-content.mjs`.
 */

export type FaqItem = { question: string; answer: string };

export const homeFaqs: FaqItem[] = [
  {
    question: "Which StreamFlix APK should I download?",
    answer: `There are two different apps. Choose StreamFlix Reborn v${REBORN.version} if you want open-source code, a real Android TV interface, or support for Android 5.0. Choose StreamFlix 2.0 build ${V2.version} if you want a Google Play install on a phone and built-in offline downloads. They are made by different developers and are not versions of each other.`,
  },
  {
    question: "Is StreamFlix APK free?",
    answer:
      "Both apps are free with no subscription and no account registration. StreamFlix Reborn shows no ads inside its own interface. StreamFlix 2.0 is ad-supported. Neither charges for content, and neither has a paid tier, which is why any 'premium unlock' mod is meaningless.",
  },
  {
    question: "What is the latest StreamFlix APK version?",
    answer: `StreamFlix Reborn is at v${REBORN.version}, released ${REBORN.releasedOnDisplay}, at ${REBORN.sizeLabel} and requiring Android ${REBORN.minAndroid}. StreamFlix 2.0 is at build ${V2.version}, released ${V2.releasedOnDisplay}, at ${V2.sizeLabel} and requiring Android ${V2.minAndroid}.`,
  },
  {
    question: "Does StreamFlix work on Firestick?",
    answer:
      "StreamFlix Reborn does, because it ships a genuine leanback interface built for a D-pad remote. Install it with the Downloader app. StreamFlix 2.0 has no TV layout at all and is awkward to drive with a remote, so it is not the right choice for a Firestick.",
  },
  {
    question: "Do I need an account to use StreamFlix?",
    answer:
      "No. Neither app asks you to register, sign in, or provide an email address. Favourites and watch history are stored on the device, which also means they do not sync between devices and are lost if you uninstall.",
  },
  {
    question: "Why does Play Protect warn me when I install StreamFlix?",
    answer:
      "Google Play Protect shows that warning for any app installed outside the Play Store, regardless of what the app does. It reflects the install method, not a detected threat. StreamFlix 2.0 is on Play and avoids the warning; Reborn is not, so you will see it.",
  },
  {
    question: "Does StreamFlix host the movies it plays?",
    answer:
      "No. StreamFlix Reborn is an aggregator: it searches third-party providers and hands the resulting stream to its own player. Its own documentation states it does not host, store, or distribute content. This is why the catalog changes without an app update, and why individual titles sometimes fail to play.",
  },
  {
    question: "What is StreamFlix app?",
    answer:
      "StreamFlix is the name used by two free Android streaming apps. StreamFlix Reborn is an open-source aggregator that searches third-party providers for movies, TV shows and anime, then plays the result in its own player. StreamFlix 2.0: HD Movies & TV is a separate closed-source catalog app. Neither one hosts video, and neither one charges for access.",
  },
  {
    question: "What is the Downloader code for StreamFlix?",
    answer:
      "A Downloader code is a short number that stands in for a web address inside the Downloader app on Firestick and Android TV. There is no single official StreamFlix code, because each publisher registers a code that points at its own page. Codes such as 730116 and 250931 circulate on tutorial sites and resolve to those sites rather than to the developer. Typing the full download URL into Downloader reaches the same file with one less unknown in the chain.",
  },
  {
    question: "Why do StreamFlix Downloader codes stop working?",
    answer:
      "A code is only a redirect. When the publisher who registered it changes the destination page, retires the link, or loses the hosting behind it, the code resolves to nothing and Downloader reports a failed request. The app itself has not changed. Enter the current APK address directly and the install proceeds normally.",
  },
  {
    question: "Which StreamFlix provider should I choose?",
    answer:
      "Start with a TMDB-backed provider for English-language films and television, because its metadata is the most complete and its results map cleanly onto the titles you search for. Switch to a language-specific provider only when you want content in that language, and switch to an anime-focused provider for anime. Providers are selectable per search, so testing two or three costs seconds.",
  },
  {
    question: "What is the best English provider in StreamFlix?",
    answer:
      "There is no permanent winner, because providers are third-party sites that rise and fall independently of the app. In practice the TMDB-driven English providers return the most consistent results for mainstream films and series. If a title fails on one, the same title often plays on the next provider in the list, so treat provider choice as a switch rather than a setting.",
  },
  {
    question: "How do I share or copy a movie URL in the StreamFlix app?",
    answer:
      "Open the title's detail screen and use the share control in the top bar. StreamFlix passes an app link to the Android share sheet, so you can copy it to the clipboard or send it to another app. The link points at the title inside StreamFlix rather than at a public web page, which means the recipient needs StreamFlix installed for it to open.",
  },
  {
    question: "Is StreamFlix down right now?",
    answer:
      "The app has no central server to go down, so an outage almost always sits with one provider rather than with StreamFlix. If searches return nothing on every provider, the more likely causes are an outdated build, a DNS block at your internet provider, or a lapsed provider list. Updating to the current version resolves most of these reports.",
  },
  {
    question: "What does an HTTP 403 error in StreamFlix mean?",
    answer:
      "403 is a refusal from the provider's server, not a fault in the app. It usually means the source is geo-restricted, is rejecting requests that do not come from a browser, or has blocked the address range you are connecting from. Switching provider or server clears it in most cases.",
  },
  {
    question: "Does StreamFlix have an official website?",
    answer:
      "StreamFlix Reborn has no marketing site. Its only first-party home is its GitHub repository, where releases are published. Every other page offering the download, including this one, is a third-party mirror or guide. That is why matching the package name after installing matters more than trusting the site you downloaded from.",
  },
  {
    question: "Where is the StreamFlix GitHub repository?",
    answer:
      "The community fork is published at github.com/streamflix-reborn2/streamflix under the Apache License 2.0. The repository holds the Kotlin source, the release history, and the issue tracker. StreamFlix 2.0 has no public repository, because it is closed source.",
  },
  {
    question: "Is StreamFlix available in Spanish, French, or other languages?",
    answer:
      "Yes, in two senses. The interface follows your device language for the locales the project has translated, and the provider list includes Spanish, French, Italian, German and other regional sources alongside the English ones. Selecting a regional provider is what changes the catalog, not changing the interface language.",
  },
  {
    question: "Is StreamFlix legit?",
    answer:
      "The software is real, actively maintained, and auditable in Reborn's case, so it is not a scam download in itself. The risk sits elsewhere: repackaged copies distributed under the same name, and the licensing status of the streams the providers return. Verify the package name after installing and the first risk disappears.",
  },
];

export const rebornFaqs: FaqItem[] = [
  {
    question: "What is StreamFlix Reborn?",
    answer: `StreamFlix Reborn is the community fork of the original StreamFlix, written in Kotlin and published on GitHub under the Apache 2.0 licence. It runs on Android phones, Android TV, Google TV and Fire TV, and aggregates more than 20 third-party providers rather than hosting content itself.`,
  },
  {
    question: "Is StreamFlix Reborn open source?",
    answer:
      "Yes. The full source is published at github.com/streamflix-reborn2/streamflix under the Apache License 2.0, which means anyone can read the code, build it themselves, and verify that the published APK matches. This is the single biggest practical difference from every closed-source app in this category.",
  },
  {
    question: "What happened to the original StreamFlix?",
    answer:
      "The original StreamFlix was taken down following a DMCA complaint. Reborn is the community fork that continued from the open-source code. Because it uses the same aggregator model, it carries the same structural risk of a future takedown.",
  },
  {
    question: "How does the provider system in StreamFlix Reborn work?",
    answer:
      "You pick a provider in settings, and the app searches that provider's index. If a title will not play, you switch providers or servers from the player rather than giving up on the title. Providers are third-party services, so their availability changes independently of app updates.",
  },
  {
    question: "Does StreamFlix Reborn have ads?",
    answer:
      "The app's own interface carries no advertising, which follows from it being an open-source project rather than a monetised product. Advertising you do encounter comes from the third-party provider hosting the stream, not from the app.",
  },
  {
    question: "Where should I download StreamFlix Reborn from?",
    answer: "The project publishes every StreamFlix Reborn download on GitHub, and Uptodown mirrors the same package. Both are listed as sources on this page. Whichever route you use, confirm the package name reads com.streamflixreborn.streamflix after installing, because that check catches a repackaged build faster than any download-page badge does.",
  },
  {
    question: "What is the latest StreamFlix Reborn version?",
    answer: `The latest StreamFlix Reborn version is v${REBORN.version}, released ${REBORN.releasedOnDisplay}. It is ${REBORN.sizeLabel} and needs Android ${REBORN.minAndroid} or newer. Older 1.7 builds circulate widely on mirror sites, so check the version inside the app rather than trusting the number printed on a download page.`,
  },
  {
    question: "Is StreamFlix Reborn on Uptodown?",
    answer: "Yes. Uptodown carries the same package under com-streamflixreborn-streamflix, and it is one of the two distribution points the project acknowledges alongside GitHub. Uptodown is a mirror rather than the developer, so treat the GitHub release as the reference copy and compare the version and file size before installing anything from a mirror.",
  },
  {
    question: "What do Reddit threads say about StreamFlix Reborn?",
    answer: "Reddit discussion of StreamFlix Reborn concentrates on two things: which provider is working this week, and whether the build someone downloaded is genuine. Both are answerable without a forum. Provider reliability changes constantly, so switch sources rather than apps, and verify the package name and signing certificate to settle the authenticity question.",
  },
  {
    question: "Is there a single best provider in StreamFlix Reborn?",
    answer: "No, and any page naming one is describing a snapshot. Providers are independent third-party sites that change hosts, add rate limits and go quiet without notice. Pick a provider matched to your language and content type, then switch when a title stalls. Treat the selector like channel buttons, not a setting you configure once.",
  },
  {
    question: "Is there an alternative to StreamFlix Reborn with the same TV interface?",
    answer: "Few free aggregators ship a genuine leanback layout, which is the main reason Reborn is recommended for Fire TV and Android TV. Most alternatives are phone apps that install on a TV and then need a virtual-mouse utility to drive. If you want a like-for-like option, check whether it supports a D-pad before installing it.",
  },
];

export const v2Faqs: FaqItem[] = [
  {
    question: "What is StreamFlix 2.0: HD Movies & TV?",
    answer: `StreamFlix 2.0 is a separate closed-source app published by a different developer under the package name ${V2.packageName}. It is distributed through Google Play as well as APKPure, Softonic and FileHippo, and presents a browsable catalog organised by genre.`,
  },
  {
    question: "Is StreamFlix 2.0 the same app as StreamFlix Reborn?",
    answer:
      "No. They share a name and nothing else. Different developers, different package names, different licences, different distribution channels, and different feature sets. Installing one does not update or replace the other, and both can sit on the same device at once.",
  },
  {
    question: "What subtitle languages does StreamFlix 2.0 support?",
    answer:
      "English, Hindi, Bengali, Spanish, French, Korean, Tamil and Telugu. Subtitle availability still depends on the individual title, so the language list is a ceiling rather than a guarantee.",
  },
  {
    question: "Can I download StreamFlix 2.0 from the Play Store?",
    answer:
      "Yes, and where Play is available that is the better route. A Play install updates itself, avoids the Play Protect sideload warning, and guarantees you have the developer's build rather than a repackaged one.",
  },
  {
    question: "Why is StreamFlix 2.0 so much larger than Reborn?",
    answer: `StreamFlix 2.0 is ${V2.sizeLabel} against Reborn's ${REBORN.sizeLabel}, roughly 2.4 times the size, largely due to bundled advertising and analytics libraries. The larger download does not buy a broader feature set. It has no TV interface, where Reborn does.`,
  },
  {
    question: "Does StreamFlix 2.0 have a premium or VIP tier?",
    answer: "No. StreamFlix 2.0 has no premium plan, no VIP level, and no in-app purchase. Everything in the app is available to every user from the first launch. It is funded by advertising instead, which is why the download is larger than Reborn. Any listing selling a StreamFlix premium unlock is selling access to something that does not exist.",
  },
  {
    question: "Is there a StreamFlix login or account sign-up?",
    answer: "There is no StreamFlix login, no account registration, and no email step in either app. You install and browse. Your watchlist and playback progress live on the device, so they do not sync between devices and are removed when you uninstall. Pages asking you to create a StreamFlix account are not run by either developer.",
  },
  {
    question: "Does StreamFlix offer a free trial?",
    answer: "No, because there is nothing to trial. Both StreamFlix apps are free permanently, with no timed access, no watch limit and no card details collected. A free trial only exists where a paid tier follows it, and neither app has one. Any StreamFlix free-trial signup page is collecting details for someone other than the developers.",
  },
  {
    question: "Can I run StreamFlix 2.0 on a Windows PC?",
    answer: "Not natively. StreamFlix 2.0 is an Android package with no Windows or web build, so a PC needs an Android emulator or Windows Subsystem for Android to run it. That works, but the phone layout is designed for touch, so mouse control is workable rather than comfortable. Expect roughly 4 GB of RAM devoted to the emulator.",
  },
  {
    question: "How do I download the StreamFlix 2.0 app?",
    answer: `Install it from Google Play where Play is available, which avoids sideloading and keeps it updated automatically. Otherwise download the APK, allow installs from the app you downloaded with, and install. Build ${V2.version} is ${V2.sizeLabel} and needs Android ${V2.minAndroid}. Confirm the package reads ${V2.packageName} afterwards.`,
  },
  {
    question: "Why does StreamFlix 2.0 require Android 6.0?",
    answer: `Build ${V2.version} targets Android ${V2.minAndroid} and will refuse to install below it, which rules out devices still on Android 5.0 or 5.1. StreamFlix Reborn runs on Android ${REBORN.minAndroid}, so older hardware and second-generation TV sticks should use Reborn instead. The requirement is set by the developer and cannot be worked around.`,
  },
];

export const installFaqs: FaqItem[] = [
  {
    question: "How do I install a StreamFlix APK on Android?",
    answer:
      "Download the APK, open it from your notification shade or Downloads folder, and approve the install-from-unknown-sources prompt for whichever app you downloaded it with. Android 8.0 and newer grant that permission per app rather than system-wide, so the prompt names your browser or file manager.",
  },
  {
    question: "Where is the 'unknown sources' setting on modern Android?",
    answer:
      "On Android 8.0 and newer there is no single system-wide toggle. Go to Settings, Apps, Special app access, Install unknown apps, then pick the app you are installing from and enable it. Older Android versions have one switch under Settings, Security instead.",
  },
  {
    question: "What causes 'App not installed' when installing StreamFlix?",
    answer:
      "Almost always a signature conflict with an existing copy, an incomplete download, or insufficient storage. Uninstall any previous copy of the same package, re-download the file in full, and confirm you have several times the APK's size free before retrying.",
  },
  {
    question: "Can I install both StreamFlix apps on one device?",
    answer:
      "Yes. They have different package names, so Android treats them as unrelated apps and neither overwrites the other. You will get two separate icons and two separate sets of favourites.",
  },
  {
    question: "How do I verify a StreamFlix APK before opening it?",
    answer:
      "Check the file size against the published figure, confirm the package name after install matches the expected one, and compare the signing certificate against the one on an earlier build you trust. A repackaged APK usually differs on size and always differs on signature.",
  },
  {
    question: "How do I download StreamFlix APK on Android?",
    answer: `Choose the variant first, then download it in full before opening it. Reborn is ${REBORN.sizeLabel} and needs Android ${REBORN.minAndroid}; StreamFlix 2.0 is ${V2.sizeLabel} and needs Android ${V2.minAndroid}. A truncated download is the most common cause of a failed install, and it gives no sign that it was cut short.`,
  },
  {
    question: "How do I install StreamFlix APK on an Android TV box?",
    answer: "A TV box has no browser worth using, so fetch the package with the Downloader app instead. Enable Downloader under install unknown apps, enter the direct APK address, and let it install. Use StreamFlix Reborn on a TV: it is the only variant with a leanback layout that a D-pad remote can actually drive.",
  },
  {
    question: "How long does StreamFlix setup take?",
    answer: "About four minutes on a phone and six on a Fire TV Stick, most of it download time. The steps are the same either way: get the file, grant install permission to the app holding it, install, then check the package name. After that, open settings and review which provider is selected before you start browsing.",
  },
  {
    question: "Do I need to uninstall StreamFlix before installing a newer file?",
    answer: "No, and you should not. Installing the new APK over the existing one is an overlay install, which keeps favourites and watch history intact provided both files are signed by the same developer. Uninstalling first throws that data away for no benefit, since there is no account to restore it from afterwards.",
  },
  {
    question: "Where does the StreamFlix APK go after I download it?",
    answer: "Into the Download folder on internal storage, reachable from your browser download list or any file manager. Open it from there if the download notification has gone. The permission prompt then names whichever app you opened the file with, so grant it to that app rather than to the browser you downloaded with.",
  },
];

export const firestickFaqs: FaqItem[] = [
  {
    question: "How do I install StreamFlix on a Firestick?",
    answer:
      "Enable Apps from Unknown Sources for the Downloader app under Settings, My Fire TV, Developer Options. Open Downloader, enter the direct APK URL, and let it install. Fire OS is Android underneath, so Reborn's TV interface works properly once it is installed.",
  },
  {
    question: "Why can't I find StreamFlix in the Amazon Appstore?",
    answer:
      "Neither app is published there. Sideloading through Downloader is the only route on Fire TV, which is also why the Developer Options unknown-sources toggle has to be enabled first.",
  },
  {
    question: "Where does a sideloaded app appear on Fire TV?",
    answer:
      "At the end of the Apps row rather than on the home screen. Open Settings, Applications, Manage Installed Applications to find it, or long-press it in the Apps row and move it to the front for easier access.",
  },
  {
    question: "Does StreamFlix work on a Fire TV Stick 4K?",
    answer:
      "Yes, and the 4K models handle high-bitrate streams noticeably better than the older 2nd generation stick. On very old hardware, an earlier Reborn build from the 1.6 series is often smoother than the current one.",
  },
  {
    question: "How do I download StreamFlix on Firestick without a computer?",
    answer:
      "You do not need one. Install Downloader by AFTVnews from the Amazon Appstore, allow it to install apps under Settings, My Fire TV, Developer Options, then type the full APK address into its URL field and press Go. Downloader fetches the file to the stick and hands it straight to the Fire OS installer, so the whole job happens on the television.",
  },
  {
    question: "What is the StreamFlix Downloader code for Firestick?",
    answer:
      "There is no code issued by the StreamFlix developer. A Downloader code is a short number registered by a third party that redirects to whatever address that party chose, so codes such as 730116 and 250931 point at individual tutorial sites rather than at the project. Any site can register one and change its target later. Typing the full APK address instead removes that middle step.",
  },
  {
    question: "Why is StreamFlix not working on my Firestick?",
    answer:
      "Work through four causes in order. A blank Downloader page usually means a mistyped address. A greyed-out Install button means unknown sources is off for Downloader. An app that vanishes after install is sitting at the end of the Apps row. Playback that stalls on every title is a provider or Wi-Fi problem, not a Fire TV problem, so switch source first.",
  },
  {
    question: "Was StreamFlix removed from Firestick?",
    answer:
      "Nothing was removed from Fire TV, because neither StreamFlix app was ever listed in the Amazon Appstore. The confusion comes from the original StreamFlix being taken down after a copyright complaint, which broke the download links in older Firestick tutorials. StreamFlix Reborn continued from the open-source code and still installs by sideloading.",
  },
  {
    question: "Can I install StreamFlix on a Fire TV Stick without the Downloader app?",
    answer:
      "Yes. Any Fire OS app that can fetch a file and is granted install permission will work, and you can also push the package over the network with ADB from a computer on the same Wi-Fi. Downloader is recommended only because Fire OS ships no general browser and Downloader is the least fiddly option with a remote.",
  },
  {
    question: "How much storage does StreamFlix need on a Fire TV Stick?",
    answer:
      "StreamFlix Reborn is 31.43 MB to download and takes a little more once installed. A Fire TV Stick has around 8 GB of flash with roughly 5 GB usable, so delete the downloaded file inside Downloader once the install finishes. Low free space on Fire OS shows up as apps closing unexpectedly rather than as an out-of-space message.",
  },
];

export const androidTvFaqs: FaqItem[] = [
  {
    question: "Does StreamFlix have a proper Android TV app?",
    answer:
      "StreamFlix Reborn does: it ships a genuine leanback interface designed for D-pad navigation on Android TV, Google TV and Fire TV. StreamFlix 2.0 does not and only offers its phone layout, which is frustrating with a remote.",
  },
  {
    question: "Why doesn't my sideloaded app show in the Google TV launcher?",
    answer:
      "Google TV deliberately hides sideloaded apps from the main Apps row. Reach it through Settings, Apps, See all apps, or install a shortcut utility that pins it to the launcher. The app itself is installed and working. It is only the launcher entry that is missing.",
  },
  {
    question: "What is the easiest way to get an APK onto an Android TV box?",
    answer:
      "A USB stick with a file manager installed on the box is the most reliable route. A sideload helper app that pulls the file over your network is faster once set up. Both need install-from-unknown-sources enabled for whichever app is doing the installing.",
  },
  {
    question: "Is an Nvidia Shield better than a cheap Android TV box for this?",
    answer:
      "Materially, yes. The Shield has enough headroom to handle high-bitrate streams without stuttering, where budget boxes with 1 GB of RAM struggle. If you are buying hardware specifically to run this kind of app on a TV, it is the safest choice.",
  },
  {
    question: "Where can I download the StreamFlix APK for Android TV?",
    answer:
      "The same package serves phones and televisions, so there is no separate Android TV file to hunt for. StreamFlix Reborn is published on the project GitHub releases page and mirrored on Uptodown under com.streamflixreborn.streamflix. Download it on a computer and move it to the box by USB or over your network, or fetch it on the box itself with Downloader.",
  },
  {
    question: "Is there a Downloader code for StreamFlix on Android TV?",
    answer:
      "Downloader codes work the same way on Android TV as on Fire TV: they are shortcuts registered by whoever publishes them, pointing at that publisher's page rather than at the StreamFlix project. No official code exists. Entering the full APK address in the Downloader URL field reaches the same file and shows you exactly where it came from.",
  },
  {
    question: "What are the best apps like StreamFlix for Android TV?",
    answer:
      "Judge candidates on three things: whether they ship a real leanback layout, whether they are still updated, and whether they need a virtual mouse app to reach controls. Aggregators that resolve third-party sources behave like StreamFlix Reborn, while licensed free services have smaller catalogues but never break. Our alternatives page lists which ones still work.",
  },
  {
    question: "Does StreamFlix Reborn work on Google TV as well as Android TV?",
    answer:
      "Yes. Google TV is a launcher and recommendation layer built on Android TV, so the same package installs and the same leanback interface appears. The one difference is that Google TV curates its Apps row and leaves sideloaded apps out of it, so you open the app through Settings, Apps, See all apps, or pin it with a shortcut utility.",
  },
  {
    question: "Can I install StreamFlix on an Android TV box without a USB stick?",
    answer:
      "Yes, two ways. Downloader fetches the APK by address directly on the box, which needs nothing else. A sideload helper app runs a small receiver on the television and shows a web address you open on a phone or laptop to upload the file. Both devices must be on the same non-guest network for the second method to work.",
  },
];

export const pcFaqs: FaqItem[] = [
  {
    question: "Is there a StreamFlix app for PC?",
    answer:
      "No native Windows or Mac build exists for either variant. Every 'StreamFlix for PC' route is an Android emulator, BlueStacks, LDPlayer, or Windows Subsystem for Android, running the same APK you would install on a phone.",
  },
  {
    question: "Which emulator works best for StreamFlix?",
    answer:
      "BlueStacks is the most forgiving to set up and the best documented. LDPlayer is lighter on older hardware. Windows Subsystem for Android is the cleanest option technically but needs manual APK installation and is no longer being expanded by Microsoft.",
  },
  {
    question: "Can I run StreamFlix on a Mac?",
    answer:
      "On Apple silicon, yes. BlueStacks Air runs Android natively enough for this. On Intel Macs the experience is markedly slower. There is no macOS build of either app, so an emulator is the only route either way.",
  },
  {
    question: "Is an emulator slower than running StreamFlix on a phone?",
    answer:
      "Usually yes for startup and navigation, though playback itself is generally fine on a modern desktop CPU. The bigger practical problem is that emulators consume several gigabytes of RAM, which matters more than raw speed on a laptop.",
  },
  {
    question: "How do I download StreamFlix for Windows 11?",
    answer:
      "There is no Windows installer to download. On Windows 11 you have two routes for the Android package: an emulator such as BlueStacks or LDPlayer, which installs the APK by drag and drop, or Windows Subsystem for Android, which runs Android apps in ordinary windows but needs developer mode and an adb install command. Both run the identical APK.",
  },
  {
    question: "Is there a StreamFlix web app I can use in a browser?",
    answer:
      "No. Neither StreamFlix Reborn nor StreamFlix 2.0 has a browser version, and neither project operates a web player. Sites presenting a StreamFlix web app are unrelated streaming pages using the name for traffic. The only way to run the real software on a desktop is an Android runtime such as an emulator or Windows Subsystem for Android.",
  },
  {
    question: "Which StreamFlix variant should I install on a PC?",
    answer:
      "StreamFlix Reborn is the better emulator choice at 31.43 MB with a lighter player and support back to Android 5.0, which matters because emulator images are often older. StreamFlix 2.0 is 76.8 MB, needs Android 6.0, and its phone layout gains nothing on a large monitor. Neither has a desktop build, so this is purely which APK you load.",
  },
  {
    question: "How much RAM does StreamFlix need on a PC?",
    answer:
      "The app itself is modest, but the emulator around it is not. Give the emulator at least 4 GB of memory and two CPU cores, which in practice means a machine with 8 GB total is working hard and 16 GB is comfortable. Leaving the emulator on default allocation causes most of the sluggishness people blame on the app.",
  },
  {
    question: "Can I run StreamFlix on a Chromebook?",
    answer:
      "On a Chromebook that supports Android apps, yes. Enable the Play Store, turn on developer options for unknown sources, and open the APK with the Files app. Playback quality is usually better than a desktop emulator because Android runs in a container rather than a virtual machine. Older Chromebooks without Android support cannot run it.",
  },
];

export const iosFaqs: FaqItem[] = [
  {
    question: "Is there a StreamFlix APK for iPhone?",
    answer:
      "No, and there cannot be. An APK is an Android package format; iOS cannot install one under any circumstances. Neither StreamFlix Reborn nor StreamFlix 2.0 has an iOS build, and neither is on the App Store.",
  },
  {
    question: "What are those 'StreamFlix for iOS' download pages offering?",
    answer:
      "Typically a survey wall, an unrelated app, a configuration profile, or a sideloading service that requires you to trust an enterprise certificate. None of them are StreamFlix, because no iOS version of it exists to distribute.",
  },
  {
    question: "Can I watch StreamFlix content on an iPhone another way?",
    answer:
      "Only indirectly: play it on an Android device and cast to a shared screen. There is no way to run the app itself on iOS. If you need something native on an iPhone, a licensed service is the realistic answer.",
  },
  {
    question: "Is there a StreamFlix IPA file for iPhone?",
    answer:
      "No. An IPA can only exist if someone compiled an iOS build, and no iOS build of either StreamFlix app was ever made. Pages advertising a StreamFlix IPA are offering a survey wall, an unrelated app, or a signing service that installs something else under the name. There is nothing genuine to sign or install.",
  },
  {
    question: "Can I convert the StreamFlix APK to run on iOS?",
    answer:
      "No converter exists, and none can. An APK holds bytecode and resources built against Android system services, while iOS runs signed ARM binaries against entirely different frameworks. Producing an iOS app would mean rewriting and recompiling the software from source for a new platform. Tools claiming to convert an APK for iPhone are misrepresenting what they do.",
  },
  {
    question: "What is the best StreamFlix alternative for iOS?",
    answer:
      "There is no like-for-like alternative, because aggregators depend on sideloading that iOS does not permit. The realistic options on an iPhone are licensed free ad-supported services with App Store apps, public-domain film archives that play in Safari, and paid subscriptions. Each has a smaller catalogue than an aggregator but works natively and will not disappear overnight.",
  },
  {
    question: "Can I AirPlay StreamFlix from an Android phone to an Apple TV?",
    answer:
      "Not directly. AirPlay is an Apple protocol and Android phones do not send it without third-party software, so playing StreamFlix on Android and pushing it to an Apple TV is not a supported route. Casting to a Chromecast, a Fire TV Stick or an Android television works instead, because those accept the standard Android cast and mirroring controls.",
  },
  {
    question: "Will StreamFlix ever come to the App Store?",
    answer:
      "It is very unlikely. App Store review examines what an app does before it is published, and an aggregator that resolves video from unvetted third-party providers does not pass that review. Unlike Android there is no second distribution route to fall back on. The absence is a consequence of how iOS distribution works rather than a gap the developers overlooked.",
  },
];

export const smartTvFaqs: FaqItem[] = [
  {
    question: "Can I install StreamFlix on a Samsung or LG Smart TV?",
    answer:
      "No. Samsung TVs run Tizen and LG TVs run webOS. Neither is Android, so neither can install an APK. Your options are casting from an Android phone or plugging in a cheap streaming stick that does run Android.",
  },
  {
    question: "How do I cast StreamFlix to a TV?",
    answer:
      "Start playback on an Android phone, then use the system cast control or screen mirroring to send it to the TV. Quality depends on your Wi-Fi, and the phone screen stays on for the duration, so it is a workaround rather than a solution.",
  },
  {
    question: "Which streaming stick is the cheapest way to get StreamFlix on a TV?",
    answer:
      "A Fire TV Stick or a Chromecast with Google TV. Both run Android underneath, both accept sideloaded apps, and both give you Reborn's proper TV interface rather than a mirrored phone screen.",
  },
  {
    question: "Does StreamFlix work on a Chromecast?",
    answer:
      "On Chromecast with Google TV, yes. It runs full Google TV and installs the APK properly. On the older cast-only Chromecast dongles, no: those run no apps at all and can only receive a cast from another device.",
  },
  {
    question: "Is there a StreamFlix TV APK for smart televisions?",
    answer:
      "There is one package and it runs only on Android-based televisions and sticks. Sony, and Google TV models from TCL, Hisense and Philips, install it directly. Samsung Tizen and LG webOS sets cannot open an APK at all, so a file advertised as a StreamFlix TV APK for those brands is either the ordinary Android package or something unrelated.",
  },
  {
    question: "How do I watch StreamFlix live channels on a TV?",
    answer:
      "Live channels come from the same third-party providers as the on-demand catalogue, so you need the app running on an Android device attached to the television: a Fire TV Stick, a Chromecast with Google TV, an Android box, or a built-in Android TV. Live sources are fewer and shorter-lived than film sources, so expect to switch provider more often.",
  },
  {
    question: "Can I use StreamFlix on a Samsung TV with a browser?",
    answer:
      "No. Samsung's Tizen browser cannot install an Android package, and there is no StreamFlix website to open in it. Anything a browser can play on a Samsung set is a separate streaming site, not this app. On a Samsung television your two working routes are mirroring from an Android phone or plugging in a streaming stick.",
  },
  {
    question: "Does LG webOS have a developer mode that installs StreamFlix?",
    answer:
      "webOS does have a developer mode, but it exists for loading webOS apps a developer has built and packaged for that platform. It grants no ability to run Android packages, because webOS shares no runtime with Android. No firmware setting, hidden menu or USB method changes this on an LG television.",
  },
  {
    question: "Do I need a Chromecast to watch StreamFlix on my TV?",
    answer:
      "Only if your television cannot run Android itself. A Chromecast with Google TV installs the app and runs it on the dongle, which is the better outcome. Older cast-only Chromecast dongles run no apps and simply receive a mirrored phone screen. A Fire TV Stick does the same job as the Google TV model, so either is fine.",
  },
];

export const howToUseFaqs: FaqItem[] = [
  {
    question: "What should I do first after installing StreamFlix?",
    answer:
      "Open settings and check which provider is selected before you browse. The default is not always the best one for your region, and most 'nothing plays' complaints come down to a provider choice that was never reviewed.",
  },
  {
    question: "How do I switch servers when a stream won't play?",
    answer:
      "Open the player's source or server menu and pick a different entry rather than backing out to the catalog. A title that fails on one server frequently plays immediately on the next, because the failure is the provider's, not the app's.",
  },
  {
    question: "How do I add subtitles in StreamFlix?",
    answer:
      "Open the subtitle menu during playback and select an available track. Reborn additionally lets you restyle size, colour and background. Availability is per title and per provider, so a language listed in the app is not guaranteed on every film.",
  },
  {
    question: "Does StreamFlix remember where I stopped watching?",
    answer:
      "Yes. Both apps resume from your last position. Because there is no account, that history lives only on the device and does not follow you to another phone or TV.",
  },
  {
    question: "How do I change the provider in StreamFlix Reborn?",
    answer:
      "Open settings and select the provider list, then choose a different entry. The change takes effect straight away and the home screen, Movies, TV shows and Anime sections all reload from the new source. Your watchlist, resume positions and player preferences are untouched, so switching costs you nothing.",
  },
  {
    question: "Which provider should I use for anime in StreamFlix?",
    answer:
      "Use one of the dedicated anime providers rather than a general English provider. Anime specialists number seasons and episodes correctly, carry subbed and dubbed versions, and publish new episodes far sooner. A general provider will list some anime, but with patchy episode ordering and gaps mid-season.",
  },
  {
    question: "Which regional providers does StreamFlix Reborn include?",
    answer:
      "Alongside the English providers, Reborn ships sources aimed at Spanish, French, Italian and German audiences, plus several smaller country-specific ones. Selecting one gives you original-language audio and native subtitles instead of an English release with a translated title. Their catalogs are smaller than the main English providers.",
  },
  {
    question: "Does StreamFlix have a buddy system for watching with friends?",
    answer:
      "No. Neither StreamFlix app offers watch-together playback, friend lists or shared profiles, because neither has user accounts to attach them to. The closest option is opening a title, sharing its link through the Android share sheet, and starting playback at the same time as the person you sent it to.",
  },
  {
    question: "What is the Leaving Soon list in StreamFlix?",
    answer:
      "It is a list of titles the selected provider has flagged for removal from its own catalog. The app only displays it when the provider publishes one, so it appears on some sources and is missing on others. Its absence is a provider limitation rather than a fault in your install.",
  },
  {
    question: "What does the schedule section in StreamFlix show?",
    answer:
      "It shows an episode release calendar supplied by the provider, listing what airs or drops on which day. Anime providers commonly publish one, general film providers rarely do. Like the rest of the interface, it reloads whenever you change provider and disappears if the new provider has no schedule feed.",
  },
];

export const offlineFaqs: FaqItem[] = [
  {
    question: "Can I download movies from StreamFlix to watch offline?",
    answer:
      "StreamFlix 2.0 has offline downloading built in. In StreamFlix Reborn the option depends on the provider serving the title, so some sources offer it and others do not. Neither app can download a title whose provider only supports live streaming.",
  },
  {
    question: "Where do StreamFlix downloads get saved?",
    answer:
      "Into the app's own storage rather than your general Downloads folder, which is why they disappear if you uninstall the app and why they do not show up in your gallery or a file manager.",
  },
  {
    question: "Why won't a particular title download?",
    answer:
      "Usually because the provider serving it streams only, or because the download failed partway and left a broken entry. Switch to a different provider or server for that title and try again, and check you have the storage free.",
  },
  {
    question: "How much storage does a downloaded film use?",
    answer:
      "Roughly 700 MB to 1.5 GB for a feature at 1080p, less at lower quality. Choosing a lower quality before downloading is the single most effective way to fit more titles on a device with limited storage.",
  },
  {
    question: "Can I download Hindi movies in StreamFlix?",
    answer:
      "StreamFlix 2.0 carries Hindi among its eight built-in subtitle languages, so downloaded titles keep Hindi subtitles where the source supplied them. For Hindi audio rather than subtitles, select a regional provider in StreamFlix Reborn and check whether it offers a download for that particular title, because the option belongs to the provider.",
  },
  {
    question: "Is StreamFlix a movie download website?",
    answer:
      "No. It is an Android app that downloads video into its own private storage for playback inside the app. Websites offering StreamFlix films as direct files are unrelated to either developer, and the file they serve is frequently an installer rather than a film, which is where the real malware risk sits.",
  },
  {
    question: "Can I watch StreamFlix online for free without downloading anything?",
    answer:
      "Yes. Streaming is the default mode in both apps and costs nothing. Downloading writes the same stream to storage instead of discarding it, so a title that streams poorly usually downloads poorly too. Switching server helps in both cases, since the source is the limiting factor rather than the app.",
  },
  {
    question: "Do StreamFlix downloads expire?",
    answer:
      "No. There is no licence window and no account to enforce one, so a completed download stays playable indefinitely. It disappears only if you delete it, clear the app's data, or uninstall the app, because everything lives in app-private storage with no backup anywhere.",
  },
  {
    question: "Can I move a StreamFlix download to an SD card or a computer?",
    answer:
      "No. Modern Android scopes app-private storage so no file manager, gallery or connected computer can reach it, and neither app offers an export option. An SD card does not help either, since the download directory sits on internal storage regardless of what removable media the device has.",
  },
];

export const troubleshootingFaqs: FaqItem[] = [
  {
    question: "Why does StreamFlix say 'no sources found'?",
    answer:
      "The selected provider has no working link for that title. Change provider in settings, then retry. If every provider fails on every title rather than one, the problem is your connection or DNS rather than the app.",
  },
  {
    question: "How do I fix constant buffering in StreamFlix?",
    answer:
      "Switch server first, since one slow source causes most buffering. Then lower the playback quality, close background apps, and prefer 5 GHz Wi-Fi or Ethernet on a TV box. Buffering that persists across every server is a network problem, not an app problem.",
  },
  {
    question: "Why does StreamFlix crash on launch?",
    answer:
      "Clear the app's cache first, then its data if that fails. If it still crashes, the current build may not agree with your device. Install an earlier build from the archive, which is the specific reason we keep one.",
  },
  {
    question: "Why do I get a black screen with sound but no video?",
    answer:
      "The stream's codec is not being decoded by your device. Switch to a different server for the same title, and on a TV box disable any hardware-decoding override in the player settings.",
  },
  {
    question: "StreamFlix stopped working after an update. What now?",
    answer:
      "Install the previous build over the top of the current one without uninstalling first, so your favourites survive. If Android refuses because of a signature or downgrade check, uninstall and then install the older build, accepting the loss of local data.",
  },
  {
    question: "How can I tell whether StreamFlix is down or my connection is broken?",
    answer:
      "Play a second title on the same provider, then switch provider and retry the first. If both fail but other websites load, suspect your DNS resolver rather than the app. StreamFlix Reborn runs no central service, so what people call an outage is almost always one third-party provider being offline.",
  },
  {
    question: "Why does StreamFlix return HTTP 404 on a title?",
    answer:
      "A 404 means the link the app followed no longer exists on the provider's server, usually because the file was moved or pulled. Switch server for the same title first, since other links to it often survive. If every server returns 404, that provider has dropped the title and another provider is the answer.",
  },
  {
    question: "What does a parse error mean when installing StreamFlix?",
    answer:
      "It comes from the Android installer, not from the app, and it means the package could not be read. In practice the download was truncated or corrupted, or the device runs an Android version below the app's minimum. Delete the file, download it again in full, and check your Android version before retrying.",
  },
  {
    question: "Why does StreamFlix time out while loading sources?",
    answer:
      "A timeout means the provider never answered, as opposed to refusing the request. One provider timing out is routine, so switch to another. Timeouts across every provider point at network filtering instead, and testing on mobile data or through a different DNS resolver will confirm which of the two you have.",
  },
  {
    question: "Does a VPN fix HTTP 403 errors in StreamFlix?",
    answer:
      "Sometimes. A 403 is the provider refusing the request, and when the reason is geographic a VPN in another country resolves it immediately. When the refusal is a hotlink check or an overloaded source, a VPN changes nothing. Switch server and provider first, because both are faster to test.",
  },
  {
    question: "Why does StreamFlix keep crashing on an older TV box?",
    answer:
      "Constrained hardware is the usual cause. A 1 GB box runs out of memory during playback, which Android resolves by killing the app. Restart the device, close background apps, lower the playback quality, and if it continues install a 1.6 series build, whose player is lighter than the current one.",
  },
];

export const updateFaqs: FaqItem[] = [
  {
    question: "How do I update StreamFlix without losing my favourites?",
    answer:
      "Install the new APK over the existing one without uninstalling. Android performs an overlay install that preserves app data as long as the signing certificate matches. Uninstalling first always loses your favourites and history.",
  },
  {
    question: "Does StreamFlix update itself?",
    answer:
      "StreamFlix Reborn includes an in-app updater that offers newer builds. StreamFlix 2.0 updates through Google Play if you installed it there, or not at all if you sideloaded it.",
  },
  {
    question: "Why does the update fail with a signature error?",
    answer:
      "Your existing copy was signed with a different certificate than the new file, which means one of them is a repackaged build from a third party. Uninstall the existing copy and install the new one from a source you trust.",
  },
  {
    question: "Should I always install the newest StreamFlix build?",
    answer:
      "Not automatically. If the current build works on your hardware, an update mainly brings provider changes, and those occasionally remove a source that was working for you. On older TV boxes, staying on a known-good build is often the better call.",
  },
  {
    question: "How do I check which StreamFlix version is installed?",
    answer:
      `Open Settings, Apps, then the app, then App details. Android reads the version straight from the installed package, so a download page cannot misrepresent it. The app's own settings screen shows the same figure. Confirm the package name at the same time: it must be ${REBORN.packageName} or ${V2.packageName}.`,
  },
  {
    question: "Is the in-app updater in StreamFlix Reborn safe to use?",
    answer:
      "It is the safest of the manual routes. The updater pulls the project's own signed build, so the certificate always matches and your favourites and downloads survive automatically. It also removes the chance of picking up a repackaged file from a mirror. It does need install-from-unknown-sources permission, granted once.",
  },
  {
    question: "Does updating StreamFlix delete my downloads?",
    answer:
      "Not if you install over the top. An overlay install replaces the code and leaves the app's data directory alone, so downloads, favourites and resume positions all survive. Uninstalling first deletes every one of them, and so does clearing app data, because no account exists to restore anything from.",
  },
  {
    question: "How often does StreamFlix Reborn release a new version?",
    answer:
      "Frequently, often several builds a month, because most releases repair provider scrapers that broke when an external site changed. That release rhythm is why an old build slowly finds less and less. It also means skipping a single release rarely matters, while skipping several series usually does.",
  },
  {
    question: "Why is my StreamFlix version older than the one a download site advertised?",
    answer:
      `Mirror listings frequently label a page with a version they do not actually serve, and the page gives no sign of it. Check the installed version in Android's app details rather than the download page. If it is behind v${REBORN.version}, install the current build over the top from the project's own release channel.`,
  },
];

export const safetyFaqs: FaqItem[] = [
  {
    question: "Is StreamFlix APK safe to install?",
    answer:
      "The published packages scan clean, and StreamFlix Reborn's open-source code can be independently audited, which no closed-source app in this category allows. The real risk is not the official build but repackaged copies redistributed by third-party sites with additional payloads.",
  },
  {
    question: "What permissions does StreamFlix request?",
    answer:
      "Network access to fetch streams, storage access for downloads and cache, and on some builds a wake lock so playback is not interrupted by the screen sleeping. Neither app has a legitimate reason to request contacts, SMS, or location, so treat a build that asks as repackaged.",
  },
  {
    question: "How do I know I have the real StreamFlix and not a repackaged copy?",
    answer:
      "Check three things: file size against the published figure, package name after install, and signing certificate against a build you already trust. A repackaged APK is usually a different size and is always signed with a different certificate.",
  },
  {
    question: "Is the Play Protect warning a virus detection?",
    answer:
      "No. It is triggered by the install method rather than by anything found in the file, and it appears for every sideloaded app regardless of content. A genuine malware detection uses different wording and blocks the install outright rather than asking you to confirm.",
  },
  {
    question: "Does StreamFlix collect my personal data?",
    answer:
      "Neither app requires an account, an email address, or a payment method, so there is no profile to attach activity to. StreamFlix 2.0 is ad-supported, which means its advertising libraries do collect device-level identifiers in the ordinary way.",
  },
  {
    question: "Can my ISP see what I watch on StreamFlix?",
    answer:
      "Your ISP can see which servers you connect to and how much data you transfer, though not the video content itself where the connection is encrypted. A VPN removes that visibility from the ISP and gives it to the VPN provider instead.",
  },
  {
    question: "What happens to my watch history if I uninstall?",
    answer:
      "It is deleted. Because there is no account, favourites, watch history and downloads live only in the app's local storage, and uninstalling removes all of it with no way to restore.",
  },
  {
    question: "Does StreamFlix contain a virus?",
    answer:
      "The developers' own packages do not, and both scan clean against multiple engines. Reports of a StreamFlix virus almost always involve a repackaged copy from a mirror site, or a routine Play Protect sideload notice read as a detection. Check the size, package name, signing certificate and permissions to tell them apart.",
  },
  {
    question: "Is StreamFlix any good?",
    answer:
      "As software, StreamFlix Reborn is competent: free, account-free, open source, and one of the few apps in this category with a real television interface. As a service it is inconsistent, because it plays streams owned by independent sites that go offline without warning. Quality and uptime are the provider's, not the app's.",
  },
  {
    question: "Who should avoid using StreamFlix?",
    answer:
      "Anyone who needs a film to play at a fixed time, anyone unwilling to verify a sideloaded package themselves, anyone setting up a device for a person who cannot switch providers, and anyone who does not want to judge the copyright status of a third-party stream. A licensed service suits all four better.",
  },
  {
    question: "Are StreamFlix reviews on download sites trustworthy?",
    answer:
      "Treat them carefully. Each site rates the specific build it serves, which may be repackaged, and mod pages review modified copies entirely. Ratings also swing with whichever provider was working that week, so they measure source availability more than the app. Verify the package yourself rather than relying on a score.",
  },
  {
    question: "What do users complain about most in StreamFlix?",
    answer:
      "Sources disappearing, buffering, and losing saved data after an update. The first two are provider problems fixed by switching provider or server and using a 5 GHz or wired connection. The third is caused by uninstalling before updating, which deletes everything because neither app has an account behind it.",
  },
];

export const legalFaqs: FaqItem[] = [
  {
    question: "Is StreamFlix legal to use?",
    answer:
      "The app itself is an aggregator and its code is published under an open-source licence, which is lawful. The legal question attaches to the third-party streams it indexes, whose licensing status cannot be verified from inside the app. Streaming law also differs substantially between countries.",
  },
  {
    question: "Why was the original StreamFlix taken down?",
    answer:
      "It was removed following a DMCA complaint. StreamFlix Reborn is the community fork that continued from the open-source code, and because it uses the same aggregator model it faces the same structural risk of a future takedown.",
  },
  {
    question: "Does StreamFlix host pirated content?",
    answer:
      "No, and the distinction matters legally. The project's own documentation states it does not host, store, or distribute copyrighted content. It functions as a search layer over third-party providers, which is why titles appear and disappear without any app update.",
  },
  {
    question: "How can I use StreamFlix within the law?",
    answer:
      "Restrict yourself to public-domain films and content you are otherwise licensed to watch, and check the rules where you live, since some jurisdictions treat streaming differently from downloading. If you cannot establish that a stream is licensed, the safe assumption is that it is not.",
  },
  {
    question: "Is StreamFlix legal in the United States?",
    answer:
      "The software is lawful and the Digital Millennium Copyright Act is the framework usually cited, but it governs takedown notices to hosts rather than the app on your device. Whether a particular stream is licensed is the actual question, and it cannot be answered from inside the app. This is general information rather than legal advice.",
  },
  {
    question: "Is StreamFlix legal in the UK?",
    answer:
      "The Copyright, Designs and Patents Act 1988 governs, and courts there can order internet providers to block infringing sites, which is why some sources stop resolving. Reported enforcement has concentrated on operators and sellers of preloaded devices rather than on viewers. That is an observation about enforcement, not a statement that any particular stream is lawful.",
  },
  {
    question: "How does copyright law treat hosting, indexing and viewing differently?",
    answer:
      "Hosting an unlicensed file carries the clearest exposure, because the host stores and serves the copy. Indexing a link is contested ground, judged on knowledge and intent rather than a fixed rule. Personal viewing is the layer that genuinely varies by country, with some systems treating an unlicensed stream as infringing and others focusing enforcement elsewhere.",
  },
  {
    question: "Has StreamFlix been banned anywhere?",
    answer:
      "No legislature has banned an app by that name. The original was removed from distribution after a copyright complaint, and internet providers in several countries block the domains that third-party providers use, which stops sources resolving. Neither is a ban on the app, and the Play Protect install notice is a provenance warning rather than a block.",
  },
  {
    question: "What is a DMCA takedown notice?",
    answer:
      "It is a formal notice under the Digital Millennium Copyright Act asking a host or intermediary to remove material a rights holder says infringes their copyright. Complying promptly is how an intermediary keeps its safe harbour protection. The original StreamFlix was removed from distribution after a complaint of this kind.",
  },
  {
    question: "Does using a VPN make StreamFlix legal?",
    answer:
      "No. A virtual private network changes which parties can observe your traffic and can route around blocking applied by your internet provider. It has no effect on whether a stream is licensed or on how the law where you live treats watching it. Privacy and legality are separate questions with separate answers.",
  },
];

export const vpnFaqs: FaqItem[] = [
  {
    question: "Do I need a VPN for StreamFlix?",
    answer:
      "It is not required for the app to function. A VPN hides your traffic from your ISP and can bypass ISP-level blocking of specific providers. It does not make an unlicensed stream licensed, and it will not fix a provider that is simply down.",
  },
  {
    question: "Will a VPN fix buffering in StreamFlix?",
    answer:
      "Only if your ISP is throttling streaming traffic, in which case it can help noticeably. If the source itself is slow, a VPN adds a hop and usually makes things slightly worse. Test both ways before assuming it helps.",
  },
  {
    question: "How do I use a VPN on a Firestick?",
    answer:
      "Install the VPN provider's Fire TV app from the Amazon Appstore, sign in, and connect before opening StreamFlix. Providers without a Fire TV app can sometimes be configured at your router instead, which covers every device on the network.",
  },
  {
    question: "Is a free VPN good enough for streaming?",
    answer:
      "Generally not. Free tiers cap bandwidth and are frequently funded by selling the traffic data you installed them to protect, which defeats the purpose. If a VPN is worth using here, it is worth paying for.",
  },
  {
    question: "Will a VPN unblock StreamFlix if my internet provider has blocked it?",
    answer:
      "Usually, yes. A provider block is applied on the route your traffic takes, and a tunnel means your traffic no longer takes it. Try a different DNS resolver first, because many blocks are implemented at the lookup stage and a resolver change costs nothing and adds no latency. If that fails, the block is deeper and a VPN is the next step.",
  },
  {
    question: "What is the difference between DNS blocking and geo-restriction?",
    answer:
      "DNS blocking happens at your end. Your internet provider refuses to resolve a domain, so the connection is never made, and a different resolver walks past it. Geo-restriction happens at the far end, where the provider reads the IP address your request arrives from and refuses it by region. Only a different exit address changes the second one.",
  },
  {
    question: "Does changing DNS work as well as a VPN for StreamFlix?",
    answer:
      "For provider blocking implemented at the lookup stage, often yes, and it is free and costs no bandwidth. It does nothing for two other things a VPN handles: hiding which servers you connect to from your internet provider, and defeating throttling applied by traffic class. Try DNS first and add a VPN only if the symptom persists.",
  },
  {
    question: "Should I turn my VPN off to fix a 403 error?",
    answer:
      "It is worth testing. An HTTP 403 means the far-end server understood your request and refused it, and the data-centre address ranges VPN exits use are themselves widely refused. Toggle the tunnel to the opposite state and retry the same title. If it fails either way, the source has moved on and switching provider is the fix.",
  },
  {
    question: "Why is StreamFlix slower with the VPN switched on?",
    answer:
      "You have added a hop and an encryption step, so some loss is normal even with a good provider on a nearby server. Distance is the main variable: a server on another continent commonly costs more than half your throughput. If playback was stable before the VPN and unstable after, the VPN is not solving a problem you had.",
  },
  {
    question: "Is a VPN worth running on a Fire TV Stick?",
    answer:
      "Only if you have a reason beyond making the app work, because StreamFlix runs fine without one. On constrained hardware there is a real cost: the VPN client is a second app competing for memory, and on a 1 GB stick that can cause the stuttering you were trying to fix. Configuring the VPN at your router avoids the memory cost entirely.",
  },
];


export const modFaqs: FaqItem[] = [
  {
    question: "Is there an official StreamFlix mod APK?",
    answer:
      "No. Neither developer publishes a mod, and there is nothing for a mod to unlock. Both apps are already free with no premium tier, no subscription, and no paywalled features.",
  },
  {
    question: "What do 'StreamFlix mod APK' downloads actually contain?",
    answer:
      "Typically the ordinary app repackaged and re-signed by a third party, sometimes with additional advertising SDKs injected, sometimes with nothing changed but the signature. Because it is re-signed, it cannot overlay-update your existing install.",
  },
  {
    question: "Are mod APKs of StreamFlix dangerous?",
    answer:
      "They carry real risk because you are trusting an anonymous repackager rather than the developer, and the code cannot be checked against the published source. For Reborn specifically this is a needless trade, since the original is already open-source and free.",
  },
  {
    question: "What should I install instead of a mod?",
    answer:
      "The official build of whichever variant suits your device. If your goal was fewer ads, StreamFlix Reborn already shows none in its own interface, which is the outcome most mod listings claim to deliver.",
  },
  {
    question: "Is there a StreamFlix premium mod APK of the latest version?",
    answer: `No version of either app has a premium tier, so a premium mod of the latest version modifies nothing. Reborn v${REBORN.version} and StreamFlix 2.0 build ${V2.version} are both free in full. A file distributed under that name is the ordinary app re-signed by a stranger, and the re-signing permanently breaks official updates.`,
  },
  {
    question: "What is StreamFlix Pro APK?",
    answer: "There is no Pro edition of either StreamFlix app. Pro, Plus and Premium are template words that mod listings apply to whatever app they are targeting, regardless of whether the app has tiers. Neither developer ships one. Check the package name after installing anything labelled Pro, because it is often a different app entirely.",
  },
  {
    question: "Does a StreamFlix VIP unlock exist?",
    answer: "No. There is no VIP level, no membership and no gated feature in either app, so there is nothing for a VIP unlock to switch on. Listings promising one are describing a generic feature list rather than this software. The practical tell is that they never name the package, because naming it invites the check that exposes them.",
  },
  {
    question: "Is StreamFlix already unlocked without a mod?",
    answer: "Yes. Every feature in both apps is available from first launch: unlimited playback, subtitles, quality selection, watchlists, and offline downloads in StreamFlix 2.0. Nothing is held back behind payment or registration. Reborn additionally carries no advertising in its own interface, which is the one outcome most mod listings claim to deliver.",
  },
  {
    question: "How do I go back to the official app after installing a mod?",
    answer: "Uninstall the mod first. Android identifies an app by package name and signing certificate, so the official build cannot overlay a copy signed by someone else and the install will fail with a signature error. Uninstalling removes your favourites and watch history, because there is no account holding them. Then install the official APK and verify the package name.",
  },
];

export const alternativesFaqs: FaqItem[] = [
  {
    question: "What is the best alternative to StreamFlix?",
    answer:
      "For a like-for-like aggregator with a working TV interface, OnStream is the closest actively maintained option. Cinema HD remains capable but updates irregularly. For live channels rather than a film catalog, HD Streamz is a different tool for a different job.",
  },
  {
    question: "Are Cinema HD and CyberFlix TV still working?",
    answer:
      "Cinema HD still works but its updates have become irregular. CyberFlix TV has not been updated in years and most of its sources no longer resolve: any 2026 listicle still recommending it was not tested.",
  },
  {
    question: "What is the difference between an aggregator and a catalog app?",
    answer:
      "An aggregator like StreamFlix Reborn searches third-party providers at the moment you press play, so its catalog shifts constantly. A catalog app serves from its own indexed backend, which is more consistent but narrower and harder to audit.",
  },
  {
    question: "Which free streaming apps actually have a TV interface?",
    answer:
      "Very few. StreamFlix Reborn, OnStream and Cinema HD have genuine leanback layouts. Most apps recommended for Firestick are phone apps that technically install on a TV and are then unpleasant to drive with a remote.",
  },
  {
    question: "What is the best free movie APK for Android?",
    answer:
      "On current evidence StreamFlix Reborn, because it is actively maintained, open-source, carries no ads in its own interface, and has the widest provider list. The honest caveat is that every app in this category depends on third-party providers and none is reliable in the way a paid service is.",
  },
  {
    question: "How should I judge a free movie APK?",
    answer:
      "Four things: when it was last updated, how many providers it can fall back on, how heavy its ad load is, and whether it has a real TV interface if you plan to use one. Catalog-size claims are marketing, since the catalog belongs to the providers rather than the app.",
  },
  {
    question: "How does StreamFlix compare with Stremio?",
    answer:
      "They solve the same problem with opposite architectures. StreamFlix Reborn ships its providers inside the app, so it works about two minutes after install. Stremio ships a player and a catalog interface and expects you to add source addons yourself. Stremio covers far more platforms; Reborn is quicker to set up and has a purpose-built Android TV interface.",
  },
  {
    question: "Which streaming apps work on iPhone if StreamFlix does not?",
    answer:
      "None of the apps on this page do. Sideloading is an Android capability, and Apple does not accept apps of this kind for the App Store, so no equivalent exists. The workable routes on an iPhone are a web catalog in Safari, casting from an Android device, or a licensed service. Any site offering a StreamFlix iOS download is offering something else.",
  },
  {
    question: "Is Unlinked an alternative to StreamFlix?",
    answer:
      "No, because it does a different job. Unlinked is a sideloading tool, used mostly on a Fire TV Stick, that fetches lists of APK links through shared codes. It installs other apps rather than playing anything itself, so it sits alongside an aggregator rather than replacing one. The Downloader app covers the same ground.",
  },
  {
    question: "Is there an open-source alternative to StreamFlix Reborn?",
    answer:
      "Among the Android aggregators compared here, no. Reborn is the only one publishing its source, which is why a build can be checked against the code rather than trusted. Stremio is the closest option outside that group, since its core application is open-source software, though the addons that supply its sources are separate projects with their own terms.",
  },
  {
    question: "Should I replace StreamFlix or run a second app alongside it?",
    answer:
      "Run a second one. Every app in this category depends on the same third-party providers, so a title that fails in one often fails in the next, and switching wholesale rarely fixes anything. A fallback costs about 30 MB and turns a dead evening into a two-tap switch. Pair an aggregator with a live-TV app if you want channels too.",
  },
  {
    question: "Why do apps like StreamFlix keep disappearing?",
    answer:
      "Because distribution is the vulnerable part, not the software. These apps are removed from stores and mirrors after copyright complaints, which is what happened to the original StreamFlix. Open-source projects survive that better, since the code cannot be recalled and someone can fork it, which is exactly how Reborn came to exist.",
  },
  {
    question: "Are free movie APKs safe to install?",
    answer:
      "The official builds generally scan clean. The risk sits with repackaged copies from third-party mirror sites, and it is the reason an open-source app whose build you can verify against published code is structurally safer than a closed-source one.",
  },
];


export const bestTvApksFaqs: FaqItem[] = [
  {
    question: "What is the best streaming APK for Android TV?",
    answer:
      "StreamFlix Reborn, on the specific ground that it ships a purpose-built leanback interface rather than a phone layout. OnStream is the closest competitor. Most other names commonly recommended for Firestick have no TV layout at all.",
  },
  {
    question: "Why do phone APKs work badly on a TV?",
    answer:
      "They assume touch input. Buttons that expect a fingertip cannot be reached with a D-pad, text is sized for a screen 30 cm away rather than three metres, and scrolling behaves unpredictably with a remote.",
  },
  {
    question: "Which apps like StreamFlix are worth installing on Android TV in 2026?",
    answer:
      "Three: StreamFlix Reborn first, OnStream second, Cinema HD third and conditionally. Reborn leads because it is the only one with a purpose-built leanback interface and published source code. OnStream matches the model and the remote layout without the open code. Cinema HD still works but updates irregularly, which is what eventually breaks an app in this category.",
  },
  {
    question: "How do I choose between streaming APKs for a Fire TV Stick?",
    answer:
      "Apply two tests before any feature comparison. Does it navigate on a directional pad without a virtual cursor, and has it shipped a build recently. Those two eliminate most of the category. After that, weigh provider fallbacks, download size, and ad load, in that order, because storage and memory are scarce on stick hardware.",
  },
  {
    question: "Does StreamFlix 2.0 work on Android TV?",
    answer:
      "It installs and it launches, which is not the same as working. StreamFlix 2.0 has a phone layout only, so controls positioned for a fingertip cannot be focused with a remote and you end up driving a simulated pointer around the screen. On any television device, install StreamFlix Reborn instead, which was built for a D-pad.",
  },
  {
    question: "What makes a streaming APK good on a television rather than a phone?",
    answer:
      "Three things a phone ranking never measures. Focus states that are visible from across a room, every control reachable by directional pad, and a small memory footprint, because a 1 GB streaming stick is ordinary television hardware. An app can be excellent on a phone and genuinely unpleasant on a television without a single feature changing.",
  },
  {
    question: "Why do most Firestick app lists recommend apps with no TV interface?",
    answer:
      "Because they check whether an app installs rather than whether it is usable. Nearly every Android app installs on Fire TV, so a list built from install tests looks long and tells you nothing. A list built from remote-only navigation is short. If a page does not draw that distinction, it was assembled rather than tested.",
  },
  {
    question: "Do I need a mouse toggle app on Firestick?",
    answer:
      "Only for apps without a proper TV interface, where a virtual cursor is the only way to reach some controls. With StreamFlix Reborn you do not need one, which is a reasonable proxy for whether an app was actually built for TV.",
  },
];

export const vsPaidFaqs: FaqItem[] = [
  {
    question: "Is StreamFlix a real alternative to Netflix?",
    answer:
      "For catalog breadth it competes surprisingly well, because it indexes many providers rather than one licensed library. For reliability, video quality, and platform coverage it does not: streams fail unpredictably, quality varies per source, and there is no iOS or Smart TV app.",
  },
  {
    question: "What do you actually give up by not paying?",
    answer:
      "Consistency, mainly. A licensed service guarantees the stream starts, holds its bitrate, has correct subtitles, and works on every device you own. A free aggregator gives you none of those guarantees, and the time spent switching servers is the real price.",
  },
  {
    question: "Is the video quality as good as a paid service?",
    answer:
      "Sometimes, per title, when a good source is available. But it is inconsistent by design because quality is a property of the individual provider, and there is no HDR or Dolby Audio pipeline of the kind licensed services run end to end.",
  },
  {
    question: "Can I use both a free app and a paid subscription?",
    answer:
      "Plenty of people do: a subscription for the things they watch attentively, and an aggregator for older or harder-to-find titles no service currently licenses. That is the most defensible use of an app like this.",
  },
  {
    question: "Is there anything to pay for in StreamFlix?",
    answer:
      "No. Neither app has a subscription, a premium tier, a VIP unlock or any feature behind a paywall, and neither asks for card details at any point. StreamFlix Reborn is an unfunded open-source project and StreamFlix 2.0 is funded by advertising. Any listing selling a premium version is describing a repackaged file rather than the real app.",
  },
  {
    question: "Why does StreamFlix have no free trial?",
    answer:
      "Because a trial exists to preview something you would otherwise pay for, and there is nothing here to pay for. Everything both apps do is available from the first launch with no account and no card details. That is the opposite of a subscription service, where the trial is the first step of a billing relationship.",
  },
  {
    question: "Is StreamFlix a streaming service?",
    answer:
      "No, and the distinction explains most of its behaviour. A streaming service licenses content and serves it from infrastructure it runs. StreamFlix searches independent third-party sites and plays back what they return, holding no licences and operating no servers. That is why titles appear and vanish without any app update, and why nobody is accountable when one fails.",
  },
  {
    question: "Is StreamFlix good enough to replace a subscription?",
    answer:
      "For most households, no. It competes on catalog breadth and loses clearly on reliability, video quality, device coverage and parental controls, and it reaches nothing at all on an iPhone or a Samsung television. It is genuinely good as a second app beside one subscription, covering the older and regional film that licensed catalogs drop.",
  },
  {
    question: "What does using StreamFlix actually cost?",
    answer:
      "Nothing in money, and something in attention. The real costs are setup on each device, occasional updates and rollbacks, time lost to streams that fail on the first attempt, and possibly a streaming stick if your television cannot run Android apps. Whether that is a good trade depends on how much you watch and what your time is worth.",
  },
];


export const archiveFaqs: FaqItem[] = [
  {
    question: "Can I download an old version of StreamFlix?",
    answer:
      "Yes. Older builds of both apps are catalogued here with their size, minimum Android version, and release date. Rolling back is a legitimate fix when a newer build drops a provider you relied on or stops running properly on your hardware.",
  },
  {
    question: "How do I downgrade StreamFlix without losing my favourites?",
    answer:
      "Install the older APK over the existing one without uninstalling first. Android performs an overlay install that preserves app data when the signing certificate matches. If Android refuses the downgrade, uninstalling is the only route and local data is lost.",
  },
  {
    question: "Which StreamFlix Reborn version is best for an old TV box?",
    answer:
      "A build from the 1.6 series. It predates the 1.7 player rewrite and has a lighter memory footprint, which matters on Android TV boxes with 1 GB or 2 GB of RAM and on the 2nd generation Fire TV Stick.",
  },
  {
    question: "Why do old StreamFlix builds stop finding anything?",
    answer:
      "Because their bundled provider scrapers decay. Providers change structure or go offline, and an old build has no updated scraper to follow them. This is why legacy builds are archived for reference rather than recommended for daily use.",
  },
  {
    question: "What changed in the latest StreamFlix build?",
    answer: `StreamFlix Reborn v${REBORN.version}, released ${REBORN.releasedOnDisplay}, continues the 1.7 series with its provider list and server failover. StreamFlix 2.0 build ${V2.version}, released ${V2.releasedOnDisplay}, is the current Play Store listing with offline downloads and eight-language subtitles.`,
  },
  {
    question: "Do StreamFlix updates add new movies?",
    answer:
      "No, and this is the most common misunderstanding. The catalog belongs to third-party providers, not to the app, so titles appear and disappear without any update. What an update changes is how the app searches, not what exists to be found.",
  },
  {
    question: "Is there a StreamFlix APK from 2020?",
    answer: "Not one worth installing. Builds from that era belong to the original StreamFlix that was taken down after a DMCA complaint, and their provider scrapers stopped resolving years ago. A 2020 package will install and open, then find almost nothing. Anything advertised as a 2020 StreamFlix download today is usually a relabelled file from somewhere else.",
  },
  {
    question: "What is StreamFlix 1.7.117?",
    answer: `StreamFlix 1.7.117 is a point release from the Reborn 1.7 series that circulates widely on mirror sites. It is not one of the builds catalogued here, and it predates the current release, so its provider list is further behind. If a mirror offers it as the latest version, that label is wrong: the current build is v${REBORN.version}.`,
  },
  {
    question: "How do I update StreamFlix to the latest version?",
    answer: `Install the newer APK straight over the existing one. The overlay install keeps favourites and watch history as long as the signing certificate matches. Reborn also offers an in-app updater, and StreamFlix 2.0 updates through Google Play. The current builds are Reborn v${REBORN.version} and StreamFlix 2.0 build ${V2.version}.`,
  },
  {
    question: "Is Uptodown a reliable source for old StreamFlix versions?",
    answer: "Uptodown keeps a version history for the Reborn package and is one of the two distribution points the project acknowledges. It is still a mirror, so check the version number, the file size and the package name against the figures published here before installing. Mirrors sometimes relabel an older file with a current version string.",
  },
  {
    question: "Which old StreamFlix version should I try first?",
    answer: "Go back one release rather than several. The previous build in the same series is the closest thing to what you were running and is most likely to fix a fresh problem without introducing new ones. Only drop to an earlier series when the symptom is performance on old hardware, where the lighter 1.6 player genuinely helps.",
  },
];


export const blogIndexFaqs: FaqItem[] = [
  {
    question: "How is this StreamFlix guide index organised?",
    answer:
      "Five clusters: which of the two StreamFlix apps you have, how to install on each device class, how to use and fix it, the safety and legality questions, and how it compares with everything else. One page per question, so nothing is buried inside a page about something else.",
  },
  {
    question: "Which StreamFlix guide should I read first?",
    answer:
      "The download hub, if you have not installed anything yet. It covers both apps side by side so you can tell which one you actually want. If something is already installed and misbehaving, go straight to the troubleshooting guide instead.",
  },
  {
    question: "Why does this site have separate pages for each device?",
    answer:
      "Because the install method genuinely differs. A Firestick has no browser and needs the Downloader app; an Android TV box needs a file manager and a USB stick; a Samsung television cannot install an APK at all. One combined page would bury the method each reader needs.",
  },
];


export const aboutFaqs: FaqItem[] = [
  {
    question: "How do you verify the version numbers on this site?",
    answer:
      "Every figure is checked against the developer's own distribution point first, GitHub releases for StreamFlix Reborn and Google Play for StreamFlix 2.0, then cross-checked against Uptodown, APKPure, Softonic and FileHippo. Where those disagree, the developer's own listing wins.",
  },
  {
    question: "Why do you cover two different apps under one name?",
    answer:
      "Because both exist and most sites conflate them into one incorrect spec table. Treating them as separate entities with separate pages is the only way to answer 'which StreamFlix do I have' accurately.",
  },
  {
    question: "Do you host the APK files yourself?",
    answer:
      "Where a package is staged on this site it is served directly from our own servers so the file you get is the file we tested. Every official distribution point is also linked so you can compare and choose.",
  },
  {
    question: "Is this the official StreamFlix website?",
    answer:
      "No. We are an independent documentation site with no affiliation to either developer. StreamFlix Reborn has no marketing site at all, so its only first-party home is its GitHub repository, and StreamFlix 2.0's is its Google Play listing. Any page presenting itself as the official site, including the ones ranking above this answer, is a third party.",
  },
  {
    question: "Is there an official StreamFlix Discord or Reddit community?",
    answer:
      "Neither developer runs one. Reddit threads are user discussion, which is useful for symptoms and unreliable for version numbers or file sizes. Discord servers advertising StreamFlix downloads are unaffiliated and are a common route for repackaged files. For Reborn, the GitHub issue tracker is the only channel that reaches the people who maintain the app.",
  },
  {
    question: "How do you handle corrections?",
    answer:
      "Specification figures live in one file, so a correction propagates to every page quoting them rather than the single page reported. Applying one updates that page's review date, because the date means the facts were checked that day. Substantive corrections are noted on the page where the earlier version would have led someone to do the wrong thing.",
  },
  {
    question: "Do you earn money from the apps you review?",
    answer:
      "No. We take no payment, sponsorship, affiliate commission or review copies from either StreamFlix developer, and we run no affiliate links to the apps. That is why the site publishes findings a promotional page would omit, such as there being no iOS build, no television interface in StreamFlix 2.0, and no genuine premium mod.",
  },
];
