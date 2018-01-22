angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [{
            title: 'Reggae',
            id: 1
        },
        {
            title: 'Chill',
            id: 2
        },
        {
            title: 'Dubstep',
            id: 3
        },
        {
            title: 'Indie',
            id: 4
        },
        {
            title: 'Rap',
            id: 5
        },
        {
            title: 'Cowbell',
            id: 6
        }
    ];


})

.controller('PlaylistCtrl', function($scope, $stateParams) {

    })
    .controller('AuthCtrl', function($scope, $stateParams, $state) {
        $scope.login = {};
        $scope.doLogin = function(customer) {
            var email = customer.email;
            var password = customer.password;
            console.log(password);
            console.log(email);
            if (angular.isUndefined(email) || angular.isUndefined(password)) {
                alert("Username and password required");
            } else if (email == 'admin' && password == 'admin') {
                alert("Success");
                $state.go('app.home');
            } else {
                alert("Incorrect credentials");
            }

        };


    })
    .controller('DashCtrl', function($scope, $stateParams, $state, ionicToast) {

        $('#container').highcharts({
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0,
                }
            },
            plotOptions: {
                pie: {
                    depth: 25
                }
            },
            series: [{
                data: [2, 4, 6, 1, 3]
            }]
        });


        $('#container1').highcharts({
            chart: {
                type: 'column',
                margin: 75,
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    depth: 50
                }
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        });

        $('#container2').highcharts({
            chart: {
                type: 'areaspline'
            },
            title: {
                text: 'Average fruit consumption during one week'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday'
                ]
            },
            yAxis: {
                title: {
                    text: 'Fruit units'
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' units'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: 'John',
                data: [3, 4, 3, 5, 4, 10, 12]
            }, {
                name: 'Jane',
                data: [1, 3, 4, 3, 3, 5, 4]
            }]
        });


        $('#container3').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }, {
                name: 'New York',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

            }, {
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

            }]
        });

        // ionicToast.show(message, position, stick, time); -->
        $scope.showToast = function() {
            ionicToast.show('This is a toast at the top.', 'top', true, 2000);
        };
        $scope.showToastTop = function() {
            ionicToast.show('This is a toast at the top.', 'top', true, 2000);
        };

        $scope.showToastMiddle = function() {
            ionicToast.show('This is a toast at the middle.', 'middle', false, 2000);
        };

        $scope.showToastBottom = function() {
            ionicToast.show('This is a toast at the bottom.', 'bottom', false, 2000);
        };

        $scope.toDate = new Date();
        $scope.fromDate = new Date();


    })
    .controller('SalesCtrl', function($scope, $stateParams, $state) {

        $scope.salesList = [{
                "company": "Infosys Pvt Ltd",
                "totalItems": 10,
                "total": 25000,
                "paid": 15000,
                "balance": 10000,
            },
            {
                "company": "Amezon India Pvt Ltd",
                "totalItems": 5,
                "total": 1000,
                "paid": 5000,
                "balance": 5000,
            },
            {
                "company": "Wipro India Pvt Ltd",
                "totalItems": 10,
                "total": 25000,
                "paid": 15000,
                "balance": 10000,
            },
            {
                "company": "Infosys Pvt Ltd",
                "totalItems": 10,
                "total": 25000,
                "paid": 15000,
                "balance": 10000,
            },
            {
                "company": "Infosys Pvt Ltd",
                "totalItems": 10,
                "total": 25000,
                "paid": 15000,
                "balance": 10000,
            },
            {
                "company": "Amezon India Pvt Ltd",
                "totalItems": 5,
                "total": 1000,
                "paid": 5000,
                "balance": 5000,
            },
            {
                "company": "Wipro India Pvt Ltd",
                "totalItems": 10,
                "total": 25000,
                "paid": 15000,
                "balance": 10000,
            },
            {
                "company": "Infosys Pvt Ltd",
                "totalItems": 10,
                "total": 25000,
                "paid": 15000,
                "balance": 10000,
            }
        ]

        $scope.dfromDate = new Date();
        $scope.dtoDate = new Date();


    })
    .controller('ProductCtrl', function($scope, $stateParams, $state, $filter) {

        $scope.products = [{
                "pid": 1,
                "name": "CHEMLOK -205",
                "HSN": "35069190",
                "GST": "15",
                "unit": 'test'

            },
            {
                "pid": 2,
                "name": "CHEMLOK -220 ",
                "HSN": "45124578",
                "GST": "18",
                "unit": 'test'
            },
            {
                "pid": 3,
                "name": "Packaging And Forwarding",
                "HSN": "35069190",
                "GST": "0",
                "unit": 'test'
            },
            {
                "pid": 4,
                "name": "Parl G	",
                "HSN": "35069190",
                "GST": "15",
                "unit": 'test'
            },
            {
                "pid": 5,
                "name": "Marie Gold	",
                "HSN": "35069190",
                "GST": "15",
                "unit": 'test'
            },
            {
                "pid": 6,
                "name": "Cadbury Celebration",
                "HSN": "35069190",
                "GST": "15",
                "unit": 'test'
            },
            {
                "pid": 7,
                "name": "Parl G	",
                "HSN": "35069190",
                "GST": "15",
                "unit": 'test'
            },
            {
                "pid": 8,
                "name": "Marie Gold	",
                "HSN": "35069190",
                "GST": "15",
                "unit": 'test'
            },
            {
                "pid": 9,
                "name": "Cadbury Celebration",
                "HSN": "35069190",
                "GST": "15",
                "unit": 'test'
            },
            {
                "pid": 10,
                "name": "Marie Gold	",
                "HSN": "35069190",
                "GST": "15",
                "unit": 'test'
            },
            {
                "pid": 11,
                "name": "Cadbury Celebration",
                "HSN": "35069190",
                "GST": "15",
                "unit": 'test'
            }
        ];

        var prodId = $stateParams.prodId;
        $scope.getPdetails = function() {
            getPdetails(prodId);
        }

        function getPdetails(prodId) {
            $scope.ddets = $filter('filter')($scope.products, { "pid": prodId });
            $scope.pdetails = $scope.ddets[0];
        }

        $scope.addProduct = function() {
            $state.go('app.productsAdd');
        }

    })


