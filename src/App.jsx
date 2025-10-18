import React, {useState} from 'react'

export default function App(){
  const [msg, setMsg] = useState('')
  return (
    <div className="container">
      <header>
        <h1>CreatorCredit</h1>
        <p className="tag">Vite + React starter — ready for Netlify</p>
      </header>
      <section className="content">
        <div className="card">
          <h2>Welcome</h2>
          <p>This site was scaffolded so you can deploy to Netlify with a build step.</p>
          <p>
            <a href="/contact.html">Contact us</a>
          </p>
          <button onClick={() => setMsg(`Hello — your site works! (${new Date().toLocaleTimeString()})`)}>Click me</button>
          <p>{msg}</p>
        </div>
      </section>
      <footer>
        <p>Made with Vite · Deploy with Netlify</p>
      </footer>
    </div>
  )
}
