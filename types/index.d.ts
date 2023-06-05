interface CustomMeta {
  excludeFromMenu: boolean
  icon?: string
}

declare module 'vue-router' {
  interface PageMeta extends CustomMeta{
  }
}

declare module '#app' {
  interface PageMeta extends CustomMeta{
  }
}

export {}