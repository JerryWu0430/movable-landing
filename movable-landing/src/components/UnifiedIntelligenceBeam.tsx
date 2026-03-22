"use client";

import { useRef, useEffect, useState } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const icons: Record<string, React.ReactNode> = {
  Procurement: (
    <svg className="w-4 h-4 text-aqua" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  ),
  Logistics: (
    <svg className="w-4 h-4 text-aqua" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  Warehouse: (
    <svg className="w-4 h-4 text-aqua" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
    </svg>
  ),
  "Field Ops": (
    <svg className="w-4 h-4 text-aqua" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
};

const DataSourceCard = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => {
  return (
    <div className="relative z-20 flex flex-col gap-1 rounded-xl border border-aqua/50 bg-deep-blue/95 backdrop-blur-sm p-3 md:p-4 w-full shadow-lg">
      <div className="flex items-center gap-2">
        {icons[title]}
        <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-aqua">
          {title}
        </span>
      </div>
      <p className="text-white/70 text-[11px] md:text-xs italic leading-relaxed">"{message}"</p>
    </div>
  );
};

export function UnifiedIntelligenceBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const procurementRef = useRef<HTMLDivElement>(null);
  const logisticsRef = useRef<HTMLDivElement>(null);
  const warehouseRef = useRef<HTMLDivElement>(null);
  const fieldOpsRef = useRef<HTMLDivElement>(null);
  const movableRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Don't render beams on mobile - show simplified layout
  if (isMobile) {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue via-deep-blue-mid/10 to-deep-blue"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-3 text-white">
              From Scattered Data to Unified Intelligence
            </h2>
            <p className="text-base text-white/60">
              See how your AI transforms fragmented information into actionable insights
            </p>
          </div>

          {/* Mobile: Stacked layout */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <DataSourceCard title="Procurement" message="Vendor marked 5k units delivered 48hrs ago." />
              <DataSourceCard title="Logistics" message="Not scanned yet. Dock is bottlenecked." />
              <DataSourceCard title="Warehouse" message="Shipment missing / Not scanned." />
              <DataSourceCard title="Field Ops" message="Locked out of secondary site. Need code." />
            </div>

            {/* Arrow down */}
            <div className="flex justify-center py-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-0.5 h-8 bg-gradient-to-b from-aqua to-tango"></div>
                <div className="px-4 py-3 rounded-xl border-2 border-tango/50 bg-deep-blue flex items-center justify-center">
                  <img src="/assets/LOGO/SVGs/Movable_Logo_2026_Primary White.svg" alt="Movable" className="h-8" />
                </div>
                <div className="w-0.5 h-8 bg-gradient-to-b from-tango to-lime"></div>
              </div>
            </div>

            {/* Output Card */}
            <div className="rounded-2xl border border-tango/30 bg-deep-blue/80 backdrop-blur-sm p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-tango to-tango-mid flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-tango">Executive Pulse: Logistics Blocker</span>
              </div>
              <p className="text-white/80 text-xs leading-relaxed mb-2">
                Inventory Discrepancy Detected. Procurement data conflicts with physical warehouse checks.
              </p>
              <div className="flex items-center gap-1.5 pt-2 border-t border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse"></div>
                <span className="text-[11px] font-medium text-lime">Key Action: Reconcile Warehouse Data</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue via-deep-blue-mid/10 to-deep-blue"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
            From Scattered Data to Unified Intelligence
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            See how your AI transforms fragmented information into actionable insights
          </p>
        </div>

        {/* Beam Visualization */}
        <div
          ref={containerRef}
          className="relative flex items-center justify-center gap-16 xl:gap-24 py-8"
        >
          {/* Left: Data Sources */}
          <div className="flex flex-col gap-3 w-[220px]">
            <div ref={procurementRef}>
              <DataSourceCard title="Procurement" message="Vendor marked 5k units delivered 48hrs ago." />
            </div>
            <div ref={logisticsRef}>
              <DataSourceCard title="Logistics" message="Not scanned yet. Dock is bottlenecked." />
            </div>
            <div ref={warehouseRef}>
              <DataSourceCard title="Warehouse" message="Shipment missing / Not scanned." />
            </div>
            <div ref={fieldOpsRef}>
              <DataSourceCard title="Field Ops" message="Locked out of secondary site. Need code." />
            </div>
          </div>

          {/* Center: Movable Logo with text */}
          <div ref={movableRef} className="relative z-20 flex-shrink-0 flex items-center justify-center px-6 py-4 rounded-2xl border-2 border-tango/50 bg-deep-blue/95 backdrop-blur-sm shadow-[0_0_40px_rgba(255,66,32,0.2)]">
            <img
              src="/assets/LOGO/SVGs/Movable_Logo_2026_Primary White.svg"
              alt="Movable"
              className="h-10"
            />
          </div>

          {/* Right: Output */}
          <div ref={outputRef} className="relative z-20 flex-shrink-0 w-[320px]">
            <div className="rounded-2xl border border-tango/30 bg-deep-blue/95 backdrop-blur-sm p-5 shadow-lg">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-tango to-tango-mid flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm">Movable</div>
                  <div className="text-xs text-aqua">Alert</div>
                </div>
              </div>

              {/* Alert Title */}
              <div className="bg-tango/10 rounded-lg px-3 py-2 mb-4">
                <span className="text-sm font-medium text-tango">Executive Pulse: Logistics Blocker</span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Synthesis</div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Inventory Discrepancy Detected. Procurement data conflicts with physical warehouse checks. Field teams are currently stalled.
                  </p>
                </div>

                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Impact</div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Production delays estimated at 4-6 hours. Three teams awaiting resolution. Rollout schedule at risk.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-lime animate-pulse"></div>
                    <span className="text-sm font-medium text-lime">Key Action: Reconcile Warehouse Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Beams: Data Sources → Movable (all aqua colored, more visible) */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={procurementRef}
            toRef={movableRef}
            curvature={-60}
            pathColor="#4addff"
            pathOpacity={0.4}
            pathWidth={2}
            gradientStartColor="#4addff"
            gradientStopColor="#ff4220"
            duration={5}
            delay={0}
            startXOffset={110}
            endXOffset={-100}
            startYOffset={0}
            endYOffset={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={logisticsRef}
            toRef={movableRef}
            curvature={-25}
            pathColor="#4addff"
            pathOpacity={0.4}
            pathWidth={2}
            gradientStartColor="#4addff"
            gradientStopColor="#ff4220"
            duration={5}
            delay={0.8}
            startXOffset={110}
            endXOffset={-100}
            startYOffset={0}
            endYOffset={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={warehouseRef}
            toRef={movableRef}
            curvature={25}
            pathColor="#4addff"
            pathOpacity={0.4}
            pathWidth={2}
            gradientStartColor="#4addff"
            gradientStopColor="#ff4220"
            duration={5}
            delay={1.6}
            startXOffset={110}
            endXOffset={-100}
            startYOffset={0}
            endYOffset={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={fieldOpsRef}
            toRef={movableRef}
            curvature={60}
            pathColor="#4addff"
            pathOpacity={0.4}
            pathWidth={2}
            gradientStartColor="#4addff"
            gradientStopColor="#ff4220"
            duration={5}
            delay={2.4}
            startXOffset={110}
            endXOffset={-100}
            startYOffset={0}
            endYOffset={0}
          />

          {/* Animated Beam: Movable → Output (straight line) */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={movableRef}
            toRef={outputRef}
            curvature={0}
            pathColor="#ff4220"
            pathOpacity={0.5}
            pathWidth={3}
            gradientStartColor="#ff4220"
            gradientStopColor="#e7fe00"
            duration={4}
            delay={3.2}
            startXOffset={100}
            endXOffset={-160}
            startYOffset={0}
            endYOffset={0}
          />
        </div>
      </div>
    </section>
  );
}
