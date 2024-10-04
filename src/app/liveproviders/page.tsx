"use client";

import { PostList } from "@components/post-list";
import { useSelect } from "@refinedev/antd";
import { BaseOption } from "@refinedev/core";
import { Flex, Select } from "antd";
import { useState } from "react";

export default function LiveProviderList() {
  const [categoryId, setCategoryId] = useState<number>(1);
  const { selectProps } = useSelect({ resource: "categories" });

  return (
    <Flex vertical justify="center" align="center" style={{ width: "100%" }}>
      <Select
        defaultValue={1 as unknown as BaseOption}
        style={{ width: "250px" }}
        onSelect={(value) => setCategoryId(Number(value))}
        {...selectProps}
      ></Select>
      <PostList categoryId={categoryId} />
    </Flex>
  );
}
