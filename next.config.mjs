import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: { unoptimized: true },
	experimental: {
		outputFileTracingRoot: path.join(process.cwd(), "./"),
	},
};

export default nextConfig;
