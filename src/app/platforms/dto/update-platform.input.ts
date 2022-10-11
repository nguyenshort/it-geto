import { CreatePlatformInput } from './create-platform.input'
import { InputType, Field, PartialType, ID } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'
import { IsObjectID } from '@shared/validator/objectid.validator'
import { Types } from 'mongoose'

@InputType()
export class UpdatePlatformInput extends PartialType(CreatePlatformInput) {
  @Field(() => ID)
  @IsNotEmpty()
  @IsObjectID()
  id: Types.ObjectId
}