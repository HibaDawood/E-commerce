import CategoryPage from "./categoryPage";

const Category = ({ params }: { params: { categorey: string } }) => {
  // const bestSell = [
  //   {
  //     src: "/picture/shirt.png",
  //     title: "Red Black Shirt",
  //     alt: "Red Black Shirt",
  //     description: "Beautiful Shirts for Girls",
  //     price: 150,
  //     category: "tops",
  //     products: "shirt",
  //     discount: 20,
  //   },
  //   {
  //     src: "/picture/top-2.png",
  //     title: "Gray Top",
  //     alt: "Gray Top",
  //     description: "Butterfly Gray Top for Girls",
  //     price: 120,
  //     category: "tops",
  //     products: "shirt",
  //     discount: 0,
  //   },
  //   {
  //     src: "/picture/top.png",
  //     title: "Printed Elegant Top",
  //     alt: "Printed Top",
  //     description: "Elegant Top for Girls",
  //     price: 110,
  //     category: "tops",
  //     products: "shirt",
  //     discount: 0,
  //   },
  //   {
  //     src: "/picture/top-3.png",
  //     title: "Offwhite Top",
  //     alt: "Offwhite Top",
  //     description: "Beautiful Top for Girls",
  //     price: 150,
  //     category: "tops",
  //     products: "shirt",
  //     discount: 30,
  //   },
  //   {
  //     src: "/picture/top-4.png",
  //     title: "Beautiful Pink Shirt",
  //     alt: "Beautiful Pink Shirt",
  //     description: "Beautiful Pink Shirt for Girls",
  //     price: 100,
  //     category: "tops",
  //     products: "shirt",
  //     discount: 0,
  //   },
  //   {
  //     src: "/picture/top-5.png",
  //     title: "Stylish Shirt",
  //     alt: "Stylish Shirt",
  //     description: "Stylish Shirt for Girls",
  //     price: 150,
  //     category: "tops",
  //     products: "shirt",
  //     discount: 25,
  //   },
  //   {
  //     src: "/picture/top-6.png",
  //     title: "White Beautiful Shirt",
  //     alt: "White Beautiful Shirt",
  //     description: "White Beautiful Shirt for girls",
  //     price: 120,
  //     category: "tops",
  //     products: "shirt",
  //     discount: 0,
  //   },
  //   {
  //     src: "/picture/top-9.png",
  //     title: "Red Stylish Shirt",
  //     alt: "Red Stylish Shirt",
  //     description: "Red Stylish Shirt for Girls",
  //     price: 170,
  //     category: "tops",
  //     products: "shirt",
  //     discount: 0,
  //   },
  //   {
  //     src: "/picture/top-8.png",
  //     title: "Purple Top",
  //     alt: "Purple Top",
  //     description: "Beautiful Top for Girls",
  //     price: 180,
  //     category: "pants",
  //     products: "white-pants",
  //     discount: 25,
  //   },
  // ];
  
  return (
    <div className="mb-[50px] mt-[60px]">
      <CategoryPage params={params} />
    </div>
  );
};

export default Category;
