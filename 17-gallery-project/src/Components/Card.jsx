import React from "react";

const Card = ({ elem }) => {
  const { author, download_url, width, height, id, url } = elem;

  const openFull = () => window.open(url || download_url, "_blank");
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(download_url);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className="
        group relative rounded-2xl overflow-hidden border border-white/10
        bg-white/5 hover:bg-white/10 transition shadow-lg hover:shadow-2xl
      "
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={`${download_url}?w=800&h=600`}
          alt={`Photo by ${author}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Info strip */}
      <div className="p-3 flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">{author}</p>
          <p className="text-xs text-white/60 truncate">
            #{id} • {width}×{height}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyLink}
            className="px-2 py-1 rounded-lg text-xs border border-cyan-400/40 bg-cyan-500/15 hover:bg-cyan-500/25"
            title="Copy image URL"
          >
            Copy
          </button>
          <button
            onClick={openFull}
            className="px-2 py-1 rounded-lg text-xs border border-emerald-400/40 bg-emerald-500/15 hover:bg-emerald-500/25"
            title="Open original"
          >
            View
          </button>
          <a
            href={download_url}
            download
            className="px-2 py-1 rounded-lg text-xs border border-amber-400/40 bg-amber-500/20 hover:bg-amber-500/30"
            title="Download"
          >
            Download
          </a>
        </div>
      </div>

      {/* Glow edge on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
      </div>
    </div>
  );
};

export default Card;
