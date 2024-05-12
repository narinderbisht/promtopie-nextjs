"use client"
import Form from "@components/Form";
import { useState } from "react";

const Create = () => {
    const [submitting, setSubmitting] = useState(false);
    const [postdata, setPostData] = useState({ prompt: '', tag: '' });
    const createPost = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {

            // call api for database submit

        } catch (error) {
            console.log(error);
            setSubmitting(false);
        } finally {
            setSubmitting(false);
        }
    }
  return (
      <section className="w-full flex-start flex-col">
          <h1 className="head_text text-left"><span className="blue_gradient">Create Post</span></h1>
          <p className="desc text-left md-text-m">dummy text hear</p>
          <Form
              type="Create"
              data={postdata}
              setPostData={setPostData}
              submitting={submitting}
              handleSubmit={createPost}

          
          />
    </section>
  )
}

export default Create