const apiKey = 'Oi-XofUoeYVvMtyOTlIP2cNGHKvE76vqRz3waEctEuM2hyC0JGpjA7kcs6rgWplLY4h4Uxip-Y6DqlsAvu5OeWv184G2UbdyiWbF-vtc74fwYvK4RhBKHM47yuaTYXYx'; 


export const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => response.json())
           .then(jsonResponse => {
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map(business => {
                        console.log(business);
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipCode,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.reviewCount
                        }    
                    })
                }
         });
    }
}