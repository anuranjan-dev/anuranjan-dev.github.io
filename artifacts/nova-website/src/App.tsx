import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactElement } from 'react';

type ThemeId = 'light' | 'dark' | 'cobalt' | 'midnight' | 'sepia' | 'ivory' | 'terminal' | 'cli';

const themes: { id: ThemeId; label: string; icon: ReactElement }[] = [
  { id: 'light', label: 'Light', icon: <SunIcon /> },
  { id: 'dark', label: 'Dark', icon: <MoonIcon /> },
  { id: 'cobalt', label: 'Cobalt', icon: <SunIcon /> },
  { id: 'midnight', label: 'Midnight', icon: <StarIcon /> },
  { id: 'sepia', label: 'Sepia', icon: <CupIcon /> },
  { id: 'ivory', label: 'Ivory', icon: <SparkIcon /> },
  { id: 'terminal', label: 'Terminal', icon: <TerminalIcon /> },
  { id: 'cli', label: 'CLI', icon: <CodeIcon /> },
];

const quotes = [
  "The world doesn't need another copy. Be the original.",
  'Sleep is just another propaganda to slow me down.',
  'The best worlds are the ones you build yourself.',
  'Sleep is a myth perpetuated by people who don\'t have enough side projects.',
  'Reality is just a baseline. Fiction is where things get interesting.',
  'Making things no one asked for is an art form.',
  'The lore document grows. It always grows.',
  "If it doesn't exist yet, maybe I should build it next.",
  'Good design is when you notice everything. Great design is when you notice nothing.',
  'Somewhere between a bug and a feature lies all my best work.',
  'Sometimes I think, then I forget.',
  'The gap between vision and execution is just called Wednesday.',
  'Overthinking is just brainstorming with commitment issues.',
  "There's no such thing as too much lore.",
  'Every system has exploits. Every story has plot holes. Both are features.',
  'Made on Earth, By Humans.',
  'With this treasure, I summon: 40k lines of code.',
  "We've come too far to give up who we are.",
  'I came, I saw, I coded.',
  'My motivation? Being annoyed twice.',
  'Source: I made it up.',
  'I forgor what I was gonna say.',
  "Code is like humor. When you have to explain it, it's bad. Or the person is tasteless.",
  'Named must your fear be before banish it you can.',
  'My workflow starts with being annoyed. Then I cook.',
];

const hobbies = [
  { icon: '🎮', title: 'Gaming', desc: 'I like games that feel like somewhere you can disappear into for a while.' },
  { icon: '⚡️', title: 'Learning', desc: "Worldbuilding is my addiction. Lore documents longer than most textbooks, for worlds that exist only in my head." },
  { icon: '🎨', title: 'Art', desc: 'I enjoy creating visuals, experimenting with styles, and making things that feel like mine.' },
  { icon: '💻', title: 'Dev', desc: 'Building tools, bots, and side projects. Mostly self-taught, mostly chaotic, always learning.' },
];

const projects = [
  { name: 'NOVA', desc: 'An AI marketing intelligence platform for youth-focused brands. It helps turn cultural signals and online trends into useful content ideas and campaign directions.', tags: ['AI', 'WEB'], status: 'in progress' },
];

function Icon({ type }: { type: 'github' | 'instagram' }) {
  if (type === 'github') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/></svg>;
  if (type === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></svg>;
  return null;
}

function DiscordIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.54 5.32A16.1 16.1 0 0 0 15.56 4l-.5 1.02a14.1 14.1 0 0 0-6.12 0L8.44 4a16.1 16.1 0 0 0-3.98 1.32C1.94 9.15 1.26 12.88 1.6 16.56A16.3 16.3 0 0 0 6.5 19l1.18-1.6a10.3 10.3 0 0 1-1.85-.9l.45-.34c3.56 1.67 7.42 1.67 10.94 0l.46.34c-.6.36-1.22.66-1.86.9L17 19a16.3 16.3 0 0 0 4.9-2.44c.4-4.26-.68-7.96-2.36-11.24ZM8.77 14.27c-1.06 0-1.92-.98-1.92-2.18s.84-2.18 1.92-2.18 1.93.98 1.92 2.18c0 1.2-.85 2.18-1.92 2.18Zm6.46 0c-1.06 0-1.92-.98-1.92-2.18s.84-2.18 1.92-2.18 1.93.98 1.92 2.18c0 1.2-.85 2.18-1.92 2.18Z"/></svg>;
}

function SunIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>; }
function MoonIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>; }
function StarIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.2 5.3 5.8.5-4.4 3.8 1.3 5.6-4.9-3-4.9 3 1.3-5.6L4 8.8l5.8-.5L12 3Z"/></svg>; }
function CupIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/></svg>; }
function SparkIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 3 1.1 4.1L14 9l-3.9 1.9L9 15l-1.1-4.1L4 9l3.9-1.9L9 3ZM18 13l.7 2.3L21 16l-2.3.7L18 19l-.7-2.3L15 16l2.3-.7L18 13Z"/></svg>; }
function TerminalIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 10 3 3-3 3M12 17h7"/></svg>; }
function CodeIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 17 6-6-6-6M12 19h8"/></svg>; }

function ageText() {
  const dob = new Date(2009, 7, 29);
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) age -= 1;
  return `${age} – ${age + 1}`;
}

function CliType({ text, block = false, cursor = false, className = '' }: { text: string; block?: boolean; cursor?: boolean; className?: string }) {
  const style = {
    '--cli-steps': Math.max(Array.from(text).length, 1),
    '--cli-duration': `${Math.max(.45, Math.min(2.4, text.length * .035))}s`,
  } as CSSProperties;

  return <span className={`cli-type${block ? ' cli-type-block' : ''}${cursor ? ' cli-cursor' : ''}${className ? ` ${className}` : ''}`} style={style}>{text}</span>;
}

