angular.module('myApp')
.controller('HomeController', function($scope) {

  $scope.setup = {
    intensity: {
      title: "Customize your workout:",
      subtitle: "Let's get started. Select level of intensity below.",
      icon1: "easy.png",
      icon2: "medium.png",
      icon3: "hard.png",
      setting1: "Easy",
      setting2: "Medium",
      setting3: "Hard",
      wod: false
    },

    focus: {
      title: "What do you want to focus on?",
      subtitle: "Select between cardio, strenght, or a combination of both.",
      icon1: "cardio.png",
      icon2: "strength.png",
      icon3: "both.png",
      setting1: "Cardio",
      setting2: "Strenght",
      setting3: "Both",
      wod: false
      },

  format: {
      title: "Select a workout style.",
      subtitle: "For Time: Description here. | Amrap: Description here. | EMOTM: Description here.",
      icon1: "forTime.png",
      icon2: "amrap.png",
      icon3: "emotm.png",
      setting1: "ForTime",
      setting2: "AMRAP",
      setting3: "EMOTM",
      wod: false
    },

    summary: {
      title: "Got it, your workout is ready",
      subtitle: "Let's go",
      icon1: "goArrow.png",
      setting1: "wod",
      wod: true
    }
};

  $scope.category = $scope.setup.intensity;
  $scope.param = 'focus';
  $scope.settings = [];
  //$scope.wod = false;

  $scope.configure = function(category, setting) {
    
    $scope.settings.push(setting);    

    switch(category) {
        case 'focus':
            $scope.category = $scope.setup.focus;
            $scope.param = 'format';
            break;
        case 'format':
            $scope.category = $scope.setup.format;
            $scope.param = 'summary';
            break;
        case 'summary':
            $scope.category = $scope.setup.summary;
            $scope.param = 'reset';
            break;
        default:
            $scope.category = $scope.setup.intensity;
            $scope.param = 'focus';
            $scope.settings = [];
    }
  };

  // Create function hide headline when wod is displayed.

});