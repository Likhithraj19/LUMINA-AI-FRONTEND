"use client";
import { Button } from "@/components/ui/button";
import { Input, Skeleton, Card } from "@heroui/react";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-950 text-gray-100 text-3xl ">
    <Card className="w-[200px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>
      <div className="mt-4 flex w-2xl flex-wrap md:flex-nowrap gap-4">
      <Input label="Email" type="email" variant="bordered" />
    </div>
    </div>
    </>
  );
}
