import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput {
  @Field()
  title?: string;

  @Field()
  content?: string;

  @Field()
  cycleDays?: number;

  @Field()
  lastCompletedAt: Date;
}
