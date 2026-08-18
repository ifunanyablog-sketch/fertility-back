import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  X, 
  CheckCircle2, 
  Download, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  ArrowRight, 
  Check 
} from 'lucide-react';
import { PRICING_PLANS, BOOK_INFO } from '../data/bookContent';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: 'ebook' | 'complete_bundle';
  currency: 'USD' | 'NGN';
}

export function CheckoutModal({ 
  isOpen, 
  onClose, 
  initialPlanId = 'ebook',
  currency 
}: CheckoutModalProps) {
  const [selectedPlanId, setSelectedPlanId] = useState<'ebook' | 'complete_bundle'>(initialPlanId);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentPlan = PRICING_PLANS.find(p => p.id === selectedPlanId) || PRICING_PLANS[0];

  const basePrice = currency === 'USD' ? currentPlan.priceUSD : currentPlan.priceNGN;
  const originalPrice = currency === 'USD' ? currentPlan.originalPriceUSD : currentPlan.originalPriceNGN;
  const finalPrice = couponApplied ? Math.round(basePrice * 0.9) : basePrice;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'FERTILITY10' || couponCode.trim().toUpperCase() === 'BABY2026') {
      setCouponApplied(true);
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d91e85', '#a21caf', '#fbbf24', '#2b084d'],
        });
      } catch {
        // Confetti fallback
      }
    }, 1200);
  };

  const handleDownloadSamplePackage = () => {
    const content = `FERTILITY BACK: A Complete Guide to Preparing Your Body for Pregnancy Naturally and Safely\nAuthor: Olumind Synergy Venture (Lagos, Nigeria)\n\nThank you for your purchase, ${name || 'Valued Reader'}!\nYour full 70-page eBook package with Worksheets, 30-Day Challenge, and 90-Day Plan has been dispatched to: ${email}.\n\nOrder Reference: FB-${Math.floor(100000 + Math.random() * 900000)}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Fertility-Back-Book-Welcome-Kit.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-2xl bg-white border-2 border-purple-200 rounded-2xl shadow-2xl shadow-purple-950/20 overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-purple-100 bg-[#faf7fc]">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-pink-100 border border-pink-200 text-[#d91e85]">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#2b084d]">
                  {isCompleted ? 'Order Confirmed!' : 'Instant Access Checkout'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isCompleted ? 'Your guide is ready for download' : '100% Secure 256-bit Encrypted Download'}
                </p>
              </div>
            </div>

            <button
              type="button"
              id="btn-close-checkout"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-[#2b084d] hover:bg-purple-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-7 overflow-y-auto bg-white text-slate-800">
            {!isCompleted ? (
              <div className="space-y-5">
                {/* Plan Selection Cards */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#d91e85] block mb-2">
                    Select Your Edition
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PRICING_PLANS.map((plan) => {
                      const isSelected = selectedPlanId === plan.id;
                      const planPrice = currency === 'USD' ? plan.priceUSD : plan.priceNGN;
                      const planOriginal = currency === 'USD' ? plan.originalPriceUSD : plan.originalPriceNGN;
                      const symbol = currency === 'USD' ? '$' : '₦';

                      return (
                        <div
                          key={plan.id}
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-purple-50/80 border-[#d91e85] shadow-sm'
                              : 'bg-[#faf7fc] border-purple-100 hover:border-purple-200'
                          }`}
                        >
                          {plan.popular && (
                            <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-[10px] font-black shadow-xs">
                              MOST POPULAR
                            </span>
                          )}

                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-sm font-bold text-[#2b084d]">{plan.name}</h4>
                              <p className="text-[11px] text-slate-500 mt-0.5">{plan.tagline}</p>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                              isSelected ? 'border-[#d91e85] bg-[#d91e85] text-white' : 'border-purple-300'
                            }`}>
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                          </div>

                          <div className="mt-3 flex items-baseline gap-2">
                            <span className="text-xl font-black text-[#2b084d]">
                              {symbol}{planPrice.toLocaleString()}
                            </span>
                            <span className="text-xs text-slate-400 line-through">
                              {symbol}{planOriginal.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Features included */}
                <div className="p-3.5 rounded-xl bg-[#faf7fc] border border-purple-100 space-y-2">
                  <span className="text-xs font-bold text-[#2b084d] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d91e85]" />
                    Included in your package:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                    {currentPlan.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d91e85] shrink-0" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleCompleteOrder} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-[#2b084d] block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah & Michael"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-purple-200 text-sm text-[#2b084d] focus:outline-none focus:border-[#d91e85] focus:ring-1 focus:ring-[#d91e85]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#2b084d] block mb-1">Email for Delivery</label>
                      <input
                        type="email"
                        required
                        placeholder="your-email@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-purple-200 text-sm text-[#2b084d] focus:outline-none focus:border-[#d91e85] focus:ring-1 focus:ring-[#d91e85]"
                      />
                    </div>
                  </div>

                  {/* Coupon */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Discount Code (e.g. BABY2026)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-lg bg-white border border-purple-200 text-xs text-[#2b084d] uppercase placeholder:normal-case focus:outline-none focus:border-[#d91e85]"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      className="px-3 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-900 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <p className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 10% Special Launch Discount Applied!
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    id="btn-complete-checkout"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#d91e85] via-[#a21caf] to-[#2b084d] hover:from-[#c2185b] hover:to-[#1e0538] text-white font-bold text-sm shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Preparing Your Download...
                      </span>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>
                          Get Instant Access • {currency === 'USD' ? '$' : '₦'}{finalPrice.toLocaleString()}
                        </span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>

                {/* Guarantee seals */}
                <div className="flex items-center justify-center gap-4 text-slate-500 text-xs pt-1">
                  <span className="flex items-center gap-1 font-semibold text-[#2b084d]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    30-Day Money-Back Guarantee
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-[#2b084d]">Instant PDF & ePub</span>
                </div>
              </div>
            ) : (
              /* Success / Download state */
              <div className="text-center py-6 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#2b084d] font-display">
                    Welcome to the Fertility Back Family!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your complete 70-page guide and toolkit has been sent to <span className="text-[#d91e85] font-bold">{email}</span>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#faf7fc] border border-purple-200 max-w-md mx-auto text-left space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Selected Edition:</span>
                    <span className="text-[#2b084d] font-bold">{currentPlan.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Format:</span>
                    <span className="text-[#d91e85] font-bold">PDF + ePub + Worksheets</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Status:</span>
                    <span className="text-emerald-600 font-bold">Active & Delivered</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleDownloadSamplePackage}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#d91e85] to-[#7e22ce] hover:from-[#c2185b] hover:to-[#6b21a8] text-white font-bold text-sm shadow-md shadow-pink-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download Welcome Package
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 text-sm font-bold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
