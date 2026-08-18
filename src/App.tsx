import { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Lock, 
  Award 
} from 'lucide-react';
import { SamplePreviewModal } from './components/SamplePreviewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ModulesDrawerModal } from './components/ModulesDrawerModal';
import { BOOK_INFO, PRICING_PLANS } from './data/bookContent';
import bookCoverImg from './assets/book-cover.jpg';
import brandLogoImg from './assets/images/olumind_logo_1787043683075.jpg';

export default function App() {
  const [currency, setCurrency] = useState<'USD' | 'NGN'>('USD');
  const [isSampleOpen, setIsSampleOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<'ebook' | 'complete_bundle'>('ebook');

  const activePlan = PRICING_PLANS.find(p => p.id === selectedPlanId) || PRICING_PLANS[0];
  const price = currency === 'USD' ? activePlan.priceUSD : activePlan.priceNGN;
  const originalPrice = currency === 'USD' ? activePlan.originalPriceUSD : activePlan.originalPriceNGN;
  const currencySymbol = currency === 'USD' ? '$' : '₦';

  const handleOpenCheckout = (planId: 'ebook' | 'complete_bundle' = 'ebook') => {
    setSelectedPlanId(planId);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen w-screen bg-[#faf7fc] text-[#2b084d] flex flex-col justify-between selection:bg-[#d91e85] selection:text-white relative overflow-x-hidden">
      
      {/* 1. Subtle Ambient Halo in Background (Clean & Calm) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center lg:justify-end"
        aria-hidden="true"
      >
        <div className="absolute right-0 lg:right-10 top-1/2 -translate-y-1/2 w-[550px] h-[650px] bg-gradient-to-tr from-pink-200/30 via-purple-100/40 to-transparent rounded-full blur-3xl" />
      </div>

      {/* 2. Top Navigation Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between border-b border-purple-200/60 bg-white/90 backdrop-blur-md shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white border border-purple-100 flex items-center justify-center p-1 shadow-xs overflow-hidden">
            <img
              src={brandLogoImg}
              alt="Brand Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-sm sm:text-base font-black text-[#2b084d] tracking-wide">
              {BOOK_INFO.title}
            </span>
          </div>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center bg-purple-50 border border-purple-200 rounded-lg p-0.5 text-xs shadow-inner">
          <button
            type="button"
            id="currency-usd"
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1 rounded-md transition-all font-bold cursor-pointer ${
              currency === 'USD'
                ? 'bg-[#d91e85] text-white shadow-xs'
                : 'text-purple-800 hover:text-purple-950'
            }`}
          >
            USD ($)
          </button>
          <button
            type="button"
            id="currency-ngn"
            onClick={() => setCurrency('NGN')}
            className={`px-3 py-1 rounded-md transition-all font-bold cursor-pointer ${
              currency === 'NGN'
                ? 'bg-[#d91e85] text-white shadow-xs'
                : 'text-purple-800 hover:text-purple-950'
            }`}
          >
            NGN (₦)
          </button>
        </div>
      </header>

      {/* 3. Main Hero Presentation: Book at the Top / Center (100% Visible Focal Point) */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex-1 flex flex-col items-center justify-center text-center">
        
        {/* TOP: 100% PROMINENT, UNBLURRED BOOK DISPLAY */}
        <div className="flex flex-col items-center mb-6">
          <a
            href={BOOK_INFO.selarUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Click to get your instant copy of Fertility Back on Selar"
            className="relative group cursor-pointer block transform transition-all duration-300 hover:scale-[1.03]"
          >
            {/* Gentle ambient halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/25 via-purple-600/25 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-95 transition-opacity pointer-events-none" />
            
            {/* 100% Visible Book Cover Image */}
            <img
              src={bookCoverImg}
              alt="Fertility Back Book Cover - Click to get instant copy"
              className="relative z-10 w-[240px] sm:w-[290px] md:w-[320px] h-auto object-contain rounded-xl shadow-[0_20px_45px_-10px_rgba(43,8,77,0.35)] group-hover:shadow-[0_25px_55px_-10px_rgba(217,30,133,0.4)] transition-all duration-300"
              style={{ opacity: 1 }}
            />
          </a>

          <div className="mt-3 flex items-center gap-2">
            <a
              href={BOOK_INFO.selarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#d91e85] to-[#7e22ce] hover:from-[#c2185b] hover:to-[#6b21a8] px-3.5 py-1.5 rounded-full shadow-sm transition-colors cursor-pointer no-underline"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Book on Selar ($10)</span>
            </a>

            <button
              type="button"
              onClick={() => setIsSampleOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d91e85] hover:text-[#2b084d] bg-white px-3.5 py-1.5 rounded-full border border-pink-200 shadow-xs transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Look Inside</span>
            </button>
          </div>
        </div>

        {/* BELOW BOOK: EXACT REQUESTED CONTENT & TITLES */}
        <div className="max-w-3xl space-y-4">
          
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 border border-pink-200 text-[#9d174d] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#d91e85]" />
              Natural Conception Guide
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              70 Pages • Complete Program
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2b084d] font-display tracking-tight leading-tight">
              FERTILITY BACK
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#d91e85]">
              A Complete Guide to Preparing Your Body for Pregnancy Naturally and Safely
            </p>
          </div>

          {/* Description without author name */}
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto font-normal">
            This evidence-based 70-page guide provides actionable steps to balance hormones, optimize reproductive wellness, track ovulation, and follow a proven 90-day conception roadmap.
          </p>

          {/* Program Features */}
          <div className="p-3.5 rounded-2xl bg-white/90 border border-purple-100 shadow-sm max-w-xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-[#2b084d]">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d91e85] shrink-0" />
                <span>Worksheets</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d91e85] shrink-0" />
                <span>Checklists</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d91e85] shrink-0" />
                <span>30-Day Challenge</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d91e85] shrink-0" />
                <span>90-Day Plan</span>
              </div>
            </div>
          </div>

          {/* Actions & Direct Selar Instant Checkout */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              id="btn-hero-primary-buy"
              href={BOOK_INFO.selarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d91e85] via-[#a21caf] to-[#2b084d] hover:from-[#c2185b] hover:to-[#1e0538] text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer no-underline"
            >
              <Download className="w-4 h-4" />
              <span>Get Instant Copy • {currencySymbol}{price.toLocaleString()}</span>
              <span className="text-xs text-pink-200 line-through opacity-85 ml-1">
                {currencySymbol}{originalPrice.toLocaleString()}
              </span>
            </a>

            <button
              type="button"
              id="btn-hero-sample-preview"
              onClick={() => setIsSampleOpen(true)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-pink-50/80 border-2 border-purple-200 hover:border-[#d91e85] text-[#2b084d] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#d91e85]" />
              <span>Look Inside</span>
            </button>

            <button
              type="button"
              id="btn-hero-view-curriculum"
              onClick={() => setIsModulesOpen(true)}
              className="px-4 py-3.5 rounded-xl text-xs font-bold text-purple-800 hover:text-[#d91e85] hover:bg-purple-50 transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-[#d91e85]" />
              <span>6 Modules</span>
            </button>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-600 pt-1">
            <span className="flex items-center gap-1 text-[#2b084d] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              30-Day Money-Back Guarantee
            </span>
            <span className="text-purple-300">•</span>
            <span className="flex items-center gap-1 text-[#2b084d] font-semibold">
              <Lock className="w-3.5 h-3.5 text-[#d91e85]" />
              Instant PDF & ePub Download
            </span>
          </div>

        </div>
      </main>

      {/* 4. Footer */}
      <footer className="relative z-20 w-full py-2.5 text-[11px] text-purple-200 bg-[#2b084d] border-t-2 border-[#d91e85]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="font-semibold text-purple-200">
            {BOOK_INFO.title} • {BOOK_INFO.subtitle}
          </span>
          <span className="text-pink-300 font-bold">
            Evidence-Based Natural Conception Guide
          </span>
        </div>
      </footer>

      {/* MODALS */}
      <SamplePreviewModal
        isOpen={isSampleOpen}
        onClose={() => setIsSampleOpen(false)}
        onSelectBuy={() => handleOpenCheckout('ebook')}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        initialPlanId={selectedPlanId}
        currency={currency}
      />

      <ModulesDrawerModal
        isOpen={isModulesOpen}
        onClose={() => setIsModulesOpen(false)}
        onSelectBuy={() => handleOpenCheckout('ebook')}
      />
    </div>
  );
}
