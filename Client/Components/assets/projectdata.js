const breadcrumb1 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279944/breadcrumb1_rgmz5c.png';
const breadcrumb2 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279946/breadcrumb2_s4r5ub.png';
const breadcrumb3 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279946/breadcrumb3_hbtjvc.png';
const breadcrumb4 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279946/breadcrumb4_evlntf.png';
const breadcrumb5 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279945/breadcrumb5_vrn9sa.png';
const breadcrumb6 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279945/breadcrumb6_m3xccn.png';
const breadcrumb7 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279945/breadcrumb7_cxflvg.png';
const breadcrumb8 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279946/ar_y4accr.png';
const spurr1 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279941/spurr1_cxalg3.png';
const spurr2 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279941/spurr2_n2gp8h.png';
const spurr4 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279940/spurr4_ktmam9.png';
const spurr5 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279941/spurr5_awds3h.png';
const cookbook1 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279942/cookbook1_zcq8oi.png';
const cookbook2 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279943/cookbook2_o8ol1p.png';
const cookbook3 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279944/cookbook3_iihxew.png';
const whatshappenin1 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279941/whatshappenin1_lduz1d.png';
const whatshappenin2 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279941/whatshappenin2_alt8dt.png';
const whatshappenin3 = 'http://res.cloudinary.com/eperiou/image/upload/v1496279941/whatshappenin3_ufmhvz.png';

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
