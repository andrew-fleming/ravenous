const apiKey = '2QZ2HZyMhv_QrC2MMqGSFAHXMdJ2e-49zaojp7Ohprj9nfJ_LNOn7P79VO-P3HqsH1Esg-VXewJ_H7pmYbV4UMZ8j2uBualHBqIWjFw_FV6CNx8C1jhZ0yL0bcYPX3Yx';

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then((response) => {
      response.json();
    }).then((jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(((business) => {
          console.log(business);
          return {
            id: business.id,
            imageSrc: business.image_src,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          };
        }));
      }
    });
  }
}

export default Yelp;
