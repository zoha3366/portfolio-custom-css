import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import "../styles/about.css"


export default function About() {
  return (
    
    <div className="container1">
      <div className="container2">
        <h1 className="heading"> ABOUT ME</h1>
        <p className="text2">
        Hello! My name is ZOHA,
         and Im a new web developer passionate about 
         creating beautiful, functional, and user-friendly
          websites. This is my very first website, and Im 
          excited to share my journey and progress with you.
          As I learn more about web development, I will be
           updating and enhancing this site with new skills 
           and projects. Im currently exploring various tools
            and languages like HTML, CSS, JavaScript, and 
            frameworks like Next.js to bring my ideas to life
            Thank you for visiting, and I hope you enjoy 
            following along as I grow in my career!
        </p>

        <button className="button"><a className="anchor" href="/contact">CONTACT-US</a></button>

      </div>
    </div>
  )
}
  

    