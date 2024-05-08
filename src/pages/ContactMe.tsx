import './css/ContactMe.css'; // Import the style sheet

const ContactMe = () => {
    return (
        <div className="absolute top-24 w-full">
            <div className="container">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Contact Me</h2>
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name" className="label">Your Name:</label>
                            <input type="text" id="name" name="name" className="input" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="label">Your Email:</label>
                            <input type="email" id="email" name="email" className="input" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="label">Message:</label>
                            <textarea id="message" name="message" rows={5} className="textarea" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
