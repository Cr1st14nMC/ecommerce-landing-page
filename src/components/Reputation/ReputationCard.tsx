import './Reputation.css'; // Compartiremos CSS para simplificar

interface ReputationCardProps {
  title: string;
  description: string;
  icon: string;
}

export const ReputationCard = ({ title, description, icon }: ReputationCardProps) => {
  return (
    <article className="reputation-card">
      <div className="reputation-card__icon-wrapper">
        <span className="reputation-card__icon">{icon}</span>
      </div>
      <h3 className="reputation-card__title">{title}</h3>
      <p className="reputation-card__description">{description}</p>
    </article>
  );
};