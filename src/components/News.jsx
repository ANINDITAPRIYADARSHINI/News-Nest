import React from 'react';

export default function News() {
    return(
        
        <>
        {/*Top headlines*/}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        
            {/*Cards*/}
            <div className="grid grid-cols-4" gap-4>
                    <div
                        className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                            alt="Hollywood Sign on The Hill" />
                        </a>
                        <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                        <p className="mb-4 text-base">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        </div>
                    </div>

                    <div
                        className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                            alt="Palm Springs Road" />
                        </a>
                        <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                        <p className="mb-4 text-base">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        </div>
                    </div>

                    <div
                        className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
                            alt="Skyscrapers" />
                        </a>
                        <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                        <p className="mb-4 text-base">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content.
                        </p>
                        </div>
                    </div>

                    <div
                        className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                            alt="Los Angeles Skyscrapers" />
                        </a>
                        <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                        <p className="mb-4 text-base">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        </div>
                    </div>
                
                    <div
                        className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                            alt="Los Angeles Skyscrapers" />
                        </a>
                        <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                        <p className="mb-4 text-base">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        </div>
                    </div>

                    <div
                        className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                            alt="Los Angeles Skyscrapers" />
                        </a>
                        <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                        <p className="mb-4 text-base">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        </div>
                    </div>

                

                
                
            </div>
        </>
        
    )
}