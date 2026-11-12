"use client";

import { useState } from "react";

const products = [
  { name: "DSA Learning Kit", price: "₹190.99", tag: "STUDENT FAVOURITE", tone: "mint" },
  { name: "Developer Toolkit", price: "₹250.50", tag: "BEST VALUE", tone: "peach" }
];

export default function Home() {
  const [cart, setCart] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Dwindell home">
          <span className="brand-mark">D</span><span>DWINDELL</span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#products">Products</a>
          <a href="#customers">Customer</a>
          <a href="#industries">Industries</a>
          <a href="#how">How it works</a>
          <a href="#support">Support</a>
          <a href="#more">More <span className="chevron">⌄</span></a>
        </nav>
        <div className="header-right">
          <a className="contact" href="tel:9667231173"><span>Contact us</span><b>9667231173</b></a>
          <button className="icon-button" aria-label="Search">⌕</button>
          <button className="icon-button globe" aria-label="Choose language">◎</button>
          <button className="cart" aria-label={`Cart with ${cart} items`}>🛒 <span>{cart}</span></button>
          <a className="login" href="#login">♙ <span>Login</span></a>
          <a className="button button-light" href="#get-started">Try for free</a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
      </header>

      <section className="announcement">
        <span>JUST ANNOUNCED:</span> How to Learn DSA in Your College Time?
        <a href="#report">READ THE REPORT <span>↗</span></a>
      </section>

      <section className="hero" id="how">
        <div className="hero-copy">
          <p className="eyebrow">LEARN. BUILD. GROW.</p>
          <h1>Learn what <em>Dwindell</em> can do for you.</h1>
          <p className="hero-description">Your next step starts here. Explore practical tools and resources designed to help you learn, create and move forward with confidence.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#products">Explore products <span>→</span></a>
            <a className="text-link" href="#about">Discover Dwindell ↗</a>
          </div>
          <div className="hero-note"><span className="dot"></span> Built for curious minds and ambitious builders</div>
        </div>
        <div className="hero-art" aria-label="Abstract Dwindell product illustration">
          <div className="art-orbit orbit-one"></div>
          <div className="art-orbit orbit-two"></div>
          <div className="art-card card-back"><span>IDEAS</span><strong>Think<br/>beyond.</strong></div>
          <div className="art-card card-front"><div className="mini-logo">D.</div><span>YOUR NEXT CHAPTER</span><strong>Make it<br/><i>happen.</i></strong><div className="art-line"></div></div>
          <div className="art-spark spark-one">✳</div><div className="art-spark spark-two">✦</div>
          <div className="art-caption">A little progress<br/>every day.</div>
        </div>
      </section>

      <section className="intro-strip" id="about">
        <div><span className="eyebrow">THE DW IN DW INDELL</span><h2>Big ideas begin<br/>with a first step.</h2></div>
        <p>Find useful resources, discover new possibilities and turn what you learn into something real.</p>
        <a href="#products" className="round-arrow" aria-label="Explore products">↘</a>
      </section>

      <section className="products-section" id="products">
        <div className="section-heading">
          <div><p className="eyebrow">PICK YOUR NEXT MOVE</p><h2>Featured products<span>.</span></h2></div>
          <a className="text-link" href="#all-products">View all products ↗</a>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className={`product-visual ${product.tone}`}>
                <span className="product-tag">{product.tag}</span>
                <div className="product-object"><span>D.</span></div>
                <span className="visual-caption">DW / COLLECTION</span>
              </div>
              <div className="product-info"><div><h3>{product.name}</h3><p>{product.price}</p></div>
                <button onClick={() => setCart((count) => count + 1)} className="add-button">Add to cart <span>＋</span></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="support"><a className="brand footer-brand" href="#"><span className="brand-mark">D</span><span>DWINDELL</span></a><p>Made for what comes next.</p><span>© {new Date().getFullYear()} Dwindell</span></footer>
    </main>
  );
}
