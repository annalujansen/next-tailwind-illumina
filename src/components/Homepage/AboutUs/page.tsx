import { unstable_noStore as noStore } from "next/cache";
import WhoWeAreCard from "../AboutUs/WhoWeAre";

export default async function AboutUs() {
  noStore();


  return (
    <>
      <section
        id="aboutus"
        className="m-0 flex w-full flex-col items-center justify-center gap-9 p-0 font-nunito"
      >
        <div className="flex flex-col gap-24 py-16 sm:py-24">
          <div className="flex flex-col gap-8">
            <WhoWeAreCard />
          </div>
        </div>
      </section>
    </>
  );
}