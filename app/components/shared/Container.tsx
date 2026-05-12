interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-2 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}
