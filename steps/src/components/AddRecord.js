import React from 'react'
import PropTypes from 'prop-types'
import WalksModel from '../models/WalksModel'
import {nanoid} from 'nanoid';

export default function AddRecord(props) {
    const {form, setForm, setWalks} = props

    const handleChange = e => {
        const {name, value} = e.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const walks = new WalksModel(nanoid(), form.date, form.distance);

        setWalks(prevWalks => {
            for (let prevWalk of prevWalks) {
                if (prevWalk.date === walks.date) {
                    prevWalk.distance = Number(walks.distance) + Number(prevWalk.distance);
                    return prevWalks.sort(sortWalks);
                }
            }
            return [...prevWalks, walks].sort(sortWalks);
        });

        setForm({date: '', distance: ''});
    };

    const sortWalks = (date1, date2) => {
        if (date1.date > date2.date) return -1;
        if (date1.date < date2.date) return 1;

        return 0;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="distance">Пройдено км</label>
                <input type="number" name="distance" value={form.distance} onChange={handleChange} required/>
            </div>
            <button type="submit">OK</button>
        </form>
    )
}

AddRecord.propTypes = {
    form: PropTypes.object.isRequired,
    setForm: PropTypes.func.isRequired,
    setWalks: PropTypes.func.isRequired,
};