
const Notification = ({ isMobile = true }) => {
    return (
        <div>
            {isMobile && <p>You have new messages!</p>}
        </div>
    );
}

export default Notification
        