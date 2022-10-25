
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default ({ mode }) => {
  let env = loadEnv(mode, "./env");
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router"],
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    // 配置全局样式变量
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${resolve(
            __dirname,
            "src/assets/less/_vars.less"
          )}";`,
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    envDir: "./env",
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    // 服务端渲染
    ssr: false,
    /**
     * 在生产中服务时的基本公共路径。
     * @default '/'
     */
    base: "/",
    /**
     * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
     * @default 'dist'
     */
    outDir: "dist",
    server: {
      //端口 后端是80
      port: 80,
      host: "0.0.0.0",
      // 反向代理
      proxy: {
        "/api": {
          target: "http://192.168.0.52:10008",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
