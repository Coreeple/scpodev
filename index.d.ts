declare module '#app' {
  interface NuxtApp {
    $pokerTypes: any[]
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $pokerTypes: any[]
  }
}

export { }