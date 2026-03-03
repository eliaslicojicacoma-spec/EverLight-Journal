import Link from "next/link";
import { slugify } from "@/utils/slug";

type Props = {
  locale: string;
  tags: string[];
  className?: string;
};

export default function TagPills({ locale, tags, className }: Props) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={className ?? ""}>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const tagSlug = slugify(tag);
          return (
            <Link
              key={`${tag}-${tagSlug}`}
              href={`/${locale}/blog/tag/${tagSlug}`}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10"
            >
              #{tag}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
