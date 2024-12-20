import React from 'react';

interface IntroductionProps {
  paragraphs: string[];
}

export function Introduction({ paragraphs }: IntroductionProps) {
  return (
    <div className="prose prose-invert max-w-none mb-12">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="mb-4"
          dangerouslySetInnerHTML={{
            __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }}
        />
      ))}
    </div>
  );
}
