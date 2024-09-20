import styles from '../css/aboutmestyle.module.css';
import TimelineWord from '../wordComponents/timelineWord';

export function AboutMe(){
    return(
        <div className='flex-col'>
            <p className={styles.paragraph}>My name is Samiha Kamal, programmer, professional genshin impact player (self proclaimed)
                 and an all round great person.
            </p>
            <br/>
            <p className={styles.paragraph}>
                I am someone who isnt restrained and loves to let my creativity go loose, you can never have too much after all! 
                Painting, crocheting, knitting, something to unwind and distance myself from the logical side that I work with 
                every day.
            </p>
            <br/>
            <p className={styles.paragraph}>
                That doesnt mean I dont like computer science, on contrary I am passionate enough that I thought that I would still love 
                it even after working within a field and having to deal with all that stress that comes with. And here I am.
            </p>
            <br></br>
            <div className='flex justify-center'>
                <a href="/CV.pdf" download="CV.pdf">
                    <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all 
                    disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border
                     border-gray-400 text-gray-900 bg-regal-blue hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] rounded-full"
                    type='button'>Download CV here</button>
                </a>    
                <button className={styles.shared_button} type='button'>
                    <a href="https://www.linkedin.com/in/samiha-kamal-12b4131b8/">LinkedIn</a>
                </button>
                <button className={styles.shared_button} type='button'>
                    <a href="mailto:samihakamal.7664@gmail.com">Email</a>
                </button>
                <button className={styles.shared_button} type='button'>
                    <a href="https://github.com/SamihaKamal">Github</a>
                </button>
            </div>
            <div className='flex mt-40 mr-8'>
                <TimelineWord name="About Me" colour="#723d46"/>
            </div>
            
        </div>
    )
    
}
