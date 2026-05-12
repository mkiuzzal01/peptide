'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SubmitButtonProps {
  text: string;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function SubmitButton({
  text,
  loading = false,
  className,
  disabled,
  ...props
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={disabled || loading}
      className={cn(
        'w-full bg-primary text-primary-foreground cursor-pointer',
        'hover:opacity-90 transition',
        className,
      )}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        text
      )}
    </Button>
  );
}
