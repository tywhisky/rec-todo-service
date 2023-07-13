import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  content: string;

  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  deadline: Date;

  @Field()
  @IsNotEmpty()
  cycleDays: number;
}
