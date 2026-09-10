"use client";

import React from "react";
import { CheckCircle2, Phone, X, Clock, FileCheck, ArrowRight } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadName: string;
}

export default function SuccessModal({ isOpen, onClose, leadName }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0e1422] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-red-900/30 overflow-hidden text-center">
        {/* Decorative ambient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
          Commercial Quote Request Received!
        </h3>
        <p className="text-sm text-slate-300 mb-6">
          Thank you, <span className="font-semibold text-white">{leadName || "Partner"}</span>. Our commercial laundry specialists in Huntley, IL have received your inquiry.
        </p>

        {/* Ticket Box */}
        <div className="bg-slate-900/80 border border-white/10 rounded-xl p-4 mb-6 text-left space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-cyan-400" />
              Inquiry Reference
            </span>
            <span className="font-mono text-cyan-400 font-bold">#HM-{Math.floor(1000 + Math.random() * 9000)}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              Estimated Response
            </span>
            <span className="text-emerald-400 font-semibold">&lt; 15 Minutes (Business Hours)</span>
          </div>
        </div>

        {/* Urgent Action */}
        <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 text-left mb-6">
          <div className="text-xs text-red-300 font-semibold uppercase tracking-wider mb-1">
            Emergency Facility Down?
          </div>
          <p className="text-xs text-slate-300 mb-3">
            If your washers or boilers are currently down and halting operations, call our priority dispatch line right away:
          </p>
          <a
            href="tel:8476693300"
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Priority Dispatch: (847) 669-3300</span>
          </a>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-white/10 transition-colors"
        >
          Return to Overview
        </button>
      </div>
    </div>
  );
}
