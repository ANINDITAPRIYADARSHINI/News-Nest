import React from 'react';

export default function News({articles}) {
    return(
        
        <>
        {/*Top headlines*/}
        {articles.map((article, index) => (
            <div key={index} className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{article.title}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        ))}
            
        
            {/*Cards*/}
            <div className="grid grid-cols-4 gap-4" >
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        </div><div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                
            </div>
            {/*Pagination*/}
                <div className="join">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1"  />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>

                <div className="flex flex-col w-full">
                    <div className="divider"></div>
                </div>

            {/*Technology*/}
            <div className="grid grid-cols-4 gap-4" >
                <h2 className="text-left">Technology</h2>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
            </div>
            {/*Pagination*/}
            <div className="join">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1"  />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            </div>

            <div className="flex flex-col w-full">
                <div className="divider"></div>
            </div>

            {/*Business*/}
            <div className="grid grid-cols-4 gap-4" >
                <h2 className="text-left">Business</h2>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
            </div>
            {/*Pagination*/}
            <div className="join">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1"  />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            </div>

            <div className="flex flex-col w-full">
                <div className="divider"></div>
            </div>


            {/*Science*/}
            <div className="grid grid-cols-4 gap-4" >
                <h2 className="text-left">Science</h2>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
            </div>
            {/*Pagination*/}
            <div className="join">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1"  />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            </div>

            <div className="flex flex-col w-full">
                <div className="divider"></div>
            </div>


            {/*Health*/}
            <div className="grid grid-cols-4 gap-4" >
                <h2 className="text-left">Health</h2>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
            </div>
            {/*Pagination*/}
            <div className="join">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1"  />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            </div>

            <div className="flex flex-col w-full">
                <div className="divider"></div>
            </div>

            {/*Sports*/}
            <div className="grid grid-cols-4 gap-4" >
                <h2 className="text-left">Sports</h2>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
            </div>
            {/*Pagination*/}
            <div className="join">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1"  />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            </div>
            <div className="flex flex-col w-full">
                <div className="divider"></div>
            </div>


            {/*Entertainment*/}
            <div className="grid grid-cols-4 gap-4" >
                <h2 className="text-left">Entertainment</h2>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
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
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
            </div>
            {/*Pagination*/}
            <div className="join">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            </div>
        </>
        
    )
}