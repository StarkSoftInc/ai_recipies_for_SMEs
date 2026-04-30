import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Users, BookOpen, 
  Target, Calendar, Shield, Zap, TrendingUp, Clock, 
  FileText, Globe
} from 'lucide-react';
import { locales } from './locales';

export default function App() {
  const [lang, setLang] = useState<'en' | 'uk'>('en');
  const t = locales[lang];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col selection:bg-[#FF37CD]/30 selection:text-white">
      {/* Header */}
      <header className="h-20 px-6 md:px-12 flex items-center justify-between border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-10 shrink-0">
        <div className="font-extrabold text-2xl tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF37CD] to-[#FBCB19]">AI-Recipes</span> <span className="text-white">for SMEs</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'uk' : 'en')}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'УКР' : 'EN'}
          </button>
          <button className="bg-gradient-to-r from-[#FF37CD] to-[#FBCB19] hover:opacity-90 text-zinc-950 px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(255,55,205,0.3)] hidden sm:block">
            {t.applyNow}
          </button>
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 bg-zinc-950 border-b border-zinc-900 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF37CD] opacity-[0.04] blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white">
              {t.heroTitlePart1} <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF37CD] to-[#FBCB19]">{t.heroTitlePart2}</span>
            </h1>
            <p className="text-lg md:text-2xl leading-relaxed text-zinc-400 mb-10 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
            <button className="bg-gradient-to-r from-[#FF37CD] to-[#FBCB19] hover:opacity-90 text-zinc-950 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_25px_rgba(255,55,205,0.4)] inline-flex items-center justify-center gap-2">
              {t.applyForBootcamp}
              <ArrowRight className="w-5 h-5 font-bold" />
            </button>
          </div>
        </section>

        {/* The Objectives Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {t.overviewSup && <h2 className="text-sm font-bold uppercase tracking-wider text-[#FBCB19] mb-3">{t.overviewSup}</h2>}
            <h3 className="text-3xl md:text-4xl font-bold text-white">{t.overviewTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF37CD]/10 text-[#FF37CD] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-zinc-100">{t.obj1Title}</h4>
              <p className="text-zinc-400 leading-relaxed">
                {t.obj1Desc}
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FBCB19]/10 text-[#FBCB19] rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-zinc-100">{t.obj2Title}</h4>
              <p className="text-zinc-400 leading-relaxed">
                {t.obj2Desc}
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FF37CD]/10 text-[#FF37CD] rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-zinc-100">{t.obj3Title}</h4>
              <p className="text-zinc-400 leading-relaxed">
                {t.obj3Desc}
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience & Format Section */}
        <section className="py-20 px-6 bg-zinc-900 text-white border-y border-zinc-800">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-sm font-bold uppercase tracking-wider text-[#FF37CD] mb-3">{t.audienceSup}</h2>
                 <h3 className="text-3xl md:text-4xl font-bold mb-6">{t.audienceTitle}</h3>
                 <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
                   {t.audienceDesc}
                 </p>
                 <div className="flex flex-wrap gap-3">
                   <span className="bg-[#FBCB19]/10 text-[#FBCB19] border border-[#FBCB19]/20 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                     <Users className="w-4 h-4"/> {t.staffPill}
                   </span>
                   <span className="bg-[#FF37CD]/10 text-[#FF37CD] border border-[#FF37CD]/20 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                     <Shield className="w-4 h-4"/> {t.veteransPill}
                   </span>
                   <span className="bg-[#FBCB19]/10 text-[#FBCB19] border border-[#FBCB19]/20 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                     <Zap className="w-4 h-4"/> {t.startupsPill}
                   </span>
                 </div>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 shadow-xl">
                 <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                   <FileText className="text-[#FBCB19] w-6 h-6"/> {t.deliverablesTitle}
                 </h3>
                 <div className="space-y-4">
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-[#FF37CD]/10 text-[#FF37CD] flex items-center justify-center shrink-0 mt-1">
                       <Calendar className="w-4 h-4" />
                     </div>
                     <div>
                       <strong className="block text-zinc-200 mt-1.5">{t.del1}</strong>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-[#FBCB19]/10 text-[#FBCB19] flex items-center justify-center shrink-0 mt-1">
                       <FileText className="w-4 h-4" />
                     </div>
                     <div>
                       <strong className="block text-zinc-200 mt-1.5">{t.del2}</strong>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-[#FBCB19]/10 text-[#FBCB19] flex items-center justify-center shrink-0 mt-1">
                       <BookOpen className="w-4 h-4" />
                     </div>
                     <div>
                       <strong className="block text-zinc-200 mt-1.5">{t.del3}</strong>
                     </div>
                   </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FBCB19] mb-3">{t.scheduleSup}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">{t.scheduleTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FF37CD]/10 text-[#FF37CD] font-bold px-4 py-2 rounded-bl-2xl text-sm border-b border-l border-zinc-800">
                {t.day1Banner}
              </div>
              <h4 className="text-2xl font-bold mb-2 mt-4 text-white">{t.day1Title}</h4>
              <p className="text-zinc-400 mb-8 font-medium">{t.day1Subtitle}</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0 font-bold">1</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">{t.d1c1Title}</h5>
                    <p className="text-sm text-zinc-400 mt-1">{t.d1c1Desc}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0 font-bold">2</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">{t.d1c2Title}</h5>
                    <p className="text-sm text-zinc-400 mt-1">{t.d1c2Desc}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0 font-bold">3</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">{t.d1c3Title}</h5>
                    <p className="text-sm text-zinc-400 mt-1">{t.d1c3Desc}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FBCB19]/10 text-[#FBCB19] font-bold px-4 py-2 rounded-bl-2xl text-sm border-b border-l border-zinc-800">
                {t.day2Banner}
              </div>
              <h4 className="text-2xl font-bold mb-2 mt-4 text-white">{t.day2Title}</h4>
              <p className="text-zinc-400 mb-8 font-medium">{t.day2Subtitle}</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FBCB19] flex items-center justify-center shrink-0 font-bold">4</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">{t.d2c1Title}</h5>
                    <p className="text-sm text-zinc-400 mt-1">{t.d2c1Desc}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FBCB19] flex items-center justify-center shrink-0 font-bold">5</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">{t.d2c2Title}</h5>
                    <p className="text-sm text-zinc-400 mt-1">{t.d2c2Desc}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FBCB19] flex items-center justify-center shrink-0 font-bold">6</div>
                  <div>
                    <h5 className="font-bold text-zinc-100">{t.d2c3Title}</h5>
                    <p className="text-sm text-zinc-400 mt-1">{t.d2c3Desc}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Third Card - Wrap-up */}
          <div className="mt-8 bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-sm relative overflow-hidden">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0 font-bold">
                       <Shield className="w-5 h-5" />
                     </div>
                     <h5 className="font-bold text-zinc-100 text-lg">{t.gdprTitle}</h5>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {t.gdprDesc}
                  </p>
                </div>
                
                <div className="flex flex-col md:border-l border-zinc-800 md:pl-8">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-full bg-[#fbcb19]/10 border border-[#fbcb19]/30 text-[#FBCB19] flex items-center justify-center shrink-0 font-bold">
                       <Zap className="w-5 h-5" />
                     </div>
                     <h5 className="font-bold text-zinc-100 text-lg">{t.workflowsTitle}</h5>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {t.workflowsDesc}
                  </p>
                </div>

                <div className="flex flex-col md:border-l border-zinc-800 md:pl-8">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0 font-bold">
                       <TrendingUp className="w-5 h-5" />
                     </div>
                     <h5 className="font-bold text-zinc-100 text-lg">{t.budgetingTitle}</h5>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {t.budgetingDesc}
                  </p>
                </div>
             </div>
          </div>

          {/* Post-Bootcamp Support */}
          <div className="mt-8 bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#FF37CD] to-[#FBCB19]"></div>
            <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF37CD] flex items-center justify-center shrink-0">
               <Users className="w-8 h-8 text-[#FF37CD]" />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2 text-white">{t.supportTitle}</h4>
              <p className="text-zinc-400 leading-relaxed max-w-3xl">
                {t.supportDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Why Join / Benefits */}
        <section className="py-20 px-6 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FBCB19] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FF37CD] mb-3">{t.benefitsSup}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.benefitsTitle}</h3>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              {t.benefitsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
             <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-center transition-transform hover:-translate-y-1 hover:border-[#FF37CD]/30 hover:shadow-[0_0_20px_rgba(255,55,205,0.15)] group">
               <Clock className="w-10 h-10 text-[#FF37CD] mx-auto mb-4 group-hover:scale-110 transition-transform" />
               <h4 className="text-xl font-bold text-white mb-2">{t.b1Title}</h4>
               <p className="text-zinc-400 text-sm">{t.b1Desc}</p>
             </div>
             <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-center transition-transform hover:-translate-y-1 hover:border-[#FBCB19]/30 hover:shadow-[0_0_20px_rgba(251,203,25,0.15)] group">
               <Shield className="w-10 h-10 text-[#FBCB19] mx-auto mb-4 group-hover:scale-110 transition-transform" />
               <h4 className="text-xl font-bold text-white mb-2">{t.b2Title}</h4>
               <p className="text-zinc-400 text-sm">{t.b2Desc}</p>
             </div>
             <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-center transition-transform hover:-translate-y-1 hover:border-[#FF37CD]/30 hover:shadow-[0_0_20px_rgba(255,55,205,0.15)] group">
               <TrendingUp className="w-10 h-10 text-[#FF37CD] mx-auto mb-4 group-hover:scale-110 transition-transform" />
               <h4 className="text-xl font-bold text-white mb-2">{t.b3Title}</h4>
               <p className="text-zinc-400 text-sm">{t.b3Desc}</p>
             </div>
          </div>
          
          <div className="mt-20 text-center relative z-10">
            <button className="bg-gradient-to-r from-[#FF37CD] to-[#FBCB19] hover:opacity-90 text-zinc-950 px-10 py-5 rounded-lg font-extrabold text-xl transition-all shadow-[0_0_25px_rgba(251,203,25,0.3)] inline-flex items-center justify-center gap-3">
              {t.applyNow} 
              <ArrowRight className="w-6 h-6 border-zinc-950" />
            </button>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900 bg-zinc-950">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
