// 1. Interface mein capital C ke sath Categorey ko Promise bana diya
interface PageProps {
  params: Promise<{ Categorey: string }>;
}

// 2. Component ko async banaya
const CategoryPage = async ({ params }: PageProps) => {
  
  // 3. params ko await kar ke Categorey ki value nikaal li
  const { Categorey } = await params;

  return (
    <div>
      {/* Hiba, aap ka pehle se bana hua jo bhi HTML design ya 
        products components is return ke andar thay, unhe wese ہی rkhna.
        Agar aap ko page par category ka naam use karna ho, toh aap `{Categorey}` likh sakti hain.
      */}
    </div>
  );
};

export default CategoryPage;
