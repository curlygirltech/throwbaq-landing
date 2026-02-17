export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] shrink-0">
      {/* Phone frame */}
      <div className="rounded-[2.5rem] border-[6px] border-chocolate/90 bg-white p-4 shadow-2xl">
        {/* Notch */}
        <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-chocolate/90" />

        {/* Screen content */}
        <div className="space-y-3">
          {/* App header */}
          <div className="text-center">
            <p className="font-syne text-sm font-bold text-chocolate">
              throw<span className="text-tangelo">baq</span>
            </p>
            <p className="font-space-grotesk text-xs font-medium text-chocolate/60">
              My Returns
            </p>
          </div>

          {/* Card 1: Pickup Today */}
          <div className="rounded-xl bg-linen p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold text-chocolate">
                Amazon &mdash; 2 items
              </p>
              <span className="rounded-full bg-botticelli px-2 py-0.5 text-[9px] font-semibold text-chocolate">
                Pickup Today
              </span>
            </div>
            <div className="mt-2 space-y-1">
              <p className="text-[10px] text-chocolate/70">
                👟 Running shoes (wrong size)
              </p>
              <p className="text-[10px] text-chocolate/70">
                📱 Phone case (defective)
              </p>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-botticelli text-[10px]">
                🏃
              </div>
              <div>
                <p className="text-[9px] font-medium text-chocolate">
                  Runner assigned
                </p>
                <p className="text-[8px] text-chocolate/50">
                  Picking up in ~2 hours
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: In Transit */}
          <div className="rounded-xl bg-linen p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold text-chocolate">
                Nordstrom &mdash; 1 item
              </p>
              <span className="rounded-full bg-tangelo/15 px-2 py-0.5 text-[9px] font-semibold text-tangelo">
                In Transit
              </span>
            </div>
            <p className="mt-1 text-[10px] text-chocolate/70">
              👗 Dress (didn&apos;t fit)
            </p>
            {/* Progress bar */}
            <div className="mt-2">
              <div className="flex justify-between text-[8px] text-chocolate/50">
                <span>Picked up</span>
                <span>Dropped off</span>
                <span>Refund</span>
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-chocolate/10">
                <div className="h-1.5 w-2/3 rounded-full bg-tangelo" />
              </div>
            </div>
          </div>

          {/* Card 3: Refund Issued */}
          <div className="rounded-xl bg-linen p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold text-chocolate">
                Target &mdash; 3 items
              </p>
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-semibold text-green-700">
                Refund Issued ✓
              </span>
            </div>
            <div className="mt-2 space-y-1">
              <p className="text-[10px] text-green-700">
                ✅ $47.82 refunded to your card
              </p>
              <p className="text-[10px] text-chocolate/40">
                📸 3 proof photos attached
              </p>
            </div>
          </div>

          {/* New Return button */}
          <button className="w-full rounded-xl bg-tangelo py-2 text-center text-[11px] font-semibold text-white">
            + New Return
          </button>
        </div>
      </div>
    </div>
  );
}
