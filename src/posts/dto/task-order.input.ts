import { InputType, registerEnumType } from '@nestjs/graphql';
import { Order } from 'src/common/order/order';

export enum TaskOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  published = 'published',
  title = 'title',
  content = 'content',
  deadline = 'deadline',
  cycleDays = 'cycleDays'
}

registerEnumType(TaskOrderField, {
  name: 'PostOrderField',
  description: 'Properties by which post connections can be ordered.',
});

@InputType()
export class TaskOrder extends Order {
  field: TaskOrderField;
}
