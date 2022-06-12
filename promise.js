const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (marah) => {
  try {
    const arrNgamuk = (await promiseTheaterIXX()).concat(
      await promiseTheaterVGC()
    );
    return arrNgamuk.filter((record) => record.hasil === marah).length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
