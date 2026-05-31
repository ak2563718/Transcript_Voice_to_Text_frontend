'use client'
import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { io, Socket } from 'socket.io-client'
import { useAppSelector, useAppDispatch } from '@/redux/hook';
import { check_session } from '@/redux/feature/auth/authAction';

export default function VoiceRecorder() {
  const dispatch = useAppDispatch()
  const { accessToken } = useAppSelector((state)=>state.auth)
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const socketRef = useRef<Socket | null>(null)

  useEffect(()=>{
    dispatch(check_session())
  },[])

  useEffect(() => {
    socketRef.current = io('http://localhost:4000',{
    auth:{
        token:accessToken,  
    }
    })
    socketRef.current.on("transcript", (data) => {
      setTranscript((prev) => prev + " " + data.text);
    });

    return () => {
      socketRef.current?.off("transcript");
    };
  }, []);

 const startRecording = async () => {
    socketRef.current?.emit("recording-start")
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = async (event) => {
      if (event.data.size > 0) {
        const arrayBuffer = await event.data.arrayBuffer();

        socketRef.current?.emit("audio-chunk", arrayBuffer);
      }
    };
    // generate chunk every 1 second
    mediaRecorder.start(100);

    setIsRecording(true);
    console.log('start recording')
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return;

    mediaRecorderRef.current.stop();
    setIsRecording(false);
    socketRef.current?.emit("recording-ended");
    console.log('stop recording')
  };

  const handleMicClick = (e: React.MouseEvent) => {
    if (e.detail === 1) {
      if (!isRecording) {
        startRecording();
      }
    } else if (e.detail === 2) {
      stopRecording();
    }
  };

  const clearTranscript = () => {
    setTranscript('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="bg-white  rounded-2xl shadow-xl border-1 border-gray-200 p-8  ">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-2">Voice to Text Transcription</h1>
          <p className="text-gray-500">Click once to start recording, double click to stop</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={handleMicClick}
            className={`p-6 rounded-full transition-all shadow-lg ${
              isRecording
                ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
            title="Single click to start, double click to stop"
          >
            {isRecording ? (
              <Mic className="w-8 h-8 text-white" />
            ) : (
              <MicOff className="w-8 h-8 text-white" />
            )}
          </button>

          {isRecording && (
            <div className="flex items-center gap-2 text-red-500">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span>Listening...</span>
              <p>Double click on mic to cancel recording..</p>
            </div>
          )}
          

          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-gray-600">Transcription</label>
              {transcript && (
                <button
                  onClick={clearTranscript}
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  Clear
                </button>
              )}
            </div>
            <textarea
              value={transcript + (interimTranscript ? ' ' + interimTranscript : '')}
              readOnly
              placeholder="Your spoken words will appear here..."
              className="w-full h-55 px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 resize-none focus:outline-none focus:border-blue-400 transition-colors"
            />
            {interimTranscript && (
              <p className="text-xs text-gray-400 mt-2 italic">Processing speech...</p>
            )}
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>Supports English language transcription</p>
            <p className="mt-1">Make sure your microphone is enabled</p>
          </div>
        </div>
      </div>
    </div>
  );
}