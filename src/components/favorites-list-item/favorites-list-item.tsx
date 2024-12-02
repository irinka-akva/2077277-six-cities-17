import Card from '../card/card';
import { FavoritesPage } from '../../const';

type FavoritesListItemProps = {
  favoriteCity: string;
}

function FavoritesListItem({ favoriteCity }: FavoritesListItemProps): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favoriteCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <Card page = {FavoritesPage} />
      </div>
    </li>
  );
}

export default FavoritesListItem;
