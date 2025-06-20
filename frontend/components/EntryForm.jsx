import React, { useState } from "react";

export default function EntryForm() {
    const [form, setForm] = useState({
        date: "", account: "", description: "", debit: "", credit: ""
    });

    const handleChange = e => setForm({...form, [e.target.name]:e.target.value});
    const handleSubmit = async e => {e.preventDefault();
        await
    fetch("http://localhost:5000/api/entries", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(form)
    });
    alert("Entry added!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="date"
            placeholder="Date"
            onChange={handleChange} />
            <input name="account"
            placeholder="Account"
            onChange={handleChange} />
            <input name="description"
            placeholder="Description"
            onChange={handleChange} />
            <input name="debit"
            placeholder="Debit"
            onChange={handleChange} />
            <input name="credit"
            placeholder="Credit"
            onChange={handleChange} />
            <button type="submit">Add Entry</button>
        </form>
    );
}