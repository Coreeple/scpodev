export default defineNuxtPlugin(() => {
  return {
    provide: {
      pokerTypes: [
        {
          "name": "fibonacci",
          "label": "Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?, ☕ )",
          "items": ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "?", "☕"],
          "defaultIndex": 11
        },
        {
          "name": "modified-fibonacci",
          "label": "Modified Fibonacci ( 0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?, ☕ )",
          "items": ["0", "½", "1", "2", "3", "5", "8", "13", "20", "40", "100", "?", "☕"],
          "defaultIndex": 11
        },
        {
          "name": "t-shirt",
          "label": "T-shirts (XS, S, M, L, XL, ?, ☕ )",
          "items": ["XS", "S", "M", "L", "XL", "?", "☕"],
          "defaultIndex": 5
        },
        {
          "name": "power-of-2",
          "label": "Powers of 2 ( 0, 1, 2, 4, 8, 16, 32, 64, ?, ☕ )",
          "items": ["0", "1", "2", "4", "8", "16", "32", "64", "?", "☕"],
          "defaultIndex": 8
        }
      ]
    }
  }
})