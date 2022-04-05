import AboutMeHero from "~/components/about-me-hero";

export default function About() {
  return (
    <div className="px-2 md:px-24 pt-20 bg-white dark:bg-black flex h-full w-full fixed flex-col dark:text-white">
      <AboutMeHero />

      <h1 className="text-4xl font-extrabold">Hi, I'm Derrick - 施德睿</h1>

      <p className="text-xl text-gray-800 dark:text-white pb-4 leading-relaxed">
        I'm a full-stack developer and photographer based in Taipei, Taiwan. I
        build things and tell stories. I have a Master's in Data Science from
        National Tsing Hua University in Hsinchu, Taiwan where I graduated from
        Professor Von-Wun Soo's AI Lab.
      </p>

      <p className="text-xl text-gray-800 dark:text-white pb-4 leading-relaxed">
        I'm currently working at Aillio building Roast.World. Previously, I
        worked at Belizing.com building Belizing Payments. I've worked with both
        back-end and front-end systems using languages and tools such as Ruby,
        Typescript, JavaScript, React, Ruby on Rails, and a number of others.
      </p>

      <p className="text-xl text-gray-800 dark:text-white pb-4 leading-relaxed">
        In my free time, I like to roam to capture stories. I enjoy landscape
        and portrait photography. While I currently don't have any human kids, I
        do have a wonderful little Siamese cat called Lola 🐈 (she's back home
        in Belize) and other cats (in Taiwan) called Dian Dian and Hua Hua.
      </p>

      <p className="text-xl text-gray-800 dark:text-white pb-4 leading-relaxed">
        You can find me online on my handle @derrxb. But here are a few links
        that you might be interested in:
        <ul>
          <ol>Instagram - photos, photos, and more photos 😉</ol>
          <ol>GitHub [Here] - Projects I'm currently working on</ol>
          <ol>
            Derrxb.com - My personal website for my travels and (hopefully)
            software development thoughts
          </ol>
        </ul>
      </p>
    </div>
  );
}
