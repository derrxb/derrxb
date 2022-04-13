import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "remix";
import HeroHomeDark from "~/components/hero-home-dark";
import HeroHomeLight from "~/components/hero-home-light";
import useDarkMode from "~/hooks/useDarkMode";

export default function Index() {
  const [ref, inView] = useInView();
  const mode = useDarkMode();

  React.useEffect(() => {
    if (inView) {
      window?.document.querySelector("nav")?.classList.add("fixed");
    } else {
      window.document.querySelector("nav")?.classList.remove("fixed");
    }
  }, [inView]);

  return (
    <>
      <div className="flex h-full" ref={ref}>
        <motion.div
          className="flex w-1/2 items-center justify-center p-8 px-24 dark:bg-black-home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.h1
            className="m-0 text-6xl font-bold dark:text-white"
            initial={{ paddingTop: 48 }}
            animate={{ paddingTop: 0 }}
            transition={{ duration: 1 }}
          >
            I tell stories and build things with{" "}
            <motion.span className="text-yellow-500 hover:underline">
              <Link to="/">photography</Link>
            </motion.span>{" "}
            and
            <motion.span className="text-green-500 pl-2 hover:underline">
              <Link to="/">code</Link>
            </motion.span>
            .
          </motion.h1>
        </motion.div>

        <div className="w-1/2">
          <picture className="w-full">
            <HeroHomeDark />
            <HeroHomeLight />
            {console.log(mode)}
          </picture>
        </div>
      </div>
    </>
  );
}
