import Image from "next/image";
import BackImage from "./Components/BackImage";
import image1 from "/public/IMG/opo.jpg";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  console.log("Test de component");
  return (
    <main className={styles.bodyContainer}>
      <div className="z-10">
        <BackImage />
      </div>

      <div className="card card-side bg-base-100 bg-opacity-0 shadow-xl w-1/3 absolute top-10 left-10">
        <Link href={"/"}>
          <Image src={image1} alt="" />
        </Link>
        <div className="card-body w-auto">
          <h2 className="card-title text-white">Ceci est mon protfolio</h2>
          <p className="text-white">
            Je suis Fiononana et je suis Developpeur React/Next js junior
          </p>

          <div className="card-actions justify-end ">
            <Link href="/competences" className="btn btn-slate-800">
              La suite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
