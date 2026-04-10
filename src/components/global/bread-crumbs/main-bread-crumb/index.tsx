import { PAGE_ICON } from "@/constants/pages";

type Props = {
  page: string;
  slug?: string;
};

export default function MainBreadCrumb({ page, slug }: Props) {
  return (
    <div className="flex flex-col items-start">
      {page === "Home" && (
        <div className="flex justify-center w-full">
          <div className="w-4/12 py-5 lg:py-10 flex flex-col items-center">
            <p className="text-muted-foreground text-lg">Welcome Back</p>
            <h2 className="capitalize text-4xl font-medium text-foreground">{slug}</h2>
          </div>
        </div>
      )}
      <span className="inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center">
        <span className="text-foreground">{PAGE_ICON[page.toUpperCase()]}</span>
        <h2 className="font-semibold text-3xl capitalize text-foreground">{page}</h2>
      </span>
    </div>
  );
}
