import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Mic, Square } from 'lucide-react';

const FluencyCheck = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setTimeElapsed((prev) => {
          if (prev >= 10) {
            setIsRecording(false);
            return 10;
          }
          return prev + 0.1;
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRecording]);

  const handleRecord = () => {
    if (!isRecording) {
      setTimeElapsed(0);
      setIsRecording(true);
    } else {
      setIsRecording(false);
      setTimeElapsed(0);
    }
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            The <span className="gradient-text">Fluency Check</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Describe your day in 10 seconds.
          </p>

          <div className="flex flex-col items-center gap-8">
            {/* Audio Waveform Visual */}
            <div className="w-full h-32 flex items-center justify-center gap-2">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isRecording
                      ? [20, Math.random() * 60 + 20, 20]
                      : 20,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: isRecording ? Infinity : 0,
                    delay: i * 0.05,
                  }}
                  className="w-2 bg-gradient-to-t from-[#2563EB] to-[#F97316] rounded-full"
                />
              ))}
            </div>

            {/* Timer */}
            <div className="text-6xl font-bold">
              {isRecording ? (
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {timeElapsed.toFixed(1)}s
                </motion.span>
              ) : (
                <span className="text-gray-600">0.0s</span>
              )}
            </div>

            {/* Record Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRecord}
              className={`w-32 h-32 rounded-full flex items-center justify-center shadow-2xl ${
                isRecording
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-gradient-to-br from-[#2563EB] to-[#F97316] hover:from-[#1d4ed8] hover:to-[#ea580c]'
              } transition-all duration-300`}
            >
              {isRecording ? (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Square size={40} className="text-white" fill="white" />
                </motion.div>
              ) : (
                <Mic size={40} className="text-white" />
              )}
            </motion.button>

            <p className="text-gray-500 text-sm mt-4">
              {isRecording
                ? 'Recording... Click to stop'
                : 'Click to start recording'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FluencyCheck;
