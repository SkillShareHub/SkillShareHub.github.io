import React from 'react';

const divStyle = {
    color:'white'
};

class About extends React.Component {
    
    render() {
        return (
            <div>
                <h2>Contact Us</h2>
                 <form>
                     <label>
                            Name:
                         <input type="text" name="name" />
                        </label>
                <br />
                    <label>
                         Email:
                        <input type="email" name="email" />
                    </label>
                    <br />
                <label>
                 Message:
                 <textarea name="message"></textarea>
                </label>
                <br />
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Contact;