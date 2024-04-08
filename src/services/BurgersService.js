import { dbContext } from "../db/DbContext.js"


class BurgersService {
  async getBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }

  async createBurger(burgerData) {
    const burger = await dbContext.Burgers.create(burgerData)
    return burger
  }

  async eatBurger(burgerId) {
    const burgerToEat = await dbContext.Burgers.findById(burgerId)
    if (!burgerToEat) throw new Error(`That burger is sold out ${burgerId}`)
    await dbContext.Burgers.deleteOne({ _id: burgerId })
  }
}

export const burgersService = new BurgersService()