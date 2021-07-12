import UrlParser from '../../routes/url-parser';
import RestaurantApiDicodingSource from '../../data/restaurantapidicoding-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const detail = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
        <h1 tabindex="0" class="latest__label">Detail Restaurant</h1>
        <div id="restaurantDetail" class="restaurantDetail"></div>
        <div id="likeButtonContainer"></div>
    </div>
    </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiDicodingSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurantDetail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        name: restaurant.restaurant.name,
        rating: restaurant.restaurant.rating,
        address: restaurant.restaurant.address,
        description: restaurant.restaurant.description,
        category: restaurant.restaurant.categories,
        menus: restaurant.restaurant.menus,
        reviews: restaurant.restaurant.customerReviews,
      },
    });
  },
};

export default detail;
