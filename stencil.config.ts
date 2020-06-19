import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "shortly-ui",
  taskQueue: "async",
  plugins: [
    sass({
      injectGlobalPaths: ["node_modules/shortly-tokens/dist/index.scss"]
    })
  ],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
