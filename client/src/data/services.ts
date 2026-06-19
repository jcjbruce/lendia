import { Home, RefreshCw, Landmark, CreditCard, Shield, Building2, HardHat, Briefcase, UserCheck, Globe, Hammer, TrendingUp } from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  icon: any;
  heroSubheadline: string;
  whatItIs: string[];
  whoItsFor: { title: string; description: string }[];
  benefits: string[];
  howItWorks: { step: number; title: string; description: string }[];
  eligibility: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: "purchases",
    name: "Purchases",
    shortDescription: "Find the perfect mortgage for your new home with expert guidance and access to Canada's top lenders.",
    h1: "Mortgage Financing for Home Purchases in Ontario",
    metaTitle: "Home Purchase Mortgages in Ontario | Lendia",
    metaDescription: "Get expert mortgage financing for your Ontario home purchase. Access 50+ lenders through our network. Free pre-approvals, competitive rates, and personalized service.",
    icon: Home,
    heroSubheadline: "Whether you're a first-time buyer or upgrading to your dream home, we'll find the right mortgage with the best rate from Canada's top lenders.",
    whatItIs: [
      "Purchasing a home is one of the most significant financial decisions you'll ever make, and having the right mortgage can save you tens of thousands of dollars over the life of your loan. At Lendia, we work with over 50 lenders through our lender network to find you the most competitive rate and terms for your specific situation.",
      "Unlike going directly to your bank — where you're limited to their products and rates — working with us gives you access to the entire Canadian lending market. We compare fixed and variable rates, different amortization periods, and various down payment options to build a mortgage that fits your budget and long-term goals.",
      "From pre-approval to closing, our team handles the paperwork, negotiations, and lender communications so you can focus on finding your perfect home. Our service is completely free to you — the lender pays our fee when your mortgage funds."
    ],
    whoItsFor: [
      { title: "First-Time Buyers", description: "Navigating your first mortgage with expert guidance and access to first-time buyer programs." },
      { title: "Move-Up Buyers", description: "Upgrading to a larger home or better neighbourhood with seamless financing." },
      { title: "Downsizers", description: "Transitioning to a smaller property while maximizing your equity." },
      { title: "Investors", description: "Purchasing rental or investment properties with competitive financing." }
    ],
    benefits: [
      "Access to 50+ lenders for the most competitive rates",
      "Free pre-approval — know your budget before you shop",
      "Rate holds up to 120 days while you find your home",
      "Expert guidance through the entire purchase process",
      "Help with down payment planning and CMHC insurance",
      "Completely free service — lenders pay our fee"
    ],
    howItWorks: [
      { step: 1, title: "Get Pre-Approved", description: "Complete our simple application and we'll determine your maximum purchase price and lock in a rate." },
      { step: 2, title: "Find Your Home", description: "Shop with confidence knowing exactly what you can afford. Your rate is held for up to 120 days." },
      { step: 3, title: "We Secure Your Mortgage", description: "Once you've found your home, we finalize the best mortgage from our network of lenders." },
      { step: 4, title: "Close and Move In", description: "We coordinate with your lawyer and real estate agent to ensure a smooth closing." }
    ],
    eligibility: [
      "Minimum down payment of 5% for homes under $500,000",
      "Proof of stable income and employment",
      "Acceptable credit history (we work with all credit levels)",
      "Debt service ratios within lender guidelines",
      "Valid identification and Canadian residency or work permit"
    ],
    faqs: [
      { question: "How much down payment do I need to buy a home in Ontario?", answer: "The minimum down payment in Canada is 5% for homes priced up to $500,000. For homes between $500,000 and $999,999, you need 5% on the first $500,000 and 10% on the remainder. Homes priced at $1 million or more require a minimum 20% down payment. If your down payment is less than 20%, you'll need mortgage default insurance (CMHC)." },
      { question: "What is a mortgage pre-approval and why do I need one?", answer: "A pre-approval is a conditional commitment from a lender for a specific mortgage amount at a guaranteed rate. It tells you exactly how much you can afford, locks in your rate for up to 120 days, and shows sellers you're a serious buyer. It's free and there's no obligation." },
      { question: "How long does the mortgage approval process take?", answer: "A pre-approval can typically be completed within 24 hours. Once you've found a home and submitted a firm offer, final approval usually takes 3-5 business days, depending on the lender and complexity of your application." },
      { question: "Should I choose a fixed or variable rate mortgage?", answer: "Fixed rates offer payment certainty — your rate and payment stay the same for the entire term. Variable rates typically start lower but can fluctuate with the Bank of Canada's prime rate. The best choice depends on your risk tolerance, financial situation, and market conditions. We'll help you evaluate both options." },
      { question: "Do I need to pay for your mortgage broker services?", answer: "No. Our service is completely free to you. The lender pays our fee when your mortgage funds. You get expert advice, access to better rates, and a smoother process at no cost." },
      { question: "Can I get a mortgage with less than perfect credit?", answer: "Yes. While major banks may decline applications with lower credit scores, we have access to alternative lenders, credit unions, and private lenders who specialize in working with clients who have credit challenges. We'll find the best option for your situation." }
    ],
    relatedServices: ["renewals", "refinancing", "self-employed", "new-to-canada"]
  },
  {
    slug: "renewals",
    name: "Renewals",
    shortDescription: "Don't just sign what the bank sends. Let us shop your renewal for a better rate.",
    h1: "Mortgage Renewal in Ontario — Don't Just Sign What the Bank Sends",
    metaTitle: "Mortgage Renewal in Ontario | Lendia",
    metaDescription: "Don't auto-renew your mortgage at your bank's posted rate. Lendia shops 50+ lenders to find you a better renewal rate. Free service, no obligation.",
    icon: RefreshCw,
    heroSubheadline: "Your bank's renewal offer is rarely their best rate. We shop the entire market to save you thousands on your mortgage renewal.",
    whatItIs: [
      "When your mortgage term ends, your bank will send you a renewal letter — often at a rate higher than what's available in the market. Most Canadians simply sign and return it without realizing they could save thousands by shopping around. At Lendia, we make sure you never overpay at renewal.",
      "A mortgage renewal is your opportunity to renegotiate your rate, switch lenders, change your amortization, or restructure your mortgage entirely. It's one of the few times you can make changes without penalties, and it's the perfect time to ensure your mortgage still fits your financial goals.",
      "We recommend starting the renewal process 4 months before your maturity date. This gives us time to shop the market, compare offers from 50+ lenders, and negotiate the best possible rate on your behalf — all at no cost to you."
    ],
    whoItsFor: [
      { title: "Current Homeowners", description: "Anyone approaching their mortgage maturity date within the next 4 months." },
      { title: "Rate Shoppers", description: "Homeowners who want to ensure they're getting the best available rate." },
      { title: "Life Changes", description: "Those whose financial situation has changed and need different mortgage terms." },
      { title: "Bank Clients", description: "Anyone who received a renewal letter from their bank and wants a second opinion." }
    ],
    benefits: [
      "Potentially save thousands over your next term",
      "Access to 50+ lenders — not just your current bank",
      "No penalties for switching lenders at renewal",
      "Lock in a rate up to 120 days before your maturity date",
      "Free, no-obligation rate comparison",
      "Expert advice on term length and mortgage structure"
    ],
    howItWorks: [
      { step: 1, title: "Contact Us Early", description: "Reach out 4 months before your renewal date so we have time to shop the market." },
      { step: 2, title: "We Shop the Market", description: "We compare rates from 50+ lenders and present you with the best options." },
      { step: 3, title: "Choose Your Best Option", description: "Stay with your current lender at a better rate, or switch to a new one — we handle the paperwork either way." }
    ],
    eligibility: [
      "Existing mortgage approaching maturity date",
      "Property located in Ontario",
      "Current on mortgage payments",
      "Valid property insurance"
    ],
    faqs: [
      { question: "When should I start thinking about my mortgage renewal?", answer: "We recommend reaching out at least 4 months before your maturity date. This gives us time to shop the market, secure the best rate, and complete any paperwork if you decide to switch lenders. Many lenders allow rate holds of 120 days, so starting early protects you if rates increase." },
      { question: "Can I switch lenders at renewal without penalties?", answer: "Yes! At the end of your mortgage term, you can switch to any lender without paying a prepayment penalty. The new lender typically covers the legal and appraisal costs of the switch. It's one of the easiest times to move your mortgage." },
      { question: "Why is my bank's renewal rate usually not the best?", answer: "Banks count on the fact that most people will simply sign and return the renewal letter without shopping around. The rate they offer is typically their posted rate, which is almost always higher than what they'd offer a new customer or what's available from other lenders." },
      { question: "What happens if I don't renew my mortgage on time?", answer: "If you don't renew by your maturity date, most lenders will automatically renew you into an open mortgage at a higher rate. This is why it's important to start the process early — you don't want to end up paying more than necessary." },
      { question: "Can I change my mortgage terms at renewal?", answer: "Absolutely. Renewal is the perfect time to change your amortization period, switch between fixed and variable rates, change your payment frequency, or adjust your prepayment privileges. We'll help you evaluate what changes make sense for your situation." },
      { question: "Is there a cost to using a mortgage broker for my renewal?", answer: "No. Our service is completely free to you. The lender pays our fee. You get access to better rates and expert advice at no cost." }
    ],
    relatedServices: ["purchases", "refinancing", "debt-consolidation"]
  },
  {
    slug: "refinancing",
    name: "Refinancing",
    shortDescription: "Access your home's equity for renovations, debt consolidation, or investments.",
    h1: "Mortgage Refinancing in Ontario — Access Your Home's Equity",
    metaTitle: "Mortgage Refinancing in Ontario | Lendia",
    metaDescription: "Refinance your Ontario mortgage to access equity, consolidate debt, or lower your rate. Expert guidance from Lendia. Free consultation.",
    icon: Landmark,
    heroSubheadline: "Unlock the value in your home. Refinance to lower your rate, consolidate debt, fund renovations, or invest in your future.",
    whatItIs: [
      "Mortgage refinancing replaces your existing mortgage with a new one, typically at different terms. In Canada, you can refinance up to 80% of your home's appraised value, allowing you to access the equity you've built over time. This equity can be used for virtually any purpose — from home renovations to debt consolidation to investment opportunities.",
      "Refinancing makes sense in several scenarios: when interest rates have dropped significantly below your current rate, when you want to consolidate high-interest debts into a single lower payment, when you need funds for major expenses, or when you want to change your mortgage terms to better suit your current financial situation.",
      "At Lendia, we analyze your complete financial picture to determine if refinancing is the right move. We calculate the break-even point, factor in any prepayment penalties, and compare options from 50+ lenders to ensure refinancing truly saves you money."
    ],
    whoItsFor: [
      { title: "Homeowners with Equity", description: "Those who have built significant equity and want to access it." },
      { title: "Debt Consolidation", description: "Homeowners carrying high-interest credit card or loan debt." },
      { title: "Renovators", description: "Those planning major home improvements or additions." },
      { title: "Rate Seekers", description: "Homeowners who want to take advantage of lower interest rates." }
    ],
    benefits: [
      "Access up to 80% of your home's value",
      "Potentially lower your interest rate",
      "Consolidate high-interest debts into one low payment",
      "Fund home renovations that increase property value",
      "Flexible terms and amortization options",
      "Expert analysis of costs vs. savings"
    ],
    howItWorks: [
      { step: 1, title: "Free Consultation", description: "We review your current mortgage, equity position, and financial goals." },
      { step: 2, title: "Cost-Benefit Analysis", description: "We calculate potential savings, penalties, and the break-even timeline." },
      { step: 3, title: "Lender Shopping", description: "We compare refinance options from 50+ lenders to find your best deal." },
      { step: 4, title: "Seamless Transition", description: "We handle all paperwork and coordinate with your lawyer for a smooth closing." }
    ],
    eligibility: [
      "Sufficient home equity (at least 20% after refinance)",
      "Acceptable credit score and income verification",
      "Property appraisal may be required",
      "Current on existing mortgage payments"
    ],
    faqs: [
      { question: "How much equity can I access through refinancing?", answer: "In Canada, you can refinance up to 80% of your home's current appraised value. For example, if your home is worth $800,000 and you owe $400,000, you could potentially access up to $240,000 in equity ($800,000 × 80% = $640,000 - $400,000 = $240,000)." },
      { question: "Will I have to pay a penalty to refinance?", answer: "If you're breaking your current mortgage before the end of its term, there will typically be a prepayment penalty. For variable-rate mortgages, this is usually 3 months' interest. For fixed-rate mortgages, it's the greater of 3 months' interest or the Interest Rate Differential (IRD). We'll calculate this for you and factor it into the cost-benefit analysis." },
      { question: "Is refinancing worth it if I have to pay a penalty?", answer: "Often, yes. Even with a penalty, the long-term savings from a lower rate or the benefits of debt consolidation can far outweigh the upfront cost. We'll run the numbers for your specific situation so you can make an informed decision." },
      { question: "How long does the refinancing process take?", answer: "The typical refinancing process takes 2-4 weeks from application to funding. This includes the appraisal, lender approval, and legal work. We recommend starting early, especially if you're on a tight timeline." },
      { question: "Can I refinance if I'm self-employed?", answer: "Yes. While self-employed borrowers may face additional documentation requirements, we have access to lenders who specialize in self-employed mortgages. We can often use stated income programs or alternative documentation to qualify you." },
      { question: "What's the difference between refinancing and a HELOC?", answer: "Refinancing replaces your entire mortgage with a new one at new terms. A Home Equity Line of Credit (HELOC) is a revolving credit line secured against your home that you can draw from as needed. Each has pros and cons — we'll help you determine which is better for your goals." }
    ],
    relatedServices: ["debt-consolidation", "home-renovations", "investment-properties"]
  },
  {
    slug: "debt-consolidation",
    name: "Debt Consolidation",
    shortDescription: "Combine high-interest debts into one low mortgage payment and save thousands.",
    h1: "Debt Consolidation Mortgages in Ontario",
    metaTitle: "Debt Consolidation Mortgages in Ontario | Lendia",
    metaDescription: "Consolidate high-interest debt into your mortgage and save thousands. Lower monthly payments, one simple payment. Free consultation with Lendia.",
    icon: CreditCard,
    heroSubheadline: "Stop paying 20%+ interest on credit cards and loans. Consolidate your debts into your mortgage at a fraction of the cost.",
    whatItIs: [
      "Debt consolidation through your mortgage involves rolling high-interest debts — credit cards, personal loans, car loans, and lines of credit — into your mortgage at a much lower interest rate. When credit cards charge 19-29% interest and personal loans charge 8-15%, consolidating into a mortgage at 4-6% can save you thousands of dollars per year.",
      "This strategy works by refinancing your existing mortgage for a higher amount that covers both your current mortgage balance and your outstanding debts. The result is a single, manageable monthly payment at a significantly lower interest rate. Many of our clients reduce their total monthly debt payments by 40-60%.",
      "At Lendia, we take a holistic approach to debt consolidation. We don't just move your debts around — we help you create a plan to stay debt-free. We'll analyze your complete financial picture, calculate your potential savings, and find the best consolidation mortgage from our network of 50+ lenders."
    ],
    whoItsFor: [
      { title: "Credit Card Debt", description: "Carrying balances on multiple credit cards at high interest rates." },
      { title: "Multiple Loan Payments", description: "Juggling car loans, personal loans, and lines of credit." },
      { title: "Cash Flow Challenges", description: "Monthly debt payments consuming too much of your income." },
      { title: "Homeowners with Equity", description: "Those with enough home equity to consolidate their debts." }
    ],
    benefits: [
      "Dramatically lower your interest costs",
      "One simple monthly payment instead of many",
      "Reduce total monthly payments by 40-60%",
      "Improve your cash flow immediately",
      "Stop collection calls and financial stress",
      "Build a path to becoming debt-free"
    ],
    howItWorks: [
      { step: 1, title: "Debt Assessment", description: "We review all your debts, interest rates, and monthly payments to calculate potential savings." },
      { step: 2, title: "Equity Analysis", description: "We determine how much equity you have available and the best consolidation strategy." },
      { step: 3, title: "Lender Matching", description: "We find the best mortgage product from 50+ lenders for your consolidation needs." },
      { step: 4, title: "Debt Freedom Plan", description: "We help you close out high-interest accounts and create a plan to stay debt-free." }
    ],
    eligibility: [
      "Sufficient home equity to cover debts",
      "Stable income to support new mortgage payment",
      "Property appraisal may be required",
      "Willingness to commit to a debt-free plan"
    ],
    faqs: [
      { question: "How much can I save by consolidating my debts?", answer: "The savings depend on how much debt you have and at what interest rates. As an example, if you have $50,000 in credit card debt at 20% interest, you're paying $10,000 per year in interest alone. Consolidating that into your mortgage at 5% would reduce your interest to $2,500 per year — a savings of $7,500 annually." },
      { question: "Will debt consolidation affect my credit score?", answer: "Initially, the refinance may cause a small, temporary dip in your credit score due to the credit inquiry. However, paying off your credit cards and loans will significantly improve your credit utilization ratio, which typically results in a higher credit score within a few months." },
      { question: "Can I consolidate debt if I have bad credit?", answer: "Yes. We have access to alternative lenders and private mortgage options that can help even if your credit score is lower. The key factor is having sufficient equity in your home. We'll find the best solution for your situation." },
      { question: "What debts can I consolidate into my mortgage?", answer: "You can consolidate virtually any debt: credit cards, personal loans, car loans, lines of credit, tax debts, student loans, and more. We'll help you determine which debts make sense to consolidate and which might be better left separate." },
      { question: "Is there a risk to consolidating debt into my mortgage?", answer: "The main consideration is that you're securing previously unsecured debt against your home. It's important to have a plan to avoid accumulating new debt after consolidation. We'll help you create that plan and set up your finances for long-term success." },
      { question: "How quickly can I consolidate my debts?", answer: "The typical timeline is 2-4 weeks from application to funding. If you're in a time-sensitive situation with collection actions, we can often expedite the process through our private lending partners." }
    ],
    relatedServices: ["refinancing", "private-lending", "home-renovations"]
  },
  {
    slug: "private-lending",
    name: "Private Lending",
    shortDescription: "When the banks say no, we find private mortgage solutions that work.",
    h1: "Private Mortgage Lenders in Ontario — When the Banks Say No",
    metaTitle: "Private Mortgage Lenders in Ontario | Lendia",
    metaDescription: "Need a private mortgage in Ontario? Lendia connects you with trusted private lenders for purchases, refinances, and debt consolidation. Fast approvals.",
    icon: Shield,
    heroSubheadline: "Banks aren't the only option. Our network of trusted private lenders provides fast, flexible financing when traditional lenders can't help.",
    whatItIs: [
      "Private mortgages are loans provided by individual investors or private lending companies rather than traditional banks or credit unions. They're an essential part of Ontario's mortgage landscape, serving borrowers who don't fit the increasingly strict criteria of institutional lenders. At Lendia, we work with a carefully vetted network of private lenders who offer competitive rates and fair terms.",
      "Private lending is typically a short-term solution — most private mortgages have terms of 1-2 years. They're designed to bridge a gap: perhaps you need time to rebuild your credit, you're between jobs, you're self-employed with non-traditional income, or you need to close quickly on a time-sensitive purchase. The goal is always to transition back to a traditional lender when your situation allows.",
      "While private mortgage rates are higher than bank rates (typically 7-12%), they can still be far less expensive than the alternatives — such as losing a property, facing power of sale, or continuing to pay 20%+ on credit card debt. We ensure every private mortgage we arrange has a clear exit strategy."
    ],
    whoItsFor: [
      { title: "Credit Challenges", description: "Borrowers with bruised credit who need time to rebuild." },
      { title: "Self-Employed", description: "Business owners who can't prove income through traditional documentation." },
      { title: "Urgent Situations", description: "Those facing power of sale, tax liens, or time-sensitive purchases." },
      { title: "Non-Traditional Income", description: "Borrowers with income sources that banks don't easily recognize." }
    ],
    benefits: [
      "Fast approvals — often within 24-48 hours",
      "Flexible qualification criteria",
      "Focus on property equity, not just credit score",
      "Short-term bridge to traditional financing",
      "Available for purchases, refinances, and second mortgages",
      "Clear exit strategy included with every arrangement"
    ],
    howItWorks: [
      { step: 1, title: "Situation Assessment", description: "We review your circumstances and determine if private lending is the right solution." },
      { step: 2, title: "Lender Matching", description: "We match you with the right private lender based on your property, needs, and timeline." },
      { step: 3, title: "Fast Approval", description: "Private lenders focus on equity and property value, so approvals are typically quick." },
      { step: 4, title: "Exit Strategy", description: "We create a plan to transition you to traditional financing at the earliest opportunity." }
    ],
    eligibility: [
      "Sufficient equity in the property (typically 20-35%)",
      "Clear title or ability to clear title issues",
      "Property must be in acceptable condition",
      "Viable exit strategy to return to traditional lending"
    ],
    faqs: [
      { question: "What interest rates do private lenders charge?", answer: "Private mortgage rates in Ontario typically range from 7% to 12%, depending on the loan-to-value ratio, property type, location, and borrower situation. There are also lender fees, usually 1-3% of the mortgage amount. While higher than bank rates, private mortgages are often the most cost-effective solution when banks aren't an option." },
      { question: "How quickly can a private mortgage be arranged?", answer: "Private mortgages can often be approved within 24-48 hours and funded within 1-2 weeks. In urgent situations, some private lenders can fund even faster. This speed is one of the key advantages of private lending." },
      { question: "Is a private mortgage safe?", answer: "Yes, when arranged through a licensed mortgage brokerage like Lendia. All private mortgages we arrange are registered on title, comply with Ontario lending regulations, and come with clear, transparent terms. We only work with reputable private lenders we've vetted thoroughly." },
      { question: "How long is a typical private mortgage term?", answer: "Most private mortgages have terms of 1-2 years. They're designed as short-term solutions while you work on qualifying for traditional financing. We include an exit strategy with every private mortgage we arrange." },
      { question: "Can I get a private mortgage for a purchase?", answer: "Absolutely. Private mortgages can be used for purchases, refinances, second mortgages, and debt consolidation. They're particularly useful for time-sensitive purchases where traditional lender timelines won't work." },
      { question: "What's the difference between a private mortgage and a hard money loan?", answer: "In Canada, they're essentially the same thing. Private mortgages (sometimes called hard money loans) are secured by real property and provided by non-institutional lenders. The terms 'private mortgage' and 'private lending' are more commonly used in Ontario." }
    ],
    relatedServices: ["debt-consolidation", "self-employed", "commercial-mortgages"]
  },
  {
    slug: "commercial-mortgages",
    name: "Commercial Mortgages",
    shortDescription: "Financing for office buildings, retail spaces, warehouses, and multi-unit properties.",
    h1: "Commercial Mortgage Financing in Ontario",
    metaTitle: "Commercial Mortgages in Ontario | Lendia",
    metaDescription: "Commercial mortgage financing for Ontario properties. Office, retail, industrial, and multi-unit. Competitive rates from Lendia.",
    icon: Building2,
    heroSubheadline: "Expert commercial mortgage solutions for investors and business owners across the Greater Toronto Area.",
    whatItIs: [
      "Commercial mortgages finance the purchase, refinance, or renovation of income-producing properties — including office buildings, retail spaces, industrial warehouses, multi-unit residential buildings, and mixed-use properties. At Lendia, we specialize in navigating the complex world of commercial lending to find the best financing for your investment.",
      "Commercial mortgages differ significantly from residential mortgages. Lenders evaluate the property's income potential, your business plan, the local market, and your experience as an investor or operator. Terms, rates, and qualification criteria vary widely between lenders, which is why having an experienced broker on your side is essential.",
      "Our team has deep experience in Ontario commercial real estate financing. We work with institutional lenders, credit unions, private lenders, and commercial mortgage investment corporations (MICs) to find the right financing structure for properties of all sizes and types."
    ],
    whoItsFor: [
      { title: "Property Investors", description: "Purchasing or refinancing commercial investment properties." },
      { title: "Business Owners", description: "Buying the building your business operates from." },
      { title: "Developers", description: "Financing multi-unit residential or mixed-use developments." },
      { title: "Portfolio Holders", description: "Optimizing financing across multiple commercial properties." }
    ],
    benefits: [
      "Access to institutional and private commercial lenders",
      "Competitive rates for all commercial property types",
      "Flexible terms and amortization structures",
      "Expert guidance on commercial lending requirements",
      "Help with business plans and property analysis",
      "Financing for purchases, refinances, and construction"
    ],
    howItWorks: [
      { step: 1, title: "Property & Business Review", description: "We analyze the property, its income potential, and your investment goals." },
      { step: 2, title: "Financing Strategy", description: "We develop a financing plan that maximizes your returns and minimizes costs." },
      { step: 3, title: "Lender Presentation", description: "We present your deal to the most suitable commercial lenders in our network." },
      { step: 4, title: "Closing Support", description: "We coordinate with all parties to ensure a smooth commercial closing." }
    ],
    eligibility: [
      "Income-producing or owner-occupied commercial property",
      "Acceptable debt service coverage ratio (DSCR)",
      "Down payment typically 25-35% for commercial",
      "Business plan or property income documentation"
    ],
    faqs: [
      { question: "What types of commercial properties can you finance?", answer: "We finance all types of commercial real estate: office buildings, retail plazas, industrial warehouses, multi-unit residential (5+ units), mixed-use properties, hotels, self-storage facilities, and more. If it's an income-producing property, we can likely find financing for it." },
      { question: "What down payment is required for a commercial mortgage?", answer: "Commercial mortgages typically require 25-35% down payment, depending on the property type, location, and your experience. Some lenders may accept less for strong deals with experienced borrowers." },
      { question: "How are commercial mortgage rates determined?", answer: "Commercial rates depend on the property type, loan-to-value ratio, debt service coverage ratio, borrower experience, and market conditions. Rates are typically higher than residential mortgages but vary significantly between lenders — which is why shopping through a broker is valuable." },
      { question: "Can I get a commercial mortgage for a mixed-use property?", answer: "Yes. Mixed-use properties (residential units above commercial space, for example) are very common in Ontario and we have extensive experience financing them. The lending criteria will depend on the ratio of commercial to residential space." },
      { question: "What is a debt service coverage ratio (DSCR)?", answer: "DSCR measures whether the property's income is sufficient to cover the mortgage payments. It's calculated by dividing the property's net operating income by the annual mortgage payments. Most lenders require a DSCR of at least 1.2, meaning the property earns 20% more than the mortgage costs." },
      { question: "How long does commercial mortgage approval take?", answer: "Commercial mortgages typically take 3-6 weeks for institutional lenders and 1-3 weeks for private lenders. The timeline depends on the complexity of the deal, appraisal requirements, and documentation. We work to expedite the process wherever possible." }
    ],
    relatedServices: ["business-loans", "construction-financing", "investment-properties"]
  },
  {
    slug: "construction-financing",
    name: "Construction Financing",
    shortDescription: "Build your dream home or development project with specialized construction mortgages.",
    h1: "Construction Mortgage Financing in Ontario",
    metaTitle: "Construction Mortgages in Ontario | Lendia",
    metaDescription: "Construction mortgage financing for custom homes and development projects in Ontario. Progress draw schedules, competitive rates. Lendia.",
    icon: HardHat,
    heroSubheadline: "Specialized financing for custom home builds, renovations, and development projects across Ontario.",
    whatItIs: [
      "Construction mortgages are specialized loans designed to finance the building of a new home or major renovation project. Unlike traditional mortgages where you receive the full amount at closing, construction mortgages are advanced in stages (called 'draws') as construction progresses. This protects both you and the lender by ensuring funds are released only as work is completed.",
      "Construction financing is more complex than a standard mortgage, requiring detailed cost estimates, construction timelines, builder contracts, and regular inspections. At Lendia, we have the expertise to navigate these requirements and connect you with lenders who specialize in construction lending.",
      "Whether you're building a custom home on your own lot, doing a major renovation, or developing a multi-unit project, we'll structure the right financing to keep your project on track and on budget."
    ],
    whoItsFor: [
      { title: "Custom Home Builders", description: "Building a new home on your own lot or purchased land." },
      { title: "Major Renovators", description: "Undertaking significant structural renovations or additions." },
      { title: "Small Developers", description: "Building duplexes, triplexes, or small multi-unit projects." },
      { title: "Tear-Down Rebuilds", description: "Demolishing and rebuilding on an existing property." }
    ],
    benefits: [
      "Progress draw schedule aligned with construction milestones",
      "Interest-only payments during construction phase",
      "Conversion to standard mortgage upon completion",
      "Access to specialized construction lenders",
      "Expert guidance on draw schedules and inspections",
      "Financing for land purchase included if needed"
    ],
    howItWorks: [
      { step: 1, title: "Project Review", description: "We review your construction plans, cost estimates, and builder contracts." },
      { step: 2, title: "Financing Structure", description: "We design a draw schedule and financing plan that matches your construction timeline." },
      { step: 3, title: "Lender Approval", description: "We secure approval from a lender experienced in construction financing." },
      { step: 4, title: "Construction Support", description: "We manage the draw process, coordinating inspections and fund releases throughout construction." }
    ],
    eligibility: [
      "Detailed construction plans and cost estimates",
      "Licensed builder or contractor agreement",
      "Land ownership or purchase agreement",
      "Sufficient down payment (typically 25-35%)",
      "Building permits and municipal approvals"
    ],
    faqs: [
      { question: "How does a construction mortgage draw schedule work?", answer: "Funds are released in stages as construction progresses. A typical draw schedule might be: 15% at foundation, 25% at framing, 25% at lock-up (roof, windows, doors), 25% at drywall and mechanical, and 10% at completion. Each draw requires an inspection to verify the work is complete." },
      { question: "Do I pay interest on the full mortgage amount during construction?", answer: "No. You only pay interest on the funds that have been drawn. As construction progresses and more draws are taken, your interest payments gradually increase. This keeps your costs lower during the building phase." },
      { question: "Can I be my own builder?", answer: "Some lenders will finance owner-builder projects, but the requirements are stricter. You'll typically need to demonstrate construction experience, provide more detailed plans, and may face higher rates. We can help you find lenders who work with owner-builders." },
      { question: "What happens when construction is complete?", answer: "Upon completion, your construction mortgage converts to a standard mortgage (this is called a 'completion mortgage' or 'take-out mortgage'). We arrange this at the outset so you know exactly what your long-term mortgage will look like." },
      { question: "How much down payment do I need for a construction mortgage?", answer: "Construction mortgages typically require 25-35% of the total project cost (land + construction). The exact amount depends on the lender, property type, and your financial profile." },
      { question: "Can I include the land purchase in my construction mortgage?", answer: "Yes. Many construction mortgages can include the cost of purchasing the land. If you already own the land, its value can count toward your equity/down payment." }
    ],
    relatedServices: ["purchases", "commercial-mortgages", "home-renovations"]
  },
  {
    slug: "business-loans",
    name: "Business Loans",
    shortDescription: "Working capital, equipment financing, and expansion loans for Ontario businesses.",
    h1: "Business Loans & Financing for Ontario Businesses",
    metaTitle: "Business Loans in Ontario | Lendia",
    metaDescription: "Business loans and financing for Ontario businesses. Working capital, equipment financing, expansion loans. Flexible terms from Lendia.",
    icon: Briefcase,
    heroSubheadline: "Fuel your business growth with flexible financing solutions tailored to Ontario entrepreneurs and business owners.",
    whatItIs: [
      "Running and growing a business requires capital, and traditional banks don't always make it easy to access. At Lendia, we connect Ontario business owners with a range of financing solutions — from working capital loans and equipment financing to expansion funding and commercial property purchases.",
      "We understand that business financing needs are diverse and often time-sensitive. Whether you need funds to purchase inventory, hire staff, buy equipment, expand to a new location, or manage cash flow during a growth phase, we have access to lenders who specialize in business lending across all industries.",
      "Our approach goes beyond just finding you a loan. We take the time to understand your business model, growth plans, and financial situation to recommend the right type of financing. Sometimes that's a traditional term loan; other times it might be a line of credit, equipment lease, or even a commercial mortgage."
    ],
    whoItsFor: [
      { title: "Small Business Owners", description: "Entrepreneurs needing working capital or growth funding." },
      { title: "Established Businesses", description: "Companies looking to expand, acquire, or refinance." },
      { title: "Startups", description: "New businesses with a solid plan needing initial capital." },
      { title: "Equipment Purchasers", description: "Businesses needing to finance equipment or vehicle purchases." }
    ],
    benefits: [
      "Access to multiple business lending sources",
      "Flexible repayment terms and structures",
      "Fast approvals for time-sensitive needs",
      "Expert guidance on the right financing type",
      "Help with business plan and financial documentation",
      "Solutions for all credit profiles and business stages"
    ],
    howItWorks: [
      { step: 1, title: "Business Assessment", description: "We review your business financials, needs, and growth plans." },
      { step: 2, title: "Financing Recommendation", description: "We recommend the best type of financing for your specific situation." },
      { step: 3, title: "Lender Matching", description: "We connect you with lenders who specialize in your industry and loan type." },
      { step: 4, title: "Funding", description: "We expedite the approval and funding process to get capital in your hands quickly." }
    ],
    eligibility: [
      "Registered Canadian business",
      "Business financial statements or tax returns",
      "Clear business plan for use of funds",
      "Varies by loan type and amount"
    ],
    faqs: [
      { question: "What types of business loans do you offer?", answer: "We connect businesses with term loans, lines of credit, equipment financing, commercial mortgages, SBA-equivalent loans, merchant cash advances, and invoice factoring. The right product depends on your specific needs and situation." },
      { question: "How quickly can I get a business loan?", answer: "Timeline varies by loan type. Some products, like merchant cash advances, can fund within days. Traditional term loans typically take 2-4 weeks. We'll give you a realistic timeline based on your specific situation." },
      { question: "Do I need collateral for a business loan?", answer: "It depends on the loan type and amount. Secured loans (backed by assets like equipment or property) typically offer better rates. Unsecured options are available but may have higher rates and lower limits." },
      { question: "Can I get a business loan with a new business?", answer: "Yes, though options may be more limited for businesses less than 2 years old. We have access to startup-friendly lenders and can help you present your business plan in the strongest possible light." },
      { question: "What documents do I need to apply?", answer: "Typically: 2 years of business financial statements or tax returns, a business plan, personal financial statement, bank statements, and articles of incorporation. Requirements vary by lender and loan type." },
      { question: "Can I use a business loan for any purpose?", answer: "Most business loans can be used for any legitimate business purpose: working capital, equipment, inventory, hiring, marketing, expansion, or debt refinancing. Some specialized products may have restrictions on use of funds." }
    ],
    relatedServices: ["commercial-mortgages", "self-employed", "private-lending"]
  },
  {
    slug: "self-employed",
    name: "Self-Employed",
    shortDescription: "Specialized mortgage solutions for business owners and self-employed professionals.",
    h1: "Self-Employed Mortgages in Ontario — We Understand Your Income",
    metaTitle: "Self-Employed Mortgages in Ontario | Lendia",
    metaDescription: "Self-employed mortgage solutions in Ontario. We understand non-traditional income. Stated income programs, alternative documentation. Lendia.",
    icon: UserCheck,
    heroSubheadline: "Your tax returns don't tell the whole story. We work with lenders who understand self-employed income and can qualify you based on your true earning power.",
    whatItIs: [
      "If you're self-employed, you know the frustration: you earn a great living, but your tax returns show a much lower income because of legitimate business deductions. Traditional banks use your declared income (line 150 of your tax return) to qualify you, which often means you qualify for far less than you can actually afford.",
      "At Lendia, we specialize in self-employed mortgages. We work with lenders who offer stated income programs, alternative documentation options, and business-for-self (BFS) mortgage products that consider your true earning potential — not just what your accountant helped you minimize for tax purposes.",
      "Whether you're a sole proprietor, contractor, freelancer, or business owner, we have solutions that work. We've helped thousands of self-employed Ontarians get the mortgages they deserve, and we understand the unique documentation challenges you face."
    ],
    whoItsFor: [
      { title: "Sole Proprietors", description: "Independent professionals and consultants." },
      { title: "Business Owners", description: "Owners of incorporated or unincorporated businesses." },
      { title: "Contractors", description: "Independent contractors and subcontractors." },
      { title: "Freelancers", description: "Gig workers and freelance professionals." }
    ],
    benefits: [
      "Stated income programs available",
      "Alternative documentation accepted",
      "Lenders who understand business deductions",
      "Competitive rates for qualified self-employed borrowers",
      "Access to A-lenders, B-lenders, and private options",
      "Expert guidance on presenting your income"
    ],
    howItWorks: [
      { step: 1, title: "Income Review", description: "We review your business income, tax returns, and financial situation to understand your true earning power." },
      { step: 2, title: "Documentation Strategy", description: "We determine the best documentation approach — traditional, stated income, or alternative." },
      { step: 3, title: "Lender Matching", description: "We match you with lenders who specialize in self-employed mortgages and offer the best rates for your profile." },
      { step: 4, title: "Approval & Closing", description: "We guide you through the approval process and handle all lender communications." }
    ],
    eligibility: [
      "Self-employed for at least 2 years (some exceptions)",
      "Proof of business existence (business license, GST/HST registration)",
      "Bank statements showing business income",
      "Acceptable credit history",
      "Reasonable down payment (may vary by program)"
    ],
    faqs: [
      { question: "What is a stated income mortgage?", answer: "A stated income mortgage allows you to 'state' your income rather than proving it through traditional tax documents. Lenders verify that your stated income is reasonable for your industry and experience level. These programs typically require a larger down payment (usually 20%+) and may have slightly higher rates." },
      { question: "How much down payment do I need as a self-employed borrower?", answer: "With traditional documentation (2 years of tax returns showing sufficient income), you may qualify with as little as 5% down. Stated income programs typically require 20% or more. The exact requirement depends on the lender and your overall financial profile." },
      { question: "What documents do self-employed borrowers need?", answer: "Common documents include: 2 years of personal and business tax returns (T1 Generals), Notice of Assessments, business financial statements, 6-12 months of bank statements, business license or articles of incorporation, and GST/HST registration. Stated income programs may require fewer documents." },
      { question: "Can I get a mortgage if I've been self-employed for less than 2 years?", answer: "It's more challenging but not impossible. Some lenders will consider borrowers with 1 year of self-employment history, especially if you were previously employed in the same industry. We'll explore all available options for your situation." },
      { question: "Will my business deductions hurt my mortgage application?", answer: "With traditional lenders, yes — they use your net income (after deductions) to qualify you. However, our stated income and alternative documentation programs look at your gross business revenue and industry norms, allowing you to qualify based on your true earning capacity." },
      { question: "Are self-employed mortgage rates higher?", answer: "Not necessarily. If you can qualify through traditional documentation with an A-lender, your rates will be the same as any employed borrower. Stated income programs may carry slightly higher rates, but we shop the market to ensure you get the most competitive rate available for your situation." }
    ],
    relatedServices: ["purchases", "refinancing", "private-lending"]
  },
  {
    slug: "new-to-canada",
    name: "New to Canada",
    shortDescription: "Newcomer mortgage programs to help you achieve homeownership in Canada.",
    h1: "New to Canada Mortgages — Homeownership Starts Here",
    metaTitle: "New to Canada Mortgages | Lendia",
    metaDescription: "New to Canada mortgage programs in Ontario. Special newcomer programs, flexible requirements. Start your Canadian homeownership journey with Lendia.",
    icon: Globe,
    heroSubheadline: "Canada is your new home. We'll help you buy one. Special mortgage programs designed for newcomers, permanent residents, and new citizens.",
    whatItIs: [
      "Moving to a new country is exciting, but navigating the Canadian mortgage system can be overwhelming — especially when you don't yet have an established Canadian credit history. At Lendia, we specialize in helping newcomers to Canada achieve homeownership through dedicated newcomer mortgage programs.",
      "Major Canadian banks and lenders offer special programs for new immigrants, permanent residents, and foreign workers. These programs have more flexible requirements around credit history, down payment sources, and income verification. Some even allow you to use your international credit history or employment letters from your home country.",
      "Whether you've just landed or have been in Canada for a few years, we'll find the right mortgage program for your situation. We've helped hundreds of newcomers from around the world purchase their first Canadian home, and we understand the unique challenges you face."
    ],
    whoItsFor: [
      { title: "Permanent Residents", description: "New permanent residents looking to purchase their first home." },
      { title: "New Citizens", description: "Recently naturalized citizens ready for homeownership." },
      { title: "Work Permit Holders", description: "Foreign workers with valid work permits." },
      { title: "International Students", description: "Students transitioning to permanent residency." }
    ],
    benefits: [
      "Special newcomer mortgage programs",
      "No Canadian credit history required",
      "Down payment from international sources accepted",
      "International income and employment considered",
      "CMHC newcomer insurance programs",
      "Multilingual support available"
    ],
    howItWorks: [
      { step: 1, title: "Newcomer Assessment", description: "We review your immigration status, income, savings, and homeownership goals." },
      { step: 2, title: "Program Matching", description: "We identify the best newcomer mortgage programs from our network of lenders." },
      { step: 3, title: "Documentation Support", description: "We help you gather and present the right documents, including international records." },
      { step: 4, title: "Approval & Homeownership", description: "We guide you through approval to closing, explaining every step along the way." }
    ],
    eligibility: [
      "Valid immigration status (PR, citizenship, or work permit)",
      "Minimum down payment (as low as 5% with newcomer programs)",
      "Proof of income (Canadian or international)",
      "Landed within the last 5 years (for most newcomer programs)"
    ],
    faqs: [
      { question: "Can I get a mortgage without Canadian credit history?", answer: "Yes! Most major lenders offer newcomer programs that don't require Canadian credit history. Some will accept an international credit report, while others waive the credit history requirement entirely for newcomers who have been in Canada for less than 3-5 years." },
      { question: "How much down payment do newcomers need?", answer: "With newcomer programs, you may qualify with as little as 5% down payment for homes under $500,000. Some programs require 10% down. Your down payment can come from international sources — we'll help you document the source of funds properly." },
      { question: "Can I use my income from outside Canada?", answer: "Some lender programs allow you to use international income, especially if you're still receiving it. If you've started working in Canada, your Canadian employment income is preferred. We'll find the program that works best with your income situation." },
      { question: "What is the CMHC newcomer program?", answer: "CMHC (Canada Mortgage and Housing Corporation) offers mortgage default insurance for newcomers with less than 20% down payment. Their newcomer program has more flexible requirements around credit history and allows non-traditional credit references. This makes it easier to qualify with a smaller down payment." },
      { question: "Do I need to be a permanent resident to buy a home?", answer: "No. While permanent residents have the most options, work permit holders and even non-residents can purchase property in Canada (subject to certain restrictions). The mortgage programs and requirements differ based on your immigration status." },
      { question: "How can I start building Canadian credit?", answer: "We recommend: getting a secured credit card, setting up a Canadian bank account, getting a cell phone plan in your name, and making all payments on time. Even 3-6 months of Canadian credit activity can help your mortgage application. We'll guide you through the process." }
    ],
    relatedServices: ["purchases", "self-employed", "private-lending"]
  },
  {
    slug: "home-renovations",
    name: "Home Renovations",
    shortDescription: "Finance your home improvements through your mortgage equity.",
    h1: "Home Renovation Financing in Ontario",
    metaTitle: "Home Renovation Financing in Ontario | Lendia",
    metaDescription: "Finance your home renovations through mortgage refinancing or a HELOC. Access your equity for improvements. Lendia.",
    icon: Hammer,
    heroSubheadline: "Transform your home without draining your savings. Access your home equity to fund renovations that increase your property value.",
    whatItIs: [
      "Home renovations can significantly increase your property value and quality of life, but they often come with a hefty price tag. At Lendia, we help homeowners access their home equity to fund renovations — from kitchen and bathroom remodels to major additions and structural improvements.",
      "There are several ways to finance renovations through your mortgage: refinancing to access equity, setting up a Home Equity Line of Credit (HELOC), or using a purchase-plus-improvements mortgage if you're buying a home that needs work. Each option has different advantages depending on your situation.",
      "We'll help you determine the best financing approach based on your renovation budget, current mortgage terms, and long-term financial goals. Our goal is to ensure your renovation financing is structured in a way that maximizes value and minimizes cost."
    ],
    whoItsFor: [
      { title: "Homeowners", description: "Those looking to renovate, remodel, or add to their existing home." },
      { title: "Home Buyers", description: "Purchasing a fixer-upper and financing improvements." },
      { title: "Property Investors", description: "Renovating investment properties to increase rental income or resale value." },
      { title: "Accessibility Needs", description: "Modifying a home for accessibility or aging-in-place requirements." }
    ],
    benefits: [
      "Access equity at mortgage rates (much lower than personal loans)",
      "Multiple financing options to suit your needs",
      "Increase your property value through improvements",
      "Flexible draw schedules for larger projects",
      "Purchase-plus-improvements programs available",
      "Expert guidance on renovation financing strategies"
    ],
    howItWorks: [
      { step: 1, title: "Renovation Planning", description: "We review your renovation plans, budget, and current equity position." },
      { step: 2, title: "Financing Options", description: "We present the best financing options: refinance, HELOC, or purchase-plus-improvements." },
      { step: 3, title: "Approval & Funding", description: "We secure approval and structure the funding to match your renovation timeline." },
      { step: 4, title: "Project Support", description: "For larger projects, we manage draw schedules to release funds as work progresses." }
    ],
    eligibility: [
      "Sufficient home equity for refinance/HELOC options",
      "Renovation plans and cost estimates",
      "Acceptable credit and income",
      "Licensed contractor for major structural work"
    ],
    faqs: [
      { question: "What's the best way to finance a home renovation?", answer: "It depends on the scope and your situation. For large renovations ($50,000+), refinancing your mortgage often provides the lowest rate. For smaller or ongoing projects, a HELOC offers flexibility to draw funds as needed. If you're buying a home that needs work, a purchase-plus-improvements mortgage rolls renovation costs into your purchase mortgage." },
      { question: "How much can I borrow for renovations?", answer: "Through a refinance, you can access up to 80% of your home's current value minus your existing mortgage balance. Through a HELOC, you can typically access up to 65% of your home's value. The exact amount depends on your equity, income, and creditworthiness." },
      { question: "Will renovations increase my home's value?", answer: "Most renovations add value, but the return varies. Kitchen and bathroom renovations typically return 75-100% of their cost. Additions and finished basements also add significant value. Cosmetic updates generally have a lower return. We can help you prioritize renovations that maximize your property value." },
      { question: "What is a purchase-plus-improvements mortgage?", answer: "This program allows you to add renovation costs (up to a certain percentage of the purchase price) to your mortgage when buying a home. The renovations must be completed within a set timeframe after closing. It's an excellent option for buying a home that needs updating." },
      { question: "Can I do the renovation work myself?", answer: "For financing purposes, most lenders prefer licensed contractors for major work. However, cosmetic improvements and minor upgrades can often be done by the homeowner. If you're using a draw schedule, inspections will verify the work quality regardless of who does it." },
      { question: "How long does renovation financing take to arrange?", answer: "A refinance typically takes 2-4 weeks. A HELOC can often be set up within 1-2 weeks. Purchase-plus-improvements mortgages are arranged as part of your home purchase. We recommend starting the financing process before you commit to renovation contracts." }
    ],
    relatedServices: ["refinancing", "construction-financing", "purchases"]
  },
  {
    slug: "investment-properties",
    name: "Investment Properties",
    shortDescription: "Build your real estate portfolio with competitive investment property financing.",
    h1: "Investment Property Mortgages in Ontario",
    metaTitle: "Investment Property Mortgages in Ontario | Lendia",
    metaDescription: "Investment property mortgage financing in Ontario. Competitive rates for rental properties, multi-unit buildings, and real estate portfolios. Lendia.",
    icon: TrendingUp,
    heroSubheadline: "Grow your wealth through real estate. We provide expert financing for rental properties, multi-unit buildings, and investment portfolios.",
    whatItIs: [
      "Real estate remains one of the most reliable wealth-building strategies in Ontario, and having the right financing is key to maximizing your returns. At Lendia, we specialize in investment property mortgages — helping investors purchase, refinance, and grow their real estate portfolios with competitive rates and expert guidance.",
      "Investment property mortgages have different requirements than owner-occupied home mortgages. Lenders typically require larger down payments (20% minimum), evaluate rental income potential, and may apply stricter qualification criteria. Understanding these nuances is essential to building a successful portfolio.",
      "Whether you're purchasing your first rental property or adding to an existing portfolio, we'll structure your financing to maximize cash flow and long-term returns. We work with lenders who understand investment real estate and offer products specifically designed for investors."
    ],
    whoItsFor: [
      { title: "First-Time Investors", description: "Purchasing your first rental or investment property." },
      { title: "Portfolio Builders", description: "Adding properties to an existing real estate portfolio." },
      { title: "Multi-Unit Buyers", description: "Purchasing duplexes, triplexes, or small apartment buildings." },
      { title: "Refinancing Investors", description: "Accessing equity from existing investment properties." }
    ],
    benefits: [
      "Competitive rates for investment properties",
      "Rental income used to help qualify",
      "Financing for single-family, multi-unit, and condos",
      "Portfolio lending solutions for multiple properties",
      "Expert analysis of investment returns",
      "Access to lenders who specialize in investment properties"
    ],
    howItWorks: [
      { step: 1, title: "Investment Analysis", description: "We review the property, rental potential, and your investment goals." },
      { step: 2, title: "Financing Strategy", description: "We structure the mortgage to maximize cash flow and tax efficiency." },
      { step: 3, title: "Lender Selection", description: "We match you with lenders who offer the best terms for investment properties." },
      { step: 4, title: "Portfolio Growth", description: "We help you plan for future acquisitions and portfolio optimization." }
    ],
    eligibility: [
      "Minimum 20% down payment for investment properties",
      "Proof of income sufficient to carry the mortgage",
      "Rental income projections or existing lease agreements",
      "Acceptable credit history and debt service ratios"
    ],
    faqs: [
      { question: "How much down payment do I need for an investment property?", answer: "Investment properties require a minimum 20% down payment in Canada. There is no mortgage default insurance available for investment properties, so the 20% minimum is firm. Some lenders may require 25% or more depending on the property type and your overall portfolio." },
      { question: "Can rental income help me qualify for the mortgage?", answer: "Yes. Most lenders will use 50-80% of the expected rental income to help you qualify. If the property already has tenants with signed leases, lenders may use a higher percentage. We'll help you present the rental income in the strongest way possible." },
      { question: "What are the tax implications of an investment property mortgage?", answer: "The interest on an investment property mortgage is generally tax-deductible against your rental income. Other deductible expenses include property taxes, insurance, maintenance, and property management fees. We recommend consulting with a tax professional for advice specific to your situation." },
      { question: "Can I use equity from my primary residence to buy an investment property?", answer: "Absolutely. Many investors use a HELOC or refinance on their primary residence to fund the down payment on an investment property. This is a common and effective strategy for building a real estate portfolio." },
      { question: "How many investment properties can I finance?", answer: "Most traditional lenders will finance up to 4-5 properties per borrower. Beyond that, you may need to work with portfolio lenders or commercial financing. We have access to lenders who work with larger portfolios and can help you continue growing." },
      { question: "Are investment property mortgage rates higher?", answer: "Investment property rates are typically 0.10-0.25% higher than owner-occupied rates with traditional lenders. However, by shopping the market through our network of 50+ lenders, we often find rates that are very competitive. The small rate premium is usually offset by the rental income and property appreciation." }
    ],
    relatedServices: ["commercial-mortgages", "refinancing", "construction-financing"]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
