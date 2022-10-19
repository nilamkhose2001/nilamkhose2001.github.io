 import profile from "../media/profile.jpeg";
 import logo from "../media/logo.png"
import styles from "../css/home.module.css";
export const Home = () => {
  return (
    <div id="home" className={styles.container}>
              <br />
      <div className={styles.homeHeader}>
        
          <p className={styles.header}>
          <img src={logo} alt="logo"  className={styles.logoImage}/>

            Hi This is Nilam!
            <br />
            Ambitious full-stack developer with a specialization in MERN stack
              <br/>
              <div className={styles.button}>
              <button><a href="#contact">Hire Me</a></button>
              <a
        href="https://drive.google.com/file/d/1c7bTmtqdDmm0lb8k6xdWvH_mfkm3EZQA/view?usp=sharing" download
      >
        <button className={styles.downButton}>Resume</button>
      </a>
              
              </div>
              
          </p>
          </div>
          <div className={styles.image}>
            <img className={styles.Img} src={profile} alt="profile" width="100%"/>
          </div>
         
    </div>
  );
};
