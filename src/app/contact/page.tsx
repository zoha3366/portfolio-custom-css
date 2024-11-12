import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import "../styles/contact.css"



export default function contact() {
  return (
    <div className="container1">
        <div className="container2">
    <h1 className="heading">CONTACT US</h1>
           <form className="text2">
            <br />
            <h3>Name:</h3><input type="text" placeholder="type here.."/>
            <br />
            <h3>Email:</h3><input type="text" placeholder="type here.."/>
            <br />
            <h3>Description:</h3><input type="text" placeholder="type here.."/>
           </form>
           
           <button className="button"><a className="anchor" href="/contact">SEND</a></button>

        </div>
    </div>
  )
}