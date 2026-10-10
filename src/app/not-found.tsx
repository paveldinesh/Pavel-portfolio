import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <span className="font-mono text-xs text-[#7A7873] mb-3">/404/</span>
      <h1 className="font-display font-bold text-5xl sm:text-7xl text-[#F5F4F1] tracking-tight mb-4">
        Page Not Found
      </h1>
      <p className="text-[#7A7873] text-sm max-w-sm mb-8">
        The page you are looking for doesn&apos;t exist or has been relocated.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full border border-white/10 bg-[#121211] text-xs font-mono text-[#F5F4F1] hover:border-white/30 transition-all"
      >
        Return Home ↗
      </Link>
    </div>
  );
}
