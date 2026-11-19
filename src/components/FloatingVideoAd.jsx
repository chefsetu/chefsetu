import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import chefVideo from "../assets/chef.mp4";

const FloatingVideoAd = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-4 left-4 z-50 w-40 sm:w-48 aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-500/80 bg-black"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close video"
            className="absolute top-2 right-2 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-black/70 hover:bg-red-600 text-white text-sm font-bold transition-colors cursor-pointer"
          >
            ✕
          </button>

          {/* Mute / Unmute Button */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute bottom-2.5 right-2.5 z-10 px-2.5 py-1 rounded-full bg-black/70 hover:bg-black/90 text-white text-xs font-medium transition-colors cursor-pointer"
          >
            {isMuted ? "🔇 Unmute" : "🔊 Mute"}
          </button>

          {/* Vertical Reel Video */}
          <video
            ref={videoRef}
            src={chefVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover block"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingVideoAd;