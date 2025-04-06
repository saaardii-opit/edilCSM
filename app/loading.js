"use client";

export default function Loading() {
  return (
    <div className="loading-wrapper" role="alert" aria-busy="true" aria-label="Loading content">
      <div className="loading-container">
        <div className="loading-animation">
          <div className="construction-loader">
            <div className="beam"></div>
            <div className="pillar"></div>
          </div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>

      <style jsx>{`
        .loading-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.9);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .loading-container {
          text-align: center;
        }

        .loading-animation {
          margin-bottom: 1rem;
        }

        .construction-loader {
          position: relative;
          width: 60px;
          height: 60px;
          margin: 0 auto;
        }

        .beam {
          position: absolute;
          top: 0;
          left: 50%;
          width: 4px;
          height: 100%;
          background: var(--primary-color);
          transform-origin: top;
          animation: swing 1.5s ease-in-out infinite;
        }

        .pillar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background: var(--secondary-color);
        }

        .loading-text {
          color: var(--secondary-color);
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
        }

        @keyframes swing {
          0%, 100% { transform: rotate(-20deg); }
          50% { transform: rotate(20deg); }
        }
      `}</style>
    </div>
  );
}