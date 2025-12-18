// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"
// import { Slider } from "@/components/ui/slider"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { Button } from "@/components/ui/button"

// export function ProductFilters() {
//   const [priceRange, setPriceRange] = useState([0, 10])

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Filters</h3>
//         <Button variant="outline" size="sm" className="w-full">
//           Products
//         </Button>
//       </div>

//       <Accordion type="single" collapsible defaultValue="category">
//         <AccordionItem value="category">
//           <AccordionTrigger className="text-base font-medium">Categories</AccordionTrigger>
//           <AccordionContent>
//             <div className="space-y-3 pt-2">
//               <div className="flex items-center space-x-2">
//                 {/* <Checkbox id="water" /> */}
//                  <Link href="/products/energy" className="text-black hover:text-primary transition-colors">
//                    <Label htmlFor="water">Yes Water</Label>
//                 </Link>
               
//               </div>
//               <div className="flex items-center space-x-2">
//                 {/* <Checkbox id="juice" /> */}

//                  <Link href="/products/energy" className="text-black hover:text-primary transition-colors">
//                       <Label htmlFor="juice">GoFresh Concentrated Drink</Label>
//                 </Link>
               
//               </div>
//               <div className="flex items-center space-x-2">
//                 {/* <Checkbox id="tea" /> */}
//                 <Link href="/products/juice" className="text-black hover:text-primary transition-colors">
//                   <Label htmlFor="tea">Yes Flavoured Drinks</Label>
//                 </Link>

//               </div>
//               <div className="flex items-center space-x-2">
//                 {/* <Checkbox id="energy" /> */}
//                 <Link href="/products/energy" className="text-black hover:text-primary transition-colors">
//                   <Label htmlFor="energy">Fruta</Label>
//                 </Link>
                
//               </div>
//               <div className="flex items-center space-x-2">
//                 {/* <Checkbox id="sparkling" /> */}
//                  <Link href="/products/water" className="text-black hover:text-primary transition-colors">
//                   <Label htmlFor="sparkling">Flamingo Carbonated Drink</Label>
//                 </Link>
                
                
//               </div>
//                <div className="flex items-center space-x-2">
//                 {/* <Checkbox id="sparkling" /> */}
//                  <Link href="/products/energy" className="text-white hover:text-primary transition-colors">
//                   <Label htmlFor="sparkling">Yes Soda</Label>
//                 </Link>
                
//               </div>
//                <div className="flex items-center space-x-2">
//                 {/* <Checkbox id="sparkling" /> */}
//                  <Link href="/products/energy" className="text-white hover:text-primary transition-colors">
//                  <Label htmlFor="sparkling">GoFresh Ready To Go</Label>
//                 </Link>
                
//               </div>
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>

//         {/* <AccordionItem value="price">
//           <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
//           <AccordionContent>
//             <div className="space-y-4 pt-2">
//               <Slider defaultValue={[0, 10]} max={10} step={0.5} value={priceRange} onValueChange={setPriceRange} />
//               <div className="flex items-center justify-between">
//                 <span>${priceRange[0].toFixed(2)}</span>
//                 <span>${priceRange[1].toFixed(2)}</span>
//               </div>
//             </div>
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="features">
//           <AccordionTrigger className="text-base font-medium">Features</AccordionTrigger>
//           <AccordionContent>
//             <div className="space-y-3 pt-2">
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="organic" />
//                 <Label htmlFor="organic">Organic</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="sugar-free" />
//                 <Label htmlFor="sugar-free">Sugar Free</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="natural" />
//                 <Label htmlFor="natural">All Natural</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="vitamin" />
//                 <Label htmlFor="vitamin">Vitamin Enhanced</Label>
//               </div>
//             </div>
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="size">
//           <AccordionTrigger className="text-base font-medium">Size</AccordionTrigger>
//           <AccordionContent>
//             <div className="space-y-3 pt-2">
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="small" />
//                 <Label htmlFor="small">Small (8 oz)</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="medium" />
//                 <Label htmlFor="medium">Medium (16 oz)</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="large" />
//                 <Label htmlFor="large">Large (24 oz)</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="xl" />
//                 <Label htmlFor="xl">Extra Large (32 oz)</Label>
//               </div>
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion> */}

//       {/* <div className="pt-4">
//         <Button className="w-full">Apply Filters</Button>
//       </div> */}
//     </div>
//   )
// }



"use client"

import { useState } from "react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 10])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <Button variant="outline" size="sm" className="w-full">
          Products
        </Button>
      </div>

      <Accordion type="single" collapsible defaultValue="category">
        <AccordionItem value="category">
          <AccordionTrigger className="text-base font-medium">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2">
                <Link href="#" className="text-black hover:text-primary transition-colors">
                  <Label htmlFor="water">Yes Water</Label>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Link href="/goFreshConcentratedProducts" className="text-black hover:text-primary transition-colors">
                  <Label htmlFor="juice">GoFresh Concentrated Drink</Label>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Link href="/products/juice" className="text-black hover:text-primary transition-colors">
                  <Label htmlFor="tea">Yes Flavoured Drinks</Label>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Link href="/products/energy" className="text-black hover:text-primary transition-colors">
                  <Label htmlFor="energy">Fruta</Label>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Link href="/products/water" className="text-black hover:text-primary transition-colors">
                  <Label htmlFor="sparkling">Flamingo Carbonated Drink</Label>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Link href="/products/energy" className="text-black hover:text-primary transition-colors">
                  <Label htmlFor="sparkling">Yes Soda</Label>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Link href="/products/energy" className="text-black hover:text-primary transition-colors">
                  <Label htmlFor="sparkling">GoFresh Ready To Go</Label>
                </Link>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        
      </Accordion>

      {/* <div className="pt-4">
        <Button className="w-full">Apply Filters</Button>
      </div> */}
    </div>
  )
}