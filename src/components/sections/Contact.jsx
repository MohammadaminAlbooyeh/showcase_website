import React, { useState } from 'react';
import { Container, Section, Button } from '../ui';
import './Contact.css';

export const Contact = ({
  title = 'Get In Touch',
  subtitle = 'Have a project in mind? Let\'s work together.',
  email = '',
  social = []
}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setLoading(false);

      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 500);
  };

  return (
    <Section id="contact" bgVariant="primary">
      <Container size="md">
        <div className="contact-header">
          <h2 className="contact-title">{title}</h2>
          <p className="contact-subtitle">{subtitle}</p>
        </div>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="form-success">
                ✓ Thanks for reaching out! I'll get back to you soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="form-input form-textarea"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button type="submit" size="lg" fullWidth isLoading={loading}>
              Send Message
            </Button>
          </form>

          <div className="contact-info">
            {email && (
              <div className="info-item">
                <h3 className="info-title">Email</h3>
                <a href={`mailto:${email}`} className="info-link">
                  {email}
                </a>
              </div>
            )}

            {social.length > 0 && (
              <div className="info-item">
                <h3 className="info-title">Connect</h3>
                <div className="social-links">
                  {social.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={link.label}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
