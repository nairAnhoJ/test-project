import { useState, useEffect } from 'react'
import './App.css'

const GearLarge = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" aria-hidden="true">
    <path
      d="M32 20a12 12 0 1 1 0 24 12 12 0 0 1 0-24Z"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M32 4v6M32 54v6M4 32h6M54 32h6M11.03 11.03l4.24 4.24M48.73 48.73l4.24 4.24M48.73 15.27l-4.24 4.24M15.27 48.73l-4.24 4.24"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="32" cy="32" r="4" fill="currentColor" />
  </svg>
);
 
const GearSmall = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden="true">
    <path
      d="M20 12a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 2v4M20 34v4M2 20h4M34 20h4M6.34 6.34l2.83 2.83M30.83 30.83l2.83 2.83M30.83 9.17l-2.83 2.83M9.17 30.83l-2.83 2.83"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="20" cy="20" r="3" fill="currentColor" />
  </svg>
);

const GearCluster: React.FC = () => (
	<div className="relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 select-none">
		
		{/* Glow behind gears */}
		<div className="absolute inset-0 rounded-full bg-indigo-500 opacity-10 blur-2xl animate-pulse" />
		
		{/* Large gear — slow CW */}
		<div className="absolute w-20 h-20 sm:w-24 sm:h-24 text-indigo-400 animate-spin" style={{ animationDuration: "10s" }}>
			<GearLarge />
		</div>
		
		{/* Small gear — faster CCW, offset bottom-right */}
		<div className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 animate-spin" style={{ animationDuration: "5s", animationDirection: "reverse" }} >
			<GearSmall />
		</div>
	</div>
);

function App() {  
	const [visible, setVisible] = useState<boolean>(false);
 
	useEffect(() => {
		const t = setTimeout(() => setVisible(true), 60);
		return () => clearTimeout(t);
	}, []);

	return (
		<>
			<div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-16 overflow-hidden relative">
		
				{/* ── Background atmosphere ── */}
				<div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
					
					{/* Mesh blobs */}
					<div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-indigo-700 opacity-[0.12] rounded-full blur-3xl animate-pulse" />
					<div className="absolute -bottom-24 -right-24 w-[360px] h-[360px] bg-cyan-600 opacity-[0.08] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.2s" }} />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-900 opacity-[0.06] rounded-full blur-3xl" />
					
					{/* Dot grid */}
					<div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #818cf8 1px, transparent 1px)", backgroundSize: "36px 36px", }} />
				
				</div>
		
				{/* ── Card ── */}
				<main className={`relative z-10 w-full max-w-md transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
					<div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl shadow-black/60 p-8 sm:p-12 flex flex-col items-center gap-8">
			
						{/* Gear cluster */}
						<GearCluster />
			
						{/* Text block */}
						<div className="text-center space-y-4">
							
							{/* Badge */}
							<span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-indigo-500/30 text-indigo-400 bg-indigo-500/10">
								Launching Soon
							</span>
				
							{/* Headline */}
							<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
								🚧 Under Construction
							</h1>
				
							{/* Subtext */}
							<p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
								We're working hard to bring something amazing.{" "}
								<span className="text-slate-300 font-medium">Stay tuned!</span>
							</p>
						</div>
			
						{/* Footer */}
						<p className="text-slate-700 text-xs">
							© {new Date().getFullYear()} JohnArian · All rights reserved
						</p>
					</div>
				</main>
			</div>
		</>
	)
}

export default App
