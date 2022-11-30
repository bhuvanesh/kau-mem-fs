import { useState } from 'react';
import dashify from 'dashify';
import axios from 'axios';
import {useRouter} from 'next/router'


const Register = () => {
  const [content, setContent] = useState({
    name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    mobile:"",
    email:"",
  })

  const router = useRouter()

  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));

    console.log(value,name)
  }
  const onSubmit = async (e) => {
    //const { title, body } = content;
    console.log('submitted')
    e.preventDefault()
    try{
     const response = await axios.post('/api/entry', content);
     console.log(response)
     const success = response.status === 200
            if (success) {
              console.log(response.data.id)
              router.push('https://pages.razorpay.com/pl_KlyWMEbHVZVLwc/view/?email='+content.email+'&phone='+content.mobile)
            }
    }
    catch (err) {
      console.log(err)
  }
}
  return (
    <div className="onboarding">
      <h2>Member Registration</h2>
      <form>
      <section>
      <label htmlFor="first_name"> Name</label>
                        <input
                            id="first_name"
                            type='text'
                            name="name"
                            placeholder="Name"
                            required={true}
                            value={content.name}
                            onChange={onChange}
                        />
      <label>Date of Birth</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={content.dob_day}
                                onChange={onChange}
                            />

                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={content.dob_month}
                                onChange={onChange}
                            />

                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={content.dob_year}
                                onChange={onChange}
                            />
                          </div>
        <label htmlFor="mobile"> Phone no</label>
                        <input
                            id="mobile"
                            type='text'
                            name="mobile"
                            placeholder="Phone no"
                            required={true}
                            value={content.mobile}
                            onChange={onChange}
                        />
        <label htmlFor="email"> Email</label>
                        <input
                            id="email"
                            type='text'
                            name="email"
                            placeholder="Email"
                            required={true}
                            value={content.email}
                            onChange={onChange}
                        />
                       
                        
      <button onClick={onSubmit}>Submit</button>
      </section>
      </form>
      
    </div>
  );
};

export default Register;