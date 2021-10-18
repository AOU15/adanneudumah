import "./Contact.css";

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Let's Connect</h1>
      <form className='contactform'>
      <label>
       Name:
        <input
          type='text'
          />
      </label>
      <br />
      <label>
        Email:
        <input
          type='text'
        />
      </label>
      <br />
      <label>
        Message:
        <input className='message'
          type='text'
        />
      </label>
      <button className='submitbutton'>Submit</button>
      </form>
      
      
      </div>
    )
}