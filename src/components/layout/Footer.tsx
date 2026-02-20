export default function Footer() {
  return (
    <footer className="bg-chocolate text-linen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <a
            href="#"
            className="font-syne text-2xl font-extrabold tracking-tight"
          >
            throw<span className="text-tangelo">baq</span>
          </a>
        </div>

        <div className="mt-8 border-t border-linen/10 pt-6 text-center text-sm text-linen/50">
          &copy; 2026 Throwbaq. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
