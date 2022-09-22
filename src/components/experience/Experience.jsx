import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'




const experience = () => {
    return (
        <section id="experience">
            <h5>What skills I have</h5>
            <h2>My Skills</h2>
            <div className="container experience__container">
                <div className="experience__dev">
                    <h3>Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details__icon' />
                            <div>
                                <h4>React Js</h4>
                                <div class="progress">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details__icon' />
                            <div>
                                <h4>Flutter</h4>
                                <div class="progress">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details__icon' />
                            <div>
                                <h4>Python</h4>
                                <div class="progress">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details__icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <div class="progress">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details__icon' />
                            <div>
                                <h4>HTML5</h4>
                                <div class="progress">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details__icon' />
                            <div>
                                <h4>CSS</h4>
                                <div class="progress">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__Networking">
                    <h3>Computer Network</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details__icon' />
                            <div>
                                <h4>Windows Administration</h4>
                                <div class="progress">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details__icon' />
                            <div>
                                <h4>Linux Administration</h4>
                                <div class="progress">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details__icon' />
                            <div>
                                <h4>Network Administration</h4>
                                <div class="progress">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details__icon' />
                            <div>
                                <h4>Big Data</h4>
                                <div class="progress">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default experience
