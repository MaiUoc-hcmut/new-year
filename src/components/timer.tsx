'use client'
import { useEffect, useState, useRef } from 'react';

const CountdownTimer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isNewYear, setIsNewYear] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      // Kiểm tra nếu đã sang ngày mới
      if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        setIsNewYear(true);
      }

      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 1000);

    // Cleanup timer khi component bị unmount
    return () => clearInterval(timer);
  }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (audioRef.current) {
                audioRef.current.play();
            }
        }, 2000);

        return () => clearInterval(timer);
    }, []);

  // Format thời gian
    const formatTime = (time: Date) => {
        const year = time.getFullYear();
        const month = String(time.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
        const date = String(time.getDate()).padStart(2, '0');
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');

        return (
            <div style={{ textAlign: 'center', color: 'gold' }}>
            <p style={{ fontSize: '5rem', margin: 0 }}>
                {`${date}-${month}-${year}`}
            </p>
            <p style={{ fontSize: '4rem', margin: 0 }}>
                {`${hours}:${minutes}:${seconds}`}
            </p>
            </div>
        );
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', textAlign: 'center' }}>
        {isNewYear ? (
            <h1 style={{ color: 'gold', fontSize: '5rem' }}>Happy New Year</h1>
        ) : (
            <strong>{formatTime(currentTime)}</strong>
        )}
        {/* <audio ref={audioRef} src="/sounds/ox-bell.mp3" /> */}
        </div>
    );
};

export default CountdownTimer;
