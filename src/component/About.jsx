import styles from "../css/about.module.css";
export const About = () => {
  return (
    <div id="about" className={styles.container}>
     <div className={styles.About}>
      <h3 className={styles.heading}>About Me</h3>
      <div className={styles.mainAbout}>
        <h2>I am Nilam Khose from Ahmednagar,Maharashtra.</h2>
        <p className={styles.desc}>
         I graduated in B.Sc.(Computer Science) during 2022 from Samarth college of Computer Science,Belhe.
                     <br />
                    I joined Masai school, which offers a 30 weeks full time course on a full stack web development programme. At Masai school we get hands-on experience to learn front end and backend technologies.
        </p>
      </div>
      </div>
    </div>
  );
};
