import headphones from '../assets/images/headphones.png';
import LogInForm from '../components/forms/LogInForm';

export default function Home() {
    return (
        <div className="flex h-screen w-screen ">
           
            <div className="w-1/2 h-full">
            <img src={headphones} alt="headphones" className="object-cover h-full"/>

            </div>
            <div className="w-1/2 h-screen flex items-center justify-center">
            <LogInForm />

                </div>
        </div>
    )
}