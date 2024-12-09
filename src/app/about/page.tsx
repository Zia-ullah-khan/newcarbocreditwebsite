'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { ArrowRight, Target, Heart, Clock, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission to Create a Sustainable Future
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              At CarboCredit, we're dedicated to empowering individuals and businesses to take meaningful action against climate change through innovative technology and community engagement.
            </p>
          </div>
        </div>
      </header>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2023, CarboCredit emerged from a simple yet powerful idea: make environmental impact measurable, actionable, and rewarding for everyone. Our founders, having witnessed the growing effects of climate change, recognized the need for a solution that would bridge the gap between individual action and global impact.
            </p>
            <p className="text-lg text-gray-600">
              Today, we're proud to serve thousands of users worldwide, helping them track and reduce their carbon footprint while contributing to verified environmental projects that make a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Target className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">Impact-Driven</h3>
                <p className="text-gray-600">
                  Every feature we build and decision we make is guided by its potential to create meaningful environmental impact.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Heart className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">Community First</h3>
                <p className="text-gray-600">
                  We believe in the power of collective action and foster a supportive community of environmentally conscious individuals.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Clock className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">Long-term Vision</h3>
                <p className="text-gray-600">
                  Our commitment to sustainability extends beyond quick fixes – we're here to create lasting change for generations to come.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Shield className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">Transparency</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of transparency in our operations, impact reporting, and project verification processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Join Us Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Whether you're an individual looking to reduce your carbon footprint or a business aiming to achieve sustainability goals, we're here to help you succeed.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100">
            Join CarboCredit Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;