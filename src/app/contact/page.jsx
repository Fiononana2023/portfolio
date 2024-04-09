import React from "react";
import Image from "next/image";
import image3 from "/public/IMG/avat2.png";
import styles from "./page.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <div
        className="m-20 rounded-md "
        // className="max-w-sm rounded overflow-hidden shadow-lg"
        // style={{ margin: "auto", boxShadow: "5 5 5" }}
      >
        <Image
          className="w-full transform rotate-45 lg:transform-none"
          src={image3}
          alt="Sunset"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 underline">Coordonnées</div>

          <p className="text-gray-700 font-semibold">
            <span className="text-bold underline">Tel :</span> +261 34 43 700 15
          </p>
          <p className="text-gray-700 font-semibold">
            <span className="text-bold underline">Email :</span>{" "}
            fiononana.vit@gmail.com
          </p>
          <p className="text-gray-700 font-semibold">
            <span className="text-bold underline">Linkedin :</span>{" "}
            https://www.linkedin.com/in/fiononana-rkt-69750296/{" "}
          </p>
          <p className="text-gray-700 font-semibold">
            <span className="text-bold underline">Github :</span>{" "}
            https://github.com/Fiononana2023{" "}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #developpement web
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #React js
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Next js
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
