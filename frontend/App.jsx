import React from "react";
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';

function App() {
    return (
        <div className="p-4">
            <h1>Journal Entry Manager</h1>
            <EntryForm />
            <EntryList />
        </div>
    );
}

export default App;