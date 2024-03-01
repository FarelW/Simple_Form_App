export default function Success(data:) {
    return(
        <div className="main-container">
            <div className="check-container">
                <div className="check-background">
                <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 25L27.3077 44L58.5 7" stroke="#FFF" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
                <div className="check-shadow"></div>
            </div>
            <div className='succesful-title'>Payment Succesful</div>
            <div className='succesful-label'>Check Your Ticket on MyTicket menu</div>
        </div>
    )
}