import styles from "../css/project.module.css";
import fabbag from "../media/fabbag.PNG"
import naukri from "../media/naukri.PNG"
export const Project = () => {


const handleClick=(path)=>{
 // window.location.href=path
 window.open(
  path,
  '_blank' // <- This is what makes it open in a new window.
);
}

  return (
    <div id="projects" className={styles.container}>
<div className={styles.projectSection}>
          <h1 className={styles.heading}>Projects</h1>

        </div>
          
           < div className={styles.projects}>

           <div>
            <a href="https://delightful-rugelach-58b39b.netlify.app/">
            <img src={naukri} alt="naukri" className={styles.projectImg}/>
              <h3>Naukri.com-Clone</h3>
              <h4>
              Naukri.com helps job seekers find the right job that
matches their aspirations.
              </h4>
              <h5>
                HTML | CSS | JAVASCRIPT
              </h5>
              
            </a>
            <div className={styles.projectButton}>
                  <button onClick={()=>handleClick("https://delightful-rugelach-58b39b.netlify.app/")}>Website</button>
                  <button onClick={()=>handleClick("https://github.com/Sandipmaury/naukri")}>Github</button>
              </div>
            <div>
              
            </div>
           </div>
              <div>
                <a href="https://sunny-macaron-712b25.netlify.app/">
                <img src={fabbag} alt="fabbag" className={styles.projectImg}/>
                <h3>Fabbag.com-Clone</h3>
                <h4>Fabbag.com helps you discover the best beauty brands at
                home.</h4>
              <h5>
                HTML | CSS | JAVASCRIPT
              </h5>
             
                </a>
                <div className={styles.projectButton}>
                  <button onClick={()=>handleClick("https://sunny-macaron-712b25.netlify.app/")}>Website</button>
                  <button onClick={()=>handleClick("https://github.com/nilamkhose2001/courageous-bee-260")}>Github</button>
              </div>
              </div>
              

              

           </div>
           
         
           
           

        
     
    </div>
  );
};
