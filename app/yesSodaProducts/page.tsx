import { PageHeader } from "@/components/page-header";
import YesSodaCategory from "@/components/yes-soda-category";


export default function YesSodaProductsPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <PageHeader
        title="Yes Soda Products"
        description="Explore our premium Yes Soda collection, featuring classic flavors and modern refreshment for every occasion."
      />
      <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-6">
        <div className="lg:col-span-3">
          <YesSodaCategory />
        </div>
      </div>
    </main>
  );
}

