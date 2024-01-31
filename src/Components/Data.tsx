import { Space, Table, TableColumnsType, Typography } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React from "react";
import Button from "./Button";

interface DataType {
  key: React.Key;
  name: any;
  chinese: number;
  math: number;
  english: number;
}



const data: DataType[] = [
  {
    key: "1",
    name: (
      <p className="bg-yellow-500 rounded text-center p-1">
        PY76HSD7120HSJ7VG6V
      </p>
    ),
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: (
      <p className="bg-purple-500 rounded text-center p-1">
        PY76HSD7120HSJ7VG6V
      </p>
    ),
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: (
      <p className="bg-purple-500 rounded text-center p-1">
        PY76HSD7120HSJ7VG6V
      </p>
    ),
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: (
      <p className="bg-purple-500 rounded text-center p-1">
        PY76HSD7120HSJ7VG6V
      </p>
    ),
    chinese: 88,
    math: 99,
    english: 89,
  },
];
const columns: TableColumnsType<DataType> = [
  {
    title: "SCHEME NO",
    dataIndex: "name",
  },
  {
    title: "DEALER CODE",
    dataIndex: "chinese",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "DEALER LOCATION",
    dataIndex: "math",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "DEALER NAME",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "STATE",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "TERRIRTORY MANAGER",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "START MONTH",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "END MONTH",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "INDUSTRY",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
const onChange: TableProps<DataType>["onChange"] = (
  pagination: any,
  filters: any,
  sorter: any,
  extra: any
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Data: React.FC = () => (
  <div className="m-8  bg-gray-100">
    <div className="flex">
        <p className=" m-4 font-bold text-2xl">Collection - With Delivery Gate</p>
      <Space style={{ marginBottom: 16 }} className="ml-[400px]">
        <Button className="w-auto h-[40px]" text="Download" />
        <Button className="w-auto h-[40px]" text="All Scheme" />
        <Button className="w-auto h-[40px]" text="Collection Scheme" />
      </Space>
    </div>
    <div className="m-2">
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  </div>
);

export default Data;
