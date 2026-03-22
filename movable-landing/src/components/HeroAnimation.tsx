"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const alerts = [
  {
    type: "Retail",
    status: "Delayed",
    message: "Shipment stuck at dock, team waiting",
    color: "aqua",
  },
  {
    type: "Infrastructure",
    status: "At Risk",
    message: "Electricians waiting on scaffolders",
    color: "tango",
  },
  {
    type: "Logistics",
    status: "Blocked",
    message: "Driver can't access gate code",
    color: "lime",
  },
];

const groundTruths = [
  {
    type: "Retail",
    truth: "Forklift operator on break. Back in 10 min.",
    action: "Wait or reassign unload task",
  },
  {
    type: "Infrastructure",
    truth: "Scaffolders delayed by permit issue in Zone B.",
    action: "Reroute electricians to Zone C",
  },
  {
    type: "Logistics",
    truth: "Gate code changed yesterday. New code: 4829.",
    action: "Update driver and dispatch log",
  },
];

export function HeroAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<"alert" | "processing" | "truth">("alert");

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => {
        if (prev === "alert") return "processing";
        if (prev === "processing") return "truth";
        // Move to next alert
        setActiveIndex((i) => (i + 1) % alerts.length);
        return "alert";
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const currentAlert = alerts[activeIndex];
  const currentTruth = groundTruths[activeIndex];

  const getStatusColor = (color: string) => {
    switch (color) {
      case "aqua": return "bg-aqua/20 text-aqua";
      case "tango": return "bg-tango/20 text-tango";
      case "lime": return "bg-lime/20 text-lime";
      default: return "bg-aqua/20 text-aqua";
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto lg:ml-auto">
      {/* Alert Cards Stack */}
      <div className="relative h-[280px] mb-6">
        <AnimatePresence mode="wait">
          {phase === "alert" && (
            <motion.div
              key={`alert-${activeIndex}`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute inset-0"
            >
              <div className="card-glass rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium uppercase tracking-wider text-${currentAlert.color}`}>
                    {currentAlert.type}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(currentAlert.color)}`}>
                    {currentAlert.status}
                  </span>
                </div>
                <p className="text-white/80 text-sm mb-4">"{currentAlert.message}"</p>

                {/* Incoming call indicator */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-tango/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-tango" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-tango/50"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Calling Movable...</div>
                    <div className="text-sm text-white font-medium">Get ground truth</div>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

          {phase === "processing" && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center">
                {/* Voice interaction animation */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full bg-tango/20 border-2 border-tango/40"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="absolute inset-2 rounded-full bg-tango/10 border border-tango/30"
                  />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-tango to-tango-mid flex items-center justify-center">
                    <img
                      src="/assets/LOGO/SVGs/Movable_Logo_2026_Logomark White.svg"
                      alt="Movable"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-1"
                >
                  <p className="text-white font-medium">Movable Voice</p>
                  <p className="text-white/60 text-sm">Gathering ground truth...</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {phase === "truth" && (
            <motion.div
              key={`truth-${activeIndex}`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute inset-0"
            >
              <div className="card-glass rounded-2xl p-5 border border-lime/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                  <span className="text-xs font-medium text-lime uppercase tracking-wider">
                    Ground Truth Captured
                  </span>
                </div>

                <div className="bg-deep-blue/50 rounded-xl p-4 border border-aqua/20 mb-4">
                  <p className="text-white/90 text-sm leading-relaxed italic">
                    "{currentTruth.truth}"
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-lime" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-xs text-white/60">Verified • Just now</span>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Recommended Action</span>
                    <p className="text-sm text-aqua mt-1">{currentTruth.action}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Phase indicators */}
      <div className="flex items-center justify-center gap-8">
        <div className={`flex items-center gap-2 transition-opacity ${phase === "alert" ? "opacity-100" : "opacity-40"}`}>
          <div className={`w-2 h-2 rounded-full ${phase === "alert" ? "bg-tango" : "bg-white/30"}`} />
          <span className="text-xs text-white/60">Alert</span>
        </div>
        <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <div className={`flex items-center gap-2 transition-opacity ${phase === "processing" ? "opacity-100" : "opacity-40"}`}>
          <div className={`w-2 h-2 rounded-full ${phase === "processing" ? "bg-tango" : "bg-white/30"}`} />
          <span className="text-xs text-white/60">Call</span>
        </div>
        <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <div className={`flex items-center gap-2 transition-opacity ${phase === "truth" ? "opacity-100" : "opacity-40"}`}>
          <div className={`w-2 h-2 rounded-full ${phase === "truth" ? "bg-lime" : "bg-white/30"}`} />
          <span className="text-xs text-white/60">Truth</span>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-tango/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-aqua/10 blur-3xl pointer-events-none" />
    </div>
  );
}
