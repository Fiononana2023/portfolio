import React from "react";
import Image from "next/image";
import image1 from "/public/IMG/in3.png";
import image2 from "/public/IMG/re3.png";
import image3 from "/public/IMG/In2.png";
import image4 from "/public/IMG/moi3.png";
import styles from "./page.module.css";

export default function List() {
  // const handleClick = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div className={styles.tables}>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={image1} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>

              <td>
                Hart@gmail.com
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>

              <th>
                <button
                  className="btn btn-warning btn-xl"
                  // onClick={handleClick("/")}
                >
                  details
                </button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={image2} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carrol@car.fr
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>

              <th>
                <button className="btn btn- bg-warning btn-xl">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={image3} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen@ye.ru
                <br />
                <span className="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>

              <th>
                <button className="btn btn-warning btn-xl">details</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={image4} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                WymanLedner@tre.ao
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>

              <th>
                <button className="btn btn-warning btn-xl">details</button>
              </th>
            </tr>
          </tbody>
        </table>{" "}
        <hr />
        <div>
          <div className="card-body">
            <h2 className="card-title">New user</h2>
            <div className="card-actions justify-start">
              <button className="btn btn-info">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
