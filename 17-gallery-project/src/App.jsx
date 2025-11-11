import React, { useEffect, useMemo, useState, useCallback } from "react";
import axios from "axios";
import Card from "./components/Card";

const PAGE_SIZE = 12;

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const fetchPage = useCallback(async (page) => {
    try {
      setLoading(true);
      setErr("");
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${PAGE_SIZE}`
      );
      setUserData(res.data || []);
    } catch (e) {
      setErr("Couldn’t load images. Please try again.");
      setUserData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPage(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [index, fetchPage]);

  const pageWindow = useMemo(() => {
    const around = 2;
    const start = Math.max(1, index - around);
    const end = index + around;
    const arr = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  }, [index]);

  const goTo = (p) => {
    if (p < 1) return;
    setUserData([]); 
    setIndex(p);
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#0b0b0f] via-[#141826] to-[#1b0f2e]">
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300">
              Aafia Gallery
            </span>
          </h1>
          <div className="hidden md:flex items-center gap-2 text-xs opacity-80">
            <span className="px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30">
              Page size: {PAGE_SIZE}
            </span>
            <span className="px-2 py-1 rounded-full bg-sky-500/15 border border-sky-400/30">
              Current: {index}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-3 sm:px-4 pt-6 pb-28">
      
        {err && (
          <div className="mb-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm">
            {err}
          </div>
        )}


        <div
          className="
            grid gap-4 sm:gap-5
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          "
        >

          {loading &&
            Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="h-60 rounded-2xl overflow-hidden relative border border-white/10 bg-white/5"
              >
                <div className="absolute inset-0 animate-pulse">
                  <div className="h-full w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
                </div>
              </div>
            ))}

          {!loading &&
            userData.map((elem, idx) => (
              <Card key={`${elem.id}-${idx}`} elem={elem} />
            ))}
        </div>
      </main>

      <footer className="fixed inset-x-0 bottom-0 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="m-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="flex flex-wrap gap-2 items-center justify-center p-3">
              <button
                aria-label="Previous page"
                onClick={() => goTo(index - 1)}
                disabled={index === 1 || loading}
                className={`px-4 py-2 rounded-xl font-semibold active:scale-95 transition
                  border ${index === 1 || loading ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-0.5"}
                  bg-amber-400 text-black border-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.25)]
                `}
              >
                Prev
              </button>

              <PageDot current={index} n={1} onClick={() => goTo(1)} />

              {index > 4 && <Ellipsis />}

              {pageWindow
                .filter((n) => n !== 1)
                .map((n) => (
                  <PageDot key={n} current={index} n={n} onClick={() => goTo(n)} />
                ))}

              <Ellipsis />

              <button
                aria-label="Next page"
                onClick={() => goTo(index + 1)}
                disabled={loading}
                className={`px-4 py-2 rounded-xl font-semibold active:scale-95 transition
                  border ${loading ? "opacity-60 cursor-wait" : "hover:-translate-y-0.5"}
                  bg-amber-400 text-black border-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.25)]
                `}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const PageDot = ({ n, current, onClick }) => {
  const isActive = n === current;
  return (
    <button
      onClick={onClick}
      className={`w-9 h-9 grid place-items-center text-sm font-bold rounded-xl border transition
        ${isActive
          ? "bg-fuchsia-500 text-white border-fuchsia-400 shadow-[0_0_24px_rgba(217,70,239,0.45)]"
          : "bg-white/10 border-white/15 hover:bg-white/15"
        }
      `}
      aria-current={isActive ? "page" : undefined}
      aria-label={`Go to page ${n}`}
    >
      {n}
    </button>
  );
};

const Ellipsis = () => (
  <span className="px-2 text-white/60 select-none">…</span>
);

export default App;
