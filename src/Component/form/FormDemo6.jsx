import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Country, State } from "country-state-city";

export const FormDemo6 = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode:"all"})
    const [submittedData, setSubmittedData] = useState(null)
    
    const allCountries = Country.getAllCountries();
    const countryId = watch("country");
    const allStates = State.getStatesOfCountry(countryId);

    const submitHandler = (data) => {
        setSubmittedData(data)
    }
    const validation = {
        name: {
            required: {
                value: true,
                message: "name is required",
            }
        },
        fathername: {
            required: {
                value: true,
                message: "fathername is required",
            }
        },
        mothername: {
            required: {
                value: true,
                message: "mothername is required",
            }
        },
        phone: {
            required: {
                value: true,
                message: "phone is required",
            }
        },
        country: {
            required: {
                value: true,
                message: "country is required",
            }
        },
        state: {
            required: {
                value: true,
                message: "state is required",
            }
        }
    }

    

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 6</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name: </label>
            <input type="text" {...register("name", validation.name)} placeholder='Enter Name'/>
            <p style={{ color: "red" }}>{errors?.name?.message}</p>
        </div>
        <div>
            <label>FatherName: </label>
            <input type="text" {...register("fathername", validation.fathername)} placeholder='Enter FatherName'/>
            <p style={{ color: "red" }}>{errors?.fathername?.message}</p>
        </div>
        <div>
            <label>MotherName </label>
            <input type="text" {...register("mothername", validation.mothername)} placeholder='Enter MotherName'/>
            <p style={{ color: "red" }}>{errors?.mothername?.message}</p>
        </div>
        <div>
            <label>ParentPhone: </label>
            <input type="tel" {...register("phone", validation.phone)} placeholder='Enter Phone'/>
            <p style={{ color: "red" }}>{errors?.phone?.message}</p>
        </div>
        <div>
            <label>Country: </label>
            <select {...register("country", validation.country)}>
                <option value="">Select Country</option>
                {
                    allCountries.map((c) => {
                        return <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                    })
                }
            </select>
            <p style={{ color: "red" }}>{errors?.country?.message}</p>
        </div>
        <div>
            <label>State: </label>
            <select {...register("state", validation.state)}>
                <option value="">Select State</option>
                {
                    allStates.map((s) => {
                        return <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
                    })
                }
            </select>
            <p style={{ color: "red" }}>{errors?.state?.message}</p>
        </div>
        <button type="submit">Submit</button>
        </form>
        {
            submittedData && 
            <div>
                <p>Name: {submittedData.name}</p>
                <p>FatherName: {submittedData.fathername}</p>
                <p>MotherName: {submittedData.mothername}</p>
                <p>Phone: {submittedData.phone}</p>
                <p>Country: {submittedData.country}</p>
                <p>State: {submittedData.state}</p>
            </div>
        }
    </div>
  )
}