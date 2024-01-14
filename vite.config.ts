import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  let port : number | string = process.env.VITE_PORT;
  if (!port || isNaN(Number(port))) {
    throw new Error('.env.local 파일에서 올바른 "VITE_PORT" 값을 설정해야 합니다.');
  }
  port = parseInt(port,10)
  return defineConfig({
    plugins: [react()],
    server:{
      port
    }
  })
}
