import { Injectable } from '@nestjs/common'
import { CreateCategoryInput } from './dto/create-category.input'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import {
  Category,
  CategoryDocument
} from '@app/categories/entities/category.entity'

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private model: Model<CategoryDocument>
  ) {}

  async create(input: CreateCategoryInput) {
    return this.model.create(input)
  }

  async findAll() {
    return this.model.find()
  }

  async findOne(filter: FilterQuery<CategoryDocument>) {
    return this.model.findOne(filter)
  }

  async findMany(
    filter: FilterQuery<CategoryDocument>
  ): Promise<CategoryDocument[]> {
    return this.model.find(filter)
  }

  async update(
    match: FilterQuery<CategoryDocument>,
    doc: Partial<CreateCategoryInput>
  ) {
    return this.model.findOneAndUpdate(match, doc, { new: true })
  }

  async count(filter: FilterQuery<CategoryDocument>) {
    return this.model.countDocuments(filter)
  }
}