import { BookModule, Testimonial, PricingPlan, SampleChapter } from '../types';

export const BOOK_INFO = {
  title: 'FERTILITY BACK',
  subtitle: 'A Complete Guide to Preparing Your Body for Pregnancy Naturally and Safely',
  tagline: 'Your Healthy Body Today, Your Happy Pregnancy Tomorrow',
  author: 'Olumind Synergy Venture',
  location: 'Lagos, Nigeria',
  pages: 70,
  badge: '70 PAGES COMPLETE FERTILITY PROGRAM',
  guaranteeDays: 30,
  readerRating: 4.96,
  totalReaders: 1420,
  formats: ['PDF Instant Download', 'ePub Mobile Reader', 'Printable Worksheets Kit', 'Audio Summaries'],
  selarUrl: 'https://selar.com/67164te3hn',
};

export const CORE_MODULES: BookModule[] = [
  {
    id: 1,
    title: 'Understanding Fertility & Conception',
    subtitle: 'The Biology & Cellular Groundwork',
    iconName: 'Activity',
    description: 'Demystifying the reproductive cycle, hormone synergy, egg quality optimization, and foundational biological triggers for rapid conception.',
    topics: [
      'Follicular health & egg quality rejuvenation',
      'Hormone cascade (Estrogen, Progesterone, LH & FSH)',
      'Common hidden barriers & cellular roadblocks',
    ],
  },
  {
    id: 2,
    title: 'Menstrual Cycle & Ovulation Guide',
    subtitle: 'Pinpointing Your True Fertile Window',
    iconName: 'CalendarHeart',
    description: 'Master basal body temperature charting, cervical fluid markers, ovulation predictor tests, and mapping irregular cycles with precision.',
    topics: [
      'The 4 phases of your hormonal cycle',
      'Detecting the exact 48-hour peak fertility window',
      'How to regulate luteal phase defects naturally',
    ],
  },
  {
    id: 3,
    title: 'Nutrition & Lifestyle for Better Fertility',
    subtitle: 'Fertility-Supercharging Foods & Habits',
    iconName: 'Apple',
    description: 'Evidence-based culinary protocols, micronutrients (Folate, CoQ10, Zinc, Omega-3s), gut-hormone axis, and detoxifying daily endocrine disruptors.',
    topics: [
      'The Fertility Super-Diet grocery list & recipes',
      'Endocrine disruptor detox (plastics, cosmetics, cleaners)',
      'Sleep architecture & cortisol balancing techniques',
    ],
  },
  {
    id: 4,
    title: 'Male and Female Fertility Health',
    subtitle: 'Optimizing Both Partners Together',
    iconName: 'Users',
    description: 'Fertility is a shared journey. Specific protocols to boost sperm count, motility, and DNA integrity alongside female reproductive vigor.',
    topics: [
      'Sperm count, morphology & vitality booster protocol',
      'Couples alignment & mutual stress reduction',
      'Natural stamina & libido elevation strategies',
    ],
  },
  {
    id: 5,
    title: 'Fertility Tests & When to See a Specialist',
    subtitle: 'Smart Diagnostics & Medical Roadmap',
    iconName: 'Stethoscope',
    description: 'Which blood panels, ultrasound scans, and semen analyses to ask your doctor for—and how to interpret your lab results like a pro.',
    topics: [
      'Essential lab panels: AMH, Thyroid, Day-3 FSH, Prolactin',
      'Hysterosalpingogram (HSG) & pelvic scan checklist',
      'Questions to ask your specialist to save thousands',
    ],
  },
  {
    id: 6,
    title: '90-Day Fertility Back Program',
    subtitle: 'Step-by-Step Action Roadmap',
    iconName: 'Flame',
    description: 'The proven 3-month cycle protocol that aligns with the exact 90-day human egg and sperm maturation cycle for maximum conception odds.',
    topics: [
      'Month 1: Total Body Cleanse & Baseline Diagnostics',
      'Month 2: Cellular Nourishment & Hormone Priming',
      'Month 3: Peak Ovulation Alignment & Conception Window',
    ],
  },
];

