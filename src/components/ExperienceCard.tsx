import HomeMediaCard from './HomeMediaCard';

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  delay: number;
  link?: string;
  reverse?: boolean;
}

const ExperienceCard = ({ title, description, image, delay, link, reverse }: ExperienceCardProps) => {
  const href =
    link || `/experiences/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <HomeMediaCard
      href={href}
      image={image}
      title={title}
      description={description}
      badge="Experience"
      delay={delay}
      reverse={reverse}
    />
  );
};

export default ExperienceCard;
