import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import RootLayout from "@/components/layouts/RootLayout";

export default function HomePage({ features }) {
  return (
    <>
      <div>
        <Hero></Hero>
        <div className="py-10 bg-[#F5F5F5]">
          <Features features={features}></Features>
        </div>
        <div className="py-10">
          <Categories features={features}></Categories>
        </div>
        <div>
          <Hero2></Hero2>
        </div>
      </div>
    </>
  );
}
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-backend-two.vercel.app/features");
  const data = await res.json();

  return {
    props: {
      features: data,
    },
  };
};
