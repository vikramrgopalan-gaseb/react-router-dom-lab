import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components - need to make this camelcase

// change the file names to pascal case, then doo tab complettion on these imports

// change imports on each component to react-router

import NavBar from './components/NavBar/NavBar.jsx';
import MailboxForm from './components/mailboxform/mailboxform.jsx';
import MailboxList from './components/mailboxlist/mailboxlist.jsx';
import MailboxDetails from './components/mailboxdetails/mailboxdetails.jsx';

// src/App.jsx

const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newMailbox = {
      ...formData,
      _id: mailboxes.length + 1, // Auto-generating the unique ID
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  );
};

export default App;