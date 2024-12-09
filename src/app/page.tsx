'use client';

import React, { useState } from 'react';
import { ArrowRight, Leaf, Globe, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

interface NavItem {
  label: string;
  href: string;
}

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Carbon Footprint with CarboCredit
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Join the global movement towards sustainability. Track, reduce, and offset your carbon emissions while earning rewards for positive environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose CarboCredit?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Leaf className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">Track Impact</h3>
                <p className="text-gray-600">
                  Monitor your carbon footprint with our intuitive tracking tools and real-time analytics.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Globe className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">Offset Emissions</h3>
                <p className="text-gray-600">
                  Support verified environmental projects to offset your carbon footprint effectively.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-4">
                <BarChart3 className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">Earn Rewards</h3>
                <p className="text-gray-600">
                  Get rewarded for your sustainable choices with our innovative credit system.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">Join Community</h3>
                <p className="text-gray-600">
                  Connect with like-minded individuals and organizations committed to sustainability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Download the CarboCredit app today and start your journey towards a more sustainable future.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100">
            Download App
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;