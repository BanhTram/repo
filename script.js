var app = angular.module("myApp", []);
app.controller("myController", function($scope){
    $scope.hocSinh = [
        {hoTen: "Nam", tuoi: 16, lop: "Lop 10A"},
        {hoTen: "Bede", tuoi: 17, lop: "Lop 10A"},
        {hoTen: "Hoho", tuoi: 17, lop: "Lop 10B"},
        {hoTen: "Kaka", tuoi: 18, lop: "Lop 11A"},
        {hoTen: "Benben", tuoi: 16, lop: "Lop 11B"},
        {hoTen: "Lunu", tuoi: 18, lop: "Lop 12A"},
        {hoTen: "Lunu", tuoi: 18, lop: "Lop 12B"},
    ];
    $scope.review = {};
    $scope.review.ratings = '10A';
    $scope.khoi = [
        {name: "Khoi 10",
        lop: [
            {name: "Lop 10A"},
            {name: "Lop 10B"},
        ]},
        {name: "Khoi 11",
        lop: [
            {name: "Lop 11A"},
            {name: "Lop 11B"},
        ]},
        {name: "Khoi 12",
        lop: [
            {name: "Lop 12A"},
            {name: "Lop 12B"},
        ]}
    ];
    // $scope.Class = {
    //     option_Level_2: [
    //     {name: 'Lop 10A', value: 'Lop 10A' , type:"Lop 10"}, 
    //     {name: 'Lop 10B', value: 'Lop 10B' , type:"Lop 10"},
    //     {name: 'Lop 10C', value: 'Lop 10C' , type:"Lop 10"},
    //     {name: 'Lop 11A', value: 'Lop 11A', type:"Lop 11" }, 
    //     {name: 'Lop 11B', value: 'Lop 11B', type:"Lop 11" }, 
    //     {name: 'Lop 11C', value: 'Lop 11C', type:"Lop 11" }, 
    //     {name: 'Lop 12A', value: 'Lop 12A' , type:"Lop 12"},
    //     {name: 'Lop 12B', value: 'Lop 12B' , type:"Lop 12"},
    //     {name: 'Lop 12C', value: 'Lop 12C' , type:"Lop 12"}
    //     ],
    //     selected_Option_Level_2: { name: 'Lop 10A', value: 'Lop 10A' , type:"Lop 10"},
    //     option_Level_1: [
    //         {id: '0', type: "Lop 10"},
    //         {id: '1', type: "Lop 11"},
    //         {id: '2', type: "Lop 12"}
    //     ]
    // };
    $scope.change_Main_Add = true;
    $scope.change_Main_Edit = false;

    $scope.edit = function(hs){
        $scope.change_Main_Edit = true;
        $scope.hs = hs;
    };

    $scope.saveEdit = function(){
        $scope.change_Main_Edit = false;
    };

    $scope.add = function(){
        $scope.change_Main_Add = false;
    };

    $scope.saveAdd = function(hoTen, tuoi, lop){
        $scope.hocSinh.push({hoTen: hoTen, tuoi: tuoi, lop: lop});
        $scope.change_Main_Add = true;
        
    };

    $scope.delete = function(hs){
        var index = $scope.hocSinh.indexOf(hs);
		$scope.hocSinh.splice(index, 1);
    };
    
    $scope.data = {};
    $scope.inputData = {};
    $scope.applySearch = function(){
        for(prop in $scope.inputData){
            $scope.data[prop] = $scope.inputData[prop];
        }

    };
});