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
];

export const privacyFaqs: FaqItem[] = [
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
    question: "Why does StreamFlix need storage permission?",
    answer:
      "For caching during playback and for saving offline downloads. On modern Android this is scoped to the app's own directory rather than your whole filesystem, so it cannot read your photos or documents.",
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
];

export const bestApksFaqs: FaqItem[] = [
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
    question: "Are free movie APKs safe to install?",
    answer:
      "The official builds generally scan clean. The risk sits with repackaged copies from third-party mirror sites, and it is the reason an open-source app whose build you can verify against published code is structurally safer than a closed-source one.",
  },
  {
    question: "Why do free movie apps stop working so often?",
    answer:
      "Because they do not own their content. They index third-party providers, and when a provider goes offline or changes structure the app breaks until someone updates its scraper. This is also why an abandoned app degrades to uselessness within a year or two.",
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
];

export const changelogFaqs: FaqItem[] = [
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
    question: "How often is StreamFlix updated?",
    answer:
      "StreamFlix Reborn ships frequent point releases because provider scrapers need maintenance. StreamFlix 2.0 updates through Google Play on a slower cadence, typically every couple of months.",
  },
  {
    question: "Is it worth installing every StreamFlix update?",
    answer:
      "Not automatically. Updates mainly bring provider changes, and those occasionally remove a source that was working for you. If the current build works on your hardware, there is a reasonable case for staying on it.",
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
];
