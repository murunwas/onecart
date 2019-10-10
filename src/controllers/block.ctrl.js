import { Router} from 'express';
import {BlockService} from '../services';


function myFunc(total, data) {
  data.out.forEach(({addr,value}) => {
    if(addr && value>0){
      total.push({addr,value})
    }

  });
  return total;
}
function _getInputsTransaction(tx=[]){
  return  tx.reduce(myFunc, [])
 }

export default class UserRouter {
  constructor() {
    this.router = Router();
    this.path = "/block"

    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get(this.path, this.getAll);
    this.router.get(this.path+"/:id", this.getByHash);
  }

  async getAll(req, res, next) {
    try {
      const {blocks} = await BlockService.getAll();
      return res.status(200).json(blocks)
    } catch (error) {
      return next(error);
    }
  }

  async getByHash(req, res, next) {
    try {
      const {id} = req.params;
      const {size,block_index,prev_block,bits,tx} = await BlockService.getByHash(id);

      const txData = _getInputsTransaction(tx);
      return res.status(200).json({
        size,
        block_index,
        prev_block,
        bits,
        tx:txData
      })
    } catch (error) {
      return next(error);
    }
  }


}