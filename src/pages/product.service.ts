export class ProductService{
    getProducts(){
        return[
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "#1 product in the world yuh",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 1, 2016",
                description: "#2 product in the world yuh",
                rating: 5,
                numOfReviews: 12
            },
            {
                imageUrl: "https://www.thehovercam.com/wp-content/uploads/2017/05/hovercam_van.jpg",
                productName: "Product 3",
                releasedDate: "January 1, 2017",
                description: "#6 van in the world to this date, but projected to be the number 2 in a few months",
                rating: 4,
                numOfReviews: 3
            }];
        }
}


        
    
