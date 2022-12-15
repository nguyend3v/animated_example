import create from 'zustand';

interface DrawerStore {
  open: boolean;
  toggleDrawer: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const useHandleDrawer = create<DrawerStore>(set => ({
  open: false,
  toggleDrawer: () => set(state => ({ open: !state.open })),
  openDrawer: () => set({ open: true }),
  closeDrawer: () => set({ open: false }),
}));
