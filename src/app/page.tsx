import Image from "next/image";
import { ArrowRight, Zap, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";
import hero from "../../public/hero.jpg"
import home from "../../public/home.jpg"
export const metadata = {
  title: "Quixess for Social - Social Media E-commerce Automation",
  description:
    "Quixess for Social is the next-gen automation app for social media commerce. Automate, scale, and grow your online business effortlessly.",
};

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-white to-indigo-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Automate Your Social Media Commerce with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Quixess
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            The futuristic platform that helps you manage, sell, and scale
            effortlessly on social media. Save time. Grow smarter. Sell more.
          </p>
          <div className="mt-8 flex justify-center gap-x-4">
            <Link
              href="/join-beta"
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Join the Beta
            </Link>
            <Link
              href="/demo"
              className="rounded-full border border-gray-300 px-6 py-3 text-gray-700 font-semibold hover:border-indigo-500 hover:text-indigo-600 transition"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={hero}
            alt="Futuristic technology background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          How It Works
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition">
            <Zap className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Smart Automation</h3>
            <p className="text-gray-600">
              Automate repetitive tasks like posting, responding, and tracking
              orders with AI-driven efficiency.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition">
            <ShoppingCart className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Seamless E-commerce</h3>
            <p className="text-gray-600">
              Integrate directly with social platforms and manage your products
              from one futuristic dashboard.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition">
            <Users className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Grow Your Audience</h3>
            <p className="text-gray-600">
              Reach more people and boost sales with built-in marketing and
              engagement tools.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Teaser */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Experience the Future of Social Commerce
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our interactive demo lets you see how Quixess transforms your social
            selling workflow — from chaos to clarity.
          </p>
          <Image
            src={home}
            alt="Demo screenshot"
            width={1200}
            height={600}
            className="rounded-2xl shadow-xl border"
          />
          <div className="mt-8">
            <Link
              href="/demo"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Try the Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Join Beta CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
          Be Among the First
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Quixess for Social is currently in private beta. Sign up today and get
          early access to the future of social commerce automation.
        </p>
        <Link
          href="/join-beta"
          className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-white font-semibold text-lg shadow-lg hover:opacity-90 transition"
        >
          Join the Beta Now
        </Link>
      </section>
    </main>
  );
}
