import React from 'react';
import Resume from './Resume';

const data = {
  name: 'Test User',
  contactInfo: [
    '5A SomeStreet, City 4B321',
    'testuser@mail.com',
    '+44 987 654 3210'
  ],
  sections: [
    {
      id: 'about',
      title: 'About me',
      text: "Hi!. I'm awesome! You should definitely hire me."
    }
  ]
};

// noinspection JSUnusedGlobalSymbols
export default () => <Resume {...data} />;
