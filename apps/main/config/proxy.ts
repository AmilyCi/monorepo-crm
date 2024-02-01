export default {
  '/ahri': {
    target: 'http://localhost:8001/',
    changeOrigin: true,
    pathRewrite: { '^/ahri': '' },
  }
}