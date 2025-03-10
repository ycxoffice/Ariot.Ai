import React, { useState } from "react";
import {
  Search,
  Database,
  Building2,
  Laptop,
  Cpu,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ARIOTLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "ar", name: "AR Technology" },
    { id: "iot", name: "IoT Devices" },
    { id: "industries", name: "Industries" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Animated background pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A0A0F_1px,transparent_1px),linear-gradient(to_bottom,#0A0A0F_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Database className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold">
                ARIOT<span className="text-cyan-400">.ai</span>
              </span>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the World of
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AR & IoT Innovation
              </span>
            </h1>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    selectedCategory === category.id
                      ? "border-cyan-400 text-cyan-400"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Explore Company Database Button */}
            <Link to="/CompanyList">
              <button className="inline-flex items-center px-8 py-3 mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:-translate-y-1">
                <span>Explore Company Database</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </Link>

            <p className="text-xl text-gray-400 mb-12">
              The most comprehensive database of Augmented Reality and IoT
              companies, technologies, and applications
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 bg-black/40 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* AR Technologies */}
            <div className="bg-gradient-to-br from-black/60 to-cyan-950/30 backdrop-blur-xl p-6 rounded-xl border border-cyan-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Laptop className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold">AR Technologies</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  <span>Marker-based AR</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  <span>SLAM Technology</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  <span>Projection Mapping</span>
                </li>
              </ul>
            </div>

            {/* IoT Devices */}
            <div className="bg-gradient-to-br from-black/60 to-purple-950/30 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Cpu className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">IoT Devices</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Smart Home Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Industrial IoT</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Connected Sensors</span>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div className="bg-gradient-to-br from-black/60 to-blue-950/30 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Industries</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  <span>Retail & E-commerce</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  <span>Healthcare</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  <span>Smart Cities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1000+", label: "Companies" },
              { value: "50+", label: "Technologies" },
              { value: "30+", label: "Industries" },
              { value: "24/7", label: "Live Updates" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore the Database?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Get instant access to comprehensive data about AR and IoT companies
            worldwide
          </p>
        </div>
      </section>
    </div>
  );
};

export default ARIOTLanding;
