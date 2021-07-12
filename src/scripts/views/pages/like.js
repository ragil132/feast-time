import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
        <h1 tabindex="0" class="latest__label">Your Favorite Restaurant</h1>
        <div id="restaurantDetail" class="posts"></div>
    </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurantDetail');
    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = `
      <p class="empty_liked_restaurant" tabindex="0">
        <b>You don't have any favorite restaurants, please choose</b>
      </p>
      `;
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
