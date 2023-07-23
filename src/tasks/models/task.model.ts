import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/models/user.model';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Task extends BaseModel {
  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  content?: string | null;

  @Field(() => String)
  userId: string;

  @Field(() => User)
  user: User;

  @Field(() => Date, { nullable: true })
  lastCompletedAt?: Date | null;

  @Field(() => Number)
  cycleDays?: number | null;
}
