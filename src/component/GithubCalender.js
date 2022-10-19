import GitHubCalendar from 'react-github-calendar'
import styles from "../css/github.module.css";

export default function GithubCalender(){

    return   <div className={styles.gitCalender}>
        <h3>Github Calender</h3>
    <GitHubCalendar username="nilamkhose2001" />
    </div>
}