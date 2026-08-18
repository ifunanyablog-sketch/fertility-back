import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Activity, 
  CalendarHeart, 
  Apple, 
  Users, 
  Stethoscope, 
  Flame, 
  CheckCircle2, 
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { CORE_MODULES, TOOLKITS, BOOK_INFO } from '../data/bookContent';

interface ModulesDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBuy: () => void;
}

export function ModulesDrawerModal({ isOpen, onClose, onSelectBuy }: ModulesDrawerModalProps) {
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);

  if (!isOpen) return null;

  const iconMap: Record<string, React.ReactNode> = {
    Activity: <Activity className="w-5 h-5 text-[#d91e85]" />,
    CalendarHeart: <CalendarHeart className="w-5 h-5 text-pink-600" />,
    Apple: <Apple className="w-5 h-5 text-emerald-600" />,
    Users: <Users className="w-5 h-5 text-purple-700" />,
    Stethoscope: <Stethoscope className="w-5 h-5 text-amber-600" />,
    Flame: <Flame className="w-5 h-5 text-rose-600" />,
  };

  const activeMod = CORE_MODULES.find((m) => m.id === selectedModuleId) || CORE_MODULES[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2b084d]/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-3xl bg-white border-2 border-purple-200 rounded-2xl shadow-2xl shadow-purple-950/20 overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-purple-100 bg-[#faf7fc]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-pink-100 border border-pink-200 text-[#d91e85]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#2b084d]">
                  6 Core Modules & 70-Page Curriculum
                </h3>
                <p className="text-xs text-slate-500">
                  {BOOK_INFO.title} • Everything included in the complete book
                </p>
              </div>
            </div>

            <button
              type="button"
              id="btn-close-modules"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-[#2b084d] hover:bg-purple-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Module tabs & Content Layout */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-5 bg-white">
            {/* Sidebar list */}
            <div className="md:col-span-5 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 block px-1 mb-1">
                Program Modules
              </span>
              {CORE_MODULES.map((mod) => {
                const isSelected = selectedModuleId === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setSelectedModuleId(mod.id)}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-purple-100/80 border-[#d91e85] text-[#2b084d] shadow-sm font-bold'
                        : 'bg-[#faf7fc] border-purple-100 text-slate-600 hover:text-[#2b084d] hover:border-purple-200'
                    }`}
                  >
                    <div className="p-1.5 rounded-lg bg-white border border-purple-100 shadow-xs shrink-0">
                      {iconMap[mod.iconName] || <Activity className="w-4 h-4" />}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate text-[#2b084d]">
                        Module {mod.id}: {mod.title}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {mod.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Detail Area */}
            <div className="md:col-span-7 flex flex-col justify-between p-5 rounded-xl bg-[#faf7fc] border border-purple-200/80 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-100 text-[#9d174d] text-xs font-bold border border-pink-200">
                    Module 0{activeMod.id}
                  </span>
                  <span className="text-xs text-purple-900 font-medium">{activeMod.subtitle}</span>
                </div>

                <h4 className="text-lg font-black text-[#2b084d] font-display">
                  {activeMod.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeMod.description}
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-xs font-bold text-[#2b084d] block">
                    What you will learn & implement:
                  </span>
                  <div className="space-y-1.5">
                    {activeMod.topics.map((t, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d91e85] shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bonus Toolkits row */}
              <div className="pt-3 border-t border-purple-200">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 block mb-2">
                  Included Bonuses with this Guide:
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                  {TOOLKITS.map((tk, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-white border border-purple-100 shadow-xs">
                      <span className="font-bold text-[#2b084d] block">✓ {tk.label}</span>
                      <span className="text-[10px] text-slate-500">{tk.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-5 py-3.5 border-t border-purple-100 bg-[#faf7fc]">
            <span className="text-xs text-slate-600">
              Evidence-Based Natural Conception Program
            </span>
            <a
              id="btn-get-book-from-modules"
              href={BOOK_INFO.selarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d91e85] to-[#7e22ce] hover:from-[#c2185b] hover:to-[#6b21a8] text-white text-xs sm:text-sm font-bold shadow-md shadow-pink-600/30 flex items-center gap-1.5 transition-all cursor-pointer no-underline"
            >
              <ShoppingBag className="w-4 h-4" />
              Get Complete Program
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
