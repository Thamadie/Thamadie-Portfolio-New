import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ label, title, description, className = '' }: SectionHeaderProps) {
  const ref = useScrollAnimation<HTMLDivElement>({ type: 'fade-up', duration: 0.8 });

  return (
    <div ref={ref} className={`mb-10 md:mb-16 ${className}`}>
      <p className="section-label">{label}</p>
      <h2 className="font-heading text-4xl md:text-5xl text-charcoal mt-3 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="font-body text-base text-warm-grey mt-4 max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
