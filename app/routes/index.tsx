import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import coverDark from "../../public/images/cover-dark.jpg";
import coverLight from "../../public/images/cover-light.jpg";

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
    <div className="flex h-full" ref={ref}>
      <motion.div
        className="flex w-1/2 items-center justify-center p-8 px-24 dark:bg-black"
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
          I capture stories and build software with{" "}
          <motion.span className="text-yellow-500">photography</motion.span> and
          <motion.span className="text-green-500 pl-2">code</motion.span>.
        </motion.h1>
      </motion.div>

      <div className="w-1/2">
        <picture className="w-full">
          <motion.source
            src={coverDark}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"h-screen w-full object-cover hidden dark:inline"}
          />

          <motion.img
            src={coverDark}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"h-screen w-full object-cover hidden dark:inline"}
          />

          <motion.source
            src={coverLight}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"h-screen w-full object-cover dark:hidden"}
          />

          <motion.img
            src={coverLight}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"h-screen w-full object-cover dark:hidden"}
          />
        </picture>
      </div>
    </div>
  );
}
