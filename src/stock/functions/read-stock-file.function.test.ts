import fs from "fs";
import { readStockFile } from "./read-stock-file.function";
import { multipleStockItemsMock } from "../../common/mocks/item.mock";

describe("readStockFile", () => {
  test("returns an array of stock items", async () => {
    const mockReadFileSync = jest
      .spyOn(fs, "readFileSync")
      .mockReturnValueOnce(JSON.stringify(multipleStockItemsMock));

    const result = await readStockFile();

    expect(mockReadFileSync).toHaveBeenCalled();
    expect(result).toEqual(multipleStockItemsMock);
  });

  test("returns an empty array when file is not found", async () => {
    const mockReadFileSync = jest
      .spyOn(fs, "readFileSync")
      .mockImplementationOnce(() => {
        throw new Error("File not found");
      });

    const result = await readStockFile();

    expect(mockReadFileSync).toHaveBeenCalled();
    expect(result).toEqual([]);
  });
});
