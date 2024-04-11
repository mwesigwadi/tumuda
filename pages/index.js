import {
  Group,
  Text,
  Image,
  Flex, Card,  Badge, Center
} from "@mantine/core";
import {FaMusic} from "react-icons/fa";
import Search from "@/components/Search/Search";
import Butt from '@/components/Buttons/Butt';
import React from "react";
import DashLayout from "@/components/layout/DashLayout";

export default function Home() {
  return (
      <DashLayout>
        <div>
          <div
              className='border  border-transparent border-b-[orange] h-[100px] border-opacity-25 border-w-[200px] m-5'>
            <Flex justify="space-between" align='center'>
              <Image fit='contain' h={50} alt='Logo' src="/images/logo.png"/>
              <Search/>
            </Flex>
            <Butt/>
          </div>
          <Flex className='mt-10' gap={20} justify='center' wrap='wrap'>
            {Array(25)
            .fill(0)
            .map((_, index) => (
                <Card shadow="sm" padding="lg" radius="md" className='h-[220px] w-[200px] bg-[#1F1F1F] text-white'>
                  <Card.Section className='pt-2'>
                    <Center>
                      <Image
                          src="/images/ragadee.jpeg"
                          h={150}
                          w={200}
                          fit='fill'
                          alt="Norway"
                      />
                    </Center>
                  </Card.Section>
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Norway Fjord Adventures</Text>
                    <Badge color="pink">On Sale</Badge>
                    <FaMusic className="text-orange-500"/>
                  </Group>
                </Card>
            ))}
          </Flex>
        </div>
      </DashLayout>
  );
}
