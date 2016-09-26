/**
 * Created by Cheater01 on 2016/9/21.
 */

(function(){
    var myApp=angular.module("myApp",[]);
    myApp.controller("SnlistController",["$scope",function($scope){
        $scope.data=[];
        $scope.data[$scope.data.length]={
                index:0,
                name:"BT女校",
                imgSrc:"images/zk1.jpg",
                number:100,
                show:true
        };
        $scope.data[$scope.data.length]={
            index:1,
            name:"BT女校",
            imgSrc:"images/zk1.jpg",
            number:100,
            show:false
        };
        $scope.data[$scope.data.length]={
            index:2,
            name:"BT女校",
            imgSrc:"images/zk1.jpg",
            number:100,
            show:false
        };



        $scope.onmove=function(){
            for(var i=0;i<$scope.data.length;i++)
            {
                $scope.data[i].show=false;
            }

            $scope.data[this.$index].show=true;


        }
    }]);
    myApp.controller("qitalistController",["$scope",function($scope){
        $scope.data=[];
        $scope.data[$scope.data.length]={
            index:0,
            name:"高校日漫",
            imgSrc:"images/zk1.jpg",
            number:100,
            show:true
        };
        $scope.data[$scope.data.length]={
            index:1,
            name:"BT女校",
            imgSrc:"images/zk2.jpg",
            number:100,
            show:false
        };
        $scope.data[$scope.data.length]={
            index:1,
            name:"BT女校",
            imgSrc:"images/zk3.jpg",
            number:100,
            show:false
        };
        $scope.data[$scope.data.length]={
            index:1,
            name:"BT女校",
            imgSrc:"images/zk4.jpg",
            number:100,
            show:false
        };
        $scope.data[$scope.data.length]={
            index:1,
            name:"BT女校",
            imgSrc:"images/zk5.jpg",
            number:100,
            show:false
        };
        $scope.data[$scope.data.length]={
            index:1,
            name:"BT女校",
            imgSrc:"images/zk6.jpg",
            number:100,
            show:false
        };
        $scope.data[$scope.data.length]={
            index:1,
            name:"BT女校",
            imgSrc:"images/zk7.jpg",
            number:100,
            show:false
        };
        $scope.data[$scope.data.length]={
            index:1,
            name:"BT女校",
            imgSrc:"images/zk8.jpg",
            number:100,
            show:false
        };
        $scope.data[$scope.data.length]={
            index:1,
            name:"BT女校",
            imgSrc:"images/zk1.jpg",
            number:100,
            show:false
        };
        $scope.data[$scope.data.length]={
            index:1,
            name:"BT女校",
            imgSrc:"images/zk1.jpg",
            number:100,
            show:false
        };
        $scope.data[$scope.data.length]={
            index:1,
            name:"BT女校",
            imgSrc:"images/zk1.jpg",
            number:100,
            show:false
        };



        $scope.onmove=function(){
            for(var i=0;i<$scope.data.length;i++)
            {
                $scope.data[i].show=false;
            }

            $scope.data[this.$index].show=true;


        }
    }]);
    myApp.controller("con6Controller",["$scope",function($scope)
    {
        $scope.title="最新作品";
        $scope.spanStyle={
            "left":"0"
        };
        $scope.onclick=function(event){
            var event=window.event||event;
            var target=event.target||event.srcElement;
            $scope.spanStyle={
                "left":target.offsetLeft+"px"
            }
            $scope.title=target.innerHTML;
        };
    }
    ]);
    myApp.controller("SprodController",["$scope",function($scope){
        $scope.data=[
            {
                "name":"祖先帮帮忙",
                "dec":"卷入人与魔的漩涡",
                "src":"images/s1.jpg"
            },
            {
                "name":"神奇的玩具狗",
                "dec":"狗与玩具的故事",
                "src":"images/s2.jpg"
            },
            {
                "name":"爱拍的中二少年",
                "dec":"没有中二病会死啦",
                "src":"images/s3.jpg"
            },
            {
                "name":"祖先帮帮忙",
                "dec":"卷入人与魔的漩涡",
                "src":"images/s4.jpg"
            },
            {
                "name":"祖先帮帮忙",
                "dec":"卷入人与魔的漩涡",
                "src":"images/s5.jpg"
            },
            {
                "name":"祖先帮帮忙",
                "dec":"卷入人与魔的漩涡",
                "src":"images/s6.jpg"
            },
            {
                "name":"祖先帮帮忙",
                "dec":"卷入人与魔的漩涡",
                "src":"images/s7.jpg"
            },
            {
                "name":"祖先帮帮忙",
                "dec":"卷入人与魔的漩涡",
                "src":"images/s8.jpg"
            },
            {
                "name":"祖先帮帮忙",
                "dec":"卷入人与魔的漩涡",
                "src":"images/s9.jpg"
            },
            {
                "name":"祖先帮帮忙",
                "dec":"卷入人与魔的漩涡",
                "src":"images/s10.jpg"
            }
        ];
        $scope.style={
            "left":"0"
        };
        $scope.istrue=true;
        $scope.moveover=function()
        {
            $scope.istrue=false;
        };
        $scope.moveout=function(){
            $scope.istrue=true;
        };
        $scope.onprev=function(){
            $scope.style={
                "left":"0"
            };

        };
        $scope.onnext=function(){
            $scope.style={
                "left":"-947px"
            };
        };
    }]);


}(angular,window));
