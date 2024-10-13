import { Box, Typography, Pagination } from "@mui/material";
import { MetaData } from "../models/Pagination";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

export default function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, totalPages, totalCount, pageSize } = metaData;
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>
        Displaying {(currentPage - 1) * pageSize + 1}-
        {currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize}{" "}
        out of {totalCount} items
      </Typography>
      <Pagination
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(_e, page) => onPageChange(page)}
        sx={{
          "& .MuiPaginationItem-root": {
            "&.Mui-selected": {
              backgroundColor: "#00897b", // Set background color for selected item
              color: "white", // Set text color for selected item
            },
            "&:hover": {
              backgroundColor: "#005b5b", // Set hover background color
              color: "white", // Set hover text color
            },
          },
        }}
      />
    </Box>
  );
}
