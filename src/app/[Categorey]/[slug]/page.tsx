import SlugPage from "./slugPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Products = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  return (
    <section className="body-font overflow-hidden">
      <SlugPage params={resolvedParams}/>
    </section>
  );
};

export default Products;
