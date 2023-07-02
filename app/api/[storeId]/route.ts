import prismadb from "@/lib/pismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId)
      return new NextResponse("Store Id is required", { status: 400 });

    const store = await prismadb.store.findUnique({
      where: {
        id: params.storeId,
      },
      include: {
        billboards: true,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[billboard_get]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
