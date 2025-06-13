const Footer = () => {
  return (
    <>
      <footer className="border-t border-t-gray-700 bg-zinc-900 font-[Roboto]">
        <div className="footer sm:footer-horizontal text-neutral-content mx-auto max-w-7xl items-center px-4">
          <aside className="grid-flow-col items-center py-5 font-[Montserrat]">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <p className="text-lg">
              © {new Date().getFullYear()} Ashlee Zoe Gesite. All rights
              reserved
            </p>
          </aside>

          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <ul className="flex flex-row">
              {/* Linkedin */}
              <li className="mx-4">
                <a
                  href="https://www.linkedin.com/in/ash-gesite-25a28334b/"
                  target="_blank"
                  className="mx-3"
                  title="Linkedin"
                >
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                    <rect x="2" y="9" width="4" height="12" />{" "}
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </li>

              {/* Github */}
              <li className="mx-4">
                <a
                  href="https://github.com/ashdroidcmd"
                  target="_blank"
                  className="mx-3"
                  title="Github"
                >
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </li>

              {/* Portfolio Link */}
              <li className="mx-4">
                <a
                  href="https://ash-portfoliov2.vercel.app/"
                  target="_blank"
                  className="mx-3"
                  title="Portfolio"
                >
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
