import Download from "@/components/Download/Download";
import Header from "@/components/Header/Header";
import HomeComp from "@/components/Home/Home";
import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import Play from "@/components/Play/Play";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <div className="text-orange-2">
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
          <div
            style={{
              width: "100%",
              height: "84%",
              backgroundColor: "#FF68B5",
            }}
          ></div>
          <svg viewBox="0 0 500 500" preserveAspectRatio="none">
            <path
              d="M 0 30  C 200 100 280 0 500 30 L 1500 0 L 0 0 Z "
              fill="#FF68B5"
              // fill: none;
              // stroke: #646464;
              // stroke-width: 1px;
              // stroke-dasharray: 2,2;
              // stroke-linejoin: round;

              stroke="black"
              strokeWidth="1px"
            ></path>
          </svg>
        </div>
        <div>
          <Header />
        </div>
      </div>

      <section>
        <div className="mt-[120vh]">
          <HomeComp />
        </div>
      </section>

      <section>
        <div className="mt-[30vh]   w-auto">
          <Slider />
        </div>
      </section>

      <section>
        <div className="mt-[50vh]">
          <Download />
        </div>
      </section>

      <section>
        <div className="mt-[30vh]">
          <LeaderBoard />
        </div>
      </section>
      
      <section>
        <div className="mt-[80vh]">
          <Play />
        </div>
      </section>
    </div>
  );
}
