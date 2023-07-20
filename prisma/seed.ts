import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.task.deleteMany();

  console.log('Seeding...');

  const user1 = await prisma.user.create({
    data: {
      email: 'lisa@simpson.com',
      firstname: 'Lisa',
      lastname: 'Simpson',
      password: '$2b$10$pNNzKDHws3eMH74B78SEoOETspCqmDAdrRzRXZ4x2WVP9lct8tmqC', // 123456
      role: 'USER',
      tasks: {
        create: {
          title: 'Leetcode Daily Challenge',
          content: 'https://www.leetcode.com/',
          cycleDays: 1,
          position: 0
        },
      },
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'bart@simpson.com',
      firstname: 'Bart',
      lastname: 'Simpson',
      role: 'ADMIN',
      password: '$2b$10$pNNzKDHws3eMH74B78SEoOETspCqmDAdrRzRXZ4x2WVP9lct8tmqC', // 123456
      tasks: {
        create: [
          {
            title: 'Leetcode Daily Challenge',
            content: 'https://www.leetcode.com/',
            cycleDays: 1,
            position: 0
          },
          {
            title: 'Learn English',
            content: 'https//youtube.com/',
            cycleDays: 1,
            position: 100
          },
        ],
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