.controller('CustomerCtrl', function($scope, $stateParams, $state) {


    $scope.customerList = [{
            "cid": 1,
            "name": "Sandeep Jadhav",
            "email": "sandeepdj11@gmail.com",
            "mobile": "7899551677",
            "photo": "img/users/1.png",
            "type": "Credit",
            "amount": 60000
        },
        {
            "cid": 2,
            "name": "Jyoi Jalkote",
            "email": "jyotijalkote10@gmail.com",
            "mobile": "7899551676",
            "photo": "img/users/2.png",
            "type": "Debit",
            "amount": 45000
        },
        {
            "cid": 3,
            "name": "Jagdish Hulsure",
            "email": "jmhulsure@gmail.com",
            "mobile": "9738720991",
            "photo": "img/users/3.png",
            "type": "Debit",
            "amount": 50000
        },
        {
            "cid": 4,
            "name": "Ajeet Bachipale",
            "email": "ajitbachi@gmail.com",
            "mobile": "8971737473",
            "photo": "img/users/4.png",
            "type": "Credit",
            "amount": 60000
        },
        {
            "cid": 5,
            "name": "Sandeep Jadhav",
            "email": "sandeepdj11@gmail.com",
            "mobile": "7899551677",
            "photo": "img/users/5.png",
            "type": "Credit",
            "amount": 45000
        },
        {
            "cid": 6,
            "name": "Sandeep Jadhav",
            "email": "sandeepdj11@gmail.com",
            "mobile": "7899551677",
            "photo": "img/users/6.png",
            "type": "Credit",
            "amount": 28000
        },
        {
            "cid": 7,
            "name": "Sandeep Jadhav",
            "email": "sandeepdj11@gmail.com",
            "mobile": "7899551677",
            "photo": "img/users/7.png",
            "type": "Credit",
            "amount": 15000
        },

        {
            "cid": 8,
            "name": "Sandeep Jadhav",
            "email": "sandeepdj11@gmail.com",
            "mobile": "7899551677",
            "photo": "img/users/8.png",
            "type": "Credit",
            "amount": 35000
        }
    ];

    $scope.goNewCustomer = function() {
        $state.go('app.NewCustomer');
    }

})


.controller('ProfileCtrl', function($scope, $stateParams, $state) {

    $scope.personale = true;
    $scope.prof = false;
    $scope.accnt = false;
    $scope.shPersonal = function() {
        $scope.personale = true;
        $scope.prof = false;
        $scope.accnt = false;
    }
    $scope.shProf = function() {
        $scope.personale = false;
        $scope.prof = true;
        $scope.accnt = false;

    }
    $scope.shAccount = function() {
        $scope.personale = false;
        $scope.prof = false;
        $scope.accnt = true;
    }
})

.controller('AccountCtrl', function($scope) {
    $scope.salesList = [{
            "shid": 1,
            "company": "Infosys Pvt Ltd",
            "totalItems": 10,
            "total": 25000,
            "paid": 15000,
            "balance": 10000,
        },
        {
            "company": "Amezon India Pvt Ltd",
            "totalItems": 5,
            "total": 1000,
            "paid": 5000,
            "balance": 5000,
        },
        {
            "company": "Wipro India Pvt Ltd",
            "totalItems": 10,
            "total": 25000,
            "paid": 15000,
            "balance": 10000,
        },
        {
            "company": "Infosys Pvt Ltd",
            "totalItems": 10,
            "total": 25000,
            "paid": 15000,
            "balance": 10000,
        },
        {
            "company": "Infosys Pvt Ltd",
            "totalItems": 10,
            "total": 25000,
            "paid": 15000,
            "balance": 10000,
        },
        {
            "company": "Amezon India Pvt Ltd",
            "totalItems": 5,
            "total": 1000,
            "paid": 5000,
            "balance": 5000,
        },
        {
            "company": "Wipro India Pvt Ltd",
            "totalItems": 10,
            "total": 25000,
            "paid": 15000,
            "balance": 10000,
        },
        {
            "company": "Infosys Pvt Ltd",
            "totalItems": 10,
            "total": 25000,
            "paid": 15000,
            "balance": 10000,
        }
    ]

    $scope.dfromDate = new Date();
    $scope.dtoDate = new Date();

})