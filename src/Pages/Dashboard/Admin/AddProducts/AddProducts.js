import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data)
        fetch('https://enigmatic-wildwood-60336.herokuapp.com/add/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("New Product Added Successfully.")
                    reset(data)
                }
                else {
                    alert('Bad Request')
                }
            })
    };



    return (
        <Container>
            <h3 className="text-info mb-3 mt-5">ADD LATEST PRODUCT</h3>
            <form className="d-flex flex-column mt-5 justify-content-center mx-auto form-input" onSubmit={handleSubmit(onSubmit)} >

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="name" {...register("name", { required: true })} />

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="description" {...register("description", { required: true })} />

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="fuel" {...register("fuel", { required: true })} />

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="mile" {...register("mile", { required: true })} />

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="price" {...register("price", { required: true })} />

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="type" {...register("type", { required: true })} />

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="color" {...register("color", { required: true })} />

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="model" {...register("model", { required: true })} />

                <input className="mb-3 bg-transparent text-dark border-0 border-bottom container-input" placeholder="img" {...register("img", { required: true })} />

                <input className="bg-primary border-0 text-white fs-5 w-25 rounded-3 mx-auto" type="submit" />
            </form>
        </Container>
    );
};

export default AddProducts;