export const TOOLKITS = [
  { label: 'Worksheets & Planners', desc: 'Daily habit & symptom checklists' },
  { label: '30-Day Fertility Challenge', desc: 'Kickstart hormonal harmony' },
  { label: '90-Day Action Roadmap', desc: 'Full follicular rejuvenation cycle' },
  { label: 'Cycle & Ovulation Trackers', desc: 'Printable and digital tracker sheets' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amina & Chidi O.',
    location: 'Lekki, Lagos',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    result: 'Conceived in Month 3 of 90-day plan',
    quote: 'After 2 years of unexplained delays and anxiety, Fertility Back gave us clarity. Following the nutrition and cycle tracking protocols made all the difference.',
    rating: 5,
    monthsTrying: '2.5 years',
  },
  {
    id: '2',
    name: 'Sarah & David M.',
    location: 'London, UK',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    result: 'Regulated cycle & positive test at 34',
    quote: 'The section on male factor and hormone balancing was eye-opening. It is practical, concise, and gave us back our confidence.',
    rating: 5,
    monthsTrying: '18 months',
  },
  {
    id: '3',
    name: 'Dr. Kelechi N. (Wellness Consultant)',
    location: 'Abuja, Nigeria',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    result: 'Recommended to all prospective parents',
    quote: 'A beautifully organized, realistic guide. It takes the medical jargon away and gives couples an actionable blueprint for natural pregnancy preparation.',
    rating: 5,
    monthsTrying: 'Clinical Endorsement',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'ebook',
    name: 'Digital Edition (Instant Access)',
    tagline: 'Complete 70-Page eBook + Core Checklists',
    priceUSD: 10,
    originalPriceUSD: 25,
    priceNGN: 7500,
    originalPriceNGN: 18000,
    popular: true,
    features: [
      'Full 70-Page "Fertility Back" eBook (PDF & ePub)',
      'Complete 90-Day Conception Action Program',
      'The 6 Core Fertility & Ovulation Master Modules',
      'Printable Cycle & BBT Ovulation Tracking Charts',
      'Specialist Consultation Lab Test Checklist',
      'Lifetime Free Updates & Addendums',
      '30-Day 100% Satisfaction Guarantee',
    ],
  },
  {
    id: 'complete_bundle',
    name: 'Fertility Master Bundle + Toolkits',
    tagline: 'eBook + 30-Day Meal Plan + Audio Walkthroughs',
    priceUSD: 29,
    originalPriceUSD: 65,
    priceNGN: 22000,
    originalPriceNGN: 48000,
    popular: false,
    features: [
      'Everything in the Digital Edition',
      'Bonus 30-Day Hormone-Balancing Meal & Recipe Guide',
      'Couples Male & Female Synergistic Fertility Planner',
      '6 Audio Mini-Masterclasses with key chapter insights',
      'Direct email Q&A support channel with Olumind team',
      'Print-ready high resolution binder worksheets',
    ],
  },
];

export const SAMPLE_CHAPTERS: SampleChapter[] = [
  {
    id: 'intro',
    chapterNumber: 'Introduction',
    title: 'Your Body Was Designed to Conceive',
    content: [
      'Welcome to Fertility Back. If you are holding this guide, know this first: you are not alone, and your body is not broken.',
      'For many couples, the journey toward parenthood is met with silent anxiety, conflicting internet advice, and overwhelming clinical jargon. This guide was crafted with one unwavering focus—to strip away the confusion and provide a clear, evidence-based, compassionate path to preparing your mind, hormones, and body for a healthy pregnancy.',
      'Human eggs require approximately 90 to 120 days to mature within the follicle before ovulation. Similarly, sperm requires around 74 to 90 days for complete spermatogenesis. This biological timeline is your greatest asset. What you do over the next 3 months creates the cellular foundation for your future baby.',
    ],
  },
  {
    id: 'ch1',
    chapterNumber: 'Module 1 Excerpt',
    title: 'The Cellular Groundwork & Hormone Synergy',
    content: [
      'Fertility is not simply an on/off switch; it is a vital sign reflecting your entire body’s vitality. When your thyroid, adrenal glands, insulin sensitivity, and gut microbiome work in harmony, your reproductive axis (hypothalamus-pituitary-gonadal axis) receives the green light to produce fertile, robust cycles.',
      'Key Pillar: Mitochondrial Energy in Egg Cells. An egg cell contains over 100,000 mitochondria—far more than standard somatic cells. Protecting these cellular batteries from oxidative stress via targeted micronutrients (like Ubiquinol, Folate, and Alpha Lipoic Acid) is the fastest natural way to support egg quality at any age.',
      'In the following worksheets, you will map your personal baseline biomarkers to begin customizing your 90-day restoration path.',
    ],
  },
  {
    id: 'ch2',
    chapterNumber: 'Module 6 Preview',
    title: 'The 90-Day Conception Roadmap Blueprint',
    content: [
      'Phase 1 (Days 1–30): Cellular Detoxification & Circadian Reset. Remove endocrine disruptors from cookware, plastic water bottles, and synthetic fragrances. Normalize sleep cycles to boost nightly melatonin and growth hormone.',
      'Phase 2 (Days 31–60): Nutrient Saturation & Endometrial Preparation. Build a lush uterine lining through nitric-oxide rich foods, targeted pelvic circulation, and optimal progesterone support.',
      'Phase 3 (Days 61–90): Targeted Timing & Peaceful Conception. Apply basal temperature spikes, peak LH surges, and stress-free couple connection to welcome your new beginning.',
    ],
  },
];
