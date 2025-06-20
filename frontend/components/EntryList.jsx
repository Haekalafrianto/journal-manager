import React, { useEffect, useState } from "react";

export default function EntryList() {
    const [entries, setEntries] = useState([]);
    useEffect(() => {fetch("http://localhost:5000/api/entries")
        .then(res => res.json())
        .then(setEntries);
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Account</th>
                    <th>Description</th>
                    <th>Debit</th>
                    <th>Credit</th>
                </tr>
            </thead>
            <tbody>
                {entries.map(e => (
                    <tr key={e.id}>
                        <td>{e.date}</td>
                        <td>{e.account}</td>
                        <td>{e.description}</td>
                        <td>{e.debit}</td>
                        <td>{e.credit}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}