import React from 'react';

import HeaderForm from '../../components/contact-form/headerForm/headerForm';
import BeforeStart from '../../components/contact-form/beforeStart/beforeStart';
import PersonalDetails from '../../components/contact-form/personalDetails/personalDetails';

import './contact.scss';

const ContactForm: React.FC = () => {
  return (
    <div className='contact-form'>
      <HeaderForm />
      <BeforeStart />
      <PersonalDetails />
      Contact form
    </div>
  );
};

export default ContactForm;
