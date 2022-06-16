import "../Assets/Contact.css"

const Contact = () => {
    return (
        <div className="contact--container">
            <div className="contact--content">
                <div className="contact--content--right">
                    <p className="contact--title">Lets Get You Moving</p>
                </div>
                <div className="contact--content--left">
                    
                </div>
            </div>
            <div className="contact--map">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1123473447274!2d108.23859831465123!3d16.059658788886853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177f0057f675%3A0xdec5dbe31838c835!2zMzY1UitWOUcsIDEwMUIgTMOqIEjhu691IFRyw6FjLCBQaMaw4bubYyBN4bu5LCBTxqFuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1655309415079!5m2!1svi!2s" title ="Map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact--form">
                <div className="contact--form--right">
                    <p className="contact--title">Get Your Free Quote</p>
                    <p className="contact--form--right--text">Contact with us to know more our information. Thank You!!</p>
                </div>
                <div className="contact--form--left">
                    <form className="form--contact">
                        <div className="form--contact--group">
                            <label for="">Name:</label>
                            <input className="form--contact-input" type="text" name="name" placeholder="Name"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Email:</label>
                            <input className="form--contact-input" type="text" name="name" placeholder="Email"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Phone:</label>
                            <input className="form--contact-input" type="text" name="name" placeholder="Phone"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Birthday:</label>
                            <input className="form--contact-input" type="text" name="name" placeholder="Birthday"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Gender:</label>
                            <input className="form--contact-input" type="text" name="name" placeholder="Gender"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Address:</label>
                            <input className="form--contact-input" type="text" name="name" placeholder="Address"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Message:</label>
                            <input className="form--contact-input" type="text" name="name" placeholder="Message"/>
                        </div>
                        <button type="submit" className="btn btn--form--submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;