interface PlayIconProps {
  width: string;
  height: string;
  [key: string]: any; // Allow any additional props
}

export function PlayIcon({ width, height, ...rest }: PlayIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 25.4999V40.0144C6.25 44.8269 11.5292 47.8665 15.8271 45.5311L22.5 41.9019M6.25 17.1665V10.9853C6.25 6.17278 11.5292 3.1332 15.8271 5.46862L42.5188 19.9853C43.5194 20.5174 44.3564 21.3117 44.94 22.2832C45.5237 23.2546 45.832 24.3666 45.832 25.4999C45.832 26.6332 45.5237 27.7451 44.94 28.7166C44.3564 29.688 43.5194 30.4823 42.5188 31.0144L29.1729 38.2728"
        strokeWidth="3.125"
        {...rest}
        strokeLinecap="round"
      />
    </svg>
  );
}
