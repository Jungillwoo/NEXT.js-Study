
import { create } from 'zustand'

type Store = {
  accessToken: string
  inc: () => void
}

const TokenStore = create<Store>()((set) => ({
  accessToken: null,
  setToken(token) {
    set({ accessToken : token });
    // setToken: (token) => set((state) => ({ ...state, accessToken : token}))
  },
}));

export default TokenStore;