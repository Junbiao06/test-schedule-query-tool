import { create } from "zustand";
import { parseCSV } from "@/utils";
import { buildClassSet } from "@/utils";

export const useDataStore = create((set) => ({
  data: [], // 班级信息
  classSet: new Set(), // 班级集
  selectedClasses: [], // 选中的班级

  fetchCSVData: async () => {
    try {
      const data = await parseCSV({ file: "/testInfo.csv" });
      const classSet = buildClassSet(data);
      set({ data, classSet });
    } catch (error) {
      console.log(error);
    }
  },

  setSelectedClasses: (newClasses) => set({ selectedClasses: newClasses }),
}));
