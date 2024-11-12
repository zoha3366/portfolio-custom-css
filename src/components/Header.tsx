import "../app/styles/Header.css"
import Link from "next/link"
export default function Header(){
return(
    <div className="header">
      <div>
        <h1 className="logo">ZQ</h1>
      </div>
      <div className="right">
        <ul className="links">
          <li className="nav">
            <Link className="nav" href="/">HOME</Link>
          </li>
          <li>
            <Link className="nav" href="/about">ABOUT</Link>
          </li>
          <li>
            <Link className="nav" href="/contact">CONTACT-US</Link>
          </li>
        </ul>
      </div>
    </div>
)
};