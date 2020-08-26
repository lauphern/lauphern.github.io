import React from "react";
import { Container } from "@material-ui/core";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import { useResumeStyles } from "../style/useStyles";

//TODO
//meter el component SwaggerUI en una ventana, y que lo de alrededor tenga el estilo
//(y el boton) del resto de la web, para unificar un poco
//TODO
//y mirar lo que puedo customizar del SwaggerUI
const Resume = props => {
  const classes = useResumeStyles();

  return (
    <Container className={classes.resumeContainer}>
      <SwaggerUI url="https://resume-api.vercel.app/definition.yaml" />
    </Container>
  );
};

export default Resume;
