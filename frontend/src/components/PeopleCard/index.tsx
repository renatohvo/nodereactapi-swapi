import axios from 'axios';
import { useEffect, useState } from 'react';
import { People } from '../../models/people';
import { BASE_URL } from '../../util/request';
import FavoriteButton from '../FavoriteButton';
import './style.css';

function PeopleCard() {

  const [peoples, setPeoples] = useState<People[]>([]);

  // FIND BY NAME
  const handleInputChange = (e: { preventDefault: () => void; target: { value: any; }; }) => {
    e.preventDefault();
    const { value } = e.target;
    axios.get(`${BASE_URL}/people/${value}`)
      .then(response => {
        setPeoples(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // FIND BY FAVORITE
  function handleListFavoritesClick(favorite : number) {
    axios.get(`${BASE_URL}/people/favorite/${favorite}`)
      .then(response => {
        setPeoples(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // FIND ALL
  function handleListAllClick() {
    axios.get(`${BASE_URL}/people`)
      .then(response => {
        setPeoples(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/people`)
      .then(response => {
        setPeoples(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="card">
      <h2 className="people-title">Persona Star Wars</h2>
      <div>
        <div className="form-control-container">
          <input className="form-control" type="text" name="search" id="search" placeholder="Buscar..." onChange={handleInputChange} />
          <div className="favorites-btn" onClick={() => handleListAllClick()}>Todos</div>
          <div className="favorites-btn" onClick={() => handleListFavoritesClick(1)}>Favoritos</div>
        </div>
      </div>

      <div>
        <table className="people-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th>Nome</th>
              <th>Favoritos</th>
            </tr>
          </thead>

          <tbody>
            {
              peoples.map(people => {
                return (
                  <tr key={people.id}>
                    <td className="show992">{people.id}</td>
                    <td>{people.name}</td>
                    <td>
                      <div className="red-btn-container">
                        <FavoriteButton peopleId={people.id} favBit={people.favorite} />
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default PeopleCard;
