import { ContentSection } from '@/types/content';

interface ArticleBodyProps {
  sections: ContentSection[];
}

export function ArticleBody({ sections }: ArticleBodyProps) {
  const renderSection = (section: ContentSection, index: number) => {
    const HeadingTag = section.heading ? 'h2' : 'div';

    return (
      <section key={index} className="mb-8">
        {section.heading && (
          <HeadingTag className="mb-4 text-2xl font-semibold text-df-blue-dark">
            {section.heading}
          </HeadingTag>
        )}

        {section.content && section.content.length > 0 && (
          <div className="space-y-4">
            {section.content.map((paragraph, pIndex) => {
              // Check if this is a bullet point (starts with a dash, asterisk, or bullet character)
              const isBullet = /^[-*•]\s/.test(paragraph);

              if (isBullet) {
                return (
                  <ul key={pIndex} className="list-inside list-disc space-y-2 pl-4">
                    <li className="text-neutral-700">{paragraph.replace(/^[-*•]\s/, '')}</li>
                  </ul>
                );
              }

              return (
                <p key={pIndex} className="text-neutral-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        )}

        {section.subsections && section.subsections.length > 0 && (
          <div className="mt-6 space-y-6 pl-4">
            {section.subsections.map((subsection, subIndex) => (
              <div key={subIndex}>
                {subsection.heading && (
                  <h3 className="mb-3 text-xl font-semibold text-df-blue-dark">
                    {subsection.heading}
                  </h3>
                )}
                {subsection.content && subsection.content.length > 0 && (
                  <div className="space-y-2">
                    {subsection.content.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-neutral-700">
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    );
  };

  return (
    <article className="prose prose-neutral max-w-none">
      {sections.map((section, index) => renderSection(section, index))}
    </article>
  );
}
