import Link from "next/link";
import {
  linkHref,
  linkLabel,
  type LinkContext,
  type LinkKey,
} from "@/lib/links";

export function InternalLink({
  intent,
  context = "body",
  currentPath = "/",
  className,
}: {
  intent: LinkKey;
  context?: LinkContext;
  currentPath?: string;
  className?: string;
}) {
  return (
    <Link href={linkHref(intent, currentPath)} className={className}>
      {linkLabel(intent, context)}
    </Link>
  );
}
