import { makeStyles } from "@material-ui/core/styles";

export const useAppStyles = makeStyles(() => ({
  layout: {
    minHeight: "100vh",
    width: "100vw",
  },
  mainContainer: {
    position: "absolute",
    pointerEvents: "none",
  },
}));

export const useBioStyles = makeStyles(() => ({
  leftPanel: {
    color: "white",
    height: "100vh",
    position: "relative",
    padding: "0 5vw",
    top: 0,
    left: 0,
    flexDirection: "column",
  },
  stacksMobile: {
    minWidth: "100%",
    height: "100vh",
  },
  languageSwitch: {
    position: "absolute",
    top: "20px",
  },
  pointer: {
    pointerEvents: "all",
    zIndex: 100,
    position: "relative",
  },
  link: {
    transition: "0.1s",
    color: "#b5f9ff",

    "&:hover": {
      color: "yellow",
    },
  },
  languageBtn: {
    fontWeight: 900,
  },
  languageBtnActive: {
    color: "yellow",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
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
  expandMoreIcon: {
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    color: "white",
    "& > *": {
      fontSize: "4rem",
    },
  },
}));

export const useLinksStyles = makeStyles(() => ({
  btn: {
    transition: "0.1s",

    "&:hover": {
      fontWeight: 400,
      lineHeight: 3,
    },
  },
  btnDisabled: {
    color: "#878787",
  },
  capitalize: {
    textTransform: "none",
  },
  pointer: {
    pointerEvents: "all",
    zIndex: 100,
    position: "relative",
  },
  btnGroupMobile: {
    "& > *": {
      fontSize: "1.5rem",
    },
  },
  btnMobile: {
    borderBottom: "1px solid #bbc4c7 !important",
  },
  stacksMobile: {
    minWidth: "100%",
    height: "100vh",
  },
}));
