import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import '../App.css';

// Define the validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required')
});

function ContactUs() {
  // Initialize the form with React Hook Form
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

// Handle form submission
const onSubmit = async (data) => {
  try {
    const response = await fetch('https://your-api-endpoint.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('Form submission result:', result);
    alert('Form submitted successfully!');


  } catch (error) {
    console.error('Form submission error:', error);
    alert('There was an error submitting the form. Please try again.');
  }
  reset();
};



  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name')}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <span role="alert">{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <span role="alert">{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            {...register('message')}
            aria-invalid={errors.message ? "true" : "false"}
          ></textarea>
          {errors.message && <span role="alert">{errors.message.message}</span>}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
