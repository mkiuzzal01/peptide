import { Button } from '@/components/ui/button';
import React from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import Container from '../shared/Container';

interface Props {
  buttonTitle: string;
  image?: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

export default function HeaderCard({
  image,
  title,
  description,
  buttonTitle,
}: Props) {
  return (
    <Container>
      <div className="flex rounded-lg border p-4">
        <div className="space-y-3 flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>

          <Button variant="outline" className="">
            {buttonTitle}
            <ArrowIcon />
          </Button>
        </div>

        {image && (
          <div className="justify-end">
            <div>{image}</div>
          </div>
        )}
      </div>
    </Container>
  );
}
