import React from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';

function Faq() {
  const data = useActionData();
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-700 text-center mb-6">
        Faq Page
      </h2>
      <Form
        method="post"
        action="/help/faq" //find the actino assocaited wit hthat route
        className="grid gap-7 max-w-md mx-auto"
      >
        <label htmlFor="email">
          <span>Email</span>
          <input
            type="email"
            name="email"
            id="email"
            className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-400 rounded-md text-md shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>
        <label htmlFor="question">
          <span>write your question here:</span>
          <textarea
            name="question"
            id="question"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>
        <button className="btn btn-secondary place-self-center" type="submit">
          Submit
        </button>
        {data && data.error && (
          <p className="font-semibold text-rose-800 text-2xl">{data.error}</p>
        )}
      </Form>
    </div>
  );
}

export default Faq;

export const formAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();
  const submision = {
    email: data.get('email'),
    question: data.get('question'),
  };
  console.log(submision);

  //send post request to some api
  if (submision.question.length < 10) {
    //validation
    return { error: 'message is too short' };
  }
  //redierct user
  return redirect('/');
};
