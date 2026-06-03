interface PageProps {
  params: Promise<{ Categorey: string }>;
}

const CategoryPage = async ({ params }: PageProps) => {
  const { Categorey } = await params;

  return (
    <div>
      <p className="hidden">{Categorey}</p>
    </div>
  );
};

export default CategoryPage;
