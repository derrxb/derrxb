import Me from "~/assets/images/me.jpeg";

export default function About() {
  return (
    <div className="px-2 md:px-24 pt-12 bg-white dark:bg-black flex h-full w-full flex-col dark:text-white overflow-y-auto pb-24">
      <div className="flex flex-row w-full">
        <div className="w-1/2 h-[60vh] py-4 flex flex-col justify-center">
          <div className="flex flex-col -mt-10">
            <h2 className="text-lg py-0">Hello! I'm</h2>
            <h1 className="text-7xl font-bold py-2 mx-0">Derrick Bol</h1>
            <p className="text-3xl py-2 w-[480px]">
              I am a photographer and software engineer based in Taipei, Taiwan.
            </p>
            <button className="py-2 px-4 rounded-lg text-white bg-yellow-500 w-fit my-2 font-bold">
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-1/2 h-[480px] py-4 flex items-center justify-center">
          <img src={Me} alt="me" className="w-[400px] h-[400px] rounded-full" />
        </div>
      </div>

      <div className="divide-dashed divide-gray-200 divide-x-2 w-[480px] self-center divide-y" />

      <p className="text-lg md:text-2xl text-gray-800 dark:text-white pb-4 leading-loose">
        I'm a full-stack developer and photographer based in Taipei, Taiwan. I
        build things and tell stories. I have a Master's in Data Science from
        National Tsing Hua University in Hsinchu, Taiwan where I graduated from
        Professor Von-Wun Soo's AI
      </p>

      <p className="text-lg md:text-2xl text-gray-800 dark:text-white pb-4 leading-loose">
        I'm currently working at Aillio building Roast.World. Previously, I
        worked at Belizing.com building Belizing Payments. I've worked with both
        back-end and front-end systems using languages and tools such as Ruby,
        Typescript, JavaScript, React, Ruby on Rails, and a number of others.
      </p>

      <p className="text-lg md:text-2xl text-gray-800 dark:text-white pb-4 leading-loose">
        In my free time, I like to roam to capture stories. I enjoy landscape
        and portrait photography. While I currently don't have any human kids, I
        do have a wonderful little Siamese cat called Lola 🐈 (she's back home
        in Belize) and other cats (in Taiwan) called Dian Dian and Hua Hua.
      </p>

      <p className="text-lg md:text-2xl text-gray-800 dark:text-white pb-4 leading-loose">
        You can find me online on my handle @derrxb. But here are a few links
        that you might be interested in:
        <ul className="!list-disc dark:marker:text-yellow-500">
          <li className="ml-8">
            <a
              href="https://instagram.com/derrxb"
              className="hover:text-yellow-500 hover:underline"
            >
              Instagram
            </a>{" "}
            - photos, photos, and more photos 😉
          </li>
          <li className="ml-8">
            <a
              href="https://github.com/derrxb"
              className="hover:text-yellow-500 hover:underline"
            >
              Github
            </a>{" "}
            - Projects I'm currently working on
          </li>
          <li className="ml-8">
            <a
              href="https://derrxb.com"
              className="hover:text-yellow-500 hover:underline"
            >
              Derrxb.com
            </a>{" "}
            - My personal website for my travels and (hopefully) software
            development thoughts
          </li>
        </ul>
      </p>
    </div>
  );
}
