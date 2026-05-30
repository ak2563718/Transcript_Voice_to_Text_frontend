'use client'
import { useEffect, useRef, useState } from "react";
import { socket } from "@/socket";

export default function MicrophoneRecorder() {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    socket.on("transcript", (data) => {
      setTranscript((prev) => prev + " " + data.text);
    });

    return () => {
      socket.off("transcript");
    };
  }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = async (event) => {
      if (event.data.size > 0) {
        const arrayBuffer = await event.data.arrayBuffer();

        socket.emit("audio-chunk", arrayBuffer);
      }
    };

    // generate chunk every 1 second
    mediaRecorder.start(1000);

    setIsRecording(true);
    console.log('start recording')
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return;

    mediaRecorderRef.current.stop();
    setIsRecording(false);
    socket.emit("recording-ended");
    console.log('stop recording')
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-200">
      <div>
      <button className="ml-5 bg-gray-200 border p-2 rounded-lg" onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>

      <button className="ml-10 bg-gray-200 border p-2 rounded-lg" onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>

      <h2 className="ml-5 mt-4">Transcript:</h2>
      <p>{transcript}</p>
    </div>
    </div>
  );
}