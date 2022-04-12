import { motion } from "framer-motion";
import coverDark from "../../public/images/cover-dark.jpg";

export default function HeroHomeDark() {
  return (
    <>
      <motion.source
        src={coverDark}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={"h-screen w-full object-cover hidden dark:inline"}
      />

      <motion.img
        src={coverDark}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={"h-screen w-full object-cover hidden dark:inline"}
      />
    </>
  );
}
