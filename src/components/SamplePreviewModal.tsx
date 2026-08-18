import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, ShoppingBag, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { SAMPLE_CHAPTERS, BOOK_INFO } from '../data/bookContent';

interface SamplePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBuy: () => void;
}

export function SamplePreviewModal({ isOpen, onClose, onSelectBuy }: SamplePreviewModalProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!isOpen) return null;

  const currentChapter = SAMPLE_CHAPTERS[activeTab];

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

        {/* Modal Container */}
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
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#2b084d] tracking-wide">
                  Look Inside: {BOOK_INFO.title}
                </h3>
                <p className="text-xs text-slate-500">
                  70-Page Guide • Sample Excerpts & Program Preview
                </p>
              </div>
            </div>

            <button
              type="button"
              id="btn-close-sample-preview"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-[#2b084d] hover:bg-purple-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chapter Selector Tabs */}
          <div className="flex items-center gap-1.5 px-5 py-2.5 bg-purple-50/70 border-b border-purple-100 overflow-x-auto text-xs">
            {SAMPLE_CHAPTERS.map((chap, idx) => (
              <button
                key={chap.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeTab === idx
                    ? 'bg-[#d91e85] text-white shadow-sm'
                    : 'text-purple-800 hover:text-[#2b084d] hover:bg-purple-100'
                }`}
              >
                <span>{chap.chapterNumber}</span>
              </button>
            ))}
          </div>

          {/* Reading Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-5 bg-white text-slate-800">
            <div className="space-y-1 border-b border-purple-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d91e85]">
                {currentChapter.chapterNumber}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#2b084d] font-display">
                {currentChapter.title}
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
              {currentChapter.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="first-letter:text-2xl first-letter:font-serif first-letter:text-[#d91e85] first-letter:font-bold">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Locked chapters notice */}
            <div className="mt-6 p-4 rounded-xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-amber-100 text-amber-600 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2b084d]">
                    Unlock All 6 Core Modules & 70 Pages
                  </h4>
                  <p className="text-xs text-slate-600">
                    Includes 30-Day Fertility Challenge, 90-Day Action Roadmap & Printable Checklists.
                  </p>
                </div>
              </div>
              <a
                id="btn-buy-from-sample"
                href={BOOK_INFO.selarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d91e85] to-[#7e22ce] hover:from-[#c2185b] hover:to-[#6b21a8] text-white text-xs sm:text-sm font-bold shadow-md shadow-pink-600/30 flex items-center justify-center gap-1.5 transition-all whitespace-nowrap cursor-pointer no-underline"
              >
                <ShoppingBag className="w-4 h-4" />
                Get Full Book
              </a>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center justify-between px-5 py-3.5 border-t border-purple-100 bg-[#faf7fc] text-xs">
            <button
              type="button"
              disabled={activeTab === 0}
              onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-600 hover:text-[#2b084d] font-semibold disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Previous Section
            </button>

            <span className="text-slate-500 text-xs font-medium">
              Page {activeTab + 1} of {SAMPLE_CHAPTERS.length} Previews
            </span>

            <button
              type="button"
              disabled={activeTab === SAMPLE_CHAPTERS.length - 1}
              onClick={() => setActiveTab((prev) => Math.min(SAMPLE_CHAPTERS.length - 1, prev + 1))}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-600 hover:text-[#2b084d] font-semibold disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              Next Section
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
