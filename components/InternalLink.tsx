import Link from "next/link";
import {
  linkHref,
  linkLabel,
  type LinkContext,
  type LinkKey,
} from "@/lib/links";

/**
 * Intent-based internal link. Prefer registry labels so anchors stay on-intent;
 * pass `label` for a one-off generic phrase ("this guide", "full details").
 */
export function InternalLink({
  intent,
  context = "body",
  currentPath = "/",
  className,
  label,
  children,
}: {
  intent: LinkKey;
  context?: LinkContext;
  currentPath?: string;
  className?: string;
  /** Override registry text — use for generic anchors mixed with keyword ones. */
  label?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={linkHref(intent, currentPath)} className={className}>
      {children ?? label ?? linkLabel(intent, context)}
    </Link>
  );
}
