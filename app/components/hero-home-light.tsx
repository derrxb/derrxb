import { motion } from "framer-motion";
import coverLight from "../../public/images/cover-light.jpg";

export default function HeroHomeLight() {
  return (
    <>
      <motion.source
        src={coverLight}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={"h-screen w-full object-cover dark:hidden"}
      />

      <motion.img
        src={coverLight}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={"h-screen w-full object-cover dark:hidden"}
      />
    </>
  );
}
