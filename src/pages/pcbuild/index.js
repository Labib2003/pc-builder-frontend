import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const PcBuild = ({ pcItems }) => {
  const { pcBuilder } = useSelector((state) => state.builder);
  return (
    <div className="pb-10">
      <h1 className="text-4xl text-center py-10 font-semibold">
        Choose your own PC customization
      </h1>
      {/* {JSON.stringify(pcBuilder)} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5">
        {pcItems.map((pcItem, i) => (
          <div key={i} className="border-2 border-black">
            <h1 className="uppercase text-lg ml-2 font-semibold">
              {pcBuilder[pcItem.categoryName] ? (
                <div>
                  <Image
                    src={pcBuilder[pcItem.categoryName].image_link}
                    height={400}
                    width={400}
                    className="pt-2 block mx-auto"
                    responsive="true"
                    alt={pcBuilder[pcItem.categoryName].title}
                  />
                  <h2 className="text-lg">
                    {pcBuilder[pcItem.categoryName].title}{" "}
                    {pcBuilder[pcItem.categoryName].modelName}
                  </h2>
                  <p className="text-base">
                    {pcBuilder[pcItem.categoryName].specification}
                  </p>
                  <p className="text-sm my-3">
                    {pcBuilder[pcItem.categoryName].description}
                  </p>
                  <div className="text-base">
                    <span>Price: ${pcBuilder[pcItem.categoryName].price}</span>
                  </div>
                </div>
              ) : (
                `Choose your ${pcItem.categoryName}`
              )}
            </h1>
            <div>
              <Link
                className="bg-red-600 ml-2 py-1 px-2 text-white"
                href={`/pcbuild/${pcItem.categoryName}`}
              >
                <button className="py-2">Choose</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <button
          className="btn btn-success"
          disabled={
            Object.keys(pcBuilder).filter(
              (component) => pcBuilder[component] === null
            ).length
          }
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

export default PcBuild;

PcBuild.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://pc-builder-backend-two.vercel.app/features`);
  const data = await res.json();

  return {
    props: {
      pcItems: data,
    },
  };
};
