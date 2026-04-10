'use client';
import { Separator } from '@/components/ui/separator';
import { useQueryAutomation } from '@/hooks/use-query';
import { Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';

type Props = {
  id: string;
};

export default function PostNode({ id }: Props) {
  const { data } = useQueryAutomation(id);
  return (
    data?.data &&
    data.data.posts.length > 0 && (
      <div className="w-10/12 lg:w-8/12 relative xl:w-4/12 p-5 rounded-xl flex flex-col bg-card border border-border gap-y-3">
        <div className="absolute h-20 left-1/2 bottom-full flex flex-col items-center z-50">
          <span className="h-[9px] w-[9px] bg-connector/50 rounded-full" />
          <Separator
            orientation="vertical"
            className="bottom-full flex-1 border-[1px] border-connector/50"
          />
          <span className="h-[9px] w-[9px] bg-connector/50 rounded-full" />
        </div>
        <div className="flex gap-x-2 items-center text-foreground">
          <MessageCircle className="h-5 w-5" />
          <span className="font-medium">If they comment on...</span>
        </div>
        <div className="bg-secondary border border-border p-3 rounded-xl flex flex-col gap-y-2">
          <Instagram className="h-5 w-5 text-ig-blue" />
          <p className="font-bold text-lg text-foreground">These posts</p>
        </div>
        <div className="flex gap-x-2 flex-wrap mt-3">
          {data.data.posts.map((post) => (
            <div
              key={post.id}
              className="relative w-4/12 aspect-square rounded-lg cursor-pointer overflow-hidden border border-border"
            >
              <Image fill sizes="100vm" src={post.media} alt="image" />
            </div>
          ))}
        </div>
      </div>
    )
  );
}
