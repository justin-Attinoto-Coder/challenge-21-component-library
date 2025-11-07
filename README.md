# Component Library++ 🎨

A beautiful, modern toast notification component library built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎯 **4 Toast Variants**: Success, Warning, Information, and Error
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 🎨 **Beautiful Gradients**: Modern, eye-catching design
- ⚙️ **Fully Customizable**: Easy to adapt to your needs
- ♿ **Accessible**: Built with accessibility best practices
- 📱 **Responsive**: Works perfectly on all devices
- 🔧 **TypeScript**: Fully typed for better DX

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎯 What's Included

- **Toast Component** - Versatile notification system with multiple variants
- **Toast Provider** - Context-based toast management
- **useToast Hook** - Easy programmatic toast creation
- **Demo Page** - Interactive examples showcasing all features

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 📦 Project Structure

```plaintext
src/
├── app/
│   ├── page.tsx          # Demo page with examples
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── ui/
│       └── toast.tsx     # Toast component & provider
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Usage Example

```tsx
import { ToastProvider, useToast } from '@/components/ui/toast'

function MyComponent() {
  const { addToast } = useToast()

  const showSuccess = () => {
    addToast({
      variant: 'success',
      title: 'Success!',
      description: 'Your action completed successfully.'
    })
  }

  return <button onClick={showSuccess}>Show Toast</button>
}

// Wrap your app with ToastProvider
export default function App() {
  return (
    <ToastProvider>
      <MyComponent />
    </ToastProvider>
  )
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/challenge-21-component-library)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/challenge-21-component-library)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Deploy!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📝 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
