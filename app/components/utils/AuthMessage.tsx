import Image, { StaticImageData } from 'next/image';

interface Props {
  title?: string;
  img?: StaticImageData;
  description?: string;
  btn?: React.ReactNode;
}

export default function AuthMessage({ title, description, img, btn }: Props) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-5 w-full max-w-md mx-auto">
      {img && (
        <div className="flex items-center justify-center">
          <Image
            src={img}
            alt={title || 'auth image'}
            width={120}
            height={120}
            className="object-contain"
            priority
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="space-y-2">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
        )}

        {description && (
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {btn && <div className="w-full pt-2">{btn}</div>}
    </div>
  );
}
