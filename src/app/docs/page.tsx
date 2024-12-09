'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Code, Copy, Terminal, CheckCircle2, Globe, BookOpen } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const DocumentationPage: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState<string>('');

  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
    setCopySuccess(text);
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash' }) => (
    <div className="relative bg-gray-900 rounded-md p-4 my-2">
      <div className="absolute right-2 top-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(code)}
          className="text-gray-400 hover:text-white"
        >
          {copySuccess === code ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <pre className={`text-gray-100 overflow-x-auto language-${language}`}>
        <code>{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              API Documentation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Empowering sustainable development through API integration. Build innovative solutions with CarboCredit&apos;s comprehensive API.
            </p>
          </div>
        </div>
      </header>

      {/* Documentation Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Base URL Card */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Globe className="h-6 w-6 text-green-600" />
                  <h2 className="text-xl font-bold">Base URL</h2>
                </div>
                <CodeBlock code="https://handy-seahorse-suddenly.ngrok-free.app/api/" />
              </CardContent>
            </Card>

            {/* Endpoints */}
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Terminal className="h-6 w-6 mr-2 text-green-600" />
              Endpoints
            </h2>

            {/* Get All Projects */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Get All Projects</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      GET
                    </span>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <CodeBlock code="/get_projects" />
                    <p className="text-gray-600 mt-2">
                      Retrieve a list of all available projects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Responses</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-green-600 font-medium mr-2">200 OK:</span>
                        Returns a list of projects
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-600 font-medium mr-2">404 Not Found:</span>
                        No projects found
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-600 font-medium mr-2">500 Internal Server Error:</span>
                        An error occurred on the server
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Get Project by Name */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Get Project by Name</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      GET
                    </span>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <CodeBlock code="/project/:project" />
                    <p className="text-gray-600 mt-2">
                      Retrieve information about a specific project based on its name.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Parameters</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <span className="font-medium">project</span> (string): The name of the project
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Responses</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-green-600 font-medium mr-2">200 OK:</span>
                        Returns the project&apos;s information
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-600 font-medium mr-2">404 Not Found:</span>
                        Project not found
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-600 font-medium mr-2">500 Internal Server Error:</span>
                        An error occurred on the server
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Code className="h-6 w-6 text-green-600" />
                    <h2 className="text-xl font-bold">Error Handling</h2>
                  </div>
                  <p className="text-gray-600">
                    All endpoints return appropriate HTTP status codes and error messages in case of issues.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <BookOpen className="h-6 w-6 text-green-600" />
                    <h2 className="text-xl font-bold">Logging</h2>
                  </div>
                  <p className="text-gray-600">
                    Each request is logged with its method and URL for debugging and auditing purposes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocumentationPage;