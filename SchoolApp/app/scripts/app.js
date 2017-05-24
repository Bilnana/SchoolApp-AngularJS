'use strict';

angular.module("schoolApp", [])
         .constant("baseURL","http://localhost:3000/")
         .controller('DataController', ['$scope','$http','baseURL',function($scope,$http,baseURL) {
             
             
             /**********************PROFESSORS*************************/
             
             //get professors data from server
             $http.get(baseURL+"professors")
                .then(
                    function(response) {
                        $scope.professors = response.data;
                    }
                 );
             
             //Save Professor object 
             $scope.saveProfessor= function(){
                  $http.post("http://localhost:3000/professors",$scope.professor)
                        .then(
                        function(response) {
                            $scope.professor = response.data;
                        })
                    $scope.professors.push($scope.professor);
                    $scope.professorForm.$setPristine();
             };
             
             
             
          /**********************STUDENTS*************************/
                
                
             //get students data from server
             $http.get(baseURL+"students")
                .then(
                    function(response) {
                        $scope.students = response.data;
                    }
                );
             //Define student object
             $scope.student={
                 "id": "",
                 "name":"",
                 "born":"",
                 "number":"",
                 "option":"nema"
             };
            //Save Student object 
            $scope.saveStudent=function(){
                    $http.post("http://localhost:3000/students",$scope.student)
                        .then(
                        function(response) {
                            $scope.student = response.data;
                        })
                    $scope.students.push($scope.student);
                    $scope.studentForm.$setPristine();
                    $scope.student={};
                };
                
                
            //Update option in Student object
            $scope.updateStudent = function(student,newOption,id){
               
                student.option = newOption;
                 //$scope.disableSelect = false;
                 $http.put("http://localhost:3000/students/"+id, $scope.student)
                 .then(function(response) {
                      $scope.student = response.data;
                 })
            };
        }]);
		

