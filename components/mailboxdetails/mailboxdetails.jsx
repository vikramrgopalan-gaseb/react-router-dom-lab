import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) {
    return (
      <main>
        <h1>Mailbox Not Found!</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Mailbox {selectedBox._id}</h1>
      <h3>Details</h3>
      <p><strong>Box Owner:</strong> {selectedBox.boxOwner}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
    </main>
  );
};

export default MailboxDetails;