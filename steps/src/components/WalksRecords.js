import React, {useState} from 'react'
import AddRecord from './AddRecord';
import RecordsListing from './RecordsListing';

export default function WallksRecords() {
    const [walks, setWalks] = useState([]);
    const [form, setForm] = useState({date: '', distance: '', edit: false});

    return (<>
        <AddRecord form={form} setForm={setForm} setWalks={setWalks}/>
        <RecordsListing walks={walks} setForm={setForm} setWalks={setWalks}/>
    </>)
}
