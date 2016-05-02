 angular.module("TradeApp",['ui.bootstrap'])
.controller('newTradeCtrl', function($scope, $uibModal,$http){
				$http.get('trades.json').success(function(data){
					$scope.trades = data;
					
			
			});

});