import Features from "@/components/Features";
import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Category({ components }) {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center capitalize">
        {router.query.category + "s"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-5">
        {components.map((component) => (
          <div key={component}>
            {" "}
            {/* {JSON.stringify(feature)} */}
            <div className="card w-full bg-base-100 rounded-none shadow-lg">
              <figure>
                <Image
                  src={component.image_link}
                  height={400}
                  width={400}
                  className="pt-2"
                  responsive="true"
                  alt="featured product"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{component.title}</h2>
                <p className="font-semibold">Price: $ {component.price}</p>
                <p className="font-semibold">
                  Category: {component.categoryName}{" "}
                </p>
                <div className="flex">
                  <p>Status: {component.stock}</p>
                  <div>
                    <p className="flex items-center">
                      Rating: {component.rating}&nbsp;
                      <AiFillStar className="text-yellow-400" />
                    </p>
                  </div>
                </div>
                {/* <div className="card-actions justify-end">
                  <button
                    className="py-1 w-full bg-red-500 text-white "
                    onClick={() => router.push(`/products/${feature._id}`)}
                  >
                    Check product
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Features features={components} /> */}
    </div>
  );
}

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://pc-builder-backend-two.vercel.app/products`);
  const data = await res.json();
  //   console.log("from paths", data);
  const paths = data.map((component) => ({
    params: { category: component.categoryName },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-backend-two.vercel.app/products/${params.category}`
  );
  const data = await res.json();
  //   console.log(data);
  return {
    props: { components: data },
  };
};
