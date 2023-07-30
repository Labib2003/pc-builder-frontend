import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";

const Features = ({ features }) => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">
        Our featured products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-5">
        {" "}
        {features.map((feature, i) => (
          <div key={i}>
            {" "}
            {/* {JSON.stringify(feature)} */}
            <div className="card w-full bg-base-100 rounded-none shadow-lg">
              <figure>
                <Image
                  src={feature.image_link}
                  height={400}
                  width={400}
                  className="pt-2"
                  responsive="true"
                  alt="featured product"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{feature.title}</h2>
                <p className="font-semibold">Price: $ {feature.price}</p>
                <p className="font-semibold">
                  Category: {feature.categoryName}{" "}
                </p>
                <div className="flex">
                  <p>Status: {feature.stock}</p>
                  <div>
                    <p className="flex items-center">
                      Rating: {feature.rating}&nbsp;
                      <AiFillStar className="text-yellow-400" />
                    </p>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button
                    className="py-1 w-full bg-red-500 text-white "
                    onClick={() => router.push(`/products/${feature._id}`)}
                  >
                    Check product
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Features;
