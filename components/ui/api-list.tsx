"use client";

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "./api-alert";

interface ApiListProps {
  enitiyName: string;
  enitiyIdName: string;
}

const ApiList: React.FC<ApiListProps> = ({ enitiyIdName, enitiyName }) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;
  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${enitiyName}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${enitiyName}/{${enitiyIdName}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${enitiyName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${enitiyName}/{${enitiyIdName}}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${enitiyName}/{${enitiyIdName}}`}
      />
    </>
  );
};

export default ApiList;
