import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	images: { unoptimized: true },
	outputFileTracingRoot: path.join(process.cwd(), "./"),
};

export default nextConfig;
