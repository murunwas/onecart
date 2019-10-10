import axios from "axios"

export default class BlockService {

 static async getAll() {
  try {
    const {data} = await axios.get("https://blockchain.info/blocks?format=json");
    return data;
  } catch (error) {
    throw error;
  }
}

static async getByHash(hash){
  try {
    const {data} = await axios.get(`https://blockchain.info/rawblock/${hash}`)
    return data;
  } catch (error) {

  }
}
}