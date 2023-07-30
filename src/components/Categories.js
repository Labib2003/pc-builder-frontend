import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrPersonalComputer } from "react-icons/gr";

const Categories = ({ features }) => {
  console.log(features);
  return (
    <div id="CategoryId">
      <h1 className="text-3xl font-bold text-center">Our categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-5">
        {" "}
        {features.map((feature, i) => (
          <div key={i}>
            {" "}
            <div className="card w-full bg-base-200 rounded-sm shadow-lg">
              <div className="card-body">
                <h2 className="card-title uppercase mx-auto">
                  {feature.categoryName} <GrPersonalComputer />
                </h2>
                <div className="card-actions justify-end">
                  <Link
                    className="py-1 w-full bg-red-600 text-white flex justify-center items-center"
                    href={`/category/${feature.categoryName}`}
                  >
                    <button className="w-full bg-red-600 text-white flex justify-center items-center">
                      Check collections&nbsp;
                      <AiOutlineArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
