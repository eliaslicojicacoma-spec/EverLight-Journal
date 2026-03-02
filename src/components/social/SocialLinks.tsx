import Link from "next/link";
import { socialConfig } from "@/config/socialConfig";

type Props = {
  className?: string;
};

export default function SocialLinks({ className }: Props) {
  const items = [
    { label: "Facebook", href: socialConfig.facebook },
    { label: "Instagram", href: socialConfig.instagram },
    { label: "YouTube", href: socialConfig.youtube },
  ].filter((x) => Boolean(x.href));

  return (
    <div className={className ?? ""}>
      <div className="flex items-center gap-3">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white/70 text-sm font-semibold text-black shadow-sm transition hover:bg-white"
            aria-label={item.label}
            title={item.label}
          >
            {item.label === "Facebook" ? "f" : item.label === "Instagram" ? "ig" : "yt"}
          </Link>
        ))}
      </div>
    </div>
  );
}
