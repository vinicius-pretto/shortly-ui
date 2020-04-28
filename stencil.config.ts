import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "shortly-ui",
  taskQueue: "async",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
  ],
};
