import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


export const Krishna = () => {
    return (
        <>
            <div className='w-full h-full'>


            <div id='home' className='w-full h-180 z-0 px-20' data-aos="fade-up">
                <div className='flex mt-100 justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-9xl font-bold Poppins'>hello,</h1>
                        <h1 className='text-9xl font-bold Poppins whitespace-nowrap'>I'm <span className='text-blue-500'>krishna.</span></h1>
                    </div>
                    <div className=''>
                        <img className='w-80 h-80 rounded-full ' src="https://i.pinimg.com/736x/36/b1/3f/36b13f53eb9c2990b5ee3402fe97094e.jpg" alt="" />
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-4xl Poppins'>Crafting delightful user experiences: <b>One Pixel, One Chuckle, Infinite Magic!</b></p>
                </div>
            </div>

            {/* About */}

            <div id='about' className=' w-full h-200 p-10 z-20 ' data-aos="fade-up">
                <div className='flex flex-col w-full h-full p-10 border rounded-4xl bg-black space-y-30'>

                    <div className='space-y-5' data-aos="fade-up">
                        <div className='flex justify-center p-3 w-40 border border-white rounded-4xl bg-white'>
                            <h1 className='text-2xl text-black Poppins font-semibold'>About Me</h1>
                        </div>
                        <div>
                            <h1 className='text-4xl text-white Poppins font-semibold'>B.E grad (2025) with a passion for design, capturing moments through photography, and conquering virtual realms on PlayStation. Let's infuse design with simplicity, fun, and inspiration! <span className='text-gray-500 border-b-4'>Connect with me for creative escapades!</span></h1>
                        </div>
                    </div>

                    <div className='space-y-5' data-aos="fade-up">
                        <div className='flex justify-center p-3 w-40 border border-white rounded-4xl bg-black'>
                            <h1 className='text-2xl text-white Poppins font-semibold'>Skills</h1>
                        </div>

                        <div className='flex justify-evenly'>

                            <div className='hover-3d cursor-pointer'>

                                <div className="card bg-base-100 w-96 shadow-sm ">
                                    <div className="card-body">

                                        <h2 className="card-title">
                                            HTML
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <progress className=" progress progress-succes w-80" value="100" max="100"></progress>
                                        <p>HTML structures the content of a webpage using elements and tags.
                                            It defines headings, paragraphs, images, links, and overall page layout.</p>
                                        <div className="card-actions justify-evenly">
                                            <div className="badge badge-outline">Head</div>
                                            <div className="badge badge-outline">Body</div>
                                            <div className="badge badge-outline">Other</div>
                                        </div>
                                    </div>
                                </div>

                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className='hover-3d cursor-pointer'>

                                <div className="card bg-base-100 w-96 shadow-sm ">
                                    <div className="card-body">

                                        <h2 className="card-title font-bold text-purple-700">
                                            CSS
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <progress className=" progress progress-succes w-40" value="100" max="100"></progress>
                                        <p>CSS styles the appearance of a webpage, including colors, fonts, and spacing.
                                            It controls layout, design, animations, and responsiveness.</p>
                                        <div className="card-actions justify-evenly">
                                            <div className="badge badge-outline">Color</div>
                                            <div className="badge badge-outline">Background</div>
                                            <div className="badge badge-outline">Margin/padding</div>
                                        </div>
                                    </div>
                                </div>

                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className='hover-3d cursor-pointer'>

                                <div className="card bg-base-100 w-96 shadow-sm ">
                                    <div className="card-body">

                                        <h2 className="card-title text-warning font-bold">
                                            JAVASCRIPT
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <progress className=" progress progress-succes w-50" value="100" max="100"></progress>
                                        <p>JavaScript adds interactivity and dynamic behavior to webpages.
                                            It handles events, logic, APIs, animations, and real-time updates.</p>
                                        <div className="card-actions justify-evenly">
                                            <div className="badge badge-outline">Script</div>
                                            <div className="badge badge-outline">Function</div>
                                            <div className="badge badge-outline">document</div>
                                        </div>
                                    </div>
                                </div>

                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className='hover-3d cursor-pointer'>
                                <div className="card bg-base-100 w-96 shadow-sm ">
                                    <div className="card-body">

                                        <h2 className="card-title text-blue-600 font-bold">
                                            REACT
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <progress className=" progress progress-succes w-80" value="100" max="100"></progress>
                                        <p>React is a JavaScript library for building fast, interactive user interfaces.
                                            It uses components and state to efficiently update and manage UI.</p>
                                        <div className="card-actions justify-evenly">
                                            <div className="badge badge-outline">useState()</div>
                                            <div className="badge badge-outline">useEffect()</div>
                                            <div className="badge badge-outline">return()</div>
                                        </div>


                                    </div>

                                </div>

                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* Projects */}
            <div className=' w-full h-230 p-10'>
                <div className=' w-full h-full space-y-10'>
                    <div className='flex justify-center p-3 w-40  border-white rounded-4xl bg-black'>
                        <h1 className='text-2xl text-white Poppins font-semibold'>Projects</h1>
                    </div>
                    <div>
                        <h1 className='text-5xl font-bold Poppins'>Most Recent Project</h1>
                    </div>

                    <div className='flex items-center w-full h-75 border-y-2 py-10 '>

                        <div className='flex w-full h-full justify-between'>
                            <div className='flex space-x-10'>
                                <div className='w-80 h-54 border rounded-2xl overflow-hidden'>
                                    <iframe className='w-80 h-54 ' src="https://www.youtube.com/embed/bE9vZFiZr-Y" title="A NEW GEN APP | WHICH CAN MAKE PAYMENTS IN TRADITIONAL CURRENCIES AND CRYPTO CURRENCIES | WATCH NOW!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
                                </div>
                                <div className='flex flex-col gap-5 justify-center'>
                                    <h1 className='text-4xl Poppins font-bold'>A NEW GEN APP!</h1>
                                    <span>WHICH CAN MAKE PAYMENTS IN TRADITIONAL CURRENCIES AND CRYPTO CURRENCIES | WATCH NOW!</span>
                                </div>
                            </div>

                            <div className='flex justify-center items-center w-50'>

                                <a href="https://github.com/TeamDevelopers712/PayApp.git" target='_blank'>

                                    <div className='border p-5 rounded-2xl border-black  bg-transparent text-black text-sm font-semibold hover:bg-green-600 hover:text-white transition cursor-pointer'>

                                        <button className="flex items-center justify-center gap-2">
                                            <span>see project</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                                            </svg>
                                        </button>


                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Project2 */}

                    <div className='flex items-center w-full h-75 border-y-2 py-10 '>

                        <div className='flex w-full h-full justify-between'>


                            <div className='flex justify-center items-center w-50'>

                                <a href="https://youtu.be/HHfjzD917yM?si=DTUp1sAx7dbmWUh5" target='_blank'>

                                    <div className='border p-5 rounded-2xl border-black  bg-transparent text-black text-sm font-semibold hover:bg-green-600 hover:text-white transition cursor-pointer'>

                                        <button className="flex items-center justify-center gap-2">
                                            <span>see project</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                                            </svg>
                                        </button>


                                    </div>
                                </a>

                            </div>
                            <div className='flex space-x-10'>

                                <div className='flex flex-col gap-5 justify-center'>
                                    <h1 className='flex text-4xl Poppins font-bold justify-end'>UTS Clone</h1>
                                    <span>INDIAN RAILWAY TICKET BOOKING APP</span>
                                </div>
                                <div className='w-80 h-54 border rounded-2xl overflow-hidden'>
                                    <iframe className='w-80 h-54 ' src="https://www.youtube.com/embed/HHfjzD917yM" title="UTS Clone" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Project3 */}



                </div>
                {/* Explore */}
                <div className='w-full h-160 px-30'>
                    <div className='flex justify-start items-center w-full h-80 text-9xl font-bold text-blue-300' data-aos="fade-right">
                        <h1>SURFFINGG...</h1>
                    </div>
                    <div className='flex w-full h-80 justify-end items-center text-9xl font-bold text-blue-500' data-aos="fade-left">
                        <h1>...SOMETHING NEW</h1>
                    </div>
                </div>

                {/* Extra gaming */}

                <div>
                    <div className="grid grid-cols-6 grid-rows-6 gap-4">
                        <div className="col-span-2 row-span-2"><img src="https://i.pinimg.com/736x/c4/b9/6a/c4b96a41d7f32db0e4740d27eeef5dd0.jpg" alt="" /></div>
                        <div className="col-span-2 row-span-2 col-start-2 row-start-3"><img src="https://i.pinimg.com/736x/5c/56/32/5c563274dc0d04985d23f7d4ac0905ed.jpg" alt="" /></div>
                        <div className="col-span-2 row-span-2 col-start-3 row-start-1"><img src="https://i.pinimg.com/736x/5d/4c/cf/5d4ccf1e420b6111429f7526ea2369ec.jpg" alt="" /></div>
                        <div className="col-span-2 row-span-2 col-start-4 row-start-3"><img src="https://i.pinimg.com/736x/07/c4/96/07c496cf53714188a1557b1b731206ee.jpg" alt="" /></div>
                        <div className="col-span-2 row-span-2 col-start-3 row-start-5"><img src="https://i.pinimg.com/736x/7b/99/72/7b99720587b385ecb7028bc8a12b72de.jpg" alt="" /></div>
                        <div className="col-span-2 row-span-2 col-start-5 row-start-1"><img src="https://i.pinimg.com/736x/7b/99/72/7b99720587b385ecb7028bc8a12b72de.jpg" alt="" /></div>
                        <div className="col-span-2 row-span-2 col-start-5 row-start-5"><img src="https://i.pinimg.com/736x/38/79/47/387947599416cc6f6e64bd57936d730f.jpg" alt="" /></div>
                        <div className="col-span-2 row-span-2 col-start-1 row-start-5"><img src="https://i.pinimg.com/736x/78/74/3a/78743ae8e05bc6e1d74069e9dc438b06.jpg" alt="" /></div>
                        <div className="row-span-2 col-start-1 row-start-3"><img src="https://i.pinimg.com/736x/02/e1/e7/02e1e7523df30a10f88d10a32faa6bbb.jpg" alt="" /></div>
                        <div className="row-span-2 col-start-6 row-start-3"><img src="https://i.pinimg.com/736x/18/4a/43/184a430a2e33df6f5604be9e89ec2ea0.jpg" alt="" /></div>
                    </div>

                </div>
                {/* Contact */}
                <div className='flex flex-col w-full items-center h-200 border rounded-2xl space-y-10'>
                    <div className="w-100 h-100 flex flex-col items-center justify-center gap-4">
                        <svg class="w-100 h-100 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 9h.01M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM6.6 13a5.5 5.5 0 0 0 10.81 0H6.6Z" />
                        </svg>

                    </div>

                    <p className="text-center text-gray-600 text-4xl">
                        Want to share thoughts, work with me or just be internet friends?
                        I'd love to hear from you!
                    </p>

                    <button className="px-6 py-3 bg-black text-white rounded-full border border-black 
  hover:bg-white hover:text-black transition cursor-pointer">
                        Let’s connect
                    </button>

                    <div className='w-full h-20 mt-25'>
                        <div className='flex justify-evenly items-center w-full h-full '>
                            <a className='flex justify-center items-center hover:border-b-2' href=""><svg class=" text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg>
LinkedIn</a>
                            <a className='flex justify-center items-center hover:border-b-2' href=""><svg class=" text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
</svg>
Youtube</a>
                            <a className='flex justify-center items-center hover:border-b-2' href=""> <svg class="w-[33px] h-[33px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                            </svg>
                                Instagram</a>
                            <a className='flex justify-center items-center hover:border-b-2' href=""><svg class="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                            </svg>
                                FaceBook</a>
                        </div>
                    </div>
                </div>


            </div>
            </div>
            


        </>
    )
}
