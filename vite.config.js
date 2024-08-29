import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            'src': path.resolve(__dirname, './src'),
            'api': path.resolve(__dirname, './src/api'),
            'assets': path.resolve(__dirname, './src/assets'),
            'locales': path.resolve(__dirname, './src/locales'),
            'components': path.resolve(__dirname, './src/components'),
            'contexts': path.resolve(__dirname, './src/contexts'),
            'hooks': path.resolve(__dirname, './src/hooks'),
            'layouts': path.resolve(__dirname, './src/layouts'),
            'modals': path.resolve(__dirname, './src/modals'),
            'pages': path.resolve(__dirname, './src/pages'),
            'providers': path.resolve(__dirname, './src/providers'),
            'router': path.resolve(__dirname, './src/router'),
            'services': path.resolve(__dirname, './src/services'),
            'stores': path.resolve(__dirname, './src/stores'),
            'utils': path.resolve(__dirname, './src/utils'),
        }
    },
})
