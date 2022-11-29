import React, { useState } from "react";
import { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const MyTable = ({ columns, dataSource, tableConfig }) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const processData = () => {
      console.log({ columns, dataSource });
      const columnKeys = columns.map((column) => column.assessor);
      console.log(columnKeys);
      const dataToPrint = dataSource.map((data) => {
        return columnKeys.map((col) => data[col]);
      });
      setDatas(dataToPrint);
    };
    processData();
  }, [columns, dataSource]);

  return (
    <TableContainer>
      <Table variant="simple" {...tableConfig}>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th isNumeric={column.isNumeric}>{column.header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {datas.map((data) => (
            <Tr>
              {data.map((value) => (
                <Td>{value}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
