import React, { useEffect } from 'react'

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
  return (
    <>
      <div className="catalog-wrapper">
    <header className="header">
        <h1>Innovators of the new genre</h1>
    </header>
    <figure className="featured-image-1">
        <img src="https://images.unsplash.com/photo-1606914469633-bd39206ea739?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt=''/>
    </figure>
    <div className="number-1">1</div>
    <article className="article article-1">
        <h2>Technical information</h2>
        <p>In 1985 Aldus Corporation launched its first desktop publishing program Aldus PageMaker for Apple Macintosh
            computers.</p>
    </article>
    <figure className="featured-image-2">
        <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=''/>
    </figure>
    <div className="number-2">2</div>
    <article className="article article-2">
        <h2>Variants</h2>
        <p>Released in 1987 for PCs running Windows 1.0.</p>
    </article>
    <figure className="featured-image-3">
        <img src="https://images.unsplash.com/photo-1566824099147-bef027d3a333?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=''/>
    </figure>
    <div className="number-3">3</div>
    <article className="article article-3">
        <h2>When not to use it</h2>
        <p>The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you
            may slap on your face to impress the new boss is your business. But what about your daily bread?</p>
    </article>
    <figure className="featured-image-4">
        <img src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=''/>
    </figure>
    <div className="number-4">4</div>
    <article className="article article-4">
        <h2>So Lorem Ipsum is bad</h2>
        <p>One of the villagers, Kristina Halvorson from Adaptive Path, holds steadfastly to the notion that design
            can’t be tested without real content.</p>
    </article>
</div>
    </>
  )
}

export default index
