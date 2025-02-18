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

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button className="text-sm hover:text-cyan-400 transition-colors">
                Database
              </button>
              <button className="text-sm hover:text-cyan-400 transition-colors">
                Companies
              </button>
              <button className="text-sm hover:text-cyan-400 transition-colors">
                Analytics
              </button>
              <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition-colors">
                Start Search
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "h-48" : "h-0"
          } overflow-hidden bg-black/90`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button className="block w-full text-left py-2 hover:text-cyan-400 transition-colors">
              Database
            </button>
            <button className="block w-full text-left py-2 hover:text-cyan-400 transition-colors">
              Companies
            </button>
            <button className="block w-full text-left py-2 hover:text-cyan-400 transition-colors">
              Analytics
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the World of
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AR & IoT Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              The most comprehensive database of Augmented Reality and IoT
              companies, technologies, and applications
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-50"></div>
              <div className="relative bg-black/60 backdrop-blur-xl rounded-lg flex items-center p-2">
                <Search className="w-6 h-6 text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="Search companies, technologies, or industries..."
                  className="w-full bg-transparent border-0 focus:ring-0 text-white px-4 py-2"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Search
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
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
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            Start Exploring
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ARIOTLanding;
