import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { User, UserDocument } from '@app/users/entities/user.entity'
import { Project, ProjectDocument } from '@app/projects/entities/project.entity'

export type PostDocument = Post & Document

@ObjectType()
@Schema({
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
})
export class Post {
  @Field(() => ID)
  id: string

  @Field(() => User)
  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  user: UserDocument | Types.ObjectId

  @Field(() => Project)
  @Prop({ required: true, type: Types.ObjectId, ref: Project.name })
  project: ProjectDocument | Types.ObjectId

  @Field(() => Number)
  @Prop({ required: true, type: Number, index: true })
  updatedAt: number

  @Field(() => Number)
  @Prop({ required: true, type: Number, index: true })
  createdAt: number
}

export const PostEntity = SchemaFactory.createForClass(Post)
