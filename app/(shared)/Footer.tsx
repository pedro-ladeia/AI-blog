import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='mt-5 py-10 px-10 bg-wh-900 text-wh-50'>
        <div className='sm:flex justify-between gap-16 mx-fl'>
            
            <div className='mt-16 basis-1/2 sm:mt-0'>
                <h2 className='font-bold '>BLOG OF THE FUTURE</h2>
                <p className='my-4'>
                    Artificial intelligence (AI) is the simulation of human intelligence in machines. 
                    It involves algorithms and computational models that enable computers to perform tasks, 
                    learn from experiences, and make decisions. </p>
                <p>© AI Blog All Rights Reserved</p>
            </div>
            

            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h2 className='font-bold '>Links</h2>
                <p className='my-4'>https://chat.openai.com</p>
                <p className='my-4'>https://www.midjourney.com/home</p>
                <p>https://en.wikipedia.org/wiki/Artificial_intelligence</p>
            </div>


            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h2 className='font-bold '>Contact Us</h2>
                <p className='my-4'>LinkedIN</p>
                <p className='my-4'>Instagram</p>
                <p> theblog@AI.com</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer