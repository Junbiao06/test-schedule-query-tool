export const buildClassSet = (data) => {
  const classSet = new Set();
  for (const item of data) {
    if (!classSet.has(item.classId)) {
      classSet.add(item.classId);
    }
  }
  return classSet;
};
