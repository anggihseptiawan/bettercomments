import { extendTheme } from "@chakra-ui/react";

const sans = [
	"PT Sans",
	"-apple-system",
	"BlinkMacSystemFont",
	"'Segoe UI'",
	"Roboto",
	"Oxygen",
	"Ubuntu",
	"Cantarell",
	"'Open Sans'",
	"'Helvetica Neue'",
	"sans-serif",
].join(",");

const mono = [
	"Cousine",
	"Consolas",
	"'Courier New'",
	"Courier",
	"monospace",
].join(",");

export const customTheme = extendTheme({
	fonts: {
		body: sans,
		heading: sans,
		mono,
	},
});
