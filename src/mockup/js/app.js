var cuidaMiMascotaApp = angular.module('cuidaMiMascotaApp',[]);

cuidaMiMascotaApp.controller('CuidadoresListController', function CuidadoresListController($scope) {
  $scope.cuidadores = [
    {
      name: 'Magdalena',
      city:"Cuahtemoc, Ciudad de Mexico",
      level:"5",
      reviews:"2",
      price:"200",
      title:"Lorem Ipsum",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      profile_img:"https://randomuser.me/api/portraits/women/82.jpg",
      medals:[
        "CampCounselor.png",
        "FirstAid.png"
      ],
      response_time:"5",
      price_modes:"Estancia 24hs $200 | Estancia diurna $150 | Paseo $50 "
    },
    {
      name: 'Edgar',
      city:"Benito Juarez, Ciudad de Mexico",
      level:"2",
      reviews:"5",
      price:"500",
      title:"Lorem Ipsum",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      profile_img:"https://randomuser.me/api/portraits/men/79.jpg",
      medals:[
        "GoFishing.png",
        "Hiking.png"
      ],
      response_time:"10",
      price_modes:"Estancia 24hs $200 | Estancia diurna $150 | Paseo $50 "
    }
  ];
});
