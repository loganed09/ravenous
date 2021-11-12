const apiKey = 'nJavF8CCpy65cULE7gjKKuV-9dGCs1EpdXOxriUz-EDtKzFjVAHP-93gKU2GEHTc7qy2rPsz_tmA08_xBj4y9Ro7XizJq7gprhIQF52Hap1_lmlLjw8UPvBOH9SOYXYx'; 


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