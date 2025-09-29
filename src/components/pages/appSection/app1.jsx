import { useEffect, useRef } from "react";
import "../../../App.css";
import "../../../components/styles/nav.css";

function App1() {
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const canvasRef3 = useRef(null);
  const canvasRef4 = useRef(null);


  const initBars = (canvas) => {
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const numBars = 20; // fewer bars
    const bars = Array.from({ length: numBars }, () => ({
      x: Math.random() * canvas.width, // random position
      width: 1.5,    // random thickness (2–6px)
      height: 20 + Math.random() * canvas.height,
      target: Math.random() * canvas.height,
      speed: 0.02 + Math.random() * 0.03,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bars.forEach((bar) => {
        // Smoothly animate towards target
        bar.height += (bar.target - bar.height) * bar.speed;
        if (Math.abs(bar.height - bar.target) < 1) {
          bar.target = Math.random() * canvas.height;
        }

        // Gradient (bottom → top)
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
        gradient.addColorStop(0, "#FAA500");
        gradient.addColorStop(1, "#F35130");

        ctx.fillStyle = gradient;
        ctx.fillRect(bar.x, canvas.height - bar.height, bar.width, bar.height);
      });

      requestAnimationFrame(draw);
    }

    draw();
  };



  useEffect(() => {
    if (canvasRef1.current) initBars(canvasRef1.current);
    if (canvasRef2.current) initBars(canvasRef2.current);
    if (canvasRef3.current) initBars(canvasRef3.current);
    if (canvasRef4.current) initBars(canvasRef4.current);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Two smaller canvases side by side */}
      <div className="visual-wrapper">
        <canvas ref={canvasRef1} className="audio-visualizer big" />

        <div className="center-half left-half">
          <canvas ref={canvasRef3} className="audio-visualizer center" />
        </div>

        <div className="center-half right-half">
          <canvas ref={canvasRef4} className="audio-visualizer center" />
        </div>

        <canvas ref={canvasRef2} className="audio-visualizer big" />
      </div>




      {/* Foreground content */}
      <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center text-4xl gap-4 relative z-10 mt-8">
        <h1 className="wordCarousel wrapper">
          Hi, I'm
          <div>
            <ul className="flip4">
              <li>a baker</li>
              <li>an artist</li>
              <li>a dancer</li>
              <li>Morgan</li>
            </ul>
          </div>
        </h1>
        <div className="text">Graduating December 2025 from the University of Pittsburgh</div>
        <h2>Innovation Needs Empathy</h2>
        <div className="text">Recently @PNC</div>
      </div>
    </div>
  );
}

export default App1;
