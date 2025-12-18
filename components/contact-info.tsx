"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export function ContactInfo() {
  const contactItems = [
    {
      icon: <MapPin className="h-5 w-5 text-black" />,
      title: "Address",
      content: "Plot 8492 Lumumbashi Road, Lusaka, Zambia",
    },
    {
      icon: <Phone className="h-5 w-5 text-black" />,
      title: "Phone",
      content: "((+260) 211 286580/83/85",
    },
    {
      icon: <Mail className="h-5 w-5 text-black" />,
      title: "Email",
      content: "sales@acaciafood.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-black" />,
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 5PM",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
        <p className="text-muted-foreground">We'd love to hear from you. Here's how you can reach us.</p>
      </div>

      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="bg-[#19a64a] p-2 rounded-full">{item.icon}</div>
            <div>
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-muted-foreground">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Map Image */}
      <div className="pt-4">
        <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden relative border border-border shadow-md">
          <Image
            src="/acacia_map.png"
            alt="Acacia Foods Location Map - Plot 8492 Lumumbashi Road, Lusaka, Zambia"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={(e) => {
              // Show placeholder if image doesn't exist
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-muted-foreground bg-muted"><div class="text-center p-4"><p class="font-medium">Map Image</p><p class="text-sm">Add acacia_map.png to /public folder</p></div></div>'
              }
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}
