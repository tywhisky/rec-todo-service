import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post = await prisma.user.upsert({
      update: {},
      create: {
          name: "user1",
          email: "example@qq.com",
          password: "123456"
      },
      where: {
          email: 'example@qq.com'
      }
  });

  console.log({ post });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
