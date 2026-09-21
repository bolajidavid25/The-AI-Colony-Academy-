export default function Footer() {
  return (
    <footer
      className="w-full py-5 px-6 text-center text-xs sm:text-sm font-normal select-none"
      style={{ backgroundColor: "#061C19", color: "#FFFFFF" }}
    >
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span>The AI Colony Academy</span>
        <span className="opacity-70">—</span>
        <span>© 2026 — Copyright</span>
      </div>
    </footer>
  );
}
