var form = angular.module("form",[]);
form.controller("formController",function($scope){

    $scope.items = [
        {
            name: 'Content Managment system',
            price: 500,
            active:true
        },
        {
            name: 'Document mamagment system',
            price: 400,
            active:true
        },
        {
            name: 'Membership system',
            price: 250,
            active:false
        },
        {
            name: 'Event booking system',
            price: 120,
            active:true
        },
    ];

    $scope.toggleActive = function(s){
        s.active = !s.active;
    }

    $scope.total = function(){
		var total = 0;
		angular.forEach($scope.items, function(s){
			if(s.active){
				total+=s.price;
			}
		});
		return total;
	};

    
});