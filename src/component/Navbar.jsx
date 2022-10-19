import styles from "../css/navbar.module.css";
 //import logo from "../assets/H-logo.png";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstChild}>
      <a href="https://drive.google.com/file/d/1c7bTmtqdDmm0lb8k6xdWvH_mfkm3EZQA/view?usp=sharing">Nilam's Resume</a>

      </div>
      <div className={styles.secondChild}>
        <div>
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};
