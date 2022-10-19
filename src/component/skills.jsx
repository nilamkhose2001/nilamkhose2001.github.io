import styles from "../css/skills.module.css";

export const Skills = () => {
  return (
    <div id="skills" className={styles.container}>
      <div className={styles.skills}>
      <h1 className={styles.heading}>Skills</h1>
      <div className={styles.skillContainer}>
        <div className={styles.techSkills}>
         
          <h3>Tech</h3>
          <div className={styles.tech}>
          <div>
          <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
              alt=""
            />
          
        </div>
        <div>
          
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
              alt=""
            />
          
        </div>
        <div>
          
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
              alt=""
            />
         
        </div>
        <div>
          
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
              alt=""
            />
          
        </div>
       

       
        <div>
          
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg"
              alt=""
            />
          
        </div>
        <div>
         
            <img
              src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              alt=""
            />
          
        </div>
        </div>
        
          </div>

          <div className={styles.toolSkills}>
            <h3>Tools</h3>
            <div className={styles.tools}>
                <div>
                <img
                    src="https://www.xda-developers.com/files/2022/09/Visual-Studio-Code-featured-2-1024x683.jpg"
                    alt="vs-code-logo"
                  />
                
              </div>
              <div>
                <img
                    src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png"
                    alt="postman-logo"
                  />
                
              </div>
              <div>
                <img
                    src=" https://www.sublimehq.com/images/sublime_text.png"
                    alt="sublime-text"
                  />
                
              </div>

              <div>
          
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg"
              alt=""
            />
          
        </div>

        <div>
          
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png"
              alt=""
            />
          
        </div>
        <div>
          
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt=""
            />
          
        </div>
        </div>
          </div>

          
          
         
      </div>
      </div>
    </div>
  );
};
