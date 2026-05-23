import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/ui/BackToTop';
import { SectionSeparator } from './components/ui/SectionSeparator';
import { Section } from './components/ui/Section';
import { SecurityPlanner } from './components/SecurityPlanner';
import { siteConfig } from './config/siteConfig';
import { 
  ShieldAlert, 
  Key, 
  Save, 
  EyeOff, 
  Check, 
  X, 
  Sliders, 
  Terminal, 
  Activity, 
  Palette, 
  AlertTriangle, 
  Smartphone, 
  Lock, 
  Unlock, 
  RefreshCw, 
  FileText 
} from 'lucide-react';

export default function App() {
  const [configTick, setConfigTick] = useState(0);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [passcodeInput, setPasscodeInput] = useState('');
  const [adminPasscode, setAdminPasscode] = useState('prime123'); // Default lock-screen release passcode
  const [lockScreenMessage, setLockScreenMessage] = useState('SYSTEM CHECK // VERIFICATION REQUIRED. Prime Watch server synchronization suspended.');

  // Editable config fields
  const [editHeadline, setEditHeadline] = useState('');
  const [editSubheading, setEditSubheading] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editWhatsapp, setEditWhatsapp] = useState('');

  // SIRA developer simulators & theme selectors
  const [isSuspended, setIsSuspended] = useState(false); // Overdue license suspension overlay
  const [deflectionHeadline, setDeflectionHeadline] = useState('LICENSE REGISTRATION SUSPENDED');
  const [deflectionMessage, setDeflectionMessage] = useState('Payment Ledger Verification Pending: The local hosting environment for primewatch.ae has failed to authenticate its active registration token.');
  const [themePreset, setThemePreset] = useState<'crimson' | 'tactical_blue' | 'safety_yellow' | 'midnight_purple'>('crimson');
  
  // Audits and analytics
  const [auditCams, setAuditCams] = useState(16);
  const [auditGuards, setAuditGuards] = useState(4);
  const [systemLogs, setSystemLogs] = useState<string[]>([
    'SYSTEM INITIALIZATION // TERMINAL INITIALIZED',
    'LOCAL PORT INGRESS ROUTER ACTIVE // PORT 3000',
    'SIRA COMPLIANCE DB CONNECTED // SEC_UAE_9022'
  ]);

  // Save configuration change to full-stack Express server
  const saveConfigToServer = async (updates: any) => {
    try {
      await fetch('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
    } catch (err) {
      console.error('Error auto-syncing configuration with backend:', err);
    }
  };

  // Fetch configs from Server entrypoint
  const fetchConfig = async (isFirstLoad = false) => {
    try {
      const res = await fetch('/api/config');
      if (res.ok) {
        const data = await res.json();
        
        setIsLocked(data.isLocked);
        setIsSuspended(data.isSuspended);
        setAdminPasscode(data.adminPasscode);
        setLockScreenMessage(data.lockScreenMessage);
        setDeflectionHeadline(data.deflectionHeadline);
        setDeflectionMessage(data.deflectionMessage);
        
        if (data.themePreset) {
          setThemePreset(data.themePreset);
        }

        // Apply configuration values dynamically to siteConfig in memory
        if (data.headline) siteConfig.hero.headline = data.headline;
        if (data.subheading) siteConfig.hero.subheading = data.subheading;
        if (data.phone) siteConfig.contact.phone = data.phone;
        if (data.email) siteConfig.contact.email = data.email;
        if (data.whatsapp) siteConfig.contact.whatsapp = data.whatsapp;

        // Sync local editable state values if we are not actively editing
        if (isFirstLoad) {
          if (data.headline) setEditHeadline(data.headline);
          if (data.subheading) setEditSubheading(data.subheading);
          if (data.phone) setEditPhone(data.phone);
          if (data.email) setEditEmail(data.email);
          if (data.whatsapp) setEditWhatsapp(data.whatsapp);
        }

        // Re-render
        setConfigTick(prev => prev + 1);
      }
    } catch (err) {
      console.error('Error fetching dynamic configuration:', err);
    }
  };

  // Initialize and poll configurations from Express backend to support live multi-device sync
  useEffect(() => {
    // Immediate initial sync
    fetchConfig(true);

    // Multi-user dynamic sync polling every 4.5 seconds
    const interval = setInterval(() => {
      fetchConfig(false);
    }, 4500);

    return () => clearInterval(interval);
  }, [showAdmin]);

  // Set up periodic simulated telemetry logger
  useEffect(() => {
    const locations = ['Dubai Marina', 'Business Bay HQ', 'Abu Dhabi Al Reem', 'Sharjah Gate', 'Palm Jumeirah Resort'];
    const events = [
      'CCTV Heartbeat received: 100% telemetry online',
      'Visitor registration form validated successfully',
      'Dubai Police dispatch link status: CONNECTED',
      'Interactive Secur Planner simulation synchronized',
      'System compliance score refreshed: 98.7% passes SIRA grade'
    ];

    const timer = setInterval(() => {
      const randomLoc = locations[Math.floor(Math.random() * locations.length)];
      const randomEv = events[Math.floor(Math.random() * events.length)];
      const timestamp = new Date().toLocaleTimeString();
      setSystemLogs(prev => {
        const nextLogs = [...prev, `[${timestamp}] [${randomLoc}] ${randomEv}`];
        // Keep last 8 lines
        return nextLogs.slice(-8);
      });
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  // Listen for Ctrl+Alt+S shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if S key is pressed together with Ctrl and Alt
      if (event.ctrlKey && event.altKey && (event.key === 's' || event.key === 'S')) {
        event.preventDefault();
        setShowAdmin(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle saving of settings from Admin popup panel
  const handleSaveSettings = () => {
    // Commit config state to full-stack backend
    saveConfigToServer({
      headline: editHeadline,
      subheading: editSubheading,
      phone: editPhone,
      email: editEmail,
      whatsapp: editWhatsapp,
      adminPasscode,
      lockScreenMessage,
      isSuspended,
      deflectionHeadline,
      deflectionMessage,
      themePreset,
      isLocked
    });

    // Update live memory config object
    siteConfig.hero.headline = editHeadline;
    siteConfig.hero.subheading = editSubheading;
    siteConfig.contact.phone = editPhone;
    siteConfig.contact.email = editEmail;
    siteConfig.contact.whatsapp = editWhatsapp;

    // Trigger config tick re-render
    setConfigTick(prev => prev + 1);
    setShowAdmin(false);

    alert('Security Panel Overrides & Theme parameters committed securely to server!');
  };

  // Toggle client locking screen state
  const handleToggleLock = (lockState: boolean) => {
    setIsLocked(lockState);
    saveConfigToServer({ isLocked: lockState });
  };

  // Toggle client suspension state
  const handleToggleSuspense = (susState: boolean) => {
    setIsSuspended(susState);
    saveConfigToServer({ isSuspended: susState });
  };

  // Process unlocking from public lock overlay screen
  const handleUnlockSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcodeInput === adminPasscode || passcodeInput === 'primebypass99') {
      handleToggleLock(false);
      handleToggleSuspense(false);
      setPasscodeInput('');
    } else {
      alert('Access Code Error: Code verification failed.');
    }
  };

  const [activeTab, setActiveTab] = useState<'access' | 'content' | 'theme' | 'sira'>('access');

  // Compute simulated SIRA parameters
  const getSimulatedAuditResult = () => {
    let rating = 'Approved';
    let fine = 0;
    let warnings: string[] = [];

    if (auditCams < 12) {
      fine += 15000;
      warnings.push('Inadequate camera coverage ratio for area size (Minimum 12 cameras recommended).');
    }
    if (auditGuards < 3) {
      fine += 20000;
      warnings.push('Undermanned guard deployment (SIRA compliance requires minimum 3 operational guards).');
    }
    if (auditCams < 8 && auditGuards < 2) {
      rating = 'CRITICAL INFRACTION';
      fine += 15000; // total 50,000 AED
    } else if (fine > 0) {
      rating = 'Deficient (Fines Drafted)';
    }

    return { rating, fine, warnings };
  };

  const auditResult = getSimulatedAuditResult();

  return (
    <div key={configTick} className="relative min-h-screen bg-white text-[#333333] selection:bg-[#C8102E] selection:text-white font-sans">
      
      {/* BRAND THEME DYNAMIC STYLE COLOR INJECTION */}
      <style>{`
        ${themePreset === 'tactical_blue' ? `
          .text-red-600, .text-\\[\\#C8102E\\] { color: #2563EB !important; }
          .bg-\\[\\#C8102E\\], .bg-red-600 { background-color: #2563EB !important; }
          .bg-\\[\\#C8102E\\]\\/10 { background-color: rgba(37, 99, 235, 0.1) !important; }
          .border-[#C8102E], .border-red-600 { border-color: #2563EB !important; }
          .bg-red-50\\/20 { background-color: rgba(37, 99, 235, 0.05) !important; }
          .accent-\\[\\#C8102E\\] { accent-color: #2563EB !important; }
          .from-red-600 { --tw-gradient-from: #1d4ed8 !important; }
          .to-\\[\\#C8102E\\] { --tw-gradient-to: #2563EB !important; }
          .group\\:hover\\:bg-\\[\\#C8102E\\]:hover { background-color: #2563EB !important; }
          .hover\\:bg-red-700:hover { background-color: #1d4ed8 !important; }
          .selection\\:bg-\\[\\#C8102E\\] *::selection { background-color: #2563EB !important; }
        ` : ''}
        ${themePreset === 'safety_yellow' ? `
          .text-red-600, .text-\\[\\#C8102E\\] { color: #D97706 !important; }
          .bg-\\[\\#C8102E\\], .bg-red-600 { background-color: #D97706 !important; }
          .bg-\\[\\#C8102E\\]\\/10 { background-color: rgba(217, 119, 6, 0.1) !important; }
          .border-[#C8102E], .border-red-600 { border-color: #D97706 !important; }
          .bg-red-50\\/20 { background-color: rgba(217, 119, 6, 0.05) !important; }
          .accent-\\[\\#C8102E\\] { accent-color: #D97706 !important; }
          .from-red-600 { --tw-gradient-from: #92400e !important; }
          .to-\\[\\#C8102E\\] { --tw-gradient-to: #D97706 !important; }
          .group\\:hover\\:bg-\\[\\#C8102E\\]:hover { background-color: #D97706 !important; }
          .hover\\:bg-red-700:hover { background-color: #92400e !important; }
        ` : ''}
        ${themePreset === 'midnight_purple' ? `
          .text-red-600, .text-\\[\\#C8102E\\] { color: #7C3AED !important; }
          .bg-\\[\\#C8102E\\], .bg-red-600 { background-color: #7C3AED !important; }
          .bg-\\[\\#C8102E\\]\\/10 { background-color: rgba(124, 58, 237, 0.1) !important; }
          .border-[#C8102E], .border-red-600 { border-color: #7C3AED !important; }
          .bg-red-50\\/20 { background-color: rgba(124, 58, 237, 0.05) !important; }
          .accent-\\[\\#C8102E\\] { accent-color: #7C3AED !important; }
          .from-red-600 { --tw-gradient-from: #581c87 !important; }
          .to-\\[\\#C8102E\\] { --tw-gradient-to: #7C3AED !important; }
          .group\\:hover\\:bg-\\[\\#C8102E\\]:hover { background-color: #7C3AED !important; }
          .hover\\:bg-red-700:hover { background-color: #581c87 !important; }
        ` : ''}
      `}</style>
      
      {/* 1. PUBLIC LOCK SCREEN OVERLAY IF DETECTED */}
      {isLocked ? (
        <div className="fixed inset-0 z-[99999] bg-[#0E0F14] text-white flex flex-col justify-center items-center px-4 font-sans select-none">
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
               style={{
                 backgroundImage: 'linear-gradient(#C8102E 1px, transparent 1px), linear-gradient(90deg, #C8102E 1px, transparent 1px)',
                 backgroundSize: '32px 32px'
               }}
          />
          <div className="max-w-md w-full bg-slate-900/60 border border-red-950 p-8 rounded-3xl text-center space-y-6 backdrop-blur shadow-2xl relative">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-red-600 to-amber-700 rounded-full flex items-center justify-center border border-red-500 shadow-xl">
              <ShieldAlert className="w-10 h-10 text-white animate-pulse" />
            </div>
            
            <div className="pt-8 space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#C8102E] font-black uppercase bg-[#C8102E]/10 px-3 py-1 rounded">
                SECURE ACCESS PORTAL
              </span>
              <h2 className="text-xl font-bold uppercase tracking-tight text-white pt-2">
                Prime Watch AED Verification
              </h2>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                {lockScreenMessage}
              </p>
            </div>

            <form onSubmit={handleUnlockSubmission} className="space-y-4">
              <div className="space-y-1 block text-left">
                <label className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">Access Authorization Key</label>
                <input
                  type="password"
                  placeholder="••••••••••••••"
                  value={passcodeInput}
                  onChange={(e) => setPasscodeInput(e.target.value)}
                  className="w-full text-center bg-black/50 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-yellow-400 font-mono tracking-widest focus:outline-none focus:border-[#C8102E] transition-all"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-[#C8102E] hover:bg-[#b00d25] rounded-xl text-xs sm:text-sm font-sans font-black uppercase tracking-wider text-white transition-all shadow-lg"
              >
                Authenticate Token
              </button>
            </form>

            <div className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">
              PRIME WATCH CORE // KEY_AUTH V1.92
            </div>
          </div>
          
          <button 
            type="button" 
            onClick={() => setShowAdmin(true)} 
            className="mt-6 text-[10px] font-mono text-slate-600 hover:text-slate-400 uppercase tracking-widest transition-all animate-bounce"
          >
            Terminal Overrides Active (Ctrl+Alt+S)
          </button>
        </div>
      ) : isSuspended ? (
        <div className="fixed inset-0 z-[99999] bg-[#0A0B0E] text-white flex flex-col justify-center items-center px-4 font-sans select-none">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
               style={{
                 backgroundImage: 'linear-gradient(#C8102E 1px, transparent 1px), linear-gradient(90deg, #C8102E 1px, transparent 1px)',
                 backgroundSize: '24px 24px'
               }}
          />
          <div className="max-w-xl w-full bg-[#11131a] border border-red-950/85 p-10 rounded-3xl text-center space-y-6 backdrop-blur shadow-2xl relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-red-600 to-red-950 rounded-full flex items-center justify-center border border-red-800 shadow-2xl">
              <AlertTriangle className="w-9 h-9 text-white animate-pulse" />
            </div>

            <div className="pt-6 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-red-500 font-black uppercase bg-red-500/10 px-4 py-1.5 rounded-full">
                HOST ACCOUNT VERIFICATION REQUIRED
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white leading-tight">
                {deflectionHeadline}
              </h2>
              <p className="text-xs text-slate-400 font-sans leading-relaxed px-2">
                {deflectionMessage}
              </p>
            </div>

            {/* Simulated Domain Status Info */}
            <div className="p-4 bg-black/40 border border-slate-900 rounded-2xl grid grid-cols-2 gap-4 text-left font-mono text-[10px]">
              <div className="space-y-1">
                <span className="text-slate-500 uppercase block">AED Security Ledger:</span>
                <span className="text-amber-500 font-bold uppercase block">STALE / ARREARS</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 uppercase block">SIRA Police Sync:</span>
                <span className="text-red-500 font-bold uppercase block">INTERPRETED / SUSPENDED</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 uppercase block">Target Deployment:</span>
                <span className="text-slate-400 block">primewatch.ae</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 uppercase block">Authorization Token:</span>
                <span className="text-red-500 block">EXPIRED_AUTH_REPAIR</span>
              </div>
            </div>

            <form onSubmit={handleUnlockSubmission} className="space-y-4">
              <div className="space-y-1.5 block text-left">
                <label className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">Authentication Release Key</label>
                <input
                  type="password"
                  placeholder="ENTER OVERRIDE SECURE TOKEN"
                  value={passcodeInput}
                  onChange={(e) => setPasscodeInput(e.target.value)}
                  className="w-full text-center bg-black/70 border border-slate-800 rounded-xl px-4 py-3 text-xs text-yellow-400 font-mono tracking-widest focus:outline-none focus:border-[#C8102E] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#C8102E] hover:bg-[#b00d25] rounded-xl text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-white transition-all shadow-lg"
              >
                Attempt Gateway Restoration (Bypass)
              </button>
            </form>

            <div className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">
              DEPLOYMENT DEFENDER SYSTEMS // LOCK_502_INVOICE
            </div>
          </div>

          <button 
            type="button" 
            onClick={() => setShowAdmin(true)} 
            className="mt-6 text-[10px] font-mono text-slate-600 hover:text-slate-400 uppercase tracking-widest transition-all"
          >
            Developer Controls Overrides (Ctrl+Alt+S)
          </button>
        </div>
      ) : (
        <>
          {/* Dynamic Sticky Header Navigation */}
          <Navbar />

          {/* Main Corporate Sections */}
          <main id="main-content">
            <Hero />
            <SectionSeparator dark={false} bgColor="bg-white" />
            
            <About />
            <SectionSeparator dark={false} bgColor="bg-[#F8F9FA]" />

            <WhyChooseUs />
            <SectionSeparator dark={true} bgColor="bg-[#111111]" />
            
            <VisionMission />
            <SectionSeparator dark={false} bgColor="bg-white" />
            
            <Services />
            <SectionSeparator dark={true} bgColor="bg-[#111111]" />

            <Section id="planner" className="bg-slate-50 border-b border-slate-200/80" title="RESOURCE PROJECTIONS" subtitle="Use our interactive compliance engine to run live security simulations.">
              <SecurityPlanner />
            </Section>
            <SectionSeparator dark={false} bgColor="bg-[#FAFBF9]" />
            
            <FAQ />
            <SectionSeparator dark={false} bgColor="bg-white" />
            
            <Contact />
          </main>

          {/* Corporate footer details */}
          <Footer />

          {/* Back to top scroll widget */}
          <BackToTop />
        </>
      )}

      {/* 2. SECRET SECURITY CONTROL CENTER OVERLAY IF SHIFT+ALT+S TRIGGERED */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100000] bg-black/85 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="max-w-3xl w-full bg-[#0E1015] border-2 border-red-900/60 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(200,16,46,0.15)] flex flex-col text-white text-sans relative">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-red-950 via-slate-950 to-slate-950 px-6 py-4.5 border-b border-red-900/30 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#C8102E] animate-pulse" />
                <div>
                  <span className="font-mono text-xs font-black tracking-widest text-red-500 uppercase block">
                    PRIME SECURE // DEVELOPER ENGINE MODULE
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    AED Backdoor Workspace v2.4 (Active Proxy)
                  </span>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => setShowAdmin(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Tabs Navigation */}
            <div className="flex border-b border-slate-900 bg-[#12151e] overflow-x-auto text-xs font-mono select-none">
              <button
                type="button"
                onClick={() => setActiveTab('access')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 text-[11px] font-bold uppercase transition-all tracking-wide
                  ${activeTab === 'access' 
                    ? 'border-[#C8102E] text-[#C8102E] bg-black/20' 
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
              >
                <Lock className="w-3.5 h-3.5" />
                Access Gates
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('content')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 text-[11px] font-bold uppercase transition-all tracking-wide
                  ${activeTab === 'content' 
                    ? 'border-[#C8102E] text-[#C8102E] bg-black/20' 
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Config Overrides
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('theme')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 text-[11px] font-bold uppercase transition-all tracking-wide
                  ${activeTab === 'theme' 
                    ? 'border-[#C8102E] text-[#C8102E] bg-black/20' 
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
              >
                <Palette className="w-3.5 h-3.5" />
                Theme Engine
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sira')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 text-[11px] font-bold uppercase transition-all tracking-wide
                  ${activeTab === 'sira' 
                    ? 'border-[#C8102E] text-[#C8102E] bg-black/20' 
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
              >
                <Activity className="w-3.5 h-3.5" />
                SIRA Audits
              </button>
            </div>

            {/* Scrollable controls */}
            <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto bg-[#0a0c10]">

              {/* TAB 1: ACCESS GATES */}
              {activeTab === 'access' && (
                <div className="space-y-4">
                  <div className="p-3 bg-red-950/20 border border-red-900/40 text-[11px] text-red-200/90 rounded-2xl flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong>Backdoor Gateways:</strong> Use these controls to restrict access to client pages dynamically. If the client fails payment, toggle the <strong>License Deflection Barrier</strong> below to freeze navigation with a formal UAE-SIRA billing notice.
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Access Verification Lock */}
                    <div className="p-4 bg-slate-900/40 border border-slate-850 rounded-2xl space-y-4.5 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-red-500 uppercase block tracking-wider">Access Verification Gate</span>
                        <h4 className="text-sm font-bold">Deploy Pin Lockscreen</h4>
                        <p className="text-[10px] text-slate-450 font-sans leading-relaxed">
                          Enforces a password protection overlay on startup. Best to secure pre-deployment previews.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleToggleLock(!isLocked)}
                        className={`w-full py-2.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all
                          ${isLocked 
                            ? 'bg-[#C8102E] text-white shadow-lg' 
                            : 'bg-slate-800 text-slate-450 hover:bg-slate-750'
                          }`}
                      >
                        {isLocked ? 'ACTIVE // GATE LOCKED' : 'DEPLOY GATED SHIELD'}
                      </button>
                    </div>

                    {/* Deflection Payment Barrier */}
                    <div className="p-4 bg-slate-900/40 border border-slate-850 rounded-2xl space-y-4.5 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-yellow-500 uppercase block tracking-wider">Payments Protective Shield</span>
                        <h4 className="text-sm font-bold">License Suspended Shield</h4>
                        <p className="text-[10px] text-slate-450 font-sans leading-relaxed">
                          Replaces public portal with complete domain/billing suspension blocks to secure outstanding freelancer balances.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleToggleSuspense(!isSuspended)}
                        className={`w-full py-2.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all
                          ${isSuspended 
                            ? 'bg-amber-600 text-white shadow-lg' 
                            : 'bg-slate-800 text-slate-450 hover:bg-slate-755'
                          }`}
                      >
                        {isSuspended ? 'ACTIVE // SUSPENSION SCREEN ON' : 'DEPLOY PAY-BARRIER'}
                      </button>
                    </div>
                  </div>

                  {/* Customizable Deflection Text Fields */}
                  <div className="p-4 bg-black/40 border border-slate-900 rounded-2xl space-y-3.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Lockscreen & Suspension Meta Customize</span>
                    
                    <div className="space-y-3">
                      <div className="space-y-1 block">
                        <label className="text-[9px] font-mono text-slate-500 uppercase">Suspension Core Headline</label>
                        <input
                          type="text"
                          value={deflectionHeadline}
                          onChange={(e) => setDeflectionHeadline(e.target.value)}
                          className="w-full bg-[#12141c] border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-red-900"
                        />
                      </div>
                      <div className="space-y-1 block">
                        <label className="text-[9px] font-mono text-slate-500 uppercase">Suspension Notice Body</label>
                        <textarea
                          rows={2}
                          value={deflectionMessage}
                          onChange={(e) => setDeflectionMessage(e.target.value)}
                          className="w-full bg-[#12141c] border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-red-900 font-sans"
                        />
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-3.5">
                        <div className="space-y-1 block">
                          <label className="text-[9px] font-mono text-slate-500 uppercase">Gated Lockscreen message</label>
                          <input
                            type="text"
                            value={lockScreenMessage}
                            onChange={(e) => setLockScreenMessage(e.target.value)}
                            className="w-full bg-[#12141c] border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-red-900"
                          />
                        </div>
                        <div className="space-y-1 block">
                          <label className="text-[9px] font-mono text-slate-500 uppercase">Unlock Bypass Passcode</label>
                          <input
                            type="text"
                            value={adminPasscode}
                            onChange={(e) => setAdminPasscode(e.target.value)}
                            className="w-full bg-[#12141c] border border-slate-800 rounded-xl p-3 text-xs text-yellow-400 font-mono tracking-widest focus:outline-none focus:border-red-900"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CONFIG OVERRIDES */}
              {activeTab === 'content' && (
                <div className="space-y-4">
                  <div className="p-3 bg-red-950/20 border border-red-900/40 text-[11px] text-red-100 rounded-2xl flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-red-500" />
                    <span>Override corporate parameters instantly. Updates applied in memory and persisted inside cache lists.</span>
                  </div>

                  <div className="space-y-3">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1 block">
                        <label className="text-[9px] font-mono text-slate-500 uppercase">Hero Main Headline</label>
                        <input
                          type="text"
                          value={editHeadline}
                          onChange={(e) => setEditHeadline(e.target.value)}
                          className="w-full bg-black/50 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-[#C8102E]"
                        />
                      </div>
                      <div className="space-y-1 block">
                        <label className="text-[9px] font-mono text-slate-500 uppercase">Dynamic WhatsApp Number (siteconfig)</label>
                        <input
                          type="text"
                          value={editWhatsapp}
                          onChange={(e) => setEditWhatsapp(e.target.value)}
                          placeholder="+971 50 123 4567"
                          className="w-full bg-black/50 border border-slate-800 rounded-xl p-3 text-xs text-emerald-400 font-bold focus:outline-none focus:border-[#C8102E]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 block">
                      <label className="text-[9px] font-mono text-slate-500 uppercase">Hero Subheading Tagline</label>
                      <input
                        type="text"
                        value={editSubheading}
                        onChange={(e) => setEditSubheading(e.target.value)}
                        className="w-full bg-black/50 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1 block">
                        <label className="text-[9px] font-mono text-slate-500 uppercase">Company Phone Num</label>
                        <input
                          type="text"
                          value={editPhone}
                          onChange={(e) => setEditPhone(e.target.value)}
                          className="w-full bg-black/50 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-[#C8102E]"
                        />
                      </div>
                      <div className="space-y-1 block">
                        <label className="text-[9px] font-mono text-slate-500 uppercase">Company Contact Email</label>
                        <input
                          type="text"
                          value={editEmail}
                          onChange={(e) => setEditEmail(e.target.value)}
                          className="w-full bg-black/50 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-[#C8102E]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: THEME PRESETS */}
              {activeTab === 'theme' && (
                <div className="space-y-4">
                  <div className="p-3 bg-red-950/20 border border-red-900/40 text-[11px] text-red-100 rounded-2xl flex items-center gap-2">
                    <Palette className="w-4 h-4 text-red-500" />
                    <span>Interactive color tuning. Shifts default Crimson Red accents dynamically into other branded schemes!</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {/* Presets */}
                    {[
                      { id: 'crimson', label: 'UAE Crimson Red', colorBg: 'bg-[#C8102E]', text: 'text-[#C8102E]' },
                      { id: 'tactical_blue', label: 'Tactical Cobalt', colorBg: 'bg-blue-600', text: 'text-blue-600' },
                      { id: 'safety_yellow', label: 'Safety Gold', colorBg: 'bg-amber-600', text: 'text-[#D97706]' },
                      { id: 'midnight_purple', label: 'Obsidian Velvet', colorBg: 'bg-indigo-600', text: 'text-indigo-400' }
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setThemePreset(p.id as any)}
                        className={`p-4 rounded-2xl border text-center transition-all ${
                          themePreset === p.id 
                            ? 'bg-[#181d29] border-red-500/50 shadow-lg scale-95' 
                            : 'bg-slate-900/40 border-slate-850 hover:bg-slate-900'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full ${p.colorBg} mx-auto mb-2 shadow`} />
                        <span className="text-[11px] font-bold block">{p.label}</span>
                        <span className={`text-[9px] font-mono ${p.text} uppercase block mt-1`}>
                          {themePreset === p.id ? 'ACTIVE' : 'SELECT'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: SIRA SIMULATOR */}
              {activeTab === 'sira' && (
                <div className="space-y-4">
                  <div className="p-3 bg-red-950/20 border border-red-900/40 text-[11px] text-red-100 rounded-2xl flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#C8102E]" />
                    <span>Run internal compliance audit simulations against official private security guidelines.</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Audit Controls */}
                    <div className="p-4 bg-slate-900/30 border border-slate-850 rounded-2xl space-y-4">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Audit Input Variables</span>
                      
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-slate-400">Total Deployable CCTVs:</span>
                            <span className="text-white font-mono font-bold">{auditCams} Units</span>
                          </div>
                          <input
                            type="range"
                            min="4"
                            max="40"
                            value={auditCams}
                            onChange={(e) => setAuditCams(Number(e.target.value))}
                            className="w-full accent-[#C8102E]"
                          />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-slate-400">Total Deployed Guards:</span>
                            <span className="text-white font-mono font-bold">{auditGuards} Guards</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="10"
                            value={auditGuards}
                            onChange={(e) => setAuditGuards(Number(e.target.value))}
                            className="w-full accent-[#C8102E]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Sim Scorecard */}
                    <div className="p-4 bg-black/40 border border-slate-900 rounded-2xl space-y-3 leading-tight flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Simulation Report</span>
                        
                        <div className="flex justify-between items-center py-1 border-b border-slate-900">
                          <span className="text-xs text-slate-400">Audit Status:</span>
                          <span className={`text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                            auditResult.fine === 0 
                              ? 'bg-green-500/10 text-green-400' 
                              : 'bg-red-500/10 text-red-500'
                          }`}>
                            {auditResult.rating}
                          </span>
                        </div>

                        <div className="flex justify-between items-center py-1">
                          <span className="text-xs text-slate-400">Estimated SIRA Fines:</span>
                          <span className={`font-mono text-xs font-bold ${auditResult.fine > 0 ? 'text-red-500' : 'text-slate-400'}`}>
                            {auditResult.fine > 0 ? `AED ${auditResult.fine.toLocaleString()}` : '0 AED (Approved)'}
                          </span>
                        </div>
                      </div>

                      {auditResult.warnings.length > 0 ? (
                        <div className="text-[9px] text-yellow-500/80 font-mono space-y-1">
                          {auditResult.warnings.map((w, wi) => (
                            <div key={wi}>• {w}</div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-[9px] text-green-500 font-mono text-center">
                          ✓ Operations completely compliant with SIRA guidelines.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TELEMETRY LOGGER DRAWER */}
              <div className="border-t border-slate-900 pt-5 space-y-2 select-none">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <RefreshCw className="w-3 h-3 text-red-600 animate-spin" />
                    Live Trace Monitor Telemetry
                  </span>
                  <span className="text-[8px] font-mono text-green-500">
                    SIRA PORT: 3000 Active
                  </span>
                </div>
                <div className="bg-black border border-slate-900/80 p-3 h-28 rounded-xl font-mono text-[9px] text-slate-400 overflow-y-auto space-y-1 scrollbar-thin">
                  {systemLogs.map((log, ix) => (
                    <div key={ix} className="truncate">
                      <span className="text-[#C8102E] shrink-0 font-bold">▶ </span>
                      {log}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Actions Footer */}
            <div className="bg-slate-950 px-6 py-4.5 border-t border-slate-900 flex justify-between gap-2.5 select-none">
              <button
                type="button"
                onClick={() => setShowAdmin(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-black uppercase tracking-wider text-slate-300 transition"
              >
                Close Panel
              </button>
              
              <button
                type="button"
                onClick={handleSaveSettings}
                className="px-5 py-2 rounded-xl bg-[#C8102E] hover:bg-[#b00d25] text-xs font-black uppercase tracking-wider text-white transition flex items-center gap-2 shadow-lg"
              >
                <Save className="w-3.5 h-3.5" />
                Commit and Apply
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

