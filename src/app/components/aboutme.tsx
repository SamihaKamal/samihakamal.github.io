import styles from './aboutmestyle.module.css';

export function AboutMe(){
    return(
        <div>
            <p className={styles.paragraph}>My name is Samiha Kamal, I am currently working at FDM in their software engineering graduate
                programme.
            </p>
            <br/>
            <p className={styles.paragraph}>
                I love to express my creativity through drawings using mediums such as water colour 
                and inks as well as digital art. I have also taken up knitting and crochet as a 
                pasttime. It is nice to explore the imaginative side of myself when I work with 
                logic and computer science everyday.
            </p>
            <br/>
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
                    Email
                </button>
                <button className={styles.shared_button} type='button'>
                    <a href="https://github.com/SamihaKamal">Github</a>
                </button>
            </div>
            
            
        </div>
    )
    
}
