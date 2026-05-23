'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Mic, Square, Play, Download, Copy, Check } from "lucide-react";

interface TranscriptSegment {
  timestamp: string;
  speaker?: string;
  text: string;
}

export function VoiceTranscript() {
  const [isRecording, setIsRecording] = useState(false);
  const [copied, setCopied] = useState(false);

  // Demo transcript data
  const demoTranscript: TranscriptSegment[] = [
    {
      timestamp: "00:00",
      speaker: "Speaker 1",
      text: "Welcome to the product demo. Today we'll be discussing the new features in our voice transcription component.",
    },
    {
      timestamp: "00:15",
      speaker: "Speaker 2",
      text: "That sounds great! I'm particularly interested in the real-time transcription capabilities.",
    },
    {
      timestamp: "00:28",
      speaker: "Speaker 1",
      text: "Absolutely. Our component provides instant text conversion with speaker identification and timestamps.",
    },
  ];

  const handleRecord = () => {
    setIsRecording(!isRecording);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-3xl p-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-full ${isRecording ? 'bg-red-100 dark:bg-red-900/20' : 'bg-gray-100 dark:bg-gray-800'}`}>
            <Mic className={`h-5 w-5 ${isRecording ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Live Transcript</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isRecording ? 'Recording in progress...' : 'Ready to record'}
            </p>
          </div>
        </div>
        <Badge variant={isRecording ? "destructive" : "secondary"}>
          {isRecording ? 'Live' : 'Stopped'}
        </Badge>
      </div>

      <div className="mb-6 space-y-4 max-h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
        {demoTranscript.map((segment, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                {segment.timestamp}
              </span>
              {segment.speaker && (
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {segment.speaker}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
              {segment.text}
            </p>
          </div>
        ))}
        {isRecording && (
          <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
            <div className="flex gap-1">
              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>●</span>
              <span className="animate-bounce" style={{ animationDelay: '150ms' }}>●</span>
              <span className="animate-bounce" style={{ animationDelay: '300ms' }}>●</span>
            </div>
            <span className="text-sm">Listening...</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          onClick={handleRecord}
          variant={isRecording ? "destructive" : "default"}
          className="gap-2"
        >
          {isRecording ? (
            <>
              <Square className="h-4 w-4" />
              Stop Recording
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              Start Recording
            </>
          )}
        </Button>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
        <Button
          variant="outline"
          className="gap-2"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy Text
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
