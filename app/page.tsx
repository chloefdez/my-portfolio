import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-6 sticky top-0 bg-[#faf8f5] z-50">
        <span className="text-black font-light tracking-[0.3em] text-sm uppercase">
          Chloe Gonçalves
        </span>
        <div className="hidden md:flex gap-10 items-center">
          <a
            href="#about"
            className="text-sm tracking-widest text-gray-500 hover:text-black transition-colors uppercase font-light"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm tracking-widest text-gray-500 hover:text-black transition-colors uppercase font-light"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm tracking-widest text-gray-500 hover:text-black transition-colors uppercase font-light"
          >
            Contact
          </a>
          <a
            href="https://github.com/chloefdez"
            target="_blank"
            className="text-gray-500 hover:text-black transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/chloefdez"
            target="_blank"
            className="text-gray-500 hover:text-black transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
        <div className="flex md:hidden gap-6 items-center">
          <a
            href="https://github.com/chloefdez"
            target="_blank"
            className="text-gray-500 hover:text-black transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/chloefdez"
            target="_blank"
            className="text-gray-500 hover:text-black transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <p className="text-sm tracking-[0.4em] text-[#c9a99a] uppercase mb-6">
          Frontend Developer
        </p>
        <h1
          className="text-6xl font-light text-black tracking-tight mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Chloe Gonçalves
        </h1>
        <p className="text-gray-400 font-light tracking-widest text-sm max-w-md">
          Crafting elegant, modern web experiences with clean code and
          thoughtful design.
        </p>
        <a
          href="#projects"
          className="mt-12 px-10 py-3 border border-black text-black text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all font-light"
        >
          View Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-xs tracking-[0.4em] text-[#c9a99a] uppercase mb-6">
          About Me
        </p>
        <p className="text-gray-500 font-light leading-relaxed text-lg">
          Hi, I'm Chloe — a frontend developer based in San Diego with a
          background in operations and luxury retail. After 6+ years managing
          high-stakes workflows and collaborating with tech teams at
          Fashionphile, I discovered a love for building the web experiences I'd
          always admired.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs tracking-[0.4em] text-[#c9a99a] uppercase mb-12 text-center">
          Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f2ede8] p-10 hover:bg-[#ecddd6] transition-colors">
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
              Next.js · TypeScript · Firebase
            </p>
            <h3
              className="text-black font-light text-xl mb-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Summarist
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              A full-stack book summary app with authentication, built with
              Next.js, TypeScript, Tailwind, and Firebase.
            </p>
            <a
              href="https://summarist-internship-phi.vercel.app/"
              target="_blank"
              className="inline-block mt-6 text-xs tracking-widest uppercase text-black border-b border-black pb-0.5 hover:text-[#c9a99a] hover:border-[#c9a99a] transition-colors"
            >
              View Project →
            </a>
          </div>

          <div className="bg-[#f2ede8] p-10 hover:bg-[#ecddd6] transition-colors">
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
              HTML · CSS · JavaScript
            </p>
            <h3
              className="text-black font-light text-xl mb-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              NFT Marketplace
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              A responsive NFT marketplace clone with smooth animations, built
              with HTML, CSS, and JavaScript. Developed using Git branching and
              pull requests.
            </p>
            <a
              href="https://chloe-internship.vercel.app/"
              target="_blank"
              className="inline-block mt-6 text-xs tracking-widest uppercase text-black border-b border-black pb-0.5 hover:text-[#c9a99a] hover:border-[#c9a99a] transition-colors"
            >
              View Project →
            </a>
          </div>

          <div className="bg-[#f2ede8] p-10 hover:bg-[#ecddd6] transition-colors">
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
              React · TypeScript · Tailwind · Vite
            </p>
            <h3
              className="text-black font-light text-xl mb-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Ticketmaster Clone
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              A Ticketmaster clone with real event data from an external API,
              built with React, TypeScript, Tailwind, and Vite.
            </p>
            <a
              href="https://ticketmaster-react.vercel.app/"
              target="_blank"
              className="inline-block mt-6 text-xs tracking-widest uppercase text-black border-b border-black pb-0.5 hover:text-[#c9a99a] hover:border-[#c9a99a] transition-colors"
            >
              View Project →
            </a>
          </div>

          <div className="bg-[#f2ede8] p-10 hover:bg-[#ecddd6] transition-colors">
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
              Next.js · TypeScript · Tailwind
            </p>
            <h3
              className="text-black font-light text-xl mb-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Deepseek Clone
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              An AI chat interface clone integrated with an external AI API,
              built with Next.js, TypeScript, and Tailwind using React Context
              for state management.
            </p>
            <a
              href="https://deepseek-clone-k6pk.vercel.app/"
              target="_blank"
              className="inline-block mt-6 text-xs tracking-widest uppercase text-black border-b border-black pb-0.5 hover:text-[#c9a99a] hover:border-[#c9a99a] transition-colors"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center py-24 px-6">
        <p className="text-xs tracking-[0.4em] text-[#c9a99a] uppercase mb-6">
          Contact
        </p>
        <h2 className="text-3xl font-light text-black mb-6">
          Let's work together
        </h2>
        <p className="text-gray-400 font-light mb-3 tracking-wide">
          Open to frontend roles and freelance projects.
        </p>
        <p className="text-sm text-gray-400 font-light tracking-widest mb-10">
          chloefdez@gmail.com
        </p>
        <a
          href="mailto:chloefdez@gmail.com"
          className="px-10 py-3 bg-black text-white text-sm tracking-widest uppercase hover:bg-[#c9a99a] transition-colors font-light"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/chloefdez"
            target="_blank"
            className="text-gray-400 hover:text-black transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/chloefdez"
            target="_blank"
            className="text-gray-400 hover:text-black transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-16 pb-20 text-xs tracking-widest text-gray-300 uppercase">
        © 2026 Chloe Gonçalves
      </footer>
    </main>
  );
}
