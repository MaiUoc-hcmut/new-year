'use client'
import Firework from "@/components/firework";
import CountdownTimer from "@/components/timer";
import { useEffect, useState } from "react";

export default function Home() {
  const [showFirework, setShowFirework] = useState(false);

  useEffect(() => {
    const checkNewDate = () => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        setShowFirework(true);
      }
    };

    // Check every second
    const timer = setInterval(checkNewDate, 1000);

    // Cleanup the interval
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Hiển thị pháo hoa khi đến ngày mới */}
      {showFirework && <Firework />}
      
      {/* Bộ đếm ở giữa */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          textAlign: "center",
          color: "white", // Đảm bảo màu chữ nổi bật
        }}
      >
        <CountdownTimer />
      </div>
    </div>
  );
}
