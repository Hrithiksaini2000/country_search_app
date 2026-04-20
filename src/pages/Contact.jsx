export const Contact = () => {

    // Contact form handling in react 19 version 

    const handleformsubmit=(formData)=>{
        // console.log(formData.entries())
        const forminputdata = Object.fromEntries(formData.entries())
        console.log(forminputdata)
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact</h2>
            <div className="contact-wrapper container">
                <form action={handleformsubmit} >
                    <input type="text" required autoComplete="false" placeholder="Enter Your Username" name="username" className="form-control" />
                    <input type="email" required autoComplete="false" placeholder="Enter Your Email" name="email" className="form-control" />
                    <textarea className="form-control" rows="10" placeholder="Enter Your Message" name="message" required autoComplete="off" />
                    <button type="submit" value="send">Send</button>
                </form>
            </div>
        </section>
    )
}