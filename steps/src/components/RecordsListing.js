import React from 'react'
import PropTypes from 'prop-types'
import EditImg from '../img/edit.svg'
import Delete from '../img/delete.svg'

export default function RecordsListing(props) {
    const {walks, setForm, setWalks} = props;

    const handleDelete = id => {
        setWalks(prevWalks => prevWalks.filter(walk => walk.id !== id))
    };

    const handleEdit = id => {
        const walk = walks.find((elem) => elem.id === id);
        setForm({date: walk.date, distance: walk.distance, edit: true});
    };

    return (
        <div className="walks">
            <ul className="walks-headers">
                <li>Дата (ДД.ММ.ГГ)</li>
                <li>Пройдено км</li>
                <li>Действия</li>
            </ul>

            <ul className="walks-data">
                {walks.map(walk => <li key={walk.id}>
                    <span>{walk.date}</span>
                    <span>{walk.distance}</span>

                    <div>
                        <button onClick={() => handleEdit(walk.id)}>
                            <img src={EditImg} alt='Edit'/>
                        </button>
                        <button onClick={() => handleDelete(walk.id)}>
                            <img src={Delete} alt='Delete'/>
                        </button>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}

RecordsListing.propTypes = {
    walks: PropTypes.array.isRequired,
    setForm: PropTypes.func.isRequired,
    setWalks: PropTypes.func.isRequired
};