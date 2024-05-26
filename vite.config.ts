import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src/*' },
      { find: '@components', replacement:'/src/components'},
      { find: '@containers', replacement:'/src/components/containers'},
      { find: '@ui', replacement:'/src/components/ui'},
      { find: '@form-ui', replacement:'/src/components/ui/form'},
      { find: '@images', replacement:'/src/assets/images'},
      { find: '@utils', replacement:'/src/utils'},
      { find: '@cooki', replacement:'/src/utils/cooki'},
      { find: '@hooks', replacement:'/src/hooks'},
      { find: '@pages', replacement:'/src/pages'},
      {find:  '@layout', replacement:'/src/layout'},
      { find: '@context', replacement:'/src/context'},
      { find: '@imgs', replacement: '/src/assets/imgages' },
      { find: '@service', replacement:'/src/service'},
      { find: '@types', replacement:'/src/types'},
      { find: '@interface', replacement:'/src/types/interface'},
      { find: '@product', replacement:'/src/types/interface/product.ts'},
      { find: '@enums', replacement:'/src/types/enums'},
      { find: '@assets', replacement:'/src/assets'},
      { find: '@hooks', replacement:'/src/hooks'},
      {find:   '@router', replacement:'/src/router'},
      {find:   '@router-files', replacement:'/src/router/router.tsx'},
    ]
  }
})
