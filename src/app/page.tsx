import BestSelling from "@/components/bestSelling";
import Categories from "@/components/categories";
import Featuredproducts from "@/components/featuredproducts";
import Promotion from "@/components/promotion";
import Services from "@/components/services";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="bg-myWhite/60">
      <Hero />
      <Featuredproducts />
      <Services />
      <Promotion />
      <Categories />
      <BestSelling />
    </div>
  );
}
