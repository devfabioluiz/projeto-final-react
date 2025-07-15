import React from 'react';
import './Footer.css';

const NewsletterSection = () => {
  return (
    <section className="newsletter-container">
      <div className="newsletter-content">
        <h2>Fique por dentro das novidades</h2>
        <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;