import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<Html>
				<Head>
					<meta name="author" content="Anggih Septiawan" />
					<meta
						name="description"
						content="Get comments better with better commands"
					/>

					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
