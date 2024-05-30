import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src/*' },
      { find: '@components', replacement:'/src/components'},
      { find: '@containers', replacement:'/src/components/containers'},
      { find: '@SignubModal', replacement:'/src/components/modal'},
      { find: '@ui', replacement:'/src/components/ui'},
      { find: '@form-ui', replacement:'/src/components/ui/form'},
      { find: '@images', replacement:'/src/assets/images'},
      { find: '@phone', replacement:'/src/assets/icons'},
      { find: '@utils', replacement:'/src/utils'},
      { find: '@notifation', replacement:'/src/utils/notifation'},
      { find: '@cooki', replacement:'/src/utils/cooki'},
      { find: '@hooks', replacement:'/src/hooks'},
      { find: '@pages', replacement:'/src/pages'},
      {find:  '@layout', replacement:'/src/layout'},
      { find: '@context', replacement:'/src/context'},
      { find: '@imgs', replacement: '/src/assets/imgages' },
      { find: '@service', replacement:'/src/service'},
      // { find: '@StoreLike', replacement:'/src/service/like'},
      { find: '@types', replacement:'/src/types'},
      { find: '@interface', replacement:'/src/types/interface'},
      { find: '@product', replacement:'/src/types/interface/product.ts'},
      { find: '@StoreLike', replacement:'/src/types/interface/like.ts'},
      { find: '@ModalProps', replacement:'/src/types/interface/global.ts'},
      { find: '@enums', replacement:'/src/types/enums'},
      { find: '@assets', replacement:'/src/assets'},
      { find: '@hooks', replacement:'/src/hooks'},
      {find:   '@router', replacement:'/src/router'},
      {find:   '@router-files', replacement:'/src/router/router.tsx'},
    ]
  }
})
