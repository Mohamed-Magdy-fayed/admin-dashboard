import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/pismadb";
import { SettingsForm } from "./components/settings-form";

const SettingsPage = async ({ params }: { params: { storeId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} billboards={billboards} />
      </div>
    </div>
  );
};

export default SettingsPage;
