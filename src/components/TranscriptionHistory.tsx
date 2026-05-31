'use client';

import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  FileText,
  Calendar,
  Download,
  MoreVertical,
} from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getallTranscript } from "@/redux/feature/text/textAction";
interface Transcript {
  id: string;
  text: string;
  audioUrl: string;
  createdAt: string;
  userId: string | null;
}

export function TranscriptionHistory() {
  const dispatch = useAppDispatch();

  const { texts } = useAppSelector((state) => state.text) as {
  texts: Transcript[];
};

  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  useEffect(() => {
    dispatch(getallTranscript());
  }, [dispatch]);

  const togglePlay = (id: string, audioUrl: string) => {
    const audio = audioRefs.current[id];

    if (!audio) return;

    if (playingId === id) {
      audio.pause();
      setPlayingId(null);
    } else {
      Object.values(audioRefs.current).forEach((a) => {
        if (a) {
          a.pause();
          a.currentTime = 0;
        }
      });

      audio.play();
      setPlayingId(id);
    }
  };

  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-10">
      <div className="mb-7">
        <h1 className="text-xl font-medium text-gray-900">
          Transcription History
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          {texts?.length || 0}{" "}
          {texts?.length === 1 ? "recording" : "recordings"} saved
        </p>
      </div>

      {!texts?.length ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
          No transcripts found
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {texts.map((record) => {
            const isPlaying = playingId === record.id;

            return (
              <li key={record.id}>
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-4 hover:border-gray-200">
                  {/* Hidden Audio */}
                  <audio
                    ref={(el) => {
                      audioRefs.current[record.id] = el;
                    }}
                    src={record.audioUrl}
                    onEnded={() => setPlayingId(null)}
                  />

                  {/* Play Button */}
                  <button
                    onClick={() =>
                      togglePlay(record.id, record.audioUrl)
                    }
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                      isPlaying
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4 ml-0.5" />
                    )}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Transcript #{record.id.slice(-6)}
                      </p>

                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Transcript Text */}
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-gray-500">
                      {record.text}
                    </p>

                    {/* Meta */}
                    <div className="mt-3 flex items-center gap-4">
                      <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar className="h-3 w-3" />
                        {new Date(record.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="my-3 border-t border-gray-100" />

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 px-2.5 py-1 text-xs text-gray-600 hover:bg-gray-50">
                        <FileText className="h-3 w-3" />
                        View Transcript
                      </button>

                      <a
                        href={record.audioUrl}
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-gray-500 hover:bg-gray-50"
                      >
                        <Download className="h-3 w-3" />
                        Download Audio
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default TranscriptionHistory;