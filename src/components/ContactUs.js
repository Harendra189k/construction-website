import React from 'react'
import { useForm } from "react-hook-form";
import { apiPost } from '../services/httpServices';
import { pathObj } from '../services/apiPath';
import { toast } from 'react-toastify';


const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setError,
        reset
      } = useForm();

      const addContact = async (data) => {
        const payloadData = {
          name: data.name,
          email: data.email,
          message: data.message,
        };
        try {
          const response = await apiPost(pathObj.CONTACTUS, payloadData);
          if (response.status === 201) {
            console.log("response.data --->>", response.data)
            toast("Thanks for your time, Our team will revert you back");
            reset()
          } else {
            console.log("Something went wrong");
          }
        } catch (error) {
          console.error(error);
        }
      };


      const onSubmit = (data) => {
        console.log(data)
        addContact(data)
      };
      

  return (
    <section id="contact_form">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Do you have any questions?</h2>
                        <h2 className="second_heading">Feel free to contact us!</h2>
                    </div>
                    <form className="form-inline text-right col-md-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" placeholder="Name" 
                              {...register("name", {
                                required: "Name is required",
                                minLength: {
                                  value: 2,
                                  message: "firstName must contain at least two characters",
                                },
                                pattern: {
                                  value: /^[A-Za-z]+$/,
                                  message: "Invalid Name Format!",
                                },
                              })}/>
                              <p style={{color: "red"}}>{errors.name?.message}</p>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Email"
                              {...register("email", {
                                required: "Email is required",
                              })}
                            />
                             <p style={{color: "red"}}>{errors.email?.message}</p>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" id="msg" placeholder="Message"
                              {...register("message", {
                                required: "Message is required",
                                minLength: {
                                  value: 10,
                                  message: "Message must contain at least 10 characters",
                                },
                              })}
                            >
                            </textarea>
                             <p style={{color: "red"}}>{errors.message?.message}</p>
                        </div>
                        <button type="submit" className="btn submit_btn">Submit</button>
                    </form>				
                </div>
            </div>
        </section>
  )
}

export default ContactUs
