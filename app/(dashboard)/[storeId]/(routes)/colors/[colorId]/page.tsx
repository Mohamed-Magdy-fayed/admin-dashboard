import prismadb from "@/lib/pismadb";
import { ColorForm } from "./components/color-form";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const size =
    params.colorId !== "new"
      ? await prismadb.color.findUnique({
          where: {
            id: params.colorId,
          },
        })
      : null;

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={size} />
      </div>
    </div>
  );
};

export default ColorPage;
