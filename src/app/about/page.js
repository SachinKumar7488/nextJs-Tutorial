"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const About = () => {
    const router = useRouter();
    const navigate = (page) => {
        router.push(" /about/" + page)
    }
    return (
        <div>
            <h1 className="heading">About Page</h1>
            <Link href="/" >Go to Home Page</Link>

            <br />
            <button onClick={() => navigate("aboutcollege")} >Go to About College Page</button>
            <br />
            <br />
            <button onClick={() => navigate("aboutstudent")}>Go to About Student page</button>

        </div>
    )
}

export default About;