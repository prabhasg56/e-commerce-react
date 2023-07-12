import React from 'react'

const ContactUs = () => {
  return (
    <>
      <div  class="d-inline-flex p-2">
      <h2>Contact Us</h2>
      <form>
            <label className='form-control'>
                Name
            </label>
            <input className='form-control'/>

            <label className='form-control'>
                Email Id
            </label>
            <input className='form-control'/>

            <label className='form-control'>
                Phone Number
            </label>
            <input className='form-control'/>
      </form>
      </div>
    </>
  )
}

export default ContactUs;
