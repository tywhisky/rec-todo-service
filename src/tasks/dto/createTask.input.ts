import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  content?: string;

  @Field()
  @IsNotEmpty()
  cycleDays: number;
}
