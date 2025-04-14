"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const playlist = [
  { title: "Nanchaku", artist: "Seedhe Maut ft. MC Stan", album: "N", url: "/audio/nanchaku.mp3", art: "/images/n.png" },
  { title: "Hola Amigo", artist: "Kr$na ft. Seedhe Maut & Umair", album: "Single", url: "/audio/hola-amigo.mp3", art: "/images/hola-amigo-art.png" },
  { title: "Kodak", artist: "King ft. Seedhe Maut", album: "Monopoly Moves", url: "/audio/kodak.mp3", art: "/images/kodak-art.png" },
  { title: "Maina", artist: "Seedhe Maut", album: "Nayaab", url: "/audio/maina.mp3", art: "/images/maina-art.png" },
  { title: "Tour Shit", artist: "Seedhe Maut", album: "Single", url: "/audio/tour_shit.mp3", art: "/images/tour_shit-art.png" },
  { title: "TT", artist: "Seedhe Maut", album: "Single", url: "/audio/tt.mp3", art: "/images/tt-art.png" },
  { title: "Shutdown", artist: "Seedhe Maut", album: "Single", url: "/audio/shutdown.mp3", art: "/images/shutdown-art.png" },
  { title: "Kaanch Ke Ghar", artist: "Seedhe Maut", album: "Single", url: "/audio/kaanch_ke_ghar.mp3", art: "/images/kaanch_ke_ghar-art.png" },
  { title: "Bure Din", artist: "Seedhe Maut ft. Mick Jenkins", album: "Single", url: "/audio/bure_din.mp3", art: "/images/bure_din-art.png" },
  { title: "Nalla Freestyle", artist: "Seedhe Maut & DJ SA", album: "Single", url: "/audio/nfs.mp3", art: "/images/nfs-art.png" },
  { title: "Bajenge", artist: "Seedhe Maut ft. Baadshah", album: "Single", url: "/audio/bajenge.mp3", art: "/images/bajenge-art.png" },
  { title: "Akatsuki", artist: "Seedhe Maut ft. Raga", album: "Lunch Break", url: "/audio/akatsuki.mp3", art: "/images/lunch-break.png" },
  { title: "Asal G", artist: "Seedhe Maut ft. Faris Shafi & Talal Qureshi", album: "Lunch Break", url: "/audio/asal-g.mp3", art: "/images/lunch-break.png" },
  { title: "Focus Sedated", artist: "Seedhe Maut", album: "Lunch Break", url: "/audio/focus-sedated.mp3", art: "/images/lunch-break.png" },
  { title: "I don't miss that life", artist: "Seedhe Maut", album: "Lunch Break", url: "/audio/idmtl.mp3", art: "/images/lunch-break.png" },
  { title: "Joint in the Booth", artist: "Seedhe Maut", album: "Lunch Break", url: "/audio/jitb.mp3", art: "/images/lunch-break.png" },
  { title: "Khatta Flow", artist: "Seedhe Maut ft. KR$NA", album: "Lunch Break", url: "/audio/khatta-flow.mp3", art: "/images/lunch-break.png" },
  { title: "Kavi", artist: "Seedhe Maut", album: "Lunch Break", url: "/audio/kavi.mp3", art: "/images/lunch-break.png" },
  { title: "Kavi Kehna Chahte Hain...", artist: "Seedhe Maut", album: "Lunch Break", url: "/audio/kkch.mp3", art: "/images/lunch-break.png" },
  { title: "Lunch Break", artist: "Seedhe Maut", album: "Lunch Break", url: "/audio/lunchbreak.mp3", art: "/images/lunch-break.png" },
  { title: "Naam Kaam Seher", artist: "Seedhe Maut ft. Qaab & Rebel", album: "Lunch Break", url: "/audio/namkamseher.mp3", art: "/images/lunch-break.png" },
  { title: "Pain", artist: "Seedhe Maut", album: "Lunch Break", url: "/audio/pain.mp3", art: "/images/lunch-break.png" },
  { title: "Swah!", artist: "Seedhe Maut ft. Baadshah", album: "Lunch Break", url: "/audio/swah.mp3", art: "/images/lunch-break.png" },
  { title: "W", artist: "Seedhe Maut", album: "Lunch Break", url: "/audio/w.mp3", art: "/images/lunch-break.png" },
  { title: "Khush Nahi", artist: "Seedhe Maut", album: "Shakti", url: "/audio/khushnahi.mp3", art: "/images/shakti-art.webp" },
  { title: "Soyi Nahi", artist: "Seedhe Maut", album: "Shakti", url: "/audio/soyinahi.mp3", art: "/images/shakti-art.webp" },
  { title: "Naksha", artist: "Seedhe Maut", album: "Shakti", url: "/audio/naksha.mp3", art: "/images/shakti-art.webp" },
  { title: "Raat Ki Rani", artist: "Seedhe Maut", album: "Shakti", url: "/audio/rkr.mp3", art: "/images/shakti-art.webp" },
  { title: "101", artist: "Seedhe Maut", album: "Single", url: "/audio/101.mp3", art: "/images/101.png" },
  { title: "Teen Dost", artist: "Seedhe Maut & Sez on the Beat", album: "Nayaab", url: "/audio/3dost.mp3", art: "/images/nayaab.png" },
  { title: "Chidiya Udd", artist: "Seedhe Maut & Sez on the Beat", album: "Nayaab", url: "/audio/chidiya.mp3", art: "/images/nayaab.png" },
  { title: "Do Guna", artist: "Seedhe Maut", album: "Single", url: "/audio/doguna.mp3", art: "/images/doguna.png" },
  { title: "11k", artist: "Seedhe Maut", album: "Lunch Break", url: "/audio/11k.mp3", art: "/images/lunch-break.png" },
  { title: "Gandi Aulaad", artist: "Seedhe Maut & Sez on the Beat", album: "Nayaab", url: "/audio/ga.mp3", art: "/images/nayaab.png" },
  { title: "Roshni", artist: "Sickflip, Ritviz, Seedhe Maut", album: "Nayaab", url: "/audio/roshni.mp3", art: "/images/roshni.png" },
  { title: "Shayaar", artist: "Bharat Chauhan & Seedhe Maut", album: "Single", url: "/audio/shaayar.mp3", art: "/images/shayaar.png" },
  { title: "Namastute", artist: "Seedhe Maut", album: "N", url: "/audio/namastute.mp3", art: "/images/n.png" },
];


