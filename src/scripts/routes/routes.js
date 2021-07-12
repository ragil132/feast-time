import mainPages from '../views/pages/main-pages';
import detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': mainPages, // default page
  '/main-page': mainPages,
  '/detail/:id': detail,
  '/favorite': Like,
};

export default routes;
