// src/components/MusicToggle.jsx
import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicToggle = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioRef.current.volume = 0.2; // optional: set default volume
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/intro.mp3" loop />
      <button
        onClick={toggleMusic}
        className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full shadow-md hover:scale-110 transition"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <FaVolumeUp className="text-green-500" size={20} />
        ) : (
          <FaVolumeMute className="text-red-500" size={20} />
        )}
      </button>
    </div>
  );
};

export default MusicToggle;
