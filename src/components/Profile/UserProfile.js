import React from 'react';
//components
import ProfileForm from './ProfileForm';
//styles
import classes from './UserProfile.module.css';

const UserProfile = () =>
{
  return (
    <section className={ classes.profile }>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;