export default function Player() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setMetadata = () => {
      setDuration(audio.duration);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMetadata);
    audio.addEventListener("ended", nextTrack);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMetadata);
      audio.removeEventListener("ended", nextTrack);
    };
  }, []);

  // Handle track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = playlist[currentTrackIndex].url;
    audio.load();
    setCurrentTime(0);

    if (isPlaying) {
      audio.play();
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = (value[0] / 100) * duration;
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100;
      setVolume(value[0]);
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const { title, artist, art } = playlist[currentTrackIndex];

  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <audio ref={audioRef} />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Left: Song Info */}
          <div className="flex items-center space-x-3 w-1/4">
            <div className="relative h-12 w-12 flex-shrink-0">
              <Image src={art} alt="Now playing" width={48} height={48} className="object-cover rounded" />
            </div>
            <div className="min-w-0">
              <h4 className="font-medium text-sm truncate">{title}</h4>
              <p className="text-xs text-gray-500 truncate">{artist}</p>
            </div>
            <Button variant="ghost" size="icon" className="hidden sm:flex h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Center: Player Controls */}
          <div className="flex flex-col items-center w-2/4">
            <div className="flex items-center space-x-2 mb-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={prevTrack}>
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button size="icon" className="h-10 w-10 rounded-full bg-black text-white hover:bg-gray-800" onClick={togglePlay}>
                {isPlaying ? <Pause className="h-5 w-5 fill-white" /> : <Play className="h-5 w-5 fill-white" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={nextTrack}>
                <SkipForward className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Repeat className="h-4 w-4" />
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center w-full max-w-md space-x-2">
              <span className="text-xs text-gray-500">{formatTime(currentTime)}</span>
              <Slider
                max={100}
                step={1}
                className="w-full"
                value={duration > 0 ? [(currentTime / duration) * 100] : [0]}
                onValueChange={handleSliderChange}
              />
              <span className="text-xs text-gray-500">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center justify-end space-x-3 w-1/4">
            <div className="hidden md:flex items-center space-x-2">
              {volume === 0 ? <VolumeX className="h-4 w-4 text-gray-500" /> : <Volume2 className="h-4 w-4 text-gray-500" />}
              <Slider
                defaultValue={[volume]}
                max={100}
                step={1}
                className="w-24"
                value={[volume]}
                onValueChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to format time
const formatTime = (time: number) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};