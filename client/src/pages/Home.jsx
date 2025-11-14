import headphones from '../assets/images/headphones.png';
import LogInForm from '../components/forms/LogInForm';

export default function Home() {
    return (
        <section 
            className="w-full bg-cover bg-center flex justify-center items-center"
            style={{ 
                backgroundImage: `url(${headphones})`, 
                height: "calc(100vh - 160px)" 
            }}
        >
            <LogInForm />
        </section>
    )
}
