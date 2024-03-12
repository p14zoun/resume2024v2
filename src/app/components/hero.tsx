import Skills from "./skills";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero min-h-screen bg-black">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* <div className="flex justify-center">
            <img
              src="/me.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              className="rounded overflow-hidden"
            />
          </div> */}
          <h1 className="text-5xl font-bold text-green-500">Hey!</h1>
          <h1 id="typing-effect" className="text-5xl font-bold">
            I`m Panagiotis
          </h1>
          <p className="py-6 text-xl text-gray-400">
            I am a Frontend developer with experience in quality assurance and
            testing. Fluent in English and Greek. Based in Luleå, Sweden.
          </p>

          <div className="flex justify-center items-center h-full mb-8">
            <a href="https://www.linkedin.com/in/zoungouridis/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-green-500"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="mailto:zouggouridis@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-green-500 ml-5"
              >
                <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
              </svg>
            </a>
          </div>

          <Skills />
          <div className="collapse text-black bg-green-500 text-center font-semibold border-2 border-green-500 mt-5">
            <a
              className="text-xl font-bold py-4 p-6"
              href="./Panagiotis-Zoungouridis-CV.pdf"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
