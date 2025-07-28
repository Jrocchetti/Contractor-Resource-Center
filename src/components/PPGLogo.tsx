export default function PPGLogo({ className = "w-12 h-8" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 200 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Purple background with rounded corners */}
        <rect
          x="0"
          y="0"
          width="200"
          height="120"
          rx="20"
          ry="20"
          fill="#6b21a8"
        />
        
        {/* PPG Text */}
        <text
          x="100"
          y="75"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="48"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          letterSpacing="2px"
        >
          PPG
        </text>
      </svg>
    </div>
  )
}
