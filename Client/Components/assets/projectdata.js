import breadcrumb1 from './project photos/breadcrumb1.png';
import breadcrumb2 from './project photos/breadcrumb2.png';
import breadcrumb3 from './project photos/breadcrumb3.png';
import breadcrumb4 from './project photos/breadcrumb4.png';
import breadcrumb5 from './project photos/breadcrumb5.png';
import breadcrumb6 from './project photos/breadcrumb6.png';
import breadcrumb7 from './project photos/breadcrumb7.png';
import breadcrumb8 from './project photos/ar.png';
import spurr1 from './project photos/spurr1.png';
import spurr2 from './project photos/spurr2.png';
import spurr4 from './project photos/spurr4.png';
import spurr5 from './project photos/spurr5.png';
import cookbook1 from './project photos/cookbook1.png';
import cookbook2 from './project photos/cookbook2.png';
import cookbook3 from './project photos/cookbook3.png';
import whatshappenin1 from './project photos/whatshappenin1.png';
import whatshappenin2 from './project photos/whatshappenin2.png';
import whatshappenin3 from './project photos/whatshappenin3.png';

// TODO add in the captions


module.exports = {
  data: [
    {
      title: 'Breadcrumb',
      explanation: 'An interactive tourism experience, where users create trails to bring other users on a guide accross the city. Utilizing geofences we created trigger features that detects when user\'s have arrived at their destination and present them with rewards in the form of videos, images or augmented reality messages Made with Ionic, Nodal, and PostgreSQl',
      images: [
        breadcrumb1,
        breadcrumb2,
        breadcrumb3,
        breadcrumb4,
        breadcrumb5,
        breadcrumb6,
        breadcrumb7,
        breadcrumb8,
      ],
      link: 'http://breadcrumb.real-deal.studio',
      captions: [
        'Login Page',
        'Dashboard',
        'Clue Page',
        'Reward Page',
        'Trail Selections',
        'General UI Flow',
        'UI flow',
        'Augmented Reality Messages',
      ],
    },
    {
      title: 'What\'s Happenin\'',
      explanation: 'A full-stack MERN app, taking advantage of GoogleAPI and Material UI. Allowing users to look up nearby events and create new ones.',
      images: [
        whatshappenin1,
        whatshappenin2,
        whatshappenin3,
      ],
      link: 'http://what-s-happenin.herokuapp.com/',
      captions: [
        'Login',
        'Events page',
        'Material UI components',
      ],
    },
    {
      title: 'Spurr',
      explanation: 'A Cathartic experience. Release your pent up secrets or vent to the anonymous userbase. After submitting your secret to the world, receive someone elses. Totally anonymous and secrets are destroyed after being mailed out. Built with mySQL, Angular and Node',
      images: [
        spurr1,
        spurr2,
        spurr4,
        spurr5,
      ],
      link: 'http://spurr.real-deal.studio',
      captions: [
        'Login Page',
        'Select Spurr Bakgrounds',
        'Input your confessions',
        'Plain background of a Spurr',
      ],
    },
    {
      title: 'Cookbook',
      explanation: 'A MEAN stack cookbook app. Users can input their own recipes to the database, or take advantage of food2Fork\'s recipe library for new ideas. After your dishes are stored, just pick which ones you want and the Cookbook will make an easy to copy grocery list.',
      images: [
        cookbook1,
        cookbook2,
        cookbook3,
      ],
      link: 'http://cookbook.real-deal.studio',
      captions: [
      ],
    },
  ],
};
