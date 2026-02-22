import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <main>
      <h1>Mailbox List</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', gap: '15px' }}>
        {props.mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`} className="mail-box">
              Mailbox {mailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MailboxList;