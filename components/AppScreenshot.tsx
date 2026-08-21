import Image from "next/image";

type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export function AppScreenshot({
  shot,
  priority = false,
  className = "",
  size = "phone",
}: {
  shot: Shot;
  priority?: boolean;
  className?: string;
  size?: "phone" | "thumb" | "wide" | "feature";
}) {
  return (
    <figure className={`app-shot app-shot-${size} ${className}`.trim()}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        className="h-auto w-full object-contain"
        sizes={
          size === "wide"
            ? "(min-width: 1024px) 720px, 100vw"
            : size === "feature"
              ? "(min-width: 1024px) 280px, 60vw"
              : size === "thumb"
                ? "140px"
                : "(min-width: 640px) 180px, 45vw"
        }
        priority={priority}
        unoptimized
      />
      {shot.caption ? (
        <figcaption className="px-1 pb-2 text-center text-xs leading-5 text-zinc-400">
          {shot.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function ShotGuide({
  items,
}: {
  items: { shot: Shot; title: string; body: string }[];
}) {
  return (
    <ol className="shot-guide not-prose">
      {items.map((item) => (
        <li key={item.title}>
          <AppScreenshot shot={item.shot} size="thumb" />
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
