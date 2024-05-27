
export const ArrowDown = ({ width, height, color, className }: { width: number, height: number; color?: string; className?: string; }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} color={color} className={className} viewBox="0 0 16 16">
            <path fill="currentColor" fillRule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V2.75A.75.75 0 0 1 8 2" clipRule="evenodd" />
        </svg>
    );
};
