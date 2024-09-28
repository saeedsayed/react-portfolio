import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Context = createContext();

const MainContext = ({ children }) => {
  const [aboutData, setAboutData] = useState();
  const [loadings, setLoadings] = useState(true);
  const [skillsData, setSkillsData] = useState({});
  const [projectsData, setProjectsData] = useState([]);
  const [resumeData, setResumeData] = useState({});
  // get about data
  useEffect(() => {
    (async () => {
      setLoadings(true);
      try {
        // get about data
        const aboutDocRef = doc(db, "about", "ukPeNNvcc4sJCTRhQn2j");
        const aboutDocSnap = await getDoc(aboutDocRef);
        if (aboutDocSnap.exists()) {
          setAboutData(aboutDocSnap.data());
        }
        // get skills data
        const skillsDocRef = doc(db, "skills", "ZnfK0LOP3V3gnJqGO5EW");
        const skillDocSnap = await getDoc(skillsDocRef);
        if (skillDocSnap.exists()) {
          setSkillsData(skillDocSnap.data());
        }
        // get project data
        const projectsDocRef = doc(db, "projects", "uQkGrHf56OKyx6d3tBks");
        const projectsDocSnap = await getDoc(projectsDocRef);
        if (projectsDocSnap.exists()) {
          setProjectsData(projectsDocSnap.data().projects);
        }
        // get resume data
        const contactDocRef = doc(db, "resume", "by7FCFJCB1qCqMz1ppPO");
        const contactDocSnap = await getDoc(contactDocRef);
        if (contactDocSnap.exists()) {
          setResumeData(contactDocSnap.data());
        }
      } catch (e) {
        console.log("e: ", e);
        window.alert(
          "Oops! Something went wrong. You can visit my GitHub page"
        );
        window.location.replace("https://github.com/saeedsayed");
      } finally {
        setLoadings(false);
      }
    })();
  }, []);
  return (
    <Context.Provider
      value={{
        aboutData,
        skillsData,
        projectsData,
        resumeData,
        loadings,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MainContext;

export const useMainContext = () => useContext(Context);