function App() {
  const [theme, setTheme] = useState<ThemeId>(() => (localStorage.getItem('anuranjan-theme') as ThemeId) || 'dark');
  const [themeOpen, setThemeOpen] = useState(false);
  const [ageInfo, setAgeInfo] = useState(false);
  const [quote, setQuote] = useState('My workflow starts with being annoyed. Then I cook.');
  const [quoteSpinning, setQuoteSpinning] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const quoteQueue = useRef<string[]>([]);
  const age = useMemo(() => ageText(), []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('anuranjan-theme', theme);
  }, [theme]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: .1 });
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
    const navObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    }), { threshold: .45 });
    document.querySelectorAll('section[id]').forEach((el) => navObserver.observe(el));
    return () => { revealObserver.disconnect(); navObserver.disconnect(); };
  }, []);

  const reroll = () => {
    if (!quoteQueue.current.length) {
      quoteQueue.current = [...quotes].sort(() => Math.random() - .5);
      if (quoteQueue.current[0] === quote) quoteQueue.current.push(quoteQueue.current.shift() as string);
    }
    setQuote(quoteQueue.current.shift() as string);
    setQuoteSpinning(true);
    window.setTimeout(() => setQuoteSpinning(false), 520);
  };

  return (
    <>
      <div className="theme-switcher" data-testid="theme-switcher">
        <button className="theme-toggle" type="button" aria-label="Switch theme" data-testid="button-theme-toggle" onClick={() => setThemeOpen((open) => !open)}>
          {themes.find((item) => item.id === theme)?.icon}
        </button>
        <div className={`theme-dropdown${themeOpen ? ' open' : ''}`} data-testid="theme-dropdown">
          {themes.map((item) => <button className={`theme-option${item.id === theme ? ' active' : ''}`} type="button" key={item.id} data-testid={`button-theme-${item.id}`} onClick={() => { setTheme(item.id); setThemeOpen(false); }}>{item.icon}<CliType text={item.label} /></button>)}
        </div>
      </div>

      <nav className="floating-nav" aria-label="Primary navigation" data-testid="floating-navigation">
          {['hero:Home', 'about:About', 'hobbies:Hobbies', 'projects:Projects', 'contact:Contact'].map((item) => {
          const [id, label] = item.split(':');
            return <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} data-testid={`link-nav-${id}`}><CliType text={label} /></a>;
        })}
      </nav>

      <main>
        <section id="hero" data-testid="section-hero">
           <p className="hero-eyebrow" data-testid="text-hero-eyebrow"><CliType text="// welcome to my corner of the internet" cursor /></p>
            <h1 className="hero-name" data-testid="text-hero-name"><CliType text="Anu" /><CliType text="ranjan" className="hero-name-accent" cursor /></h1>
           <p className="hero-quote" data-testid="text-hero-quote"><CliType key={quote} text={quote} block cursor /></p>
          <button className={`quote-reroll${quoteSpinning ? ' spinning' : ''}`} type="button" aria-label="New quote" title="Another quote" data-testid="button-new-quote" onClick={reroll}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg></button>
           <div className="age-row"><span className="age-pill" data-testid="text-age-hero"><CliType text={age} /></span><button className={`age-info${ageInfo ? ' open' : ''}`} type="button" aria-label="Age info" data-testid="button-age-info" onClick={() => setAgeInfo((open) => !open)}>ⓘ<span className="age-tip"><CliType text="Different people count age differently." block /><br /><strong><CliType text="Left" /></strong> = years completed &nbsp;|&nbsp; <strong><CliType text="Right" /></strong> = year running</span></button></div>
           <div className="scroll-cue"><div className="scroll-line" /><CliType text="scroll" /></div>
        </section>

        <section id="about" data-testid="section-about"><div className="container reveal">
            <div className="section-label"><CliType text="01 — about" cursor /></div><h2 className="section-title"><CliType text="Hey, I'm " /><em><CliType text="Anuranjan" cursor /></em></h2>
            <p className="about-body"><CliType text="Just a person on the internet who likes making things — code, AI experiments, interfaces, and ideas that begin as random notes. I like exploring, building, and seeing how far one small idea can go." block /></p>
          <div className="about-grid">
              {[['identity', 'Anuranjan'], ['age', age], ['status', 'Perpetually online'], ['vibe', 'Chaotic creative']].map(([label, value]) => <div className="about-card" key={label}><div className="about-card-label"><CliType text={label} /></div><div className={`about-card-value${label === 'age' ? ' age-val' : ''}`} data-testid={`text-about-${label}`}><CliType text={value} /></div></div>)}
          </div>
        </div></section>

        <section id="hobbies" data-testid="section-hobbies"><div className="container reveal">
           <div className="section-label"><CliType text="02 — hobbies & interests" cursor /></div><h2 className="section-title"><CliType text="Things I " /><em><CliType text="actually" cursor /></em><CliType text=" do" /></h2>
           <div className="hobbies-grid">{hobbies.map((hobby) => <div className="hobby-card" key={hobby.title} data-testid={`card-hobby-${hobby.title.toLowerCase()}`}><span className="hobby-icon" aria-hidden="true">{hobby.icon}</span><div className="hobby-title"><CliType text={hobby.title} /></div><div className="hobby-desc"><CliType text={hobby.desc} block /></div></div>)}</div>
        </div></section>

        <section id="projects" data-testid="section-projects"><div className="container reveal">
           <div className="section-label"><CliType text="03 — projects" cursor /></div><h2 className="section-title"><CliType text="What I've been " /><em><CliType text="building" cursor /></em></h2>
            <div className="projects-list">{projects.map((project, index) => <div className="project-card" key={project.name} data-testid={`card-project-${index + 1}`}><div className="project-num"><CliType text={String(index + 1).padStart(3, '0')} /></div><div className="project-info"><div className="project-title"><CliType text={project.name} /></div><div className="project-desc"><CliType text={project.desc} block /></div><div className="project-tags">{project.tags.map((tag) => <span className="tag" key={tag}><CliType text={tag} /></span>)}<span className="badge"><CliType text={project.status} /></span></div></div></div>)}</div>
            <div className="view-all-wrap"><div className="view-all-btn" data-testid="text-more-projects"><CliType text="MORE PROJECTS SOON" /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></div></div>
        </div></section>

        <section id="contact" data-testid="section-contact"><div className="container reveal">
           <div className="section-label"><CliType text="04 — contact & socials" cursor /></div><h2 className="section-title"><CliType text="Find me " /><em><CliType text="online" cursor /></em></h2>
          <div className="contact-grid">
             <a href="https://discord.com/users/1411793737453015231" target="_blank" rel="noopener noreferrer" className="discord-card" data-testid="link-discord">
                <div className="dc-profile"><div className="dc-avatar-wrap"><img className="dc-avatar" src={`${import.meta.env.BASE_URL}images/discord-avatar.png`} alt="Discord icon" /><div className="dc-dot online" /></div><div className="dc-info"><div className="dc-name-row"><div className="dc-name"><CliType text="Instanik" /></div><div className="dc-platform"><DiscordIcon /></div></div><div className="dc-username"><CliType text="instanik_62687" /></div></div></div>
               <div className="dc-activity"><span className="dc-loading"><CliType text="// connecting..." /></span></div>
            </a>
             <SocialLink type="github" name="GitHub" handle="@anuranjan-dev" href="https://github.com/anuranjan-dev" />
             <SocialLink type="instagram" name="Instagram" handle="@itss_anuranjan" href="https://www.instagram.com/itss_anuranjan/" />
          </div>
        </div></section>
      </main>
        <footer><CliType text="built by " /><span><CliType text="Anuranjan" /></span><CliType text=" · no template, just freestyle" /></footer>
    </>
  );
}

function SocialLink({ type, name, handle, href }: { type: 'github' | 'instagram'; name: string; handle: string; href: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`social-link ${type}`} data-testid={`link-social-${type}`}><div className="sl-icon"><Icon type={type} /></div><div><div className="sl-name"><CliType text={name} /></div><div className="sl-handle"><CliType text={handle} /></div></div></a>;
}

export default App;