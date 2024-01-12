import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}