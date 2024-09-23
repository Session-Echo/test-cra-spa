import { Box } from "@mui/material";

export const ImportantForm = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      <form id="important-form">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <label htmlFor="field-1">Input Label</label>
            <input type="text" name="field-1" />
          </Box>
          <Box>
            <label htmlFor="field-2">Input Label</label>
            <input type="text" name="field-2" />
          </Box>
          <Box>
            <label htmlFor="field-3">Input Label</label>
            <input type="text" name="field-3" />
          </Box>
          <Box>
            <label htmlFor="field-4">Input Label</label>
            <input type="text" name="field-4" />
          </Box>
          <button id="important-submit-button" type="submit">
            Submit
          </button>
        </Box>
      </form>
    </Box>
  );
};
