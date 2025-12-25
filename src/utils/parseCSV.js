// parse csv into json
import { CSV_FIELD_MAP } from "./fieldMap";

export const parseCSV = async ({ file }) => {
  try {
    const resp = await fetch(file);
    if (!resp.ok) {
      throw new Error(`HTTP ${resp.status}`);
    }

    const text = await resp.text();
    const lines = text.trim().split(/\r?\n/);
    const header = lines[0].split(",");

    const data = lines.slice(1).map((line) => {
      const values = line.split(",");
      const row = {};
      header.forEach((h, i) => {
        const key = CSV_FIELD_MAP[h] ?? h;
        row[key] = values[i] ?? "";
      });
      return row;
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
