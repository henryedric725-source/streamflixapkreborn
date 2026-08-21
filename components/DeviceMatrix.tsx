import Link from "next/link";
import { deviceMatrix, supportLabels, type SupportLevel } from "@/lib/devices";
import { REBORN, V2 } from "@/lib/variants";

const toneFor: Record<SupportLevel, string> = {
  native: "text-flame",
  sideload: "text-paper",
  emulated: "text-gold",
  cast: "text-gold",
  none: "text-zinc-500",
};

/**
 * Device × variant support table. Rendered on the hub and on every device page,
 * optionally filtered to the rows that page owns, so one row edit updates the
 * whole cluster at once.
 */
export function DeviceMatrix({
  devices,
  caption = "Which StreamFlix app runs on which device, and how it gets there",
  showGuideLinks = true,
}: {
  devices?: readonly (typeof deviceMatrix)[number][];
  caption?: string;
  showGuideLinks?: boolean;
}) {
  const rows = devices ?? deviceMatrix;
  return (
    <div className="not-prose overflow-x-auto rounded-2xl border border-line">
      <table className="min-w-full border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-panel-2 text-xs uppercase tracking-[0.1em] text-zinc-400">
          <tr>
            <th scope="col" className="px-4 py-3 font-medium">
              Device
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              {REBORN.shortName}
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              {V2.shortName}
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Method
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Difficulty
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.device}
              className={index % 2 === 0 ? "bg-panel/60" : "bg-transparent"}
            >
              <th scope="row" className="px-4 py-3 align-top font-medium text-paper">
                {showGuideLinks ? (
                  <Link
                    href={row.guide}
                    className="text-paper underline-offset-2 hover:text-flame hover:underline"
                  >
                    {row.device}
                  </Link>
                ) : (
                  row.device
                )}
                <span className="mt-1 block text-xs font-normal leading-5 text-zinc-500">
                  {row.note}
                </span>
              </th>
              <td className={`px-4 py-3 align-top ${toneFor[row.reborn]}`}>
                {supportLabels[row.reborn]}
              </td>
              <td className={`px-4 py-3 align-top ${toneFor[row.v2]}`}>
                {supportLabels[row.v2]}
              </td>
              <td className="px-4 py-3 align-top text-zinc-300">{row.method}</td>
              <td className="px-4 py-3 align-top text-zinc-400">{row.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
