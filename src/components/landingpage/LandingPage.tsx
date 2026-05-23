import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { VoiceTranscript } from "./VoiceTranscript";
import { Mic, Zap, Globe, Lock, Code, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4" variant="secondary">
            <Sparkles className="h-3 w-3 mr-1" />
            Next.js Voice Component
          </Badge>
          <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Voice to Text Transcription
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            A powerful Next.js component for real-time voice transcription.
            Convert speech to text with speaker identification, timestamps, and export capabilities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Code className="h-5 w-5" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Globe className="h-5 w-5" />
              View Documentation
            </Button>
          </div>
        </div>

        {/* Demo Section */}
        <div className="flex justify-center mb-24">
          <VoiceTranscript />
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl text-center mb-12 text-gray-900 dark:text-gray-100">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-blue-100 dark:bg-blue-900/20 mb-3">
                  <Mic className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Real-time Transcription</CardTitle>
                <CardDescription>
                  Instant speech-to-text conversion with low latency and high accuracy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-purple-100 dark:bg-purple-900/20 mb-3">
                  <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Speaker Identification</CardTitle>
                <CardDescription>
                  Automatically detect and label different speakers in multi-person conversations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-green-100 dark:bg-green-900/20 mb-3">
                  <Lock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>
                  Client-side processing option available for sensitive data and compliance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-orange-100 dark:bg-orange-900/20 mb-3">
                  <Code className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Easy Integration</CardTitle>
                <CardDescription>
                  Simple React/Next.js component with TypeScript support and minimal setup
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-pink-100 dark:bg-pink-900/20 mb-3">
                  <Globe className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle>Multi-language Support</CardTitle>
                <CardDescription>
                  Supports 50+ languages with automatic language detection
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-indigo-100 dark:bg-indigo-900/20 mb-3">
                  <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle>Export Options</CardTitle>
                <CardDescription>
                  Export transcripts as text, JSON, SRT, or VTT formats for various use cases
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Code Example Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 dark:bg-gray-950 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100">Quick Start</CardTitle>
              <CardDescription className="text-gray-400">
                Install and use in your Next.js project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`npm install @yourname/voice-transcript

import { VoiceTranscript } from '@yourname/voice-transcript';

export default function Page() {
  return (
    <VoiceTranscript
      onTranscript={(text) => console.log(text)}
      language="en-US"
      speakerDetection={true}
    />
  );
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>Built for modern Next.js applications</p>
        </div>
      </footer>
    </div>
  );
}