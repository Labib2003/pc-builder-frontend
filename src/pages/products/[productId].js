import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const totallyLegitReviews = [
  {
    stars: 4,
    username: "John Doe",
    text: "I've been using this PC component for a few months now, and I'm really happy with it. It's been very reliable and has performed flawlessly. I would definitely recommend it to anyone looking for a high-quality component.",
  },
  {
    stars: 2,
    username: "Susan Jones",
    text: "I'm not very happy with this PC component. It's been very slow and unreliable, and I've had to return it to the manufacturer twice. I would not recommend it to anyone.",
  },
  {
    stars: 1,
    username: "Michael Brown",
    text: "This PC component is a complete disaster. It's slow, unreliable, and it doesn't even work half the time. I would not recommend it to anyone, and I'm in the process of trying to get a refund.",
  },
  {
    stars: 5,
    username: "Labib Amir Salimi",
    text: "If this product has million number of fans I am one of them. If this product has ten fans I am one of them. If this product has only one fan and that is me. If this product has no fans, that means I am no longer on earth. If the world against the this product, I am against the world.",
  },
];

const SingleProduct = ({ component }) => {
  return (
    <div>
      {/* {JSON.stringify(component)} */}
      <div className="relative text-white h-[500px] rounded-lg overflow-hidden mb-5">
        <Image
          src={component.image_link}
          fill
          alt={component.title}
          // placeholder="blur"
          className="object-cover object-center -z-10"
        />
        <div className="absolute top-0 w-full bg-gradient-to-b from-black via-gray-950 to-transparent py-3 px-5 flex justify-end gap-3 items-center text-xl font-mono">
          Average Rating: {component.rating}{" "}
          <AiFillStar className="text-yellow-400" />
        </div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-gray-950 to-transparent py-3 px-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-mono mb-0">
              {component.brandName} {component.title}
            </h1>
            <span className="text-sm font-semibold font-mono">
              {component.modelName}
            </span>
          </div>
          <p
            className={
              "text-xl font-mono text-right " +
              (component.stock === "In stock" ? "" : "line-through")
            }
          >
            {component.stock}
            <br />${component.price}
          </p>
        </div>
      </div>
      <div className="mb-5">
        <p className="text-2xl font-semibold">Description:</p>
        <span className="text-xl">{component.description}</span>
      </div>
      <div className="mb-5">
        <p className="text-2xl font-semibold">Specs: </p>
        <span className="text-xl">{component.specification}</span>
      </div>
      <div className="mb-5">
        <p className="text-2xl font-semibold">Reviews: </p>
        <div className="grid grid-cols-2 gap-5">
          {totallyLegitReviews.map((review, index) => (
            <div key={index} className="mt-3 h-full flex flex-col">
              <span className="flex text-xl">
                {Array(review.stars)
                  .fill("")
                  .map((_, index) => (
                    <AiFillStar key={index} className="text-yellow-400" />
                  ))}
                {Array(5 - review.stars)
                  .fill("")
                  .map((_, index) => (
                    <AiOutlineStar key={index} className="text-gray-400" />
                  ))}
              </span>
              <p className="text-base font-serif flex-grow mt-3">
                {review.text}
              </p>
              <span className="font-serif font-medium whitespace-nowrap text-lg">
                -{review.username}
              </span>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

SingleProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://pc-builder-backend-two.vercel.app/features/`
  );
  const data = await res.json();
  const paths = data.map((component) => ({
    params: { productId: component._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-backend-two.vercel.app/features/${params.productId}`
  );
  const data = await res.json();
  return {
    props: { component: data },
  };
};
