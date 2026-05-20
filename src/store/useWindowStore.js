import { create } from "zustand"

const useWindowStore = create((set) => ({
  windows: {
    about: true,
    finder: false,
    terminal: false,
    safari: false,
    vscode: false,
    settings: false,
    music: false,
    notes: false,
    weather: false,
    calendar: false,
    github: false,
    resume: false,
    appstore: false,
    contact: false,
  },

  minimizedWindows: {},
  maximizedWindows: {},
  activeWindow: null,

  zIndexes: {
    about: 1,
    finder: 1,
    terminal: 1,
    safari: 1,
    vscode: 1,
    settings: 1,
    music: 1,
    notes: 1,
    weather: 1,
    calendar: 1,
    github: 1,
    resume: 1,
    appstore: 1,
    contact: 1,
  },

  openWindow: (windowName) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [windowName]: true,
      },
      minimizedWindows: {
        ...state.minimizedWindows,
        [windowName]: false,
      },
      activeWindow: windowName,
      zIndexes: {
        ...state.zIndexes,
        [windowName]: Date.now(),
      },
    })),

  closeWindow: (windowName) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [windowName]: false,
      },
    })),

  minimizeWindow: (windowName) =>
    set((state) => ({
      minimizedWindows: {
        ...state.minimizedWindows,
        [windowName]: true,
      },
    })),

  toggleMaximize: (windowName) =>
    set((state) => ({
      maximizedWindows: {
        ...state.maximizedWindows,
        [windowName]: !state.maximizedWindows[windowName],
      },
    })),

  focusWindow: (windowName) =>
    set((state) => ({
      activeWindow: windowName,
      minimizedWindows: {
        ...state.minimizedWindows,
        [windowName]: false,
      },
      zIndexes: {
        ...state.zIndexes,
        [windowName]: Date.now(),
      },
    })),
}))

export default useWindowStore