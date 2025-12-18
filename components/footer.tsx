import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 text-primary-foreground text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg text-white font-bold mb-4">AcaciaFoods</h3>
            <p className="text-white mb-4">
              At Acacia Food and Beverages Ltd, our mission is to be the best in the industry, setting the standard for excellence in every drink we produce.
            </p>


            {/* Halal Certification */}
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded-md p-2">
                  <Image
                    src="/halal_logo.png"
                    alt="Halal Certified"
                    fill
                    className="object-contain p-1"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Halal Certified</p>
                  <p className="text-white/80 text-xs">All products certified by ZAMHA</p>
                </div>
              </div>
            </div>


            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-white  font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-white  font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-white hover:text-primary transition-colors">
                  Flamingo Carbonated Drink
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-primary transition-colors">
                  Yess Flavoured Drink
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-primary transition-colors">
                  Yes Water
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-primary transition-colors">
                  Yess Soda
                </Link>
              </li>

              <li>
                <Link href="/products" className="text-white hover:text-primary transition-colors">
                  GoFresh Ready To Drink
                </Link>
              </li>

              <li>
                <Link href="/products" className="text-white hover:text-primary transition-colors">
                  Fruta
                </Link>
              </li>

              <li>
                <Link href="/products" className="text-white hover:text-primary transition-colors">
                  GoFresh Concentrate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-white  font-bold mb-4">Contact</h3>
            <address className="not-italic text-white">
              <p>Plot 8492 Lumumbashi Road</p>
              <p>P.O Box 35879, Lusaka, Zambia.</p>
              <p className="mt-2">Email: sales@acaciafood.com</p>
              <p>Phone: (+260) 211 286580/83/85</p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Acacia Food and Beverages Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-white hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
