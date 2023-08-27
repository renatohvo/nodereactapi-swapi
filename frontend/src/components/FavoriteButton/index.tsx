import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../util/request';
import './style.css';
import { toast } from 'react-toastify';

type Props = {
    peopleId: number;
    favBit: number;
}

function FavoriteButton({ peopleId, favBit }: Props) {
    const [favorite, setFavorite] = useState(favBit);

    function handleFavoriteClick(id: number) {
        if(favorite == 0){
            setFavorite(1);
            favBit = 1;
        }
        else{
            setFavorite(0);
            favBit = 0;
        }

        axios.patch(`${BASE_URL}/people/${id}/favorite/${favBit}`)
            .then(response => {
                if(favBit != 0){
                    toast.info("Favoritado! ❤️ ");
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    useEffect(() => {

        if (favorite != 0) {
            setFavorite(1);
        }

    }, [favorite]);

    return (
        <>
            <div className={`${favorite!=0 ? 'favorite-btn' : 'desfavorite-btn'}`} onClick={() => handleFavoriteClick(peopleId)}>

            </div>
        </>
    )
}

export default FavoriteButton;
