(function(){
    var app = angular.module('store', [ ]);
    
    app.controller('StoreController', function(){
    this.products = trucks;    
    });
    
    var trucks = [
    {
        name: '2001 Freightliner Columbia',
        price: 28000,
        description: 'Good Solid Truck',
        engine: 'Detroit Diesel',
        vin: 'FL234329842374',
        canPurchase: true,
        images: [
            {
             full: 'http://www.usedbigrigs.com/gallery/2100.jpg',
             }
        ]
    },
    {
        name: '2005 Freightliner Columbia',
        price: 12000,
        description: 'Has a good Detroit Diesel Engine',
        engine: 'Detroit Diesel',
        vin: 'FL234329842374',
        canPurchase: true,
         images: [
            {
             full: 'http://www.usedbigrigs.com/gallery/7413.jpg',
                thumb: 'http://www.usedbigrigs.com/gallery/thumbs/7413.jpg'
             }
        ]
        },
    
        {
        name: '1997 Freightliner FLD120',
        price: 11500,
        description: 'Ready to use, road ready',
        canPurchase: true,
    engine: 'Detroit Diesel',
        vin: 'FL234329842374',
            images: [
            {
             full: 'http://www.usedbigrigs.com/gallery/3570.jpg',
                thumb: 'http://www.usedbigrigs.com/gallery/thumbs/3570.jpg'
             }
        ]
        },
        
];
})();