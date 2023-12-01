import React, {lazy, Suspense} from "react";

const ComponentLoader = (componentName) => {
  const Component = lazy(() => import(`../${componentName}/index.jsx`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default ComponentLoader;
