import React, { Suspense } from "react";
import { TableRow, TableCell, CircularProgress } from "@material-ui/core";

// const Pdf = React.lazy(() => import("./Pdf"));
const Pdf = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Pdf")), 3000);
  });
});

const Response = props => {
  const { response } = props;

  return (
    <>
      <TableRow key={response.code}>
        <TableCell rowSpan={4}>{response.code}</TableCell>
        <TableCell>{response.description}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Media type: {response.mediaType}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Value:</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          {response.url ? (
            <Suspense fallback={<CircularProgress />}>
              <Pdf url={response.url} />
            </Suspense>
          ) : (
            <code>{response.value}</code>
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

export default Response;
