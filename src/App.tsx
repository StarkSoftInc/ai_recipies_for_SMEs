import React from 'react';
import { 
  ArrowRight, CheckCircle2, Users, BookOpen, 
  Target, Calendar, Shield, Zap, TrendingUp, Clock, 
  FileText
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col selection:bg-[#FF37CD]/30 selection:text-white">
      {/* Header */}
      <header className="h-20 px-6 md:px-12 flex items-center justify-between border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-10 shrink-0">
        <div className="font-extrabold text-2xl tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF37CD] to-[#FBCB19]">AI-Recipes</span> <span className="text-white">for SMEs</span>
        </div>
        <button className="bg-gradient-to-r from-[#FF37CD] to-[#FBCB19] hover:opacity-90 text-zinc-950 px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(255,55,205,0.3)]">
          Apply Now
        </button>
      </header>

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 bg-zinc-950 border-b border-zinc-900 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF37CD] opacity-[0.04] blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white">
              Automate Your <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF37CD] to-[#FBCB19]">SME Resilience</span>
            </h1>
            <p className="text-lg md:text-2xl leading-relaxed text-zinc-400 mb-10 max-w-3xl mx-auto">
              A practical training initiative designed to accelerate responsible AI adoption among microbusinesses and startups in Ukraine's recovering economy.
            </p>
            <button className="bg-gradient-to-r from-[#FF37CD] to-[#FBCB19] hover:opacity-90 text-zinc-950 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_25px_rgba(255,55,205,0.4)] inline-flex items-center justify-center gap-2">
              Apply for the Bootcamp
              <ArrowRight className="w-5 h-5 font-bold" />
            </button>
          </div>
        </section>

        {/* The Objectives Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FBCB19] mb-3">Project Overview</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">The Objectives</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF37CD]/10 text-[#FF37CD] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-zinc-100">Fast-track Resilience</h4>
              <p className="text-zinc-400 leading-relaxed">
                Participate in a high-impact 2-day AI Bootcamp equipping business leaders with ready-to-use automation workflows to boost operations.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FBCB19]/10 text-[#FBCB19] rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-zinc-100">AI Recipes Toolkit</h4>
              <p className="text-zinc-400 leading-relaxed">
                Receive a plain-language guide with ready-to-use AI recipes, including prompts, templates, and safeguards tailored for microbusinesses.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF37CD]/10 text-[#FF37CD] rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-zinc-100">Facilitate Partnerships</h4>
              <p className="text-zinc-400 leading-relaxed">
                Connect SMEs and introduce cutting-edge AI practices through international cooperation or innovation partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience & Format Section */}
        <section className="py-20 px-6 bg-zinc-900 text-white border-y border-zinc-800">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-sm font-bold uppercase tracking-wider text-[#FF37CD] mb-3">Who is this for?</h2>
                 <h3 className="text-3xl md:text-4xl font-bold mb-6">Target Audience</h3>
                 <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
                   Entrepreneurs, start-ups, self-employed professionals, and microbusinesses eager to leverage AI tools responsibly.
                 </p>
                 <div className="flex flex-wrap gap-3">
                   <span className="bg-[#FBCB19]/10 text-[#FBCB19] border border-[#FBCB19]/20 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                     <Users className="w-4 h-4"/> 1-10 Staff
                   </span>
                   <span className="bg-[#FF37CD]/10 text-[#FF37CD] border border-[#FF37CD]/20 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                     <Shield className="w-4 h-4"/> Veterans
                   </span>
                   <span className="bg-[#FBCB19]/10 text-[#FBCB19] border border-[#FBCB19]/20 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                     <Zap className="w-4 h-4"/> Startups
                   </span>
                 </div>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 shadow-xl">
                 <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                   <FileText className="text-[#FBCB19] w-6 h-6"/> Deliverables & Format
                 </h3>
                 <div className="space-y-4">
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-[#FF37CD]/10 text-[#FF37CD] flex items-center justify-center shrink-0 mt-1">
                       <Calendar className="w-4 h-4" />
                     </div>
                     <div>
                       <strong className="block text-zinc-200 mt-1.5">2-Day Virtual Bootcamp</strong>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-[#FBCB19]/10 text-[#FBCB19] flex items-center justify-center shrink-0 mt-1">
                       <FileText className="w-4 h-4" />
                     </div>
                     <div>
                       <strong className="block text-zinc-200 mt-1.5">AI Recipes Toolkit (PDF)</strong>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-[#FF37CD]/10 text-[#FF37CD] flex items-center justify-center shrink-0 mt-1">
                       <FileText className="w-4 h-4" />
                     </div>
                     <div>
                       <strong className="block text-zinc-200 mt-1.5">Visual Workflow Cards</strong>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-[#FBCB19]/10 text-[#FBCB19] flex items-center justify-center shrink-0 mt-1">
                       <BookOpen className="w-4 h-4" />
                     </div>
                     <div>
                       <strong className="block text-zinc-200 mt-1.5">Materials Pack (Notion)</strong>
                     </div>
                   </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FBCB19] mb-3">Bootcamp Schedule</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">2-Day Curriculum</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FF37CD]/10 text-[#FF37CD] font-bold px-4 py-2 rounded-bl-2xl text-sm border-b border-l border-zinc-800">
                Day 1
              </div>
              <h4 className="text-2xl font-bold mb-2 mt-4 text-white">Front & Back Office</h4>
              <p className="text-zinc-400 mb-8 font-medium">Revenue, Growth & Operations</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0 font-bold">1</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">Marketing & Brand Presence</h5>
                    <p className="text-sm text-zinc-400 mt-1">Generate content, craft campaigns and automate brand visibility.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0 font-bold">2</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">Sales & Lead Generation</h5>
                    <p className="text-sm text-zinc-400 mt-1">Capture leads, score prospects, and draft automated outreach.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0 font-bold">3</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">Customer Experience & Support</h5>
                    <p className="text-sm text-zinc-400 mt-1">Streamline tickets, automate responses, and handle FAQs efficiently.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0 font-bold">4</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">Administrative Operations</h5>
                    <p className="text-sm text-zinc-400 mt-1">Automate routine paperwork, scheduling, and internal comms.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0 font-bold">5</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">Financial Reporting & Analysis</h5>
                    <p className="text-sm text-zinc-400 mt-1">Accelerate month-end closing, invoice checks, and expense tracking.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0 font-bold">6</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">Project Management</h5>
                    <p className="text-sm text-zinc-400 mt-1">Understand workflow logic to tie tools together for scalable pipelines.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FBCB19]/10 text-[#FBCB19] font-bold px-4 py-2 rounded-bl-2xl text-sm border-b border-l border-zinc-800">
                Day 2
              </div>
              <h4 className="text-2xl font-bold mb-2 mt-4 text-white">Live Hackathon & Wrap-up</h4>
              <p className="text-zinc-400 mb-8 font-medium">Practical Application</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fbcb19]/10 border border-[#fbcb19]/30 text-[#FBCB19] flex items-center justify-center shrink-0 font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-zinc-100 text-lg">The Hackathon</h5>
                    <p className="text-sm text-zinc-400 mt-1">A live event to build real workflows and refine them based on peer feedback.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FBCB19] flex items-center justify-center shrink-0 font-bold">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-zinc-100">GDPR & Security</h5>
                    <p className="text-sm text-zinc-400 mt-1">Use tools without leaking sensitive client data.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FBCB19] flex items-center justify-center shrink-0 font-bold">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-zinc-100">Budgeting for AI</h5>
                    <p className="text-sm text-zinc-400 mt-1">Calculate ROI of tool subscriptions vs. hours saved.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Join / Benefits */}
        <section className="py-20 px-6 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FBCB19] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FF37CD] mb-3">The Benefits</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Join the Accelerator?</h3>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Build real workflows in 48 hours that scale your front and back office while staying entirely GDPR compliant.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
             <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-center transition-transform hover:-translate-y-1 hover:border-[#FF37CD]/30 hover:shadow-[0_0_20px_rgba(255,55,205,0.15)] group">
               <Clock className="w-10 h-10 text-[#FF37CD] mx-auto mb-4 group-hover:scale-110 transition-transform" />
               <h4 className="text-xl font-bold text-white mb-2">Measurable Time Savings</h4>
               <p className="text-zinc-400 text-sm">Automate repetitive tasks to focus on strategy and growth.</p>
             </div>
             <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-center transition-transform hover:-translate-y-1 hover:border-[#FBCB19]/30 hover:shadow-[0_0_20px_rgba(251,203,25,0.15)] group">
               <Shield className="w-10 h-10 text-[#FBCB19] mx-auto mb-4 group-hover:scale-110 transition-transform" />
               <h4 className="text-xl font-bold text-white mb-2">Secure AI Handling</h4>
               <p className="text-zinc-400 text-sm">Gain confidence in responsible, GDPR-compliant AI use.</p>
             </div>
             <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-center transition-transform hover:-translate-y-1 hover:border-[#FF37CD]/30 hover:shadow-[0_0_20px_rgba(255,55,205,0.15)] group">
               <TrendingUp className="w-10 h-10 text-[#FF37CD] mx-auto mb-4 group-hover:scale-110 transition-transform" />
               <h4 className="text-xl font-bold text-white mb-2">Scalable Foundations</h4>
               <p className="text-zinc-400 text-sm">Low-barrier models for continuous digital transition and competitiveness.</p>
             </div>
          </div>
          
          <div className="mt-20 text-center relative z-10">
            <button className="bg-gradient-to-r from-[#FF37CD] to-[#FBCB19] hover:opacity-90 text-zinc-950 px-10 py-5 rounded-lg font-extrabold text-xl transition-all shadow-[0_0_25px_rgba(251,203,25,0.3)] inline-flex items-center justify-center gap-3">
              Apply Now 
              <ArrowRight className="w-6 h-6 border-zinc-950" />
            </button>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900 bg-zinc-950">
        <p>&copy; 2026 AI-Recipes for SMEs. All rights reserved.</p>
      </footer>
    </div>
  );
}
