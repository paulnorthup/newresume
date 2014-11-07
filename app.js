(function() {
  // Init app
  var app = angular.module('newResume', []);

  // Fake the DB
  app.controller('DatabaseController', function() {
    this.resume = resumeData;
  });

  // Job controller
  app.controller('JobController', function() {
    this.newJob = {};
    this.addJob = function(resume) {
      this.newJob.resps = [];
      resume.jobs.push(this.newJob);
      this.newJob = {};
    };
  });

  // response Controller
  app.controller('RespController', function() {
    this.newResp = '';
    this.addResp = function(job){
      job.resps.push(this.newResp);
      this.newResp='';
    };
  });



})();

var resumeData = {
  objective: "I want this to be the objective of the resume",
  jobs: [{
    employer: 'Bentley University',
    title: 'Web Developer',
    resps: [
      'Did this thing',
      'Did another thing',
      'This was the best thing'
    ],
    location: 'Waltham MA'
  },{
    employer: 'Startup Institute',
    title: 'Web Developer',
    resps: [
      'Did this thkjsdkdfing',
      'Did another thsdkjghsdkjhing',
      'This sdkjhsdkjwas the best thing'
    ],
    location: 'Boston MA'
  }]
}
