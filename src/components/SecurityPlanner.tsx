import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert,
  Sliders,
  Users,
  Building,
  Anchor,
  Hotel,
  Activity,
  CheckCircle,
  HelpCircle,
  Video,
  UserCheck,
  Radio,
  FileSpreadsheet,
} from 'lucide-react';

type FacilityType = 'marine' | 'commercial' | 'residential' | 'retail' | 'event';

interface PlanningResult {
  cameras: number;
  guards: number;
  responseLevel: 'Rapid Dispatch' | 'Tier-1 Elite' | 'Standard Secure' | 'Marine Dedicated';
  siraGrade: 'Grade A' | 'Grade B' | 'Grade C' | 'Premium VIP';
  complianceScore: number;
  recommendations: string[];
}

export function SecurityPlanner() {
  const [facilityType, setFacilityType] = useState<FacilityType>('commercial');
  const [areaSize, setAreaSize] = useState<number>(15000); // in sq ft
  const [occupancy, setOccupancy] = useState<number>(120);
  const [smartFeatures, setSmartFeatures] = useState<boolean>(true);
  const [hasMarineAccess, setHasMarineAccess] = useState<boolean>(false);
  const [result, setResult] = useState<PlanningResult>({
    cameras: 0,
    guards: 0,
    responseLevel: 'Rapid Dispatch',
    siraGrade: 'Grade A',
    complianceScore: 100,
    recommendations: [],
  });

  // Automatically switch marine configurations if facility type changes
  useEffect(() => {
    if (facilityType === 'marine') {
      setHasMarineAccess(true);
    } else {
      setHasMarineAccess(false);
    }
  }, [facilityType]);

  // SIRA Compliance Calculation Logic
  useEffect(() => {
    let baseCameras = Math.ceil(areaSize / 2500);
    let baseGuards = Math.ceil(occupancy / 150);
    let siraGrade: 'Grade A' | 'Grade B' | 'Grade C' | 'Premium VIP' = 'Grade C';
    let responseLevel: 'Rapid Dispatch' | 'Tier-1 Elite' | 'Standard Secure' | 'Marine Dedicated' = 'Standard Secure';
    let recommendations: string[] = [];

    // Facility-specific logic matching SIRA UAE requirements
    if (facilityType === 'commercial') {
      baseCameras = Math.ceil(areaSize / 3000) + 4;
      baseGuards = Math.ceil(occupancy / 200) + 1;
      siraGrade = areaSize > 40000 ? 'Grade A' : 'Grade B';
      responseLevel = 'Rapid Dispatch';
      recommendations = [
        'Dedicated server room physical access logs and biometric verification.',
        'Continuous SIRA-compliant 31-day system CCTV archive retention.',
        'Perimeter monitoring with active virtual line-crossing smart alarms.',
      ];
    } else if (facilityType === 'marine') {
      baseCameras = Math.ceil(areaSize / 1500) + 2;
      baseGuards = Math.ceil(occupancy / 50) + 2;
      siraGrade = 'Premium VIP';
      responseLevel = 'Marine Dedicated';
      recommendations = [
        'Advanced weather-sealed thermal dual-lens CCTV tracking.',
        'SIRA licensed marine safety lifeguard and certified vessel helmsmen.',
        'Emergency coastal emergency link with maritime SAR authorities.',
      ];
    } else if (facilityType === 'residential') {
      baseCameras = Math.ceil(areaSize / 4000) + 6;
      baseGuards = Math.ceil(occupancy / 300) + 2;
      siraGrade = 'Grade B';
      responseLevel = 'Standard Secure';
      recommendations = [
        'Smart audio-visual intercom linked securely to central gate house.',
        'Visitor passport scanning / UAE ID automated verification logs.',
        'Active basement lift lobby and stairwell surveillance.',
      ];
    } else if (facilityType === 'retail') {
      baseCameras = Math.ceil(areaSize / 1200) + 8;
      baseGuards = Math.ceil(occupancy / 100) + 3;
      siraGrade = 'Grade A';
      responseLevel = 'Rapid Dispatch';
      recommendations = [
        'High-density point-of-sale loss-prevention camera placement.',
        'Automatic smart crowd density notifications & spatial congestion monitors.',
        'Subtle asset tagging gateways at all dynamic exits.',
      ];
    } else if (facilityType === 'event') {
      baseCameras = Math.ceil(areaSize / 2000) + 12;
      baseGuards = Math.max(5, Math.ceil(occupancy / 80) + 4);
      siraGrade = 'Premium VIP';
      responseLevel = 'Tier-1 Elite';
      recommendations = [
        'Temporary SIRA rapid incident response command console deployment.',
        'Dynamic bag-scan screening stations & VIP transport secure escort plans.',
        'High-speed encrypted emergency team wireless comm network.',
      ];
    }

    if (smartFeatures) {
      baseCameras = Math.max(4, Math.ceil(baseCameras * 0.85)); // AI analytics reduces total required views
      recommendations.push('AI Analytics Active: System supports automated heatmaps and unattended piece of baggage flags.');
    }

    if (hasMarineAccess && facilityType !== 'marine') {
      baseGuards += 1;
      recommendations.push('Coastal Integration: Added dedicated waterfront patrol officer.');
    }

    // Compute synthetic compliance score based on current features
    let score = 85;
    if (smartFeatures) score += 10;
    if (areaSize > 25000 && baseGuards > 2) score += 5;
    score = Math.min(100, score);

    setResult({
      cameras: baseCameras,
      guards: baseGuards,
      responseLevel,
      siraGrade,
      complianceScore: score,
      recommendations,
    });
  }, [facilityType, areaSize, occupancy, smartFeatures, hasMarineAccess]);

  const facilityCards: { type: FacilityType; label: string; icon: any; desc: string }[] = [
    { type: 'commercial', label: 'Commercial Complex', icon: Building, desc: 'Corporate towers & offices' },
    { type: 'marine', label: 'Marine & Yacht', icon: Anchor, desc: 'Luxury vessels & marinas' },
    { type: 'residential', label: 'Residential Tower', icon: Hotel, desc: 'Apartments & community gates' },
    { type: 'retail', label: 'Retail & Mall', icon: FileSpreadsheet, desc: 'High traffic shopping malls' },
    { type: 'event', label: 'Prestige Event', icon: Users, desc: 'VIP conferences & exhibitions' },
  ];

  return (
    <div className="w-full relative py-12">
      {/* Decorative internal high-tech design grid frame */}
      <div className="absolute inset-0 pointer-events-none border border-[#C8102E]/10 rounded-3xl bg-slate-50/50 -z-10" />

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: INTERACTIVE INPUT CONTROLS */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-8 shadow-sm">
          
          {/* Header Title Accent */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#C8102E] font-bold uppercase bg-[#C8102E]/5 px-3 py-1 rounded">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Simulator // SIRA V4.1 Codes</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
              SIRA Secure Resource Planner
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg leading-relaxed font-sans">
              Adjust your facility details dynamically to preview customized security staffing levels, SIRA camera counts, and technical UAE regulatory compliance recommendations.
            </p>
          </div>

          {/* FACILITY SELECT CARDS */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider block">
              Step 1: Select Facility Classification
            </label>
            <div className="grid sm:grid-cols-3 gap-3">
              {facilityCards.map((card) => {
                const Icon = card.icon;
                const isSelected = facilityType === card.type;
                return (
                  <button
                    key={card.type}
                    type="button"
                    onClick={() => setFacilityType(card.type)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group hover:scale-[1.02]
                      ${isSelected 
                        ? 'border-[#C8102E] bg-slate-950 text-white shadow-lg shadow-slate-950/20' 
                        : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-800 hover:border-slate-300'
                      }`}
                  >
                    {/* Glowing highlight in chosen card */}
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#C8102E]/20 to-transparent blur-md rounded-full pointer-events-none" />
                    )}
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-6
                        ${isSelected ? 'text-[#C8102E]' : 'text-slate-400 group-hover:text-[#C8102E]'}`} 
                      />
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-ping" />}
                    </div>
                    <div className="font-bold text-xs uppercase tracking-wider">{card.label}</div>
                    <div className="text-[10px] opacity-70 mt-0.5 line-clamp-1">{card.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* AREA SIZE SLIDER */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="font-bold text-slate-600 uppercase tracking-wider">Step 2: Total Footprint Size</span>
              <span className="text-[#C8102E] font-black">{areaSize.toLocaleString()} sq. ft.</span>
            </div>
            <div className="relative group">
              <input
                type="range"
                min="2000"
                max="120000"
                step="2000"
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
                className="w-full accent-[#C8102E] bg-slate-100 rounded-lg appearance-none h-2 cursor-pointer transition focus:outline-none"
              />
              <div className="flex justify-between text-[9px] text-slate-400 font-mono pt-1">
                <span>2,000 SQ FT</span>
                <span>60,000 SQ FT</span>
                <span>120,000 SQ FT</span>
              </div>
            </div>
          </div>

          {/* OCCUPANCY SLIDER */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="font-bold text-slate-600 uppercase tracking-wider">Step 3: Average Daily Capacity</span>
              <span className="text-[#C8102E] font-black">{occupancy} occupants</span>
            </div>
            <div className="relative group">
              <input
                type="range"
                min="10"
                max="1200"
                step="10"
                value={occupancy}
                onChange={(e) => setOccupancy(Number(e.target.value))}
                className="w-full accent-[#C8102E] bg-slate-100 rounded-lg appearance-none h-2 cursor-pointer transition focus:outline-none"
              />
              <div className="flex justify-between text-[9px] text-slate-400 font-mono pt-1">
                <span>10 GUESTS</span>
                <span>600 GUESTS</span>
                <span>1,200 GUESTS</span>
              </div>
            </div>
          </div>

          {/* TOGGLES ROW */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {/* Toggle AI Analytics */}
            <label className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer select-none transition-all duration-200
              ${smartFeatures 
                ? 'border-[#C8102E]/30 bg-red-50/20' 
                : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-lg ${smartFeatures ? 'bg-[#C8102E]/10 text-[#C8102E]' : 'bg-slate-100 text-slate-400'}`}>
                  <Activity className="w-4 h-4 animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-800 uppercase tracking-wide">AI Smart Analytics</span>
                  <span className="block text-[10px] text-slate-400 font-sans">CCTV perimeter violation checks</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={smartFeatures}
                onChange={(e) => setSmartFeatures(e.target.checked)}
                className="rounded accent-[#C8102E] w-4 h-4 cursor-pointer"
              />
            </label>

            {/* Toggle Waterfront patrolling support */}
            <label className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer select-none transition-all duration-200
              ${hasMarineAccess 
                ? 'border-[#C8102E]/30 bg-red-50/20' 
                : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-lg ${hasMarineAccess ? 'bg-[#C8102E]/10 text-[#C8102E]' : 'bg-slate-100 text-slate-400'}`}>
                  <Anchor className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Waterfront Access</span>
                  <span className="block text-[10px] text-slate-400 font-sans">Requires certified marine patrol</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={hasMarineAccess}
                disabled={facilityType === 'marine'}
                onChange={(e) => setHasMarineAccess(e.target.checked)}
                className="rounded accent-[#C8102E] w-4 h-4 cursor-pointer disabled:opacity-50"
              />
            </label>
          </div>

        </div>

        {/* RIGHT COLUMN: LIVELY LIVE COMPLIANCE ENGINE FEEDBACK */}
        <div className="lg:col-span-5 bg-gradient-to-tr from-[#13151b] via-[#0D0E12] to-[#1A1C23] border border-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-xl overflow-hidden text-white ring-1 ring-inset ring-white/5">
          
          {/* Animated Background Grid & Sheen overlays */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
               style={{
                 backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                 backgroundSize: '20px 20px'
               }}
          />
          <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-[#C8102E]/10 blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-slate-600/10 blur-[60px] pointer-events-none" />

          {/* Top Compliance Ribbon indicator */}
          <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-[#C8102E] font-bold">CORE_ENGINE // SYNCHRONIZED</span>
            </div>
            <div className="text-[10px] font-mono opacity-50 uppercase">REQ_SYS: OK</div>
          </div>

          <div className="space-y-6 flex-grow flex flex-col justify-center">
            
            {/* compliance gauge */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-[#C8102E] bg-white/[0.02] shadow-xl shadow-[#C8102E]/10">
                
                {/* Internal dynamic pulsing radar sweep */}
                <div className="absolute inset-2 rounded-full border border-[#C8102E]/20 animate-ping opacity-30 pointer-events-none" />
                
                <div className="text-center space-y-0.5">
                  <div className="text-3xl font-black text-white font-mono tracking-tighter">
                    {result.complianceScore}%
                  </div>
                  <div className="text-[9px] font-mono text-[#C8102E] font-bold tracking-widest">
                    VALIDATED
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#C8102E]/15 border border-[#C8102E]/20 text-[9px] font-mono text-red-400 font-bold uppercase tracking-wider">
                  SIRA Classification: {result.siraGrade}
                </span>
                <p className="text-[11px] text-slate-400 tracking-wide">
                  Calculated based on UAE Federal Safety Standards laws
                </p>
              </div>
            </div>

            {/* RESOURCE OUTPUT INDICATORS */}
            <div className="grid grid-cols-2 gap-4 pb-2">
              
              {/* Camera metric */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 relative group hover:bg-white/[0.05] transition duration-200">
                <div className="flex items-center justify-between mb-2">
                  <Video className="w-4 h-4 text-red-400" />
                  <span className="text-[9px] font-mono text-slate-500">CCTV_REQ</span>
                </div>
                <div className="text-2xl font-black font-mono text-white tracking-tight">
                  {result.cameras} Fixed
                </div>
                <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-wide">
                  SIRA Approved Views
                </div>
              </div>

              {/* Guard metric */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 relative group hover:bg-white/[0.05] transition duration-200">
                <div className="flex items-center justify-between mb-2">
                  <UserCheck className="w-4 h-4 text-red-400" />
                  <span className="text-[9px] font-mono text-slate-500">STAFF_REQ</span>
                </div>
                <div className="text-2xl font-black font-mono text-white tracking-tight">
                  {result.guards} Guards
                </div>
                <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-wide text-ellipsis overflow-hidden whitespace-nowrap">
                  Patrol Officers Count
                </div>
              </div>

            </div>

            {/* RESPONSE SPEED STATUS BAR */}
            <div className="space-y-2 border-t border-white/10 pt-4">
              <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-slate-400">
                <span>INCIDENT RESPONSE ARCHITECTURE</span>
                <span className="text-white font-bold">{result.responseLevel}</span>
              </div>
              <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 to-[#C8102E]"
                  initial={{ width: '0%' }}
                  animate={{ 
                    width: facilityType === 'event' || facilityType === 'retail' ? '100%' :
                           facilityType === 'marine' ? '90%' : '75%' 
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* LIVE SIRA STANDARDS LIST */}
            <div className="space-y-2 pt-1">
              <span className="text-[9px] font-mono text-[#C8102E] font-bold tracking-widest uppercase block">
                Approved Directives Map:
              </span>
              <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
                <AnimatePresence mode="popLayout">
                  {result.recommendations.map((rec, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-start gap-2 text-[11px] text-slate-300 leading-normal"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Quick CTA inside Planner */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2 text-[8px] font-mono text-slate-500 tracking-wider">
            <span>CODENAME // PRIME_OPS</span>
            <a 
              href="#contact" 
              className="px-3 py-1 bg-[#C8102E] hover:bg-white hover:text-black rounded text-[9px] font-sans font-bold text-white transition-all uppercase"
            >
              Get Custom Proposal
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SecurityPlanner;
