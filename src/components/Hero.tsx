import "../app/styles/Hero.css"
import Image from "next/image"


export default function Hero(){
    return(
        <div className="container1">
            <div className="container2">
                <div>
                    <Image 
                    src="/images/herosection.jpg"
                    alt="hero picture"
                    width={200}
                    height={200}
                    className="image"
                    />
                </div>

                <div className="text">
                    <h1 className="heading">I am Zoha Qayoom
                        A Web Developer
                    </h1>
                    <p className="text2">Web development is the work involved in developing a website 
                    for the Internet or an intranet. Web development can range 
                    from developing a simple single static page of plain text 
                    to complex web applications, electronic businesses, and 
                    social network services</p>
                    <button className="button"><a className="anchor" href="/about">SEE ABOUT ME</a></button>
                </div>
            </div>
        </div>
    )
}
