import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import svgr from "@svgr/rollup";
import image from "@rollup/plugin-image";
import dts from "rollup-plugin-dts";
// import alias from "@rollup/plugin-alias";
// import path from "path";
// import { fileURLToPath } from "url";

export default [
    {
        // input : 번들 진입점 설정
        input: "packages/index.ts",
        output: [
            /**
             * file : bundle 된 파일을 단일 파일로 출력
             * dir : bundle 된 파일을 여러 모듈로 출력 (preserveModules 와 함께)
             * format : "es" | "cjs" ...
             */
            {
                file: "dist/cjs/index.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                dir: "dist/esm",
                format: "esm",
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: "packages",
            },
        ],
        plugins: [
            // alias({
            //     entries: [
            //         { find: "@", replacement: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "packages") },
            //     ],
            // }),

            // CJS 를 ESM 으로 변환
            // node_modules 의 CJS 패키지를 ESM 으로 변환하여 Rollup 이 처리할 수 있도록 설정
            commonjs(),
            // node_modules 디렉토리에서 패키지를 올바르게 가져오도록 설정
            nodeResolve({
                extensions: [".ts", ".tsx"],
            }),
            // peerDeps 의존성 패키지를 번들에 포함시키지 않도록 설정
            peerDepsExternal(),
            // TS 컴파일 설정
            typescript({ tsconfig: "./tsconfig.json" }),
            // babel
            babel({ babelrc: "./babel.config.json", babelHelpers: "bundled" }),

            svgr(),
            image(),
        ],
    },
    // index.d.ts 번들링
    {
        input: "dist/esm/index.d.ts",
        output: [
            {
                file: "dist/index.d.ts",
                format: "esm",
            },
        ],
        plugins: [dts()],
    },
];
