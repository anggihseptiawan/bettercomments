import Head from "next/head";
import {
	Flex,
	Link,
	Box,
	Stack,
	Avatar,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Heading,
	Text,
	Button,
} from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<Head>
				<title>Better Comments</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Flex flexDirection="column">
					<Flex
						justifyContent="space-between"
						pt={3}
						pb={3}
						pl={10}
						pr={10}
					>
						<Box display="flex" alignItems="center">
							<Stack spacing={4} isInline>
								<Link fontWeight="bold">Better Comments</Link>
								<Link>Sites</Link>
								<Link>Feedback</Link>
							</Stack>
						</Box>
						<Box>
							<Flex alignItems="center">
								<Link mr={2}>Username</Link>
								<Avatar size="sm" />
							</Flex>
						</Box>
					</Flex>
					<Flex />
					<Flex
						justifyContent="center"
						backgroundColor="#eef6f7"
						pt={4}
						pb={4}
					>
						<Flex backgroundColor="#ffffff" p={8}>
							<Breadcrumb>
								<BreadcrumbItem>
									<BreadcrumbLink>Sites</BreadcrumbLink>
								</BreadcrumbItem>
								<Heading>My Sites</Heading>
								<Box
									display="flex"
									flexDirection="column"
									alignItems="center"
									mt={8}
								>
									<Heading as="h5" size="md">
										Get comments better with better comments
									</Heading>
									<Text>Start today, then grow with us</Text>
									<Button
										variant="solid"
										size="md"
										mt={3}
										backgroundColor="gray.200"
									>
										Get Started
									</Button>
								</Box>
							</Breadcrumb>
						</Flex>
					</Flex>
				</Flex>
			</main>
		</>
	);
}
