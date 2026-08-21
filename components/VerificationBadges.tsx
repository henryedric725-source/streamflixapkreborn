import Image from "next/image";

const badges = [
  {
    name: "McAfee",
    src: "/badges/mcafee.png",
    width: 113,
    height: 128,
  },
  {
    name: "F-Secure",
    src: "/badges/fsecure.png",
    width: 138,
    height: 128,
  },
  {
    name: "Adblock",
    src: "/badges/adblock.png",
    width: 128,
    height: 128,
  },
] as const;

export function VerificationBadges() {
  return (
    <figure className="mt-5">
      <ul className="m-0 flex list-none items-start justify-start gap-10 bg-ink p-0 sm:gap-14">
        {badges.map((badge) => (
          <li
            key={badge.name}
            className="flex w-[5.75rem] flex-col items-center gap-2.5"
          >
            <span className="flex h-[52px] items-center justify-center">
              <Image
                src={badge.src}
                alt={badge.name}
                width={badge.width}
                height={badge.height}
                className="h-[52px] w-auto object-contain"
                unoptimized
              />
            </span>
            <span className="text-center text-sm font-medium leading-none text-paper">
              {badge.name}
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="mt-3 max-w-lg text-xs leading-5 text-zinc-400">
        Scan <span className="text-paper">Onstream latest version.apk</span> with
        McAfee, F-Secure, Adblock, or another scanner you already trust before
        you tap Install. These logos are a reminder to verify the file, not an
        official certification from those vendors.
      </figcaption>
    </figure>
  );
}
