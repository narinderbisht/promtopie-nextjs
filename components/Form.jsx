import Link from 'next/link'
import React from 'react'

const Form = ({data, setPostData, submitting, handleSubmit}) => {
  return (
    
    <form onSubmit={handleSubmit}
      className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="text-base font-semibold text-gray-700">Prompt Title</span>
        </label>
      <textarea value={data.prompt}
        onChange={(e) => setPostData({ ...data, prompt: e.target.value })}
        className="form_textarea"
        required />
      
      <label>
        <span className="text-base font-semibold text-gray-700">Prompt Tag <span className="font-normal">#webdevelopment #design</span></span> </label>
      <input type="text"
        value={data.tag}
        onChange={(e) => setPostData({ ...data, tag: e.target.value }) }
        className="form_input" required />
      
      <div className="flex-end mx-3 mb-5 gap-4">
        
          <Link href={'/'} className="text-gray-500 text-sm">Cancel</Link>
        <button type="submit" disabled={submitting} className="px-5 py-1.5 bg-primary-orange rounded-full text-white">{submitting ? `form processing` : `Create Post`} </button>
        </div>
      </form>
    
  )
}

export default Form