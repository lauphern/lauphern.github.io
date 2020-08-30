import { makeStyles } from "@material-ui/core/styles";

export const useAppStyles = makeStyles(() => ({
  layout: {
    minHeight: "100vh",
    width: "100vw",
    pointerEvents: "none",
  },
  languageSwitch: {
    position: "fixed",
    top: "20px",
    marginLeft: "5vw",
  },
  languageBtn: {
    fontWeight: 600,

    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15)",
    }
  },
  languageBtnActive: {
    color: "var(--secondary) !important",
    backgroundColor: "rgba(255,255,255, 0.15)",
  },
  routerBtn: {
    border: "2px solid var(--primary)",
    fontWeight: 600,
    color: "var(--primary)",
    transition: "0.1s",
    boxShadow: "2px 2px 3px 0px rgba(0, 0, 0, 0.2)",
    backgroundColor: "rgba(255,255,255, 0.15)",

    "&:hover": {
      borderColor: "var(--secondary)",
      color: "var(--secondary)",
      backgroundColor: "inherit",
      boxShadow: "inset 1px 1px 3px rgba(0, 0, 0, 0.2)",
    },
  },
  pointer: {
    pointerEvents: "all",
    zIndex: 100,
    position: "relative",
  },
  link: {
    transition: "0.1s",
    color: "var(--primary)",

    "&:hover": {
      color: "var(--secondary)",
      textDecoration: "none",
    },
  },
}));

export const useBioStyles = makeStyles(() => ({
  leftPanel: {
    minWidth: "50vw",
    alignItems: "flex-start",
    color: "white",
    height: "100vh",
    position: "relative",
    padding: "4em 5vw",
    top: 0,
    left: 0,
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  stickyPanelMobile: {
    position: "sticky",
  },
  stacksMobile: {
    minWidth: "100%",
    minHeight: "100vh",
    height: "100%"
  },
  h1Mobile: {
    fontSize: "4rem",
    lineHeight: "3.5rem",
  },
  firstName: {
    textTransform: "uppercase",
    letterSpacing: "0.18rem",
  },
  h2Mobile: {
    fontSize: "1.75rem",
  },
  type: {
    animation: "typeFlicker 1s step-end infinite",
  },
  expandMoreIcon: {
    // alignSelf: "center",
    position: "absolute",
    bottom: 0,
    color: "white",
    transition: "0.1s",
    "& > *": {
      fontSize: "4rem",
    },
    "&:hover": {
      transform: "scale(1.25)",
    }
  },
  skillsContainer: {
    maxWidth: "90vw",
  },
  hardSkill: {
    backgroundColor: "rgba(255,255,255, 0.15)",
    color: "white",
    margin: "0 5px 5px 0",
  },
  horizontalDivider: {
    width: "inherit",
    margin: "1rem 0",
  },
  socialContainer: {
    display: "inline-flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    margin: "2rem 0",

    "& > *": {
      margin: "0.5rem 0"
    }
  },
  verticalDivider: {
    margin: "0 1rem",
    height: "2rem"
  },
}));

export const useLinksStyles = makeStyles(() => ({
  rightPanel: {
    position: "relative",
    minWidth: "50vw",
    height: "100vh",

    "&>div": {
      width: "100%",
    }
  },
  topPanelMobile: {
    zIndex: 1,
  },
  btn: {
    transition: "0.1s",

    "&:hover": {
      fontWeight: 400,
      lineHeight: 3,
      backgroundColor: "var(--primary)",
      color: "white",
    },
  },
  btnDisabled: {
    color: "#878787",
  },
  capitalize: {
    textTransform: "none",
  },
  btnGroupMobile: {
    "& > *": {
      fontSize: "1.3rem",
    },
  },
  btnGroupTablet: {
    "& > *": {
      fontSize: "1.5rem",
    },
  },
  stacksMobile: {
    minWidth: "100%",
    height: "100vh",
  },
}));


export const useResumeStyles = makeStyles(() => ({
  headerContainer: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "2.5rem",
    maxHeight: "30vh",
    boxSizing: "border-box",
    color: "white",
  },
  headerText: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "max-content",
  },
  resumeContainer: {
    background: "white",
    padding: "5rem 5rem 0",
    margin: "2.5rem 5vw 0",
    boxSizing: "border-box",
    height: "calc(70vh - 2.5rem)",
    overflow: "scroll",
    position: "relative",
    bottom: 0,
    borderRadius: "0.25rem 0.25rem 0 0",
    boxShadow: "0px 50px 10px 3px rgba(0, 0, 0, 0.2)",
  },
  pdfContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  pdfTitle: {
    color: "var(--primary)",
  },
  loader: {
    animation: "loader 1s linear infinite",
    color: "var(--primary)"
  },
  document: {
    boxShadow: "2px 2px 3px 0px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  textIcon: {
    verticalAlign: "middle",
  },
  badge: {
    objectFit: "none",
  },
}));