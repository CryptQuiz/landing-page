import Header from "@/components/Header/Header";
import HomeComp from "@/components/Home/Home";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-orange-2 ">
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
        >
          {" "}
          <div
            style={{
              width: "100%",
              height: "80%",
              backgroundColor: "#FF68B5",
            }}
          ></div>
          <svg
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
            //make a bottom shadow use black color

            style={{ width: "100%", height: "100%" }}
          >
            <path
              //MAKE A 4 WAVES FOR BOTTOM SHADOW

              d="M 0 30  C 200 100 280 0 500 30 L 1500 0 L 0 0 Z "
              fill="#FF68B5"
            ></path>
          </svg>
        </div>

        <Header />
      </div>

      <section>
        <div className="mt-[110vh]">
          <HomeComp />
        </div>
      </section>
    </div>
  );
}
