import { Model } from "mongoose"

export class BaseRepository<T> {

  constructor(protected model: Model<T>) {}

  async findAll(): Promise<T[]> {

    return this.model.find().lean()

  }

  async findById(id: string): Promise<T | null> {

    return this.model.findById(id).lean()

  }

  async create(data: Partial<T>): Promise<T> {

    const doc = await this.model.create(data)

    return doc.toObject()

  }

  async update(id: string, data: Partial<T>): Promise<T | null> {

    return this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean()

  }

  async delete(id: string): Promise<T | null> {

    return this.model
      .findByIdAndDelete(id)
      .lean()

  }

}