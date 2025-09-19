import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Website</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover our services and explore what we have to offer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-black" >
          <Link href="/about" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg ">
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p>Learn about our company and mission.</p>
          </Link>
          <Link href="/services" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Services</h2>
            <p>See what services we offer.</p>
          </Link>
          <Link href="/contact" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>Get in touch with us.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}