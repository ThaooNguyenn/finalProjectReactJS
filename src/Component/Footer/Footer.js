import "../Assets/Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <img className='logo' alt='' src='https://us.123rf.com/450wm/iul123rf/iul123rf1905/iul123rf190500122/123154028-sv-letter-logo.jpg?ver=6'/>
            <div className="footer-contact">
                <p className="footer--title">Contact</p>
                <p>Hotline: 0123456789</p>
                <p>Email: vieclamtucthoi@gmail.com</p>
                <p>Address: Cao Dang Nghe Da Nang</p>
            </div>
            <div className="footer-workHours">
                <p className="footer--title">Thời Gian Làm Việc</p>
                <p>Thứ 2-thứ 6: 8:00am - 5:30 pm</p>
                <p>Thứ 7: 8:00am - 2:00pm</p>
            </div>
        </footer>
    )
}

export default Footer;