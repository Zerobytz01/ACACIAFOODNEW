import { PageHeader } from "@/components/page-header";
import GoFreshReadyCategory from "@/components/go-fresh-ready-category";
import { ProductFilters } from "@/components/product-filters";


export default function GoFreshReadyProductsPage() {
  return (
     <main className="container mx-auto px-4 py-20">
       <PageHeader
        title="GoFresh Ready To Go Products"
        description="Discover our premium selection of craft beverages made with the finest ingredients."
      />
      <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-6">
              <div className="hidden lg:block">
                <ProductFilters />
              </div>
              <div className="lg:col-span-3">
                 <GoFreshReadyCategory />
              </div>
 
      </div>

    </main> 
  );
}

