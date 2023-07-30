import BannerImage from "@/assets/banner.avif";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:h-[35rem]">
        <div className="flex-1 p-4">
          {" "}
          <div className="flex flex-col justify-center p-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold pt-8">
              Build Your
              <span className="text-red-600"> Dream PC</span> Unleash Limitless
              Power and Performance
            </h1>
            <p className="text-lg md:text-lg my-8 p-5">
              Expertly Crafted Custom PCs: Personalized Configurations Tailored
              to Your Needs. Elevate Your Gaming and Productivity Experience
              with Our Premium Builds.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                rel="noopener noreferrer"
                href="/pcbuild"
                className="px-8 py-3 text-lg font-semibold rounded bg-red-500 text-white"
              >
                Build your PC
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#CategoryId"
                className="px-8 py-3 text-lg font-semibold border rounded border-black"
              >
                Check categories
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={BannerImage}
            responsive="true"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
