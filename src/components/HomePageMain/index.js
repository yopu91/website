import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function IntroBanner() {
    return (
        <header >
            <div className={styles.intro_banner}>
                <div className={styles.img_container}>
                    <img
                        src={useBaseUrl("img/me.jpg")}
                    />
                </div>
                <div className={styles.intro_container}>
                    <div className={styles.intro_text}>
                        <h1>Hi! </h1>
                        <h3>I'm Daniel, a Product Manager/Owner with experience in shaping <span className={styles.higlight_text}>innovative & sustainable solutions.</span></h3>
                        <p>My journey in Product Development has been driven by a passion for translating intricate user problems into understandable, user-centric products. Collaborating with dedicated teams, I've successfully developed products that have a <span className={styles.higlight_text}>meaningful impact on people's daily lives, work and the environment.</span></p>
                        <p>What sets me apart is my ability to thrive in diverse landscapes. While I'm deeply enthusiastic about technological progress, I can also navigate areas where technology adoption progresses more slowly.</p>
                        <p>I'm a <span role="img" aria-label="sweden">🇸🇪</span> based in Copenhagen <span role="img" aria-label="denmark">🇩🇰</span> </p>
                    </div>
                    <div className={styles.social_links}>
                        <a href={"https://linkedin.com/in/d-lundell"}>
                            <FontAwesomeIcon icon={faLinkedin} size="4x"/>
                        </a>
                    </div>
                </div>
            </div>
        </header >
    )
}

function ProjectBanner() {
    return (
        <section>
            <div
                className={styles.primary_section}
            >
                <div className={styles.project_container}>
                    <div className={styles.small_img_container}>
                        <img
                            src={useBaseUrl("img/sustainability.jpg")}
                        />
                    </div>

                    <h3>Sustainability</h3>
                    <p>Creating products with a distinct focus on enhancing sustainability</p>

                </div>
                <div className={styles.project_container}>
                    <div className={styles.small_img_container}>
                        <img
                            src={useBaseUrl("img/idea.jpg")}
                        />
                    </div>
                    <h3>Innovation</h3>
                    <p>Creating disruptive and innovative products in areas that have the possibility of global impact.</p>
                </div>
                <div className={styles.project_container}>
                    <div className={styles.small_img_container}>
                        <img
                            src={useBaseUrl("img/data.jpg")}
                        />
                    </div>
                    <h3>Data analysis</h3>
                    <p>Utilizing data analysis for deeper customer knowledge. Product metrics and data gaterhing.</p>
                </div>
            </div>
        </section>
    )
}

function AboutBanner() {
    return (
        <section>
            <div
                className={styles.secondary_section}
            >
                <div className={styles.intro_text}>
                    <h3>About me</h3>
                    <p>Aspiring Product Manager | Computer Engineer | Sustainability | Lifelong Learner | Embracing challenges</p>
                    <p>I'm currently working as a Product Owner, but working in small companies I've had the opportunity to wear many hats, including those closely aligned with Product Management. With a strong foundation in Computer Engineering, my career has been a blend of product development, technology, leadership, and a commitment to making a positive impact on the environment. I thrive in environments where teamwork goes hand in hand with complex solutions that have a meaningful impact</p>
                    <span className={styles.dot}></span> <b>Sustainability</b>
                    <p>Beyond my professional role, I actively try to engage myself with green initaives and causes. I firmly believe that we must move towards more sustainable solutions.</p>
                    <span className={styles.dot}></span> <b>Continuous Learning</b>
                    <p>I'm an avid self-learner. I constantly seek to enhance my skills and stay up to date with industry trends. In additions to reading books on leadership and product development, I gather the latest insights on emerging trends from various blogs and communities.</p>
                    <span className={styles.dot}></span> <b>Personal Challenges</b>
                    <p>I love pushing my physical and mental limits. Currently, my challenge is to complete a triathlon and a marathon. I think that these ambitions teach me resilience and determination. I also value the feeling of having a goal and working towards it.</p>
                    
                </div>
            </div>
        </section>
    )
}

export default function HomePageMain() {
    return (
        <>
            <IntroBanner />
            <main>
                <ProjectBanner />
                <AboutBanner />

            </main >
        </>
    );
}