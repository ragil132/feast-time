/* eslint-disable no-unused-vars */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<article class="post-item">
  <img tabindex="0" class="post-item__thumbnail lazyload"
  data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
  <div class="post-item__content">
  <p tabindex="0" class="post-item__date">About 5 Minutes Ago By Admin</p>
  <h1 tabindex="0" class="post-item__title"><a class="links" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
  <h2 tabindex="0" class="post-item__city">City &nbsp;&nbsp;&nbsp;&nbsp;: ${restaurant.city}</h2>
  <h2 tabindex="0" class="post-item__rating">Rating : ${restaurant.rating}</h2>
  <p tabindex="0" class="post-item__description">${restaurant.description.slice(0, 100)}...</p>
  </div> 
</article>`;

const createRestaurantDetailTemplate = (restaurant) => `

<article class="post-item">
  <img tabindex="0" class="post-item__thumbnail lazyload"
  data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
  <div class="post-item__content">
  <h1 tabindex="0" class="post-item_detail_title">${restaurant.name}</h1>
  <h2 tabindex="0" class="post-item_detail_city">Alamat : ${restaurant.address} ${restaurant.city}</h2>
  <h2 tabindex="0" class="post-item_detail_rating">Rating : ${restaurant.rating}</h2>
  <p tabindex="0" class="post-item_detail_description">${restaurant.description}</p>
  <h2 tabindex="0" class="post-item_detail_subtitle">Kategori Menu</h2>
  <ul class="categories">${restaurant.categories.map((category) => `<li tabindex="0">${category.name}</li>`).join('')}</ul>
  <h2 tabindex="0" class="post-item_detail_subtitle">Menu Makanan</h2>
  <ul class="categories">${restaurant.menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join('')}</ul>
  <h2 tabindex="0" class="post-item_detail_subtitle">Menu Minuman</h2>
  <ul class="categories">${restaurant.menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join('')}</ul>
  <h2 tabindex="0" class="post-item_detail_subtitle">Customer Reviews</h2>
  ${restaurant.customerReviews.map((review) => `
  <div class="review-item">
  <div class="review-header">
      <p tabindex="0" class="review-name">Nama :&nbsp;${review.name}</p>
      <p tabindex="0" class="review-date"><i>Diposting Tanggal :&nbsp;${review.date}</i></p>
  </div>
  <div tabindex="0" class="review-body">${review.review}
  </div>
  </div>`).join('')}
  </div> 
  </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button tabindex="0" aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate,
};
