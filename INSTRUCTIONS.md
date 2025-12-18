# Acacia Foods Website - Content Update Guide

This guide explains how to update the website content without coding.

## 📝 Updating Products

All product information is stored in `data/products.ts`. To add or edit products:

1. Open `data/products.ts`
2. Each product has the following structure:

```typescript
{
  id: 1,                    // Unique number
  name: "Product Name",     // Display name
  description: "...",       // Product description
  image: "/image.png",      // Image path (must be in /public folder)
  category: "Category Name" // Category for filtering
}
```

3. To add a new product, copy an existing product object and modify the values
4. To edit a product, find it by name and update the fields
5. Save the file - changes will appear automatically

## 🖼️ Managing Images

1. Place all product images in the `/public` folder
2. Reference them in `products.ts` using `/filename.png`
3. Recommended image size: 700x700px or larger
4. Supported formats: PNG, JPG, WebP

## 🎨 Updating Hero Slider

Hero content is in `data/content.ts`:

```typescript
export const heroContent = [
  {
    id: 1,
    image: "/hero-image.jpg",
    title: "Main Title",
    highlight: "Highlighted Word",
    description: "Description text"
  }
]
```

Add more slides by duplicating the object structure.

## 📖 Updating About Section

In `data/content.ts`, modify:

```typescript
export const aboutContent = {
  title: "Our Story",
  description: "...",
  image: "/about-us.jpg",
  features: [
    { title: "Feature 1", description: "..." },
    { title: "Feature 2", description: "..." }
  ]
}
```

## 💬 Updating Testimonials

In `data/content.ts`:

```typescript
export const testimonialsContent = [
  {
    id: 1,
    name: "Customer Name",
    role: "Their Role",
    content: "Their testimonial...",
    avatar: "/avatar.jpg",
    rating: 5  // 1-5 stars
  }
]
```

## 🎯 Categories

Categories are automatically generated from your products. When you add a product with a new category name, it will appear in the filter menu automatically.

## ⚡ Tips

- Always use forward slashes `/` in image paths
- Keep image file sizes under 500KB for best performance
- Use descriptive filenames (e.g., `product-mango-juice.png`)
- Test on mobile after making changes
- Categories are case-sensitive

## 🚀 After Making Changes

1. Save the file
2. The website will automatically reload
3. Check that images display correctly
4. Verify all text appears as expected

For technical support, contact your developer.
