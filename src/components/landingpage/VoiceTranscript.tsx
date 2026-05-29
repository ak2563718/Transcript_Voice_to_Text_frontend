'use client'
import { useEffect, useRef, useState } from "react";

function VoiceTranscript() {
 const socketRef = useRef<WebSocket | null>(null);
const mediaRecorderRef = useRef<MediaRecorder | null>(null); // ✅ fix 1: was WebSocket

const [isRecording, setIsRecording] = useState(false);
const [transcript, setTranscript] = useState("");

useEffect(() => {
  socketRef.current = new WebSocket("ws://localhost:5000");

  socketRef.current.onopen = () => {
    console.log("WebSocket Connected");
  };

  socketRef.current.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.transcript) {
      setTranscript((prev) => prev + data.transcript);
    }
  };

  socketRef.current.onclose = () => {
    console.log("WebSocket Closed");
  };

  return () => {
    socketRef.current?.close(); // ✅ fix 2: optional chaining
  };
}, []);

const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = async (event) => {
      if (
        event.data.size > 0 &&
        socketRef.current?.readyState === WebSocket.OPEN // ✅ fix 3: null + state guard
      ) {
        const arrayBuffer = await event.data.arrayBuffer();
        socketRef.current.send(arrayBuffer);
      }
    };

    mediaRecorder.start(1000);
    setIsRecording(true);
    console.log("Recording Started");
  } catch (error) {
    console.log("Microphone Permission Denied", error);
  }
};

const stopRecording = () => {
  if (!mediaRecorderRef.current) return; // ✅ fix 3: null guard

  mediaRecorderRef.current.stop();

  // also stop mic tracks to release the mic indicator
  mediaRecorderRef.current.stream.getTracks().forEach((t) => t.stop());

  setIsRecording(false);
  console.log("Recording Stopped");
};

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>Live Voice Transcription</h1>

      {!isRecording ? (
        <button
          onClick={startRecording}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Stop Recording
        </button>
      )}

      <div
        style={{
          marginTop: "30px",
          border: "1px solid gray",
          padding: "20px",
          minHeight: "200px",
        }}
      >
        <h2>Transcript:</h2>

        <p>{transcript}</p>
      </div>
    </div>
  );
}

export default VoiceTranscript;