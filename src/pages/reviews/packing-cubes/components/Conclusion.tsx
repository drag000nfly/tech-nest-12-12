import React from 'react';

interface ConclusionProps {
  paragraphs: string[];
}

export function Conclusion({ paragraphs }: ConclusionProps) {
  return (
    <div className="prose prose-invert max-w-none mt-12">
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
