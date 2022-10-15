import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "remix";
import HeroHomeDark from "~/components/hero-home-dark";
import HeroHomeLight from "~/components/hero-home-light";

export default function Index() {
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      window?.document.querySelector("nav")?.classList.add("fixed");
    } else {
      window.document.querySelector("nav")?.classList.remove("fixed");
    }
  }, [inView]);

  return (
    <>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2" ref={ref}>
        <motion.div
          className="flex col-span-1 items-center justify-center p-8 px:12 md:px-24 dark:bg-black-home h-[320px] md:h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.h1
            className="m-0 text-3xl md:text-6xl font-bold dark:text-white"
            initial={{ paddingTop: 48 }}
            animate={{ paddingTop: 0 }}
            transition={{ duration: 1 }}
          >
            I tell stories and build things with{" "}
            <motion.span className="text-yellow-500 hover:underline">
              <Link to="/photography">photography</Link>
            </motion.span>{" "}
            and
            <motion.span className="text-green-500 pl-2 hover:underline">
              <Link to="/">code</Link>
            </motion.span>
            .
          </motion.h1>
        </motion.div>

        <div className="col-span-1">
          <picture className="w-full">
            <HeroHomeDark />
            <HeroHomeLight />
          </picture>
        </div>
      </div>
    </>
  );
}
