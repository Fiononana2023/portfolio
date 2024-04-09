import React from "react";
import Image from "next/image";
import image1 from "/public/IMG/html01.png";
import image2 from "/public/IMG/css3.png";
import image3 from "/public/IMG/js.png";
import image4 from "/public/IMG/reactJss.png";
import image5 from "/public/IMG/nextJs.png";
import image6 from "/public/IMG/tailwind-css.jpg";
import image7 from "/public/IMG/boo1.png";
import styles from "./page.module.css";
import image8 from "/public/IMG/ts1.jpg";

const Competences = () => {
  return (
    // <div className={styles.container}>
    <div className="grid grid-cols-5 gap-4">
      <div className="p-6 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image className="rounded-t-lg" src={image1} alt="" />
        </div>

        <div
          className="w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 my-12"
          value="90"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
            style={{ width: "90%" }}
          >
            HTML 90%
          </div>
        </div>
      </div>

      <div className=" p-6 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image
            className="rounded-t-lg"
            src={image2}
            alt=""
            width={500}
            height={500}
          />
        </div>

        <div
          className="w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 my-12"
          value="85"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
            style={{ width: "85%" }}
          >
            CSS 85%
          </div>
        </div>
      </div>

      <div className=" p-6 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image
            className="rounded-t-lg"
            src={image3}
            alt=""
            width={500}
            height={500}
          />
        </div>

        <div
          className="w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 my-12"
          value="65"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
            style={{ width: "65%" }}
          >
            Javascript 65%
          </div>
        </div>
      </div>

      <div className=" p-6 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image
            className="rounded-t-lg"
            src={image4}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div
          className="w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 my-12"
          value="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
            style={{ width: "75%" }}
          >
            React js 75%
          </div>
        </div>
      </div>

      <div className=" p-6 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image
            className="rounded-t-lg"
            src={image5}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div
          className="w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 my-12"
          value="60"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
            style={{ width: "60%" }}
          >
            Next js 60%
          </div>
        </div>
      </div>

      <div className=" p-6 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image
            className="rounded-t-lg"
            src={image6}
            alt=""
            width={500}
            height={500}
          />
        </div>

        <div
          className="w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 my-12"
          value="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
            style={{ width: "75%" }}
          >
            TailwindCSS 75%
          </div>
        </div>
      </div>

      <div className=" p-6 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image
            className="rounded-t-lg"
            src={image7}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div
          className="w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 my-12"
          value="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
            style={{ width: "80%" }}
          >
            Bootstrap 80%
          </div>
        </div>
      </div>

      <div className=" p-6 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image
            className="rounded-t-lg"
            src={image8}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div
          className="w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 my-12"
          value="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
            style={{ width: "60%" }}
          >
            Typescript 60%
          </div>
        </div>
      </div>

      <div className=" p-6 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h1 className="text-xl font-bold text-blue-600 shadow-lg m-4 p-4 underline">
          Etapes professionnelles
        </h1>
        <ul className="steps steps-vertical flex flex-col space-y-8">
          <li className="step step-primary list-none">
            <h2 class="font-medium leading-tight">
              2008 - 2015 <br />
              (Net Alliance)
              <h3 className="font-bold">Opératrice online</h3>
            </h2>
          </li>

          <li className="step step-primary">
            <h2 class="font-medium leading-tight">
              2016 - à ce jour <br />
              (Value it)
              <h3 className="font-bold">Opératrice BPO</h3>
            </h2>
          </li>
          <li className="step"> </li>
        </ul>
      </div>
    </div>
  );
};

export default Competences;
