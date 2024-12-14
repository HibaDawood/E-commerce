import SlugPage from "./slugPage";


const Products = ({ params }: {params: { slug: string }}) => {
  return (
    <section className="body-font overflow-hidden">
      <SlugPage params={params}/>
    </section>
  );
};

export default Products;
