// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 h-[50px] w-full border-t border-[#16332E] bg-[#061C19]/95 backdrop-blur-sm">
      <div className="flex h-full items-center justify-center gap-4 text-[9px] text-[#667A76]">
        <span>The AI Colony Academy</span>
        <span className="text-[#667A76]">—</span>
        <span>© 2026 — Copyright</span>
      </div>
    </footer>
  );
}
