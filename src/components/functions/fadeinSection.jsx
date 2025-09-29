import React from 'react';

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
          will-change: opacity, transform;
          /* Important: don't change display property here */
        }
        .fade-in-section.is-visible {
          opacity: 1;
          transform: none;
        }
      `}</style>

      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    </>
  );
}
