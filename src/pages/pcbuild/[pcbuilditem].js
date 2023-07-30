import { useRouter } from "next/router";
import RootLayout from "@/components/layouts/RootLayout";
import { useGetProductsQuery } from "@/redux/api/apiSlice";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setPCBuilder } from "@/redux/buildSlice/buildSlice";

const PcBuildItem = () => {
  const router = useRouter();
  const categoryName = router.query.pcbuilditem;
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetProductsQuery(categoryName);
  console.log(data);
  return (
    <div>
      <h1 className="py-8 text-3xl text-center font-semibold">Select item</h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 my-5">
          {data?.map((item, i) => (
            <div key={i}>
              <div className="card w-full bg-base-100 rounded-none shadow-lg">
                <figure>
                  <Image
                    src={item?.image_link}
                    height={400}
                    width={400}
                    className="pt-2"
                    responsive="true"
                    alt="featured product"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item?.title}</h2>
                  <p className="font-semibold">Price: $ {item?.price}</p>
                  <p className="font-semibold">
                    Category: {item?.categoryName}{" "}
                  </p>
                  <div className="flex">
                    <p>Status: {item?.stock}</p>
                    <div>
                      <p className="flex items-center">
                        Rating: {item?.rating}&nbsp;
                        <AiFillStar className="text-yellow-400" />
                      </p>
                    </div>
                  </div>
                  <div className="card-actions justify-end">
                    <button
                      className=" w-full bg-red-500 text-white"
                      onClick={() => {
                        dispatch(
                          setPCBuilder({ name: categoryName, component: item })
                        );
                        router.push("/pcbuild");
                      }}
                    >
                      Select product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PcBuildItem;

PcBuildItem.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
