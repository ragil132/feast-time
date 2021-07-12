/* eslint-disable no-console */
import RestaurantApiDicodingSource from '../../data/restaurantapidicoding-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const mainPages = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
        <h1 tabindex="0" class="latest__label">Recommended Restaurant</h1>
        <div class="posts" id="restaurantItem">
        </div>
    </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiDicodingSource.mainPageRestaurant();
    const restaurantItemContainer = document.querySelector('#restaurantItem');
    restaurants.forEach((restaurant) => {
      restaurantItemContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default mainPages;
