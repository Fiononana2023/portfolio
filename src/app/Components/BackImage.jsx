import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import bgImage from "/public/IMG/if-6.jpg";
import image1 from "/public/IMG/opo.jpg";
import Link from "next/link";

const BackImage = () => {
  return (
    <div>
      <Image
        src={bgImage}
        alt=""
        placeholder="blur"
        style={{ objectFit: "cover", zIndex: -1 }}
        className={styles.backImage}
      />
      {/*       
      <div
        className="card card-side bg-base-100 bg-opacity-0 shadow-xl w-1/3"
        style={{
          margin: "5rem",
          marginLeft: "100px",
        }}
      >
        <figure>
          <Image src={image1} alt="" />
        </figure>
        <div className="card-body w-auto">
          <h2 className="card-title text-white">Ceci est mon protfolio</h2>
          <p className="text-white">
            Je suis Fiononana et je suis Developpeur Next js junior
          </p>

          <div className="card-actions justify-end ">
            <Link href="/competences" className="btn btn-slate-800">
              Watch
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BackImage;
