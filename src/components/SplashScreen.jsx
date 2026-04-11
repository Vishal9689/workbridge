import { useEffect } from "react";

function SplashScreen({ onFinish }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();   // 🔥 force call
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // ❌ dependency remove

  return (
    <div className="h-screen flex items-center justify-center bg-slate-900 text-white">
      <h1 className="text-4xl font-bold animate-pulse">
        WorkBridge 🚀
      </h1>
    </div>
  );
}

export default SplashScreen;