import Image from "next/image";
import { Users, Rocket, Target } from "lucide-react";
import about from "../../../public/about0.jpg"
import about1 from "../../../public/about1.jpg"
import about2 from "../../../public/about2.jpg"
export const metadata = {
  title: "About Us | Quixess for Social",
  description:
    "Learn more about Quixess for Social — the futuristic social media and e-commerce automation platform.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl bg-white mx-auto px-6 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          About Quixess for Social
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Quixess for Social is a next-generation platform that blends{" "}
          <span className="font-semibold text-gray-800">
            social media
          </span>{" "}
          with{" "}
          <span className="font-semibold text-gray-800">
            e-commerce automation
          </span>{" "}
          to empower creators, brands, and businesses.
        </p>
      </section>

      {/* Mission, Vision, Team */}
      <section className="grid md:grid-cols-3 gap-12">
        {/* Mission */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Rocket className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-xl text-blue-600 font-semibold">Our Mission</h2>
          <p className="text-gray-600">
            To simplify digital growth by merging automation with human
            creativity, making e-commerce and social engagement seamless.
          </p>
          <Image
            src={about}
            alt="Mission illustration"
            width={400}
            height={250}
            className="rounded-xl shadow-md mx-auto"
          />
        </div>

        {/* Vision */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Target className="w-12 h-12 text-indigo-600" />
          </div>
          <h2 className="text-xl text-indigo-600 font-semibold">Our Vision</h2>
          <p className="text-gray-600">
            To be the world’s leading futuristic hub where social media and
            commerce converge effortlessly for everyone.
          </p>
          <Image
            src={about1}
            alt="Vision illustration"
            width={400}
            height={250}
            className="rounded-xl shadow-md mx-auto"
          />
        </div>

        {/* Team */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Users className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-xl text-blue-600 font-semibold">Our Team</h2>
          <p className="text-gray-600">
            We are innovators, developers, and creators passionate about
            building tools that empower people globally.
          </p>
          <Image
            src={about2}
            alt="Team illustration"
            width={400}
            height={250}
            className="rounded-xl shadow-md mx-auto"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Join the Future of Social Commerce
        </h2>
        <p className="text-lg mb-6">
          Be part of the beta and experience automation like never before.
        </p>
        <a
          href="/join-beta"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Join Beta
        </a>
      </section>
    </div>
  );
}
