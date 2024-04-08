import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router.get('', this.getBurgers)
    this.router.get('/test', this.testBurgers)
    this.router.post('', this.createBurger)
    this.router.delete('/:burgerId', this.eatBurger)
  }

  testBurgers(request, response, next) {
    console.log('🍔🍔🍔');
    response.send('Here are some burgers 🍔🍔🍔')
  }

  async getBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
      console.error(error)
    }
  }

  async createBurger(request, response, next) {
    try {
      const burgerData = request.body
      const burger = await burgersService.createBurger(burgerData)
      response.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async eatBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      await burgersService.eatBurger(burgerId)
      response.send("You ate that burger")
    } catch (error) {
      next(error)
    }
  }
}