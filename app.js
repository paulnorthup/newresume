(function() {
  // Init app
  var app = angular.module('newResume', []);

  // Fake the DB
  var pastEmployment = [{
    employer: 'Bentley University',
    jobTitle: 'Web Developer',
    resps: [
      'Did this thing',
      'Did another thing',
      'This was the best thing'
    ],
    location: 'Waltham MA'
  },{
    employer: 'Startup Institute',
    jobTitle: 'Web Developer',
    resps: [
      'Did this thkjsdkdfing',
      'Did another thsdkjghsdkjhing',
      'This sdkjhsdkjwas the best thing'
    ],
    location: 'Boston MA'
  }]

  // Past Jobs Controller
  app.controller('PastJobs', function() {
    this.jobs = pastEmployment;
  });



})();
