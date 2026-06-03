import SlugPage from "./slugPage";

// 1. Interface mein params ko Promise bna diya
interface PageProps {
  params: Promise<{ slug: string }>;
}

// 2. Component ko 'async' banaya
const Products = async ({ params }: PageProps) => {
  // 3. params ko await kar ke resolve kiya
  const resolvedParams = await params;

  return (
    <section className="body-font overflow-hidden">
      {/* 4. resolvedParams ko SlugPage component ke andar pass kar diya */}
      <SlugPage params={resolvedParams}/>
    </section>
  );
};

export default Products;
