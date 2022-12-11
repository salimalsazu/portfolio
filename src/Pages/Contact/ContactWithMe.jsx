import React, { useState } from 'react';

const ContactWithMe = () => {



    return (
        <div className="card  bg-base-100 shadow-xl ">
            <form novalidate="" action="" className="container justify-center items-center flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid rounded-2xl p-10">
                <h1 className='text-3xl font-semibold' >Contact With ME</h1>
                <fieldset className="grid grid-cols-1 lg:grid-cols-4 mx-auto gap-6 p-6 rounded-md shadow-sm">

                    <div className=" grid grid-cols-1 lg:grid-cols-6 gap-10 justify-center items-center lg:col-span-5">
                        <div className="col-span-full sm:col-span-3 ">
                            <input id="firstname" type="text" placeholder="Your Name*" className="w-full text-gray-500 bg-base-100 rounded-md border-gray-600 border-b-2 py-1" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <input id="lastname" type="text" placeholder="Your@email.com*" className="w-full rounded-md bg-base-100 border-b-2 py-1" required />
                        </div>


                        <div className="col-span-full" >
                            <input id="address" type="text" placeholder="Subject*" className="w-full rounded-md bg-base-100 border-b-2 py-1" required />
                        </div>
                        <div className="col-span-full">
                            <textarea type="text" name="" id="" placeholder='Write your query*' className="w-full rounded-md bg-base-100 border-b-2 py-1" required />
                        </div>
                    </div>

                </fieldset>
                <div>
                    <button type='submit' >Submit</button>
                </div>
            </form>


        </div>
    );
};

export default ContactWithMe;