import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.1, 0.8, 0.37, 0.99] }}
      className="mt-16 w-full border-t border-neutral-700 bg-neutral-800 px-5 text-xs"
    >
      <section className="w-full">
        {/* Logo */}
        <div className="flex flex-col items-center border-t border-neutral-800 pt-6 text-center">
          <p className="text-neutral-500">
            © 2025 GDPH List. All rights reserved. <br />
            Not affiliated with RobTopGames
          </p>
        </div>

        <div className="my-5 flex flex-col justify-center gap-5 text-center md:flex-row">
          <div className="flex flex-col gap-2 border-r border-neutral-700 pr-5">
            <p className="font-bold text-blue-500">List Moderators</p>
            <ul className="text-neutral-500">
              <li>MatsuoIsHere</li>
              <li>oshiimaaa</li>
              <li>Mysel</li>
              <li>Abaddox</li>
              <li>ADecentUsername</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 border-r border-neutral-700 pr-5">
            <div className="justify-star flex flex-col items-center gap-2">
              <p className="font-bold text-blue-500">Terms of Service</p>
              <p className="text-neutral-500">
                By using this site, you agree to our Terms of Use. All level
                data and player records are community-submitted and may be
                subject to verification.
              </p>
            </div>
            <div className="justify-star flex flex-col items-center gap-2">
              <p className="font-bold text-blue-500">About The Site</p>
              <p className="text-neutral-500">
                The site is maintained and developed by{" "}
                <a href="https://twitter.com/iammysel_" target="_blank">
                  <strong className="text-blue-500">Mysel</strong>
                </a>
                . Any questions or issues can be addressed to him on his
                socials.
              </p>
            </div>
          </div>
        </div>

        <div className="items center flex w-full flex-col border-t border-neutral-700 text-center">
          <div>Contact Us:</div>
          <div>
            <a href="https://x.com/iammysel_" target="_blank" rel="noreferrer">
              <div className="flex flex-row justify-center">
                <svg className="h-10 w-10" viewBox="0 0 248 204">
                  <path
                    xmlns="http://www.w3.org/8000/svg"
                    fill="#1d9bf0"
                    d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
                    className="h-6 w-6"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
    </motion.footer>
  );
}
