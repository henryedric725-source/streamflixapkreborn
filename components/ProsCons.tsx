import { Check, Minus } from "lucide-react";

export function ProsCons({
  pros,
  cons,
}: {
  pros: string[];
  cons: string[];
}) {
  return (
    <div className="balance-board mt-5">
      <div className="balance-board-rail" aria-hidden />
      <section className="balance-col balance-col-pro">
        <header className="balance-head">
          <span className="balance-icon balance-icon-pro">
            <Check className="h-4 w-4" aria-hidden strokeWidth={2.5} />
          </span>
          <div>
            <h3>Works in your favor</h3>
            <p>{pros.length} strengths of the official package</p>
          </div>
        </header>
        <ul>
          {pros.map((item) => (
            <li key={item}>
              <Check className="balance-mark text-flame" aria-hidden strokeWidth={2.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="balance-col balance-col-con">
        <header className="balance-head">
          <span className="balance-icon balance-icon-con">
            <Minus className="h-4 w-4" aria-hidden strokeWidth={2.5} />
          </span>
          <div>
            <h3>Limits to accept</h3>
            <p>{cons.length} constraints before you install the APK</p>
          </div>
        </header>
        <ul>
          {cons.map((item) => (
            <li key={item}>
              <Minus className="balance-mark text-zinc-500" aria-hidden strokeWidth={2.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
