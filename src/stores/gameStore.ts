import { create } from "zustand";

interface GameState {
  category: string;
  life: number;

  dealDamage: (damage: number) => void;
  setCategory: (category: string) => void;
}

export const useGameStore = create<GameState>()((set) => ({
  category: "",
  life: 100,

  dealDamage: (damage) => set((state) => ({ life: state.life - damage })),
  setCategory: (category) => set(() => ({ category })),
}));
