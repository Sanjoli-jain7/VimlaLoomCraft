import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {
  bookHero,
  visitTimeOptions,
  visitorTypeOptions,
  packageOptions,
  visitTypeOptions,
  referralOptions,
  confirmationState,
  FORMSUBMIT_AJAX_ENDPOINT,
  FORMSUBMIT_EMAIL,
} from '../data/bookExperience';
import '../styles/book-experience.css';

const isConfigured = FORMSUBMIT_EMAIL.includes('@');

const initialValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  visitTime: '',
  visitors: '1',
  visitorType: '',
  packageChoice: '',
  visitType: '',
  message: '',
  referral: '',
};

function Confirmation() {
  return (
    <div className="book-confirm">
      <div className="book-confirm__mark">
        <svg viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="book-confirm__title">{confirmationState.headline}</h1>
      <p className="book-confirm__body">{confirmationState.body}</p>
      <ul className="book-confirm__steps">
        {confirmationState.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
      <a href={confirmationState.cta.href} className="btn btn-primary book-confirm__cta">
        {confirmationState.cta.label}
      </a>
    </div>
  );
}

export default function BookExperience() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setField = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email address.';
    if (!values.phone.trim()) next.phone = 'Please enter a phone or WhatsApp number.';
    if (!values.date) next.date = 'Please choose a date.';
    if (!values.visitTime) next.visitTime = 'Please choose a preferred time.';
    if (!values.visitors || Number(values.visitors) < 1) next.visitors = 'Please enter at least 1 visitor.';
    if (!values.visitorType) next.visitorType = 'Please choose Indian or International.';
    if (!values.packageChoice) next.packageChoice = 'Please choose a package.';
    if (!values.visitType) next.visitType = 'Please choose the type of visit.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(false);

    if (!validate()) return;

    if (!isConfigured) {
      // FormSubmit hasn't been connected yet — see
      // src/data/bookExperience.js for the one-time setup.
      setServerError(true);
      return;
    }

    const payload = {
      'Full Name': values.name,
      Email: values.email,
      'Phone / WhatsApp': values.phone,
      'Date of Visit': values.date,
      'Preferred Visit Time': values.visitTime,
      'Number of Visitors': values.visitors,
      'Visitor Type': values.visitorType,
      'Selected Experience(s)':
        packageOptions.find((p) => p.value === values.packageChoice)?.label || values.packageChoice,
      'Type of Group': values.visitType,
      'Message / Special Requirements': values.message || 'None provided',
      'How They Heard About Us': values.referral || 'Not specified',
      _subject: 'New Vimla Loom Crafts Experience Enquiry',
      _template: 'table',
      _captcha: 'false',
    };

    setSending(true);
    try {
      const res = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('FormSubmit request failed');
      setSubmitted(true);
    } catch {
      setServerError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="book-shell">
        <Nav />
        <main className="book-page">
          <div className="book-split">
            <div className="book-visual">
              <img className="book-visual__image" src={bookHero.image} alt={bookHero.imageAlt} fetchpriority="high" />
              <div className="book-visual__scrim" aria-hidden="true" />
              <div className="book-visual__content">
                <span className="eyebrow book-visual__eyebrow">{bookHero.eyebrow}</span>
                <h1 className="book-visual__title">{bookHero.headline}</h1>
                <p className="book-visual__sub">{bookHero.sub}</p>
                <p className="book-visual__body">{bookHero.body}</p>

                <div className="book-visual__panel">
                  <p className="book-visual__panel-title">{bookHero.panelEyebrow}</p>
                  <p className="book-visual__panel-body">{bookHero.panelBody}</p>
                </div>
              </div>
            </div>

            <div className="book-form-side">
              {submitted ? (
                <Confirmation />
              ) : (
                <form className="book-form" onSubmit={handleSubmit} noValidate>
                  <div className="book-form__intro">
                    <span className="eyebrow">Visit Enquiry</span>
                    <h2>Tell us about your visit</h2>
                  </div>

                  {serverError && (
                    <p className="book-form__server-error">
                      {isConfigured
                        ? 'Something went wrong sending your request. Please try again, or email us directly.'
                        : "This form isn't fully connected yet \u2014 please check back shortly, or reach out directly and we'll get your visit sorted."}
                    </p>
                  )}

                  <fieldset className="book-fieldset">
                    <legend className="book-fieldset__legend">Your Details</legend>
                    <div className="book-grid">
                      <div className={`book-field ${errors.name ? 'has-error' : ''}`}>
                        <label className="book-field__label" htmlFor="name">
                          Full Name<span className="req">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={values.name}
                          onChange={setField('name')}
                        />
                        {errors.name && <span className="book-field__error">{errors.name}</span>}
                      </div>

                      <div className={`book-field ${errors.email ? 'has-error' : ''}`}>
                        <label className="book-field__label" htmlFor="email">
                          Email Address<span className="req">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={values.email}
                          onChange={setField('email')}
                        />
                        {errors.email && <span className="book-field__error">{errors.email}</span>}
                      </div>

                      <div className={`book-field book-field--wide ${errors.phone ? 'has-error' : ''}`}>
                        <label className="book-field__label" htmlFor="phone">
                          Phone / WhatsApp Number<span className="req">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={values.phone}
                          onChange={setField('phone')}
                        />
                        {errors.phone && <span className="book-field__error">{errors.phone}</span>}
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="book-fieldset">
                    <legend className="book-fieldset__legend">Visit Details</legend>
                    <div className="book-grid">
                      <div className={`book-field ${errors.date ? 'has-error' : ''}`}>
                        <label className="book-field__label" htmlFor="date">
                          Date of Visit<span className="req">*</span>
                        </label>
                        <input id="date" type="date" value={values.date} onChange={setField('date')} />
                        {errors.date && <span className="book-field__error">{errors.date}</span>}
                      </div>

                      <div className={`book-field ${errors.visitTime ? 'has-error' : ''}`}>
                        <label className="book-field__label" htmlFor="visitTime">
                          Preferred Visit Time<span className="req">*</span>
                        </label>
                        <select id="visitTime" value={values.visitTime} onChange={setField('visitTime')}>
                          <option value="" disabled>
                            Select a time
                          </option>
                          {visitTimeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.visitTime && <span className="book-field__error">{errors.visitTime}</span>}
                      </div>

                      <div className={`book-field ${errors.visitors ? 'has-error' : ''}`}>
                        <label className="book-field__label" htmlFor="visitors">
                          Number of Visitors<span className="req">*</span>
                        </label>
                        <input
                          id="visitors"
                          type="number"
                          min="1"
                          value={values.visitors}
                          onChange={setField('visitors')}
                        />
                        {errors.visitors && <span className="book-field__error">{errors.visitors}</span>}
                      </div>

                      <div className={`book-field ${errors.visitType ? 'has-error' : ''}`}>
                        <label className="book-field__label" htmlFor="visitType">
                          Type of Visit<span className="req">*</span>
                        </label>
                        <select id="visitType" value={values.visitType} onChange={setField('visitType')}>
                          <option value="" disabled>
                            Select visit type
                          </option>
                          {visitTypeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.visitType && <span className="book-field__error">{errors.visitType}</span>}
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="book-fieldset">
                    <legend className="book-fieldset__legend">Choose Your Package</legend>
                    <div className="book-grid">
                      <div className={`book-field ${errors.visitorType ? 'has-error' : ''}`}>
                        <label className="book-field__label" htmlFor="visitorType">
                          Visitor Type<span className="req">*</span>
                        </label>
                        <select id="visitorType" value={values.visitorType} onChange={setField('visitorType')}>
                          <option value="" disabled>
                            Select visitor type
                          </option>
                          {visitorTypeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.visitorType && <span className="book-field__error">{errors.visitorType}</span>}
                      </div>

                      <div className={`book-field ${errors.packageChoice ? 'has-error' : ''}`}>
                        <label className="book-field__label" htmlFor="packageChoice">
                          Package<span className="req">*</span>
                        </label>
                        <select id="packageChoice" value={values.packageChoice} onChange={setField('packageChoice')}>
                          <option value="" disabled>
                            Select a package
                          </option>
                          {packageOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        {errors.packageChoice && <span className="book-field__error">{errors.packageChoice}</span>}
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="book-fieldset">
                    <legend className="book-fieldset__legend">Anything Else</legend>
                    <div className="book-grid">
                      <div className="book-field book-field--wide">
                        <label className="book-field__label" htmlFor="message">
                          Message / Special Requirements
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          placeholder="Tell us anything you'd like us to know about your visit..."
                          value={values.message}
                          onChange={setField('message')}
                        />
                      </div>

                      <div className="book-field book-field--wide">
                        <label className="book-field__label" htmlFor="referral">
                          How Did You Hear About Us?
                        </label>
                        <select id="referral" value={values.referral} onChange={setField('referral')}>
                          <option value="">Select an option</option>
                          {referralOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  <button type="submit" className="btn btn-primary book-form__submit" disabled={sending}>
                    {sending ? 'Sending\u2026' : 'Request My Experience'}
                  </button>
                  <p className="book-form__consent-note">
                    Submitting this form does not confirm your booking. Our team will contact you to
                    confirm availability and details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
