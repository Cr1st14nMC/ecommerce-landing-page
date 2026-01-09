import { ReputationCard } from './ReputationCard';
import './Reputation.css';

export const Reputation = () => {
  return (
    <section className="reputation">
      <h2 className="reputation__heading">Our Reputation</h2>
      
      <div className="reputation__grid">
        <ReputationCard 
          title="Best Services"
          description="lorem ipsum dolor sit amet, consectetur."
          icon="🎧" 
        />
        <ReputationCard 
          title="Best Teams"
          description="lorem ipsum dolor sit amet, consectetur."
          icon="👷" 
        />
        <ReputationCard 
          title="Best Designs"
          description="lorem ipsum dolor sit amet, consectetur."
          icon="🎨" 
        />
      </div>
    </section>
  );